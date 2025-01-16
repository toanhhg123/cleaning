import { Col, Row, Typography } from "antd";
import Color from "color";

import glass_bag from "@/assets/images/glass/ic_glass_bag.png";
import glass_buy from "@/assets/images/glass/ic_glass_buy.png";
import glass_message from "@/assets/images/glass/ic_glass_message.png";
import glass_users from "@/assets/images/glass/ic_glass_users.png";
import { useThemeToken } from "@/theme/hooks";

import apiContact from "@/api/services/contact";
import { default as apiOrder } from "@/api/services/orderService";
import apiService from "@/api/services/serviceService";
import apiUser from "@/api/services/userService";
import { useQuery } from "@tanstack/react-query";
import AnalysisCard from "./analysis-card";
import image from "./image.png";
import moment from "moment";

const startOfDay = moment().startOf("day").toISOString();
const endOfDay = moment().endOf("day").toISOString();

const startOfMonth = moment().startOf("month").toISOString();
const endOfMonth = moment().endOf("month").toISOString();

const startOfYear = moment().startOf("year").toISOString();
const endOfYear = moment().endOf("year").toISOString();

const startOf1990 = moment("1990-01-01").toISOString();
const endOf3000 = moment("3000-01-01").toISOString();

function Analysis() {
	const theme = useThemeToken();

	// Lấy danh sách đặt hàng
	const { data: orders } = useQuery({
		queryKey: ["orders"],
		queryFn: apiOrder.getOrders,
	});

	// lấy danh sách user
	const { data: users } = useQuery({
		queryKey: ["users"],
		queryFn: apiUser.getUsers,
	});

	// lấy danh sách dịch vụ
	const { data: services } = useQuery({
		queryKey: ["services"],
		queryFn: apiService.getServices,
	});

	// lấy danh sách liên hệ
	const { data } = useQuery({
		queryKey: ["contact"],
		queryFn: apiContact.getContacts,
	});

	// tổng danh sách đặt hàng
	const totalOrder = orders?.length ?? 0;

	// tổng danh sách dịch vụ
	const totalService = services?.length ?? 0;

	// tổng danh sách người dùng
	const totalUsers = users?.map((user) => user.role === "employee").length ?? 0;

	// tổng danh sách liên hẹ
	const totalContact = data?.length ?? 0;

	const { data: priceOfDay } = useQuery({
		queryKey: ["orders", "report", startOfDay, endOfDay],
		queryFn: () => apiOrder.getOrderReport(startOfDay, endOfDay),
	});

	const { data: priceOfMonth } = useQuery({
		queryKey: ["orders", "report", startOfMonth, endOfMonth],
		queryFn: () => apiOrder.getOrderReport(startOfMonth, endOfMonth),
	});

	const { data: priceOfYear } = useQuery({
		queryKey: ["orders", "report", startOfYear, endOfYear],
		queryFn: () => apiOrder.getOrderReport(startOfYear, endOfYear),
	});

	const { data: priceOf1990 } = useQuery({
		queryKey: ["orders", "report", startOf1990, endOf3000],
		queryFn: () => apiOrder.getOrderReport(startOf1990, endOf3000),
	});

	return (
		<div className="p-2">
			<Typography.Title level={2}>Hi, Welcome back 👋</Typography.Title>
			<Row gutter={[16, 16]} justify="center">
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={glass_bag}
						title={totalOrder.toLocaleString()}
						subtitle="Total Order"
						style={{
							color: theme.colorPrimaryTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorPrimaryActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorPrimary)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={glass_users}
						title={totalUsers.toLocaleString()}
						subtitle="Total Employees"
						style={{
							color: theme.colorInfoTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorInfoActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorInfo)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={glass_buy}
						title={totalService.toLocaleString()}
						subtitle="Total Services"
						style={{
							color: theme.colorWarningTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorWarningActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorWarning)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={glass_message}
						title={totalContact.toLocaleString()}
						subtitle="Contacts"
						style={{
							color: theme.colorErrorTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorErrorActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorError)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>

				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={""}
						title={priceOfDay?.toLocaleString() || "0"}
						subtitle="Revenue today"
						style={{
							color: theme.colorPrimaryTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorPrimaryActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorPrimary)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={""}
						title={priceOfMonth?.toLocaleString() || "0"}
						subtitle="Revenue this month"
						style={{
							color: theme.colorInfoTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorInfoActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorInfo)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={""}
						title={priceOfYear?.toLocaleString() || "0"}
						subtitle="Revenue this year"
						style={{
							color: theme.colorWarningTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorWarningActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorWarning)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>
				<Col lg={6} md={12} span={24}>
					<AnalysisCard
						cover={""}
						title={priceOf1990?.toLocaleString() || "0"}
						subtitle="Total Price"
						style={{
							color: theme.colorErrorTextActive,
							background: `linear-gradient(135deg, ${Color(
								theme.colorErrorActive,
							)
								.alpha(0.2)
								.toString()}, ${Color(theme.colorError)
								.alpha(0.2)
								.toString()}) rgb(255, 255, 255)`,
						}}
					/>
				</Col>

				<Col span={24}>
					<img src={image} className="w-full" alt="" />
				</Col>
			</Row>
		</div>
	);
}

export default Analysis;
