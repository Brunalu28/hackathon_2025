import { Layout, Typography } from "antd";
const { Header } = Layout;
const { Title } = Typography;

export default function HeaderBar() {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        zIndex: 1,
      }}
    >
      <Title level={4} style={{ margin: 0 }}>Dashboard</Title>
    </Header>
  );
}
