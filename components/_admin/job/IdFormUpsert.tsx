"use client";

import moment from "moment";
import {
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Space,
  Switch,
  Button,
} from "antd";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import {
  fetchCreateJob,
  fetchUpdateJob,
} from "@/components/_admin/job/actions/jobServerAction";
import { toast } from "react-toastify";
import { DownOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import { ICompany, IJob, ISkill } from "@/type";
import dayjs from "dayjs";

interface IProps {
  job: IJob;
  skills: ISkill[];
  companies: ICompany[];
  id: string;
}
const IdFormUpsert = (props: IProps) => {
  const jobProp = props.job;
  const skillsProp = props.skills;
  const companiesProps = props.companies;

  const [name, setName] = useState(jobProp.name || "");
  const [location, setLocation] = useState(jobProp.location || "");
  const [salary, setSalary] = useState(jobProp.salary || "");
  const [quantity, setQuantity] = useState(jobProp.count || "");
  const [level, setLevel] = useState(jobProp.level || "");
  const [startDate, setStartDate] = useState(jobProp.startDate || "");
  const [endDate, setEndDate] = useState(jobProp.endDate || "");
  const [isActive, setIsActive] = useState(jobProp.status || true); // Assuming 'isActive' represents the state of the Switch component
  const [value, setValue] = useState(jobProp.description || "");

  const [skills, setSkills] = useState(
    skillsProp.filter((item) =>
      jobProp.skills.some((innerItem) => innerItem.id === item.id)
    )
  );

  const [selectedSkillIds, setSelectedSkillIds] = useState<number[]>(
    skills.map((item) => item.id)
  );

  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(
    jobProp.company.id
  );
  const handleOk = async () => {
    try {
      // Validation checks...
      if (
        !name ||
        !location ||
        !salary ||
        !quantity ||
        !level ||
        !startDate ||
        !endDate ||
        !selectedCompanyId ||
        !selectedSkillIds ||
        !value ||
        !isActive
      ) {
        throw new Error("Please fill out all the required fields.");
      }

      let skillsArray = selectedSkillIds.map((element) => {
        return { id: element };
      });
      // Gather all the form data
      const jobData = {
        name,
        skills: skillsArray, // Sending the array of selected skill IDs
        location,
        salary: +salary,
        count: +quantity,
        level,
        company: { id: +selectedCompanyId },
        startDate,
        endDate,
        status: isActive,
        description: value,
      };
      // Create job
      const job = await fetchUpdateJob(jobData, props.id);
      if (job) {
        // Display success message
        toast.success("Job updated successfully.");
      } else {
        toast.error("Job updated failed.");
      }
    } catch (error: any) {
      // Display error message
      toast.error(error.message);
    }
  };

  const onStartDateChange = (date: any, dateString: any) => {
    setStartDate(dateString);
  };

  const onEndDateChange = (date: any, dateString: any) => {
    setEndDate(dateString);
  };

  useEffect(() => {
    setSkills(skillsProp.filter((item) => selectedSkillIds.includes(item.id)));
  }, [selectedSkillIds]);

  return (
    <Form name="validateOnly" layout="vertical" autoComplete="off">
      <div className="grid grid-cols-3 gap-4">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true }]}
          initialValue={name}
        >
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
                {skillsProp.map((skill) => (
                  <Menu.Item key={skill.id}>{skill.name}</Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button>
              {skills.length
                ? skills
                    .map(
                      (item) =>
                        skillsProp.find((skill) => skill.id === item.id)?.name
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
          initialValue={location}
        >
          <Input
            placeholder="Type location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Item>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Form.Item
          name="salary"
          label="Salary"
          initialValue={salary}
          rules={[{ required: true }]}
        >
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
          initialValue={quantity}
        >
          <Input
            placeholder="Type quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="level"
          label="Level"
          rules={[{ required: true }]}
          initialValue={level}
        >
          <Dropdown
            overlay={
              <Menu onClick={({ key }) => setLevel(key)}>
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
                {companiesProps.map((company) => (
                  <Menu.Item key={company.id}>{company.name}</Menu.Item>
                ))}
              </Menu>
            }
          >
            <Button>
              {selectedCompanyId
                ? companiesProps.find((c) => c.id === selectedCompanyId)?.name
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
          initialValue={startDate}
        >
          <Space direction="vertical">
            <DatePicker
              onChange={onStartDateChange}
              defaultValue={
                startDate ? dayjs(startDate, "YYYY/MM/DD") : undefined
              }
              format={"YYYY/MM/DD"}
            />
          </Space>
        </Form.Item>
        <Form.Item
          name="endDate"
          label="End Date"
          rules={[{ required: true }]}
          initialValue={endDate}
        >
          <Space direction="vertical">
            <DatePicker
              onChange={onEndDateChange}
              defaultValue={endDate ? dayjs(endDate, "YYYY/MM/DD") : undefined}
              format={"YYYY/MM/DD"}
            />
          </Space>
        </Form.Item>
        <Form.Item
          name="isActive"
          label="Active"
          valuePropName="checked"
          initialValue={isActive}
        >
          <Switch
            onChange={(checked: boolean) => {
              setIsActive(checked as true);
            }}
          />
        </Form.Item>
      </div>
      <Form.Item
        name="description"
        label="Job Description"
        rules={[{ required: true }]}
        initialValue={value}
      >
        <ReactQuill theme="snow" value={value} onChange={setValue} />
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

export default IdFormUpsert;
