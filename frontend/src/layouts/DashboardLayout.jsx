import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import HeaderBar from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";

const { Content } = Layout;

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        {location.pathname === "/dashboard" && <HeaderBar />}
        <Content className="app-content" style={{ padding: 24, background: "#fff" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
