import { PostType } from "@/types/types";
import PostListItem from "./PostListItem";
import Grid from "@mui/material/Grid2";


interface PostGridProps {
    items?: Array<PostType>
};

const PostGrid = ({ items }: PostGridProps) => {
    return <Grid container spacing={1}>
        {items?.map(item => {
            return <Grid key={item.id.toString()} size={{ xs: 12, sm: 6, md: 4 }}>
                <PostListItem post={item} />
            </Grid>
        })}
    </Grid>
}

export default PostGrid;