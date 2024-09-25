"use client";

import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";
import { Button } from "@mui/material";
import { fetchUpdateRole } from "./actions/roleServerAction";
import { toast } from "react-toastify";
import { IApi, IRole } from "@/type";
import { GoPencil } from "react-icons/go";
import Title from "antd/es/typography/Title";
import { Modal, Switch, Typography } from "antd";

interface IModelRoleProps {
  role: IRole;
  apis: {
    module: string;
    endpoints: IApi[];
  }[];
}

const UpdatePermissionModel: React.FC<IModelRoleProps> = (
  props: IModelRoleProps
) => {
  const { role } = props;
  const [formData, setFormData] = useState({
    description: role.description,
    name: role.name,
  });

  const [isOpenRoleModel, setIsOpenRoleModel] = useState(false);
  const [openModules, setOpenModules] = useState<string[]>([]);
  const [switchStates, setSwitchStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    // Initialize switch states based on the role's permissions
    const initialSwitchStates: { [key: string]: boolean } = {};
    props.apis.forEach((api) => {
      api.endpoints.forEach((endpoint) => {
        initialSwitchStates[`${api.module}_${endpoint.id}`] =
          role.apis.findIndex(
            (roleApi) =>
              roleApi.endpoint === endpoint.endpoint &&
              roleApi.module === api.module
          ) !== -1;
      });
    });
    setSwitchStates(initialSwitchStates);
  }, [role]);

  const handleRoleModel = () => {
    setIsOpenRoleModel(!isOpenRoleModel);
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
    if (formData.description === "" || formData.name === "") {
      toast.error("Name or Description are empty");
      return;
    }
    const selectedApis: { id: number; endpoint: string; description: string; method: string; module: string }[] = [];
    props.apis.forEach((api) => {
      api.endpoints.forEach((endpoint) => {
        if (switchStates[`${api.module}_${endpoint.id}`]) {
          selectedApis.push({
            id: endpoint.id,
            endpoint: endpoint.endpoint,
            description: endpoint.description,
            method: endpoint.method,
            module: api.module
          });
        }
      });
    });
    const data = {
      apis: selectedApis,
      name: formData.name,
      description: formData.description
    }
    const res = await fetchUpdateRole(data,props.role.id)
    if (res.statusCode === 200) {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
    setIsOpenRoleModel(false);
  };
  
  const handleModuleClick = (module: string) => {
    setOpenModules((prevState) => {
      if (prevState.includes(module)) {
        return prevState.filter((item) => item !== module);
      } else {
        return [...prevState, module];
      }
    });
  };

  const onChangeAllApi = (module: string, checked: boolean, apisData:IApi[]) => {
    props.apis.forEach((api) => {
      if (api.module === module) {
        api.endpoints.forEach((endpoint) => {
          setSwitchStates((prevState) => ({
            ...prevState,
            [`${api.module}_${endpoint.id}`]: checked,
          }));
        });
      }
    });
  };

  const onChangeSingleApi = (
    moduleId: string,
    endpointId: number,
    checked: boolean,
    api: IApi
  ) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [`${moduleId}_${endpointId}`]: checked,
    }));
  };

  return (
    <div>
      <Button onClick={handleRoleModel}>
        <GoPencil style={{ color: "darkorange" }} size={20} />
      </Button>
      <Modal
        okButtonProps={{ style: { backgroundColor: "#1677ff" } }}
        title="Create new Role"
        centered
        open={isOpenRoleModel}
        onOk={handleOk}
        onCancel={handleRoleModel}
        width={1000}
        className=""
        style={{ maxWidth: "calc(100% - 320px)", marginLeft: "160px" }}
      >
        <Form name="validateOnly" layout="vertical" autoComplete="off">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input
              name="name"
              defaultValue={formData.name}
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input
              defaultValue={formData.description}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
        <div>
          <p className="mb-6">
            Permission: The permissions are authorized for this Role
          </p>
          <div className="border rounded-lg border-gray-100">
            {props.apis.map((api) => (
              <div key={api.module}>
                <div
                  className="ml-3 mr-3 mt-3 border  rounded-lg bg-gray-100 p-3 flex justify-between "
                  onClick={(e) => handleModuleClick(api.module)}
                >
                  {" "}
                  <Title level={3}>{api.module}</Title>
                  <Switch
                    defaultChecked={openModules.includes(api.module)}
                    onChange={(checked, e) =>
                      onChangeAllApi(api.module, checked, api.endpoints)
                    }
                  />
                </div>
                {openModules.includes(api.module) && (
                  <div className="m-3 mt-0 border rounded-lg grid grid-cols-2 gap-4 p-6">
                    {api.endpoints.map((endpoint) => (
                      <div
                        key={endpoint.id}
                        className="m-1 p-3 border rounded-lg flex items-center gap-3"
                      >
                        <Switch
                          defaultChecked={
                            switchStates[`${api.module}_${endpoint.id}`]
                          }
                          onChange={(checked, e) =>
                            onChangeSingleApi(api.module, endpoint.id, checked, endpoint)
                          }
                        />
                        <div>
                          <Typography>{endpoint.description}</Typography>
                          <Typography>
                            {endpoint.method} {endpoint.endpoint}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdatePermissionModel;
