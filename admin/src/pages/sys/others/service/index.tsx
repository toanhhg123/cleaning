import type { ServiceResponse } from "@/api/services/serviceService";
import apiService from "@/api/services/serviceService";
import apiFeedback from "@/api/services/serviceFeedback";

import { IconButton, Iconify } from "@/components/icon";
import { useUserInfo } from "@/store/userStore";
import ProTag from "@/theme/antd/components/tag";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Alert,
  Button,
  Card,
  Drawer,
  Form,
  Input,
  InputNumber,
  List,
  Modal,
  Popconfirm,
  Radio,
  Spin,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import Paragraph from "antd/es/typography/Paragraph";
import { useState } from "react";
import { toast } from "sonner";

const ServicePage = () => {
  const queryClient = useQueryClient();
  const userInfo = useUserInfo();
  const { data, isFetching } = useQuery({
    queryKey: ["services"],
    queryFn: apiService.getServices,
  });
  const { mutateAsync: createService } = useMutation({
    mutationFn: (body: ServiceResponse) => apiService.createService(body),
  });
  const { mutateAsync: updateService } = useMutation({
    mutationFn: (body: ServiceResponse) =>
      apiService.updateService(body.id, body),
  });
  const { mutateAsync: deleteService } = useMutation({
    mutationFn: (id: number) => apiService.deleteService(id),
  });

  const services = data || [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<"add" | "edit">();
  const [form] = Form.useForm<ServiceResponse>();

  const showModal = (type: "add" | "edit") => {
    setIsModalOpen(true);
    setTypeModal(type);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        values.customerId = Number(userInfo?.role?.id);

        if (typeModal === "add") {
          await createService(values);
        }

        if (typeModal === "edit") {
          await updateService(values);
        }

        queryClient.invalidateQueries({ queryKey: ["services"] });
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

  const columns: ColumnsType<ServiceResponse> = [
    {
      title: "Id",
      dataIndex: "id",
      width: 60,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 120,
      render: (_, record) => {
        return (
          <div className="flex">
            <div className="ml-2 flex flex-col">
              <span className="text-sm">{record.name}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "Price Per Hour",
      dataIndex: "pricePerHour",
      align: "center",
      width: 120,
      render: (price: number) => (
        <ProTag color="error">{price.toLocaleString()}</ProTag>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      align: "center",
      width: 120,
      render: (price: number) => (
        <ProTag color="error">{price.toLocaleString()}</ProTag>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customerId",
      align: "center",
      width: 120,
      render: (_, record) => (
        <ProTag color="cyan">{record?.customer?.fullName}</ProTag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      width: 120,
      render: (status: string) => (
        <ProTag color={status === "pending" ? "yellow" : "green"}>
          {status}
        </ProTag>
      ),
    },
    {
      title: "Sescription",
      dataIndex: "description",
      width: 200,
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

          <FeedbackShow service={record} />

          <Popconfirm
            title={`Delete the service ${record.name} ?`}
            okText="Yes"
            cancelText="No"
            placement="left"
            onConfirm={async () => {
              await deleteService(record.id);
              toast.success("successfully!");
              queryClient.invalidateQueries({ queryKey: ["services"] });
              handleCancel();
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
    <Card
      title="Service"
      extra={
        <Button type="primary" onClick={() => showModal("add")}>
          New
        </Button>
      }
    >
      <Table
        rowKey="id"
        size="small"
        scroll={{ x: "max-content" }}
        pagination={false}
        columns={columns}
        dataSource={services}
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
          <Form.Item<ServiceResponse> label="Id" name="id">
            <Input readOnly disabled />
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Time"
            name="time"
            rules={[{ required: true, message: "Please input your Time!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your price!",
                type: "number",
              },
            ]}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) =>
                value?.replace(/\$\s?|(,*)/g, "") as unknown as number
              }
              className="!w-full"
            />
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Radio.Group optionType="button">
              <Radio value={"pending"}>Pending</Radio>
              <Radio value={"active"}>Active</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Tag"
            name="tag"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Radio.Group optionType="button">
              <Radio value={"normal"}>normal</Radio>
              <Radio value={"trending"}>trending</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Price Per Hour"
            name="pricePerHour"
            rules={[
              {
                required: true,
                message: "Please input your price!",
                type: "number",
              },
            ]}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) =>
                value?.replace(/\$\s?|(,*)/g, "") as unknown as number
              }
              className="!w-full"
            />
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item<ServiceResponse>
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

const FeedbackShow = ({ service }: { service: ServiceResponse }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => {
          setShow(true);
        }}
      >
        <Iconify icon="material-symbols:bookmark-heart" size={18} />
      </IconButton>

      <FeedbackDrawer
        openDrawer={show}
        closeDrawer={() => setShow(false)}
        service={service}
      />
    </>
  );
};

const FeedbackDrawer = ({
  openDrawer,
  closeDrawer,
  service,
}: {
  openDrawer: boolean;
  closeDrawer: () => void;
  service: ServiceResponse;
}) => {
  const { data, isFetching, isError } = useQuery({
    queryKey: ["serviceFeedbacks", service.id],
    queryFn: () => apiFeedback.getFeedbacksByService(service.id),
  });

  const feedbacks = data || [];

  return (
    <Drawer
      title={"Feedbacks"}
      placement="right"
      onClose={closeDrawer}
      open={openDrawer}
      width={400}
    >
      {isFetching && <Spin tip="Loading feedbacks..." />}
      {isError && (
        <Alert
          type="error"
          message="Failed to load feedbacks"
          description="Please try again later."
          showIcon
        />
      )}
      {!isFetching && !isError && feedbacks.length === 0 && (
        <p>No feedbacks available for this service.</p>
      )}
      {!isFetching && !isError && feedbacks.length > 0 && (
        <List
          dataSource={feedbacks}
          renderItem={(feedback) => (
            <List.Item>
              <List.Item.Meta
                title={`${feedback.title} (${feedback.rating}/5)`}
                description={
                  <>
                    <p>{feedback.message}</p>
                    <p>
                      <strong>User:</strong> {feedback.user.fullName}
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {new Date(feedback.createdAt).toLocaleString()}
                    </p>
                  </>
                }
              />
            </List.Item>
          )}
        />
      )}
    </Drawer>
  );
};

export default ServicePage;
