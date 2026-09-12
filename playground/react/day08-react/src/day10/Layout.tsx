import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <h1>制造管理系统</h1>
            <Link to="/">首页</Link>
            <Link to="/work-orders">工单列表</Link>
            <Outlet />
        </>
    )
}

export default Layout;