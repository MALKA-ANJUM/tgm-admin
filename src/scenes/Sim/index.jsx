import React, { useState } from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, MenuItem, Modal, Select, TextField, useMediaQuery } from '@mui/material';
import Header from "../../components/Header";
import { tokens } from '../../theme';
import {useTheme} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const rows = [];
const Sim = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [data, setData] = useState(rows)

  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const handleFormSubmit = (values) => {
    console.log(values);
  }
  const deviceSchema= yup.object().shape({
    addedDt: yup.string().required('required'),
    sim: yup.string().required('required'),
    imea: yup.string().required('required'),
    simType: yup.string().required('required'),
})
  const initialValues = {
      inst_dt: "",
      renew_dt: "",
      vehicle_no: "",
      imea: "",  
      sim_no: "",
      paid_unpaid: "",
      amount: "",
      status: "",
  }
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1,  },
    {
      field: 'addedDt',
      headerName: 'Date',
      editable: true,
      flex: 1, 
    },
    {
      field: 'sim',
      headerName: 'sim number',
      editable: true,
      flex: 1, 
    },
    {
      field: 'imea',
      headerName: 'Imea no.',
      editable: true,
      flex: 1, 
    },
    {
      field: 'simType',
      headerName: 'Sim Type',
      type: 'number',
      editable: true,
      flex: 1, 
      headerAlign: "left", align: "left",
    }
  ]
  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between">
      <Header title="Sim" subtitle="Manage your Sim Stock" />
      <Button variant='contained' onClick={handleOpen}>Add</Button>
     <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Header title="Add Sim" subtitle="Add New Stock Details" />
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={deviceSchema}
          >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => ( 
            <form onSubmit={handleFormSubmit}>
              <Box
                display='grid'
                gap='30px'
                gridTemplateColumns='repeat(2, minmax(0, 1fr))'
                sx={{
                  '& > div' : {gridColumn: isNonMobile ? undefined : 'span"4'},
                }}
              >
                 <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateField']}>
                        <DateField
                        type='text'
                            
                            variant='filled'
                            label='Date'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.date}
                            name='date'
                            error={!!touched.date && !!errors.date}
                            helpertext={!!touched.date && !!errors.date}
                            sx={{ gridAutoColumns: 'span 4'}}
                        />
                      </DemoContainer>
                    </LocalizationProvider>

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Sim Imea'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.imea}
                        name='imea'
                        error={!!touched.imea && !!errors.imea}
                        helpertext={!!touched.imea && !!errors.imea}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                      <TextField
                        
                        variant='filled'
                        type='text'
                        label='Sim No'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.sim_no}
                        name='sim_no'
                        error={!!touched.sim_no && !!errors.sim_no}
                        helpertext={!!touched.sim_no && !!errors.sim_no}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                      <TextField
                        
                        variant='filled'
                        type='text'
                        label='Sim Type'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.simType}
                        name='simType'
                        error={!!touched.simType && !!errors.simType}
                        helpertext={!!touched.simType && !!errors.simType}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                    <Select
                        
                        variant='filled'
                        label='Status'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.inst_status}
                        name='inst_status'
                        error={!!touched.inst_status && !!errors.inst_status}
                        helpertext={!!touched.inst_status && !!errors.inst_status}
                        sx={{ gridAutoColumns: 'span 4'}}
                    >
                        <MenuItem value={true}>Office</MenuItem>
                        <MenuItem value={false}>Installed</MenuItem>
                    </Select>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateField']}>
                        <DateField 
                               type='text'
                            
                            variant='standard'
                            label='Installation Date'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.inst_dt}
                            name='inst_dt'
                            error={!!touched.inst_dt && !!errors.inst_dt}
                            helpertext={!!touched.inst_dt && !!errors.inst_dt}
                            sx={{ gridAutoColumns: 'span 4'}}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Customer name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.cus_name}
                        name='cus_name'
                        error={!!touched.cus_name && !!errors.cus_name}
                         helpertext ={!!touched.cus_name && !!errors.cus_name}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />
                     <TextField
                        
                        variant='filled'
                        type='text'
                        label='Engineer name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.eng_name}
                        name='eng_name'
                        error={!!touched.eng_name && !!errors.eng_name}
                        helpertext={!!touched.eng_name && !!errors.eng_name}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />
                    
                </Box>
                <Box>
                    <Button type='submit' variant='contained'
                    sx={{
                        mt: '25px',
                        border: '1px solid #fff',
                        width: '100%'
                    }}
                    >
                       Add
                    </Button>
                </Box>
            </form>
        )}     
        </Formik>
        </Box>
        </Modal>
    </Box>
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
   disableRowSelectionOnClick     
   disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      rows={data} columns={columns} />
  </Box>
</Box>
  )
}

export default Sim;
