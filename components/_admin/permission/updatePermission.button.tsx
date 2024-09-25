"use client";

import React, { useState } from "react";
import { Modal, Select } from "antd";
import { Form, Input } from "antd";
import { Button } from "@mui/material";
import { fetchUpdateApi } from "./actions/permissionServerAction";
import { toast } from "react-toastify";
import { IApi } from "@/type";
import { GoPencil } from "react-icons/go";

interface IModelApiProps {
  api: IApi;
}

const UpdatePermissionModel: React.FC<IModelApiProps> = (
  props: IModelApiProps
) => {
  const { api } = props;
  const [formData, setFormData] = useState({
    description: api.description,
    endpoint: api.endpoint,
    method: api.method,
    module: api.module,
  });

  const [isOpenApiModel, setIsOpenApiModel] = useState(false);

  const handleApiModel = () => {
    setIsOpenApiModel(!isOpenApiModel);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOk = async () => {
    const res = await fetchUpdateApi(formData, api.id); // Pass formData to API call
    if (res?.statusCode === 200) {
      toast.success(res.message);
      handleApiModel();
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div>
      <Button onClick={handleApiModel}>
        <GoPencil style={{ color: "darkorange" }} size={20} />
      </Button>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Api"
        centered
        open={isOpenApiModel}
        onOk={handleOk}
        onCancel={handleApiModel}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form name="validateOnly" layout="vertical" autoComplete="off">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input
                name="description"
                defaultValue={api.description}
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="endpoint"
              label="Endpoint"
              rules={[{ required: true }]}
            >
              <Input
                name="endpoint"
                defaultValue={api.endpoint}
                value={formData.endpoint}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              name="method"
              label="Method"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select Method"
                defaultValue={api.method}
                onChange={(value) =>
                  setFormData({ ...formData, method: value })
                }
                value={formData.method}
                options={[
                  { value: "get", label: "GET" },
                  { value: "post", label: "POST" },
                  { value: "patch", label: "PATCH" }, // corrected typo
                  { value: "delete", label: "DELETE" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="module"
              label="Module"
              rules={[{ required: true }]}
            >
              <Select
                defaultValue={api.module}
                placeholder="Select Module"
                onChange={(value) =>
                  setFormData({ ...formData, module: value })
                }
                value={formData.module}
                options={[
                  { value: "auth", label: "AUTH" },
                  { value: "user", label: "USER" },
                  { value: "company", label: "COMPANY" },
                  { value: "permission", label: "PERMISSION" },
                  { value: "role", label: "ROLE" },
                  { value: "api", label: "API" },
                  { value: "resume", label: "RESUME" },
                  { value: "skill", label: "SKILL" },
                  { value: "job", label: "JOB" },
                ]}
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdatePermissionModel;
