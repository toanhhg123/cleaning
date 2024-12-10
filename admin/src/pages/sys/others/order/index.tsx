import {
  type OrderResponse,
  default as apiOrder,
  default as orderService,
} from "@/api/services/orderService";
import { IconButton, Iconify } from "@/components/icon";
import ProTag from "@/theme/antd/components/tag";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Radio,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import Paragraph from "antd/lib/typography/Paragraph";
import { useState } from "react";
import { toast } from "sonner";

const OrderPage = () => {
  const [form] = Form.useForm<OrderResponse>();

  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["orders"],
    queryFn: apiOrder.getOrders,
  });

  const orders = data || [];

  const { mutateAsync: updateOrder } = useMutation({
    mutationFn: (data: OrderResponse) =>
      orderService.updateOrders(data.id, data),
  });

  const { mutateAsync: deleteService } = useMutation({
    mutationFn: (id: number) => orderService.deleteOrders(id),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<"add" | "edit">();

  const showModal = (type: "add" | "edit") => {
    setIsModalOpen(true);
    setTypeModal(type);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        if (typeModal === "edit") {
          await updateOrder(values);
        }

        queryClient.invalidateQueries({ queryKey: ["orders"] });
        toast.success("successfully!");
        handleCancel();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setTypeModal(undefined);
    form.resetFields();
  };

  const columns: ColumnsType<OrderResponse> = [
    {
      title: "Id",
      dataIndex: "id",
      width: 60,
    },
    {
      title: "Service",
      dataIndex: "service",
      width: 60,
      render: (service) => <ProTag color="blue">{service.name}</ProTag>,
    },
    {
      title: "User created",
      dataIndex: "service",
      width: 60,
      render: (service) => (
        <ProTag color="blue-inverse">{service.customer?.fullName}</ProTag>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customer",
      width: 60,
      render: (customer) => <ProTag color="cyan">{customer?.fullName}</ProTag>,
    },
    {
      title: "Employee",
      dataIndex: "employee",
      width: 60,
      render: (employee) => <ProTag color="cyan">{employee?.fullName}</ProTag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 60,
      render: (status: OrderResponse["status"]) => (
        <ProTag
          color={status === "done" || status === "success" ? "green" : "yellow"}
        >
          {status}
        </ProTag>
      ),
    },

    {
      title: "Address",
      dataIndex: "address",
      width: 200,
      /*************  ✨ Codeium Command ⭐  *************/
      /******  659eb3b0-911c-4ab5-ac8b-60c751aacc13  *******/
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
          <IconButton
            onClick={() => {
              form.setFieldsValue(record);
              showModal("edit");
            }}
          >
            <Iconify icon="solar:pen-bold-duotone" size={18} />
          </IconButton>
          <Popconfirm
            title={`Delete the order ${record.service.name} ?`}
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={async () => {
              await deleteService(record.id);
              toast.success("successfully!");
              queryClient.invalidateQueries({ queryKey: ["orders"] });
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
    <Card title="Orders">
      <Table
        rowKey="id"
        size="small"
        scroll={{ x: "max-content" }}
        pagination={false}
        columns={columns}
        dataSource={orders}
        loading={isFetching}
      />

      <Modal
        title="Form Service"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={800}
      >
        <Form
          form={form}
          size="small"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          className="!pt-4"
        >
          <Form.Item<OrderResponse> label="Id" name="id">
            <Input readOnly disabled />
          </Form.Item>

          <Form.Item<OrderResponse>
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Radio.Group optionType="button">
              <Radio value={"pending"}>Pending</Radio>
              <Radio value={"processing"}>Processing</Radio>
              <Radio value={"done"}>Done</Radio>
              <Radio value={"success"}>Success</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item<OrderResponse> label="Price" name={["service", "price"]}>
            <InputNumber<number>
              defaultValue={1000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) =>
                value?.replace(/\$\s?|(,*)/g, "") as unknown as number
              }
              readOnly
              disabled
            />
          </Form.Item>

          <Form.Item<OrderResponse>
            label="Address"
            name="address"
            rules={[{ message: "Please input your address!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          {form.getFieldValue("id") && (
            <OrderImageBox id={form.getFieldValue("id")} />
          )}
        </Form>
      </Modal>
    </Card>
  );
};

const OrderImageBox = ({ id }: { id: number }) => {
  const { data: images } = useQuery({
    queryKey: ["orders", "image", id],
    queryFn: () => apiOrder.getOrderImages(id),
  });

  if (!images?.length) return <></>;

  return (
    <div className="flex gap-2 !w-full flex-1 my-10">
      {images?.map((img) => {
        return (
          <Image
            key={img.id}
            width={200}
            height={200}
            src={`http://localhost:8080/api/upload/files/${img.image}`}
          />
        );
      })}
    </div>
  );
};

export default OrderPage;
