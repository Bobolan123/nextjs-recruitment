"use client";

import {
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Space,
  Button,
  Switch,
} from "antd";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { fetchCreateJob } from "@/components/_admin/job/actions/jobServerAction";
import { toast } from "react-toastify";
import { DownOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import { ICompany, ISkill } from "@/type";
import { useRouter } from 'next/navigation'

interface IProps {
  skills: ISkill[];
  companies: ICompany[];
}

const FormUpsert = (props: IProps) => {
  const router = useRouter()
  const [name, setName] = useState("");
  const [selectedSkillIds, setSelectedSkillIds] = useState<number[]>([]);
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [quantity, setQuantity] = useState("");
  const [level, setLevel] = useState("");
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(
    null
  );
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(true);
  const [text, setText] = useState("");

  const handleOk = async () => {
    try {
      // Validation checks...
      if (
        !name ||
        !selectedSkillIds.length ||
        !location ||
        !salary ||
        !quantity ||
        !level ||
        !selectedCompanyId ||
        !startDate ||
        !endDate
      ) {
        throw new Error("Please fill out all the required fields.");
      }

      // Gather all the form data
      const jobData = {
        name,
        skills: selectedSkillIds, // Sending the array of selected skill IDs
        location,
        salary: +salary,
        count: +quantity,
        level,
        company: { id: +selectedCompanyId },
        startDate,
        endDate,
        status: isActive,
        description: text,
      };

      // Create job
      const job = await fetchCreateJob(jobData);
      if (job) {
        // Display success message
        toast.success("Job created successfully.");
        router.back()
      } else {
        toast.error("Job creation failed.");
      }
    } catch (error: any) {
      // Display error message
      toast.error(error.message);
    }
  };

  const onStartDateChange = (date: any, dateString: string) => {
    setStartDate(dateString);
  };

  const onEndDateChange = (date: any, dateString: string) => {
    setEndDate(dateString);
  };

  function handleChangeQuill(
    content: any,
    delta: any,
    source: any,
    editor: any
  ) {
    setText(content);
  }

  return (
    <Form name="validateOnly" layout="vertical" autoComplete="off">
      <div className="grid grid-cols-3 gap-4">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input
            placeholder="Type Job Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="skills" label="Skills" rules={[{ required: true }]}>
          <Dropdown
            overlay={
              <Menu
                onClick={({ key }) => {
                  const id = parseInt(key);
                  setSelectedSkillIds((prevIds) =>
                    prevIds.includes(id)
                      ? prevIds.filter((prevId) => prevId !== id)
                      : [...prevIds, id]
                  );
                }}
                selectedKeys={selectedSkillIds.map(String)}
              >
                {props.skills.map((skill) => (
                  <Menu.Item key={skill.id}>{skill.name}</Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button>
              {selectedSkillIds.length
                ? selectedSkillIds
                    .map(
                      (id) =>
                        props.skills.find((skill) => skill.id === id)?.name
                    )
                    .join(", ")
                : "Select Skills"}{" "}
              <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Type location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Item>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Form.Item name="salary" label="Salary" rules={[{ required: true }]}>
          <Input
            placeholder="Type salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Type quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="level" label="Level" rules={[{ required: true }]}>
          <Dropdown
            overlay={
              <Menu onClick={({ key }) => setLevel(key)} selectedKeys={[level]}>
                <Menu.Item key="junior">JUNIOR</Menu.Item>
                <Menu.Item key="fresher">FRESHER</Menu.Item>
                <Menu.Item key="senior">SENIOR</Menu.Item>
              </Menu>
            }
          >
            <Button>
              {level || "Select Level"} <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>
        <Form.Item name="company" label="Company" rules={[{ required: true }]}>
          <Dropdown
            overlay={
              <Menu onClick={({ key }) => setSelectedCompanyId(parseInt(key))}>
                {props.companies.map((company) => (
                  <Menu.Item key={company.id}>{company.name}</Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button>
              {selectedCompanyId
                ? props.companies.find((c) => c.id === selectedCompanyId)?.name
                : "Select Company"}{" "}
              <DownOutlined />
            </Button>
          </Dropdown>
        </Form.Item>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true }]}
        >
          <Space direction="vertical">
            <DatePicker onChange={onStartDateChange} />
          </Space>
        </Form.Item>
        <Form.Item name="endDate" label="End Date" rules={[{ required: true }]}>
          <Space direction="vertical">
            <DatePicker onChange={onEndDateChange} />
          </Space>
        </Form.Item>
        <Form.Item
          name="isActive"
          label="Active"
          valuePropName="checked"
          initialValue={isActive}
        >
          <Switch onChange={(checked) => setIsActive(checked)} />
        </Form.Item>
      </div>
      <Form.Item
        name="description"
        label="Job Description"
        rules={[{ required: true }]}
      >
        <ReactQuill theme="snow" value={text} onChange={handleChangeQuill} />
      </Form.Item>
      <Button
        type="primary"
        style={{
          backgroundColor: "#1890ff",
          borderColor: "#1890ff",
        }}
        onClick={() => handleOk()}
      >
        Ok
      </Button>
    </Form>
  );
};

export default FormUpsert;
