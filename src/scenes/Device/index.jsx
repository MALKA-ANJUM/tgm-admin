import React, { useState } from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, MenuItem, Select, TextField, useMediaQuery } from '@mui/material';
import Header from "../../components/Header";
import { tokens } from '../../theme';
import {useTheme} from '@mui/material';
import {Modal} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const rows = [
    { id: 1, date: '23-08-2022',},
    { id: 2, date: '23-08-2022',},
    { id: 3, date: '23-08-2022',},
    { id: 4, date: '23-08-2022',},
    { id: 5, date: '23-08-2022',},
    { id: 6, date: '23-08-2022',},
    { id: 7, date: '23-08-2022',},
    { id: 8, date: '23-08-2022',},
    { id: 9, date: '23-08-2022',},
    { id: 10, date: '23-08-2022',},
    { id: 11, date: '23-08-2022',},
    { id: 12, date: '23-08-2022',},
    { id: 13, date: '23-08-2022',},
    { id: 14, date: '23-08-2022',},
    { id: 15, date: '23-08-2022',},
    { id: 16, date: '23-08-2022',},
];

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

  
const Device = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(rows)
  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id!==id))
  // }
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'date', headerName: 'Date', editable: true, flex: 1,},
    { field: 'imea', headerName: 'Device Imea', editable: true, flex: 1,},
    { field: 'inst_status', headerName: 'Status', editable: true, flex: 1, },

  ];
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const handleFormSubmit = (values) => {
    console.log(values);
  }
  const initialValues = {
    date: "",
    imea: "",
    inst_status: "Office",
    inst_dt: "",
    cus_name: "",
    eng_name: "",
}
const deviceSchema= yup.object().shape({
  date: yup.string().required('required'),
  imea: yup.string().required('required'),
  inst_status: yup.string().required('required'),
  inst_dt: yup.string().required('required'),
  cus_name: yup.string().required('required'),
  eng_name: yup.string().required('required'),
})

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Device" subtitle="Manage your Device's Stock" />
        <Button variant='contained' onClick={handleOpen}>Add</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Header title="Add Device" subtitle="Add new Device Details" />
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
                            helperText={!!touched.date && !!errors.date}
                            sx={{ gridAutoColumns: 'span 4'}}
                        />
                      </DemoContainer>
                    </LocalizationProvider>

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Device Imea'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.imea}
                        name='imea'
                        error={!!touched.imea && !!errors.imea}
                        helperText={!!touched.imea && !!errors.imea}
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
                        helperText={!!touched.inst_status && !!errors.inst_status}
                        sx={{ gridAutoColumns: 'span 4'}}
                    >
                        <MenuItem value={true}>Office</MenuItem>
                        <MenuItem value={false}>Installed</MenuItem>
                    </Select>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateField']}>
                        <DateField 

                          
                            variant='standard'
                            label='Installation Date'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.inst_dt}
                            name='inst_dt'
                            error={!!touched.inst_dt && !!errors.inst_dt}
                            helperText={!!touched.inst_dt && !!errors.inst_dt}
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
                        helperText={!!touched.cus_name && !!errors.cus_name}
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
                        helperText={!!touched.eng_name && !!errors.eng_name}
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
      <DataGrid disableRowSelectionOnClick
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

export default Device;
