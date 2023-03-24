import { Box, Button } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
    return (
        <div className="MainDash">
            <div className="header">
                <Box m="20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <h1>Dashboard</h1>
                        <Box>
                            <Button
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    padding: "10px 20px",
                                }}
                            >
                                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                                Download Reports
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </div>
            <Cards />
            <Table />
        </div>
    );
};

export default MainDash;
