import { apiClient } from "../../config/axios";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await apiClient.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const getFile = (fileName) => {
  return `http://localhost:8080/api/upload/files/${fileName}`;
};
