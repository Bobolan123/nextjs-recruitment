"use client";

import { useState } from "react";
import { Button } from "@mui/material";
import dynamic from "next/dynamic";

const AddCompanyModel = dynamic(
  () => import("./addCompanyModel"),
  { ssr: false }
);
const AddCompanyButton = (props: any) => {
  const [isOpenCompanyModel, setIsOpenCompanyModel] = useState(false);

  const handleCompanyModel = () => {
    setIsOpenCompanyModel(!isOpenCompanyModel);
  };
  return (
    <>
      <AddCompanyModel
        isOpenCompanyModel={isOpenCompanyModel}
        handleCompanyModel={handleCompanyModel}
      />
      <Button variant="contained" onClick={handleCompanyModel}>
        Add
      </Button>
    </>
  );
};

export default AddCompanyButton;
  