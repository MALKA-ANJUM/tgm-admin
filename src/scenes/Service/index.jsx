import React from 'react';
import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';


const Service = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const rows = [
    { id: 1, addedDt: '23-08-2022', sim: '43678245789', imea: 35345788663, simType :'VI',},
    ];
    const columns = [
      { field: 'id', headerName: 'ID', flex: 1,  },
      {
        field: 'inst_dt',
        headerName: 'Install Dt',
        editable: true,
        flex: 1, 
      },
      {
        field: 'renew_dt',
        headerName: 'Renew Dt.',
        editable: true,
        flex: 1, 
      },
      {
        field: 'vehicle_no.',
        headerName: 'Vehicle no.',
        editable: true,
        flex: 1, 
      },
      {
        field: 'imea',
        headerName: 'Imea No.',
        editable: true,
        flex: 1, 
      },
      {
        field: 'sim_no',
        headerName: 'Sim No',
        editable: true,
        flex: 1, 
      }, 
      {
        field: 'paid_unpaid',
        headerName: 'Paid/Unpaid',
        editable: true,
        flex: 1, 
      }, 
      {
        field: 'amount',
        headerName: 'Sevice Amount',
        editable: true,
        flex: 1, 
      }, 
      {
        field: 'status',
        headerName: 'Status',
        editable: true,
        flex: 1, 
      }, 
    ];
   
  return (
    <Box m="20px">
        <Header title="Registered Services" subtitle="Pending Services" />
        <Box
          m="10px 0 0 0"
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
             <DataGrid
                columns={columns}
                rows={rows}
              />
        </Box>
    </Box>
  )
}

export default Service;