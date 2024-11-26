import {
  default as apiOrder,
  default as orderService,
  type OrderResponse,
} from "@/api/services/orderService";
import type { ServiceResponse } from "@/api/services/serviceService";
import { IconButton, Iconify } from "@/components/icon";
import ProTag from "@/theme/antd/components/tag";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Radio,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
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
        <ProTag color="blue-inverse">{service.customer.fullName}</ProTag>
      ),
    },
    {
      title: "Employee",
      dataIndex: "employee",
      width: 60,
      render: (employee) => <ProTag color="cyan">{employee.fullName}</ProTag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      width: 60,
      render: (status: OrderResponse["status"]) => (
        <ProTag color={status === "done" ? "green" : "yellow"}>{status}</ProTag>
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
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default OrderPage;
