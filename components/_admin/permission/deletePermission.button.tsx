"use client";

import { MdDeleteOutline } from "react-icons/md";
import { deleteApi } from "./actions/permissionServerAction";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

interface IDeletePermissionProps {
  id: number;
}
const DeletePermission = (props: IDeletePermissionProps) => {
  const handleDeleteApi = async (id: number) => {
    const res = await deleteApi(id);
  };
  return (
    <>
      <Button
        className="m-0"
        onClick={() => {
          handleDeleteApi(props.id);
        }}
      >
        <MdDeleteOutline color="red" size={20} />
      </Button>
    </>
  );
};

export default DeletePermission;
