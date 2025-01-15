import { useQuery } from "@tanstack/react-query";

import {
	type CommissionResponse,
	default as apiCommission,
} from "@/api/services/commission";
import ProTag from "@/theme/antd/components/tag";
import { Card } from "antd";
import Table, { type ColumnsType } from "antd/es/table";

const FeedBackPage = () => {
	// Lấy thông tin liên hệ của người dùng
	const { data, isFetching } = useQuery({
		queryKey: ["commission"],
		queryFn: apiCommission.getAllCommission,
	});

	const commissions = data || [];

	const commissionTotal = commissions.reduce((acc, cur) => acc + cur.price, 0);

	const columns: ColumnsType<CommissionResponse> = [
		{
			title: "Id",
			dataIndex: "id",
			width: 60,
		},
		{
			title: "Service Price",
			dataIndex: ["order", "price"],
			width: 60,
			render: (price) => (
				<ProTag color="geekblue">{price?.toLocaleString() || ""}</ProTag>
			),
		},
		{
			title: "customer",
			dataIndex: ["order", "customer"],
			width: 60,
			render: (customer) => (
				<ProTag color="yellow-inverse">{customer?.fullName || ""}</ProTag>
			),
		},
		{
			title: "employee",
			dataIndex: "employee",
			width: 60,
			render: (_, record) => record?.order?.employee?.fullName || "",
		},
		{
			title: "Price",
			dataIndex: "price",
			width: 100,
			render: (price) => (
				<ProTag color="gold">{price?.toLocaleString() || ""}</ProTag>
			),
		},
	];

	return (
		<Card
			title="Commission"
			extra={<ProTag color="gold">{commissionTotal.toLocaleString()}</ProTag>}
		>
			<Table
				rowKey="id"
				size="small"
				scroll={{ x: "max-content" }}
				pagination={false}
				columns={columns}
				dataSource={commissions}
				loading={isFetching}
			/>
		</Card>
	);
};

export default FeedBackPage;
