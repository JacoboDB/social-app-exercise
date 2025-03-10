import { PostType, ProfileType } from "@/types/types";
import UserIcon from '@mui/icons-material/Person';
import { Box, Typography } from "@mui/material";


interface UserOverviewProps {
    user?: ProfileType
};

const UserOverview = ({ user }: UserOverviewProps) => {
    return <Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', margin: '15px' }}>
            <Box>
                <UserIcon sx={{ marginRight: '10px', fontSize: '60px' }} />
                <Typography component="div" sx={{ fontWeight: 'bold' }}>
                    {user?.name}
                </Typography>
                <Typography component="div">
                    {user?.description.toString()}
                </Typography>
            </Box>
            <Box>
                <Typography component="div">
                    {user?.posts?.length}
                </Typography>
                <Typography component="div">
                    {"Posts"}
                </Typography>
            </Box>
            <Box>
                <Typography component="div">
                    {user?.followers.toString()}
                </Typography>
                <Typography component="div">
                    {"Followers"}
                </Typography>
            </Box>
            <Box>
                <Typography component="div">
                    {user?.following.toString()}
                </Typography>
                <Typography component="div">
                    {"Following"}
                </Typography>
            </Box>
        </Box>
    </Box>
}

export default UserOverview;