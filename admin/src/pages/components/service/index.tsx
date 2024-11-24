import { StepBackwardOutlined } from "@ant-design/icons";
import { Card, Space, Typography } from "antd";

import { useThemeToken } from "@/theme/hooks";

export default function ServicePage() {
  const { colorPrimary } = useThemeToken();
  return (
    <Space direction="vertical" style={{ display: "flex" }}>
      <Card title="Antd Icons">
        <span className="mr-1">For more info</span>
        <Typography.Link
          href="https://ant.design/components/icon-cn"
          style={{ color: colorPrimary }}
        >
          click here
        </Typography.Link>

        <p className="mt-2 flex flex-col text-info">
          <code>{`import { StepBackwardOutlined } from '@ant-design/icons';`}</code>
          <code>{"<StepBackwardOutlined /> "}</code>
        </p>

        <div className="mt-4">
          <StepBackwardOutlined width={24} />
        </div>
      </Card>
    </Space>
  );
}
