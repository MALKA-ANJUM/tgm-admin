import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts  } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React from 'react';
import BackupIcon from '@mui/icons-material/Backup';
import { Link } from "react-router-dom";



const Engineers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone No",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email Id",
      flex: 1,
    },
    {
        field: "device_alloted",
        headerName: "De-Allot",
        flex: 1,
    },
    {
      field: "return_device",
      headerName: "De-Return",
      flex: 1,
    },
    {
        field: "device_allot_time",
        headerName: "De-Al-dt",
        flex: 1,
    },
    {
      field: "device_return_time",
      headerName: "De-Re-dt",
      flex: 1,
    },
    {
        field: "sim_alloted",
        headerName: "Sim Allot",
        flex: 1,
    },
    {
      field: "return_sim",
      headerName: "Sim Return",
      flex: 1,
    },
    {
        field: "sim_allot_time",
        headerName: "Sim Al-dt",
        flex: 1,
    },
    {
      field: "sim_return_time",
      headerName: "Sim Re-dt",
      flex: 1,
    },
    {field: 'update',headerName: 'Update',flex: 1,
      renderCell: (params) => {
        return (
        <>
          <Link to={'/engineers/' + params.row.id}>
            <BackupIcon />
          </Link>
        </>
      )}
    }
  ];

  return (
    <Box m="20px">
      <Header title="Engineers" subtitle="Manage your Engineers here" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }} />
        {/* checkboxSelection */}
      </Box>
    </Box>
  );
};

export default Engineers;