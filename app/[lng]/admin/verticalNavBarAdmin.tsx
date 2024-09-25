"use client";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import SecurityIcon from "@mui/icons-material/Security";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import { getModule } from "@/components/_admin/navbar/actions/navbarServerActions";

const moduleItems = ["company","user", "job", "resume", "role"]
export const VerticalNavBarAdmin = () => {
    const [modules, setModules] = useState<string[]>(moduleItems);

    const moduleMapping: Record<
        string,
        { icon: typeof BusinessIcon; label: string }
    > = {
        company: { icon: BusinessIcon, label: "Company" },
        user: { icon: PeopleIcon, label: "User" },
        job: { icon: WorkIcon, label: "Job" },
        resume: { icon: ArticleIcon, label: "Resume" },
        api: { icon: SecurityIcon, label: "Permission" },
        role: { icon: AccountCircleIcon, label: "Role" },
        // Add more mappings here as needed
    };

    return (
        <React.Fragment>
            {modules.map((module) => {
                const IconComponent = moduleMapping[module]?.icon;
                const label = moduleMapping[module]?.label;

                if (!IconComponent || !label) {
                    // Skip rendering if the module is not recognized
                    return null;
                }

                return (
                    <Link
                        href={`/admin/${
                            module === "api" ? "permission" : module
                        }`}
                        key={module}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <IconComponent />
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </Link>
                );
            })}
        </React.Fragment>
    );
};
