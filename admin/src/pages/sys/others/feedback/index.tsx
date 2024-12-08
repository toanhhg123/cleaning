import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  default as apiFeedback,
  type FeedBackResponse,
} from "@/api/services/feedback";
import ProTag from "@/theme/antd/components/tag";
import { Card, Popconfirm } from "antd";
import Table, { type ColumnsType } from "antd/es/table";
import Paragraph from "antd/es/typography/Paragraph";
import { toast } from "sonner";
import { IconButton, Iconify } from "@/components/icon";

const FeedBackPage = () => {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: apiFeedback.getFeedbacks,
  });

  const { mutateAsync: deleteFeedback } = useMutation({
    mutationFn: (id: number) => apiFeedback.deleteFeedback(id),
  });

  const feedbacks = data || [];

  const columns: ColumnsType<FeedBackResponse> = [
    {
      title: "Id",
      dataIndex: "id",
      width: 60,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      width: 60,
      render: (feedback) => <ProTag color="yellow-inverse">{feedback}</ProTag>,
    },
    {
      title: "user",
      dataIndex: "user",
      width: 60,
      render: (user) => <ProTag color="blue-inverse">{user?.fullName}</ProTag>,
    },
    {
      title: "Title",
      dataIndex: "title",
      width: 60,
      render: (desc: string) => (
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>
          {desc}
        </Paragraph>
      ),
    },
    {
      title: "Message",
      dataIndex: "message",
      width: 60,
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
      width: 100,
      render: (_, record) => (
        <div className="flex w-full justify-center text-gray">
          <Popconfirm
            title={`Delete the order ${record.user.fullName} ?`}
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
    <Card title="Feedbacks">
      <Table
        rowKey="id"
        size="small"
        scroll={{ x: "max-content" }}
        pagination={false}
        columns={columns}
        dataSource={feedbacks}
        loading={isFetching}
      />
    </Card>
  );
};

export default FeedBackPage;
