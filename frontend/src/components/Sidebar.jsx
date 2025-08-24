import { Layout, Menu } from "antd";
import { PieChartOutlined, ScheduleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const { Sider } = Layout;

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider width={260} style={{ background: "#044473" }}>
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
        }}
      >
        <img src={logo} alt="Logo" style={{ maxHeight: 90 }} />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ background: "#044473" }}
        onClick={({ key }) => {
          if (key === "1") navigate("/dashboard");
          if (key === "2") navigate("/testes");
        }}
        items={[
          { key: "1", icon: <PieChartOutlined />, label: "Dashboard" },
          { key: "2", icon: <ScheduleOutlined />, label: "Testes" },
        ]}
      />

      <style jsx>{`
        .ant-menu-dark .ant-menu-item-selected {
          background-color: #044473 !important;
          color: #ffffff !important;
        }
        .ant-menu-dark .ant-menu-item:hover {
          background-color: #03345e !important;
        }
      `}</style>
    </Sider>
  );
}
