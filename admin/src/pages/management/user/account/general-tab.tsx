import { Button, Col, Form, Input, Row, Space, Switch } from "antd";

import type { UserInfoResponse } from "#/entity";
import apiUser from "@/api/services/userService";
import Card from "@/components/card";
import { UploadAvatar } from "@/components/upload";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export default function GeneralTab() {
  const { data } = useQuery({
    queryKey: ["userInfo"],
    queryFn: apiUser.getMe,
  });
  const [form] = Form.useForm<UserInfoResponse>();

  const { mutateAsync: updateUser } = useMutation({
    mutationFn: (body: UserInfoResponse) => apiUser.updateUser(body),
  });

  if (!data) return null;

  const handleClick = () => {
    form.validateFields().then(async (values) => {
      values.id = data.id;
      values.role = data.role;
      await updateUser(values);
      toast.success("Update success!");
    });
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24} lg={8}>
        <Card className="flex-col !px-6 !pb-10 !pt-20">
          <UploadAvatar defaultAvatar={""} />

          <Space className="py-6">
            <div>Public Profile</div>
            <Switch size="small" />
          </Space>

          <Button type="primary" danger>
            Delete User
          </Button>
        </Card>
      </Col>
      <Col span={24} lg={16}>
        <Card>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ ...data }}
            labelCol={{ span: 8 }}
            className="w-full"
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item<UserInfoResponse> label="Username" name="fullName">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item<UserInfoResponse> label="Email" name="email">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item<UserInfoResponse> label="Phone" name="phoneNumber">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item<UserInfoResponse> label="Code Id" name="code">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item<UserInfoResponse> label="About" name="address">
              <Input.TextArea />
            </Form.Item>

            <div className="flex w-full justify-end">
              <Button type="primary" onClick={handleClick}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
