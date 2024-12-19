import { Typography, Upload } from "antd";
import type {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import { useState } from "react";

import { fBytes } from "@/utils/format-number";

import { Iconify } from "../icon";

import type { UserInfoResponse } from "#/entity";
import apiClient from "@/api/apiClient";
import apiUser from "@/api/services/userService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { StyledUploadAvatar } from "./styles";
import { beforeAvatarUpload, getBlobUrl } from "./utils";

interface Props extends UploadProps {
  defaultAvatar?: string;
  helperText?: React.ReactElement | string;
}
export function UploadAvatar({
  helperText,
  defaultAvatar = "",
  ...other
}: Readonly<Props>) {
  const { data: user } = useQuery({
    queryKey: ["userInfo"],
    queryFn: apiUser.getMe,
  });

  const [imageUrl, setImageUrl] = useState<string>(defaultAvatar);

  const [isHover, setIsHover] = useState(false);
  const handelHover = (hover: boolean) => {
    setIsHover(hover);
  };

  const { mutateAsync: updateUser } = useMutation({
    mutationFn: (body: UserInfoResponse) => apiUser.updateUser(body),
  });

  const handleUpload = async (file: File) => {
    if (!user) return;

    const formData = new FormData();
    formData.append("file", file);

    const data = await apiClient.post({
      url: "/upload",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    user.avatar = data;

    // biome-ignore lint/performance/noDelete: <explanation>
    delete user.password;

    await updateUser(user);
  };

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (!info.file.originFileObj) return;

    if (info.file.status === "uploading") {
      return;
    }

    handleUpload(info.file.originFileObj).catch(console.log);

    if (info.file.status === "done" || info.file.status === "error") {
      if (info.file.originFileObj) {
        setImageUrl(getBlobUrl(info.file.originFileObj));
      }
    }
  };

  const renderPreview = (
    <img src={imageUrl} alt="" className="absolute rounded-full" />
  );

  const renderPlaceholder = (
    <div
      style={{
        backgroundColor:
          !imageUrl || isHover ? "rgba(22, 28, 36, 0.64)" : "transparent",
        color: "#fff",
      }}
      className="absolute z-10 flex h-full w-full flex-col items-center justify-center"
    >
      <Iconify icon="solar:camera-add-bold" size={32} />
      <div className="mt-1 text-xs">Upload Photo</div>
    </div>
  );

  const renderContent = (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full"
      onMouseEnter={() => handelHover(true)}
      onMouseLeave={() => handelHover(false)}
    >
      {imageUrl ? renderPreview : null}
      {!imageUrl || isHover ? renderPlaceholder : null}
    </div>
  );

  const defaultHelperText = (
    <Typography.Text type="secondary" style={{ fontSize: 12 }}>
      Allowed *.jpeg, *.jpg, *.png, *.gif
      <br /> max size of {fBytes(3145728)}
    </Typography.Text>
  );
  const renderHelpText = (
    <div className="text-center">{helperText || defaultHelperText}</div>
  );

  return (
    <StyledUploadAvatar>
      <Upload
        name="avatar"
        showUploadList={false}
        listType="picture-circle"
        className="avatar-uploader !flex items-center justify-center"
        {...other}
        beforeUpload={beforeAvatarUpload}
        onChange={handleChange}
      >
        {renderContent}
      </Upload>
      {renderHelpText}
    </StyledUploadAvatar>
  );
}
