import {
	Avatar,
	Button,
	Card,
	Form,
	Input,
	Modal,
	Popconfirm,
	Radio,
} from "antd";
import Table, { type ColumnsType } from "antd/es/table";

import apiUser from "@/api/services/userService";
import { IconButton, Iconify } from "@/components/icon";
import ProTag from "@/theme/antd/components/tag";
import { useThemeToken } from "@/theme/hooks";

import type { UserInfoResponse } from "#/entity";
import { BasicStatus } from "#/enum";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function RolePage() {
	const { data, isFetching } = useQuery({
		queryKey: ["users"],
		queryFn: apiUser.getUsers,
	});

	const queryClient = useQueryClient();

	const { mutateAsync: createUser } = useMutation({
		mutationFn: (body: UserInfoResponse) => apiUser.createUser(body),
	});
	const { mutateAsync: updateUser } = useMutation({
		mutationFn: (body: UserInfoResponse) => apiUser.updateUser(body),
	});
	const { mutateAsync: deleteUser } = useMutation({
		mutationFn: (id: number) => apiUser.deleteUser(id),
	});

	const USERS = data || [];

	const { colorTextSecondary } = useThemeToken();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [typeModal, setTypeModal] = useState<"add" | "edit">();
	const [form] = Form.useForm<UserInfoResponse>();

	const showModal = (type: "add" | "edit") => {
		setIsModalOpen(true);
		setTypeModal(type);
	};

	const handleOk = () => {
		form
			.validateFields()
			.then(async (values) => {
				console.log(values);

				if (typeModal === "add") {
					await createUser(values);
				}

				if (typeModal === "edit") {
					await updateUser(values);
				}

				queryClient.invalidateQueries({ queryKey: ["users"] });
				toast.success("Create user successfully!");
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

	const columns: ColumnsType<UserInfoResponse> = [
		{
			title: "Name",
			dataIndex: "name",
			width: 300,
			render: (_, record) => {
				return (
					<div className="flex">
						<Avatar>{record.fullName[0]}</Avatar>
						<div className="ml-2 flex flex-col">
							<span className="text-sm">{record.fullName}</span>
							<span style={{ color: colorTextSecondary }} className="text-xs">
								{record.email}
							</span>
						</div>
					</div>
				);
			},
		},
		{
			title: "Role",
			dataIndex: "role",
			align: "center",
			width: 120,
			render: (role: string) => <ProTag color="cyan">{role}</ProTag>,
		},
		{
			title: "Status",
			dataIndex: "status",
			align: "center",
			width: 120,
			render: (status) => (
				<ProTag color={status === BasicStatus.DISABLE ? "error" : "success"}>
					{status === BasicStatus.DISABLE ? "Disable" : "Enable"}
				</ProTag>
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
						title={`Delete the User ${record.fullName}`}
						okText="Yes"
						cancelText="No"
						placement="left"
						onConfirm={async () => {
							await deleteUser(record.id);
							queryClient.invalidateQueries({ queryKey: ["users"] });
							toast.success("Delete user successfully!");
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
			title="User List"
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
				dataSource={USERS}
				loading={isFetching}
			/>

			<Modal
				title="Form User"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				centered
			>
				<Form
					form={form}
					size="small"
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 18 }}
					className="!pt-4"
				>
					<Form.Item<UserInfoResponse> label="Id" name="id">
						<Input readOnly disabled />
					</Form.Item>

					<Form.Item<UserInfoResponse>
						label="Name"
						name="fullName"
						rules={[{ required: true, message: "Please input your username!" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item<UserInfoResponse>
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item<UserInfoResponse>
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your Email!",
								type: "email",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item<UserInfoResponse>
						label="Phone"
						name="phoneNumber"
						rules={[{ required: true, message: "Please input your Phone!" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item<UserInfoResponse>
						label="Role"
						name={"role"}
						rules={[{ required: true, message: "Please input your roles!" }]}
					>
						<Radio.Group>
							<Radio value="admin"> admin </Radio>
							<Radio value="employee"> employee </Radio>
							<Radio value="customer"> customer </Radio>
						</Radio.Group>
					</Form.Item>
				</Form>
			</Modal>
		</Card>
	);
}
