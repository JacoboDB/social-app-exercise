import { PostType } from "@/types/types";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import UserIcon from '@mui/icons-material/Person';
import Link from "next/link";


const PostListItem = ({ post }: { post: PostType }) => {
    return <Card sx={{ maxWidth: 500, margin: '20px auto', boxShadow: 3 }}>
        <Link href={`/post/${post.id}`}><CardMedia
            component="img"
            height="300"
            image={post.imageUrl.toString()}
            alt="Post image"
        /></Link>
        <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0 }}>
                <Link href={`/profile/${post.authorId}`}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 0 }}>
                        <UserIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                            {post.authorName}
                        </Typography>
                    </Box>
                </Link>
                <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                    {post.description}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconButton aria-label="likes">
                    <FavoriteIcon />
                </IconButton>
                <Typography variant="body2" sx={{ mr: 2 }}>
                    {post.likes ? post.likes.toString() : "0"}
                </Typography>

                <IconButton aria-label="comments">
                    <ChatBubbleIcon />
                </IconButton>
                <Typography variant="body2">
                    {post.comments?.length} Comments
                </Typography>
            </Box>
        </CardContent>
    </Card>
}

export default PostListItem;