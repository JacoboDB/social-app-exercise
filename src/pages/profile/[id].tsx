'use client';

import PostGrid from "@/components/PostGrid";
import PostListItemSkeleton from "@/components/PostListItemSkeleton";
import UserOverview from "@/components/UserOverview";
import { ProfileType } from "@/types/types";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LOGGED_USER_ID = 'a2';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [profile, setProfile] = useState<ProfileType>();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const userId = id === null || id === 'self' ? LOGGED_USER_ID: id;
    fetch('http://localhost:3000/api/profile/' + userId)
      .then(data => data.json())
      .then(data => {
        setProfile(data.data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
      })
  }, [id])


  const renderGrid = () => {
    if (loading) {
      <Grid container spacing={1}>
        {[1, 2, 3, 4].map((item) =>
          <Grid key={item} size={{ xs: 12, sm: 6, md: 4 }}>
            <PostListItemSkeleton />
          </Grid>
        )}
      </Grid>
    }
    else {
      return <>
        <UserOverview user={profile} />
        <PostGrid items={profile?.posts} />
      </>
    }
  }


  return <>
    <Box sx={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', margin: '10px auto' }}>
      {renderGrid()}
    </Box>

  </>;
}