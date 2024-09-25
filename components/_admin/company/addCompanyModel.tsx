"use client";

import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import UploadFile from "./uploadFile";
import TextArea from "antd/es/input/TextArea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { fetchCreateCompany } from "@/components/_admin/company/actions/companyServerAction";
import { toast } from "react-toastify";

interface IModelCompanyProps {
  isOpenCompanyModel: boolean;
  handleCompanyModel: () => void;
}

const AddCompanyModel: React.FC<IModelCompanyProps> = (props: any) => {
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null); // State for logo file

  function handleChangeQuill(
    content: any,
    delta: any,
    source: any,
    editor: any
  ) {
    setText(content);
  }

  const [form] = Form.useForm();

  const handleLogoFileChange = (file: File | null) => {
    setLogoFile(file);
  };

  const handleOk = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("location", location);
      formData.append("description", text);
      if (logoFile) {
        formData.append("logo", logoFile);
      }

      const response = await fetchCreateCompany(formData);

      if (response) {
        toast.success("Company created successfully");
        props.handleCompanyModel();
      } else {
        throw new Error("Failed to create company");
      }
    } catch (error: any) {
      toast.error("Error creating company: " + error.message);
    }
  };

  return (
    <div>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Company"
        centered
        open={props.isOpenCompanyModel}
        onOk={handleOk}
        onCancel={() => props.handleCompanyModel()}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <div className="flex justify-between">
            <Form.Item name="logo" label="Logo" rules={[{ required: true }]}>
              <UploadFile onFileChange={handleLogoFileChange} />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true }]}
            >
              <TextArea
                rows={4}
                maxLength={6}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Item>
          </div>
          <Form.Item
            name="Description"
            label="Description"
            rules={[{ required: false }]}
          >
            <ReactQuill
              theme="snow"
              value={text}
              onChange={handleChangeQuill}
              style={{ height: 100, marginBottom: 30 }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddCompanyModel;
