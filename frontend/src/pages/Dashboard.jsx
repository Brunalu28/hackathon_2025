import { Card, Col, Row, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined, DollarCircleOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const lineData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 80 },
  { name: "May", value: 70 },
];

const pieData = [
  { name: "Categoria A", value: 400 },
  { name: "Categoria B", value: 300 },
  { name: "Categoria C", value: 300 },
  { name: "Categoria D", value: 200 },
];

const barData = [
  { name: "Seg", uv: 40 },
  { name: "Ter", uv: 30 },
  { name: "Qua", uv: 20 },
  { name: "Qui", uv: 27 },
  { name: "Sex", uv: 18 },
];

const COLORS = ["#1677ff", "#1a86c4ff", "#faad14", "#f5222d"];

export default function Dashboard() {
  return (
    <>
      {/* KPIs principais */}
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Receita"
              value={112893}
              precision={2}
              prefix={<DollarCircleOutlined />}
              suffix="R$"
              valueStyle={{ color: "#3f8600" }}
            />
            <Statistic
              title="Crescimento"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Pedidos"
              value={239}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: "#1677ff" }}
            />
            <Statistic
              title="Variação"
              value={-5.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Usuários Ativos"
              value={1345}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#faad14" }}
            />
            <Statistic
              title="Crescimento"
              value={4.1}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Taxa de Retenção"
              value={76}
              suffix="%"
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} lg={8}>
          <Card title="Evolução Mensal">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#1677ff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card title="Distribuição por Categoria">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card title="Performance Semanal">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#52c41a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </>
  );
}
