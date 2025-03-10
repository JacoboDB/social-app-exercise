import Toolbar from "@/components/Toolbar";

const Layout = ({ children }: {children: React.ReactNode}) => {
    return (
        <>
            <Toolbar />
            <main>{children}</main>
        </>
    );
}

export default Layout;