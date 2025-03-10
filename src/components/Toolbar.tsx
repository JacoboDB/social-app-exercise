import AppBar from "@mui/material/AppBar";
import { Toolbar as Bar, Box, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AccountCircle from '@mui/icons-material/AccountCircle';

const Toolbar: React.FC = () => {

    return (
        <AppBar position="static">
            <Bar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link href={`/`} style={{ textDecoration: "none", color: "inherit" }}>
                        Social App
                    </Link>
                </Typography>
                <IconButton aria-label="profile" size="large" color="default">
                    <Link href={`/profile/self`} style={{ textDecoration: "none", color: "inherit" }}>
                        <AccountCircle fontSize="inherit" />
                    </Link>
                </IconButton>
            </Bar>
        </AppBar>
    );
}

export default Toolbar;