'use client';

import PostDetail from "@/components/PostDetail";
import PostListItemSkeleton from "@/components/PostListItemSkeleton";
import { PostType } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PostPage() {

    const router = useRouter();
    const { id } = router.query;

    const [post, setPost] = useState<PostType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:3000/api/post/' + id)
            .then(data => data.json())
            .then(data => {
                setLoading(false);
                setPost(data.data)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [id])

    const renderPost = () => {
        if (loading) {
            return <PostListItemSkeleton comments />
        } else if (post){
            return <PostDetail post={post} />;
        } else {
            return "404 Post not found";
        }
    }

    return <>
        { renderPost() }
    </>
}