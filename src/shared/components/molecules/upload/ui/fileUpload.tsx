import { Button, Upload } from "antd";
import { FC } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { FileUploadProps } from "../model/FileUploadProps";

export const FileUpload: FC<FileUploadProps> = ({ title }) => {
  return (
    <Upload>
      <Button icon={<UploadOutlined />}>{title}</Button>
    </Upload>
  );
};
