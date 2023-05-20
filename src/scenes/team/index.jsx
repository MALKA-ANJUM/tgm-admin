import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import UserAction from "./UserAction";
import { useState } from "react";
import React from 'react';

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rowId, setRowId] = useState(null)
  const columns = [
    { field: "id", headerName: "ID",},
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", editable: true, },
    { field: "phone", headerName: "Phone Number", flex: 1, editable: true,},
    { field: "email", headerName: "Email", flex: 1, editable: true,  },
    { field: "accessLevel", headerName: "Access Level", flex: 1, editable: true,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[500]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
    { field: "action", headerName: "Action", flex: 1, type: 'actions', 
      renderCell: (params) => (
        <UserAction {...{params, rowId, setRowId}} />
      )
    }
  ];
  
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid  rows={mockDataTeam} columns={columns} 
        onCellEditCommit={(params) => setRowId(params.id)}
         />
      </Box>
    </Box>
  );
};

export default Team;