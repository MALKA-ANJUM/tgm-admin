import { Box, useTheme } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { mockDataContacts } from '../../data/mockData'
import { tokens } from '../../theme'


const Renewal = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
      { field: "id", headerName: "ID", flex: 0.5 },
      { field: "renewalDt", headerName: "Re-dt", flex: 1,},
      { field: "installDt", headerName: "Inst-dt", flex: 1,},
      {
        field: "vehicle_no",
        headerName: "Vehicle No.",
        flex: 1,
      },
      {
        field: "cus_name",
        headerName: "Customer Name",
        flex: 1,
      },
      {
        field: "imea",
        headerName: "Imea",
        // type: "number", 
        flex: 1,                                                      
      },
      {
        field: "sim_no",
        headerName: "Sim No.",
        flex: 1,
      },
      
      {
          field: "device_model",
          headerName: "Device Model",
          flex: 1,
      },
      {
        field: "service_done",
        headerName: "Service done",
        flex: 1,
      },
      {
        field: "paid_unpaid",
        headerName: "Paid/Unpaid",
        flex: 1,
      },
      {
        field: "amount",
        headerName: "Re-amount",
        flex: 1,
      },
    ];
  
  return (
    <Box m="20px">
      <Header title="Renewal" subtitle="Upcoming Renewals" />
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
        <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  )
}

export default Renewal;