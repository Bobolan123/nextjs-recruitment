"use client";

import { MdDeleteOutline } from "react-icons/md";
import { deleteRole } from "./actions/roleServerAction";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

interface IDeletePermissionProps {
  id: number;
}
const DeletePermission = (props: IDeletePermissionProps) => {
  const handleDeleteRole = async (id: number) => {
    const res = await deleteRole(id);
  };
  return (
    <>
      <Button
        className="m-0"
        onClick={() => {
          handleDeleteRole(props.id);
        }}
      >
        <MdDeleteOutline color="red" size={20} />
      </Button>
    </>
  );
};

export default DeletePermission;
