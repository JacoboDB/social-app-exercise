import { PostType } from "@/types/types";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import UserIcon from '@mui/icons-material/Person';
import Link from "next/link";


const PostDetail = ({ post }: { post: PostType }) => {
    return <Card sx={{ maxWidth: 800, margin: '20px auto', boxShadow: 0 }}>
        <CardMedia
            component="img"
            height="300"
            image={post.imageUrl.toString()}
            alt="Post image"
        />
        <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 0 }}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 0 }}>
                    <IconButton aria-label="likes">
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="body2" sx={{ mr: 2 }}>
                        {post.likes ? post.likes.toString() : "0"}
                    </Typography>
                </Box>
            </Box>



            <Box sx={{ display: 'block', mt: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 0 }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {post.comments?.length} {"Comments"}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 0 }}>
                    {post.comments?.map((comment) => {
                        return <Box key={comment.id.toString()} sx={{ display: 'flex', alignItems: 'center', mt: 0 }}>
                            <Link href={`/profile/${comment.authorId}`}>
                                <Typography variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                                    {comment.authorName + ':'}
                                </Typography>
                            </Link>
                            <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                                {comment.description}
                            </Typography>

                        </Box>
                    })}
                </Box>
            </Box>
        </CardContent>
    </Card>
}

export default PostDetail;