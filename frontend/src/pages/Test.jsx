import React from "react";
import { Table, Button } from "antd";

export default function TestesPage() {
  // Dados de exemplo
  const dataSource = [
    { key: "1", nome: "Teste 1", status: "Ativo" },
    { key: "2", nome: "Teste 2", status: "Inativo" },
    { key: "3", nome: "Teste 3", status: "Ativo" },
  ];

  // Colunas da tabela
  const columns = [
    { title: "Nome do Teste", dataIndex: "nome", key: "nome" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Ações",
      key: "acoes",
      render: (_, record) => (
        <Button type="primary" size="small">
          Editar
        </Button>
      ),
    },
  ];

  return (
    <div style={{ minHeight: 360 }}>
      <h2>Listagem de Testes</h2>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}
