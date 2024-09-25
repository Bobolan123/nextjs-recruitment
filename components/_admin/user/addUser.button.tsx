"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import dynamic from "next/dynamic";

const AddUserModel = dynamic(
  () => import("./addUserModel"),
  { ssr: false }
);
const AddUserButton = (props: any) => {
  const [isOpenUserModel, setIsOpenUserModel] = useState(false);

  const handleUserModel = () => {
    setIsOpenUserModel(!isOpenUserModel);
  };
  return (
    <>
      <AddUserModel
        isOpenUserModel={isOpenUserModel}
        handleUserModel={handleUserModel}
      />
      <Button variant="contained" onClick={handleUserModel}>
        Add
      </Button>
    </>
  );
};

export default AddUserButton;
  