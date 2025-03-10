import React from 'react';
import { Box, Skeleton, Avatar } from '@mui/material';

const PostListItemSkeleton = ({ comments }: { comments?: boolean }) => {
    return (
        <Box
            sx={{
                maxWidth: 500,
                margin: '20px auto',
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                backgroundColor: '#ffffff',
            }}
        >
            <Skeleton variant="rectangular" width="100%" height={400} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: 2,
                }}
            >
                <Skeleton variant="circular">
                    <Avatar />
                </Skeleton>
                <Box sx={{ marginLeft: 2, flexGrow: 1 }}>
                    <Skeleton variant="text" width={100} height={20} />
                </Box>
            </Box>

            {comments && <Box sx={{ padding: 2 }}>
                <Skeleton variant="text" width="80%" height={20} />
                <Skeleton variant="text" width="60%" height={20} />
            </Box>
            }
        </Box>
    );
};

export default PostListItemSkeleton;