import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  type ContactResponse,
  default as apiContact,
} from "@/api/services/contact";
import { IconButton, Iconify } from "@/components/icon";
import ProTag from "@/theme/antd/components/tag";
import { Card, Popconfirm } from "antd";
import Table, { type ColumnsType } from "antd/es/table";
import Paragraph from "antd/es/typography/Paragraph";
import { toast } from "sonner";

const FeedBackPage = () => {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["contact"],
    queryFn: apiContact.getContacts,
  });

  const { mutateAsync: deleteFeedback } = useMutation({
    mutationFn: (id: number) => apiContact.deleteContact(id),
  });

  const contacts = data || [];

  const columns: ColumnsType<ContactResponse> = [
    {
      title: "Id",
      dataIndex: "id",
      width: 60,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 60,
      render: (email) => <ProTag color="yellow-inverse">{email}</ProTag>,
    },
    {
      title: "user",
      dataIndex: "username",
      width: 60,
      render: (username) => <ProTag color="blue-inverse">{username}</ProTag>,
    },
    {
      title: "Title",
      dataIndex: "title",
      width: 80,
      render: (desc: string) => (
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
          {desc}
        </Paragraph>
      ),
    },
    {
      title: "Message",
      dataIndex: "message",
      width: 100,
      render: (desc: string) => (
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
          {desc}
        </Paragraph>
      ),
    },
    {
      title: "Action",
      key: "operation",
      align: "center",
      width: 60,
      render: (_, record) => (
        <div className="flex w-full justify-center text-gray">
          <Popconfirm
            title={`Delete the order ${record.username} ?`}
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={async () => {
              await deleteFeedback(record.id);
              toast.success("successfully!");
              queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
            }}
          >
            <IconButton>
              <Iconify
                icon="mingcute:delete-2-fill"
                size={18}
                className="text-error"
              />
            </IconButton>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Card title="Contact">
      <Table
        rowKey="id"
        size="small"
        scroll={{ x: "max-content" }}
        pagination={false}
        columns={columns}
        dataSource={contacts}
        loading={isFetching}
      />
    </Card>
  );
};

export default FeedBackPage;
