import React, { useState } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, TextField, useMediaQuery } from '@mui/material';
import Header from "../../components/Header";
import { tokens } from '../../theme';
import {useTheme} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Link } from 'react-router-dom';
import {Modal} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';

const rows = [
    { id: 1, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 2, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 3, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 4, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 5, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 6, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 7, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 8, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 9, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 10, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 11, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 12, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 13, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 14, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 15, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, Engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
    { id: 16, date: '23-08-2022', customer: 'Jon', imea: 35345788663, sim:7367833993, engineer: 'Snow', location: 'xxx', vehicle: 'MH40BG1234'},
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

  
const Assets = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(rows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id!==id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'date', headerName: 'Inst. Dt.', editable: true, flex: 1,},
    { field: 'device_id', headerName: 'Device Id', editable: true, flex: 1,},
    { field: 'device_model', headerName: 'Device Model', editable: true, flex: 1,},
    { field: 'sim',headerName: 'Sim No.',type: 'number',editable: true,flex: 1,},
    { field: 'vehicleNo', headerName: 'Vehicle No.', editable: true, flex: 1, },
    { field: 'location',headerName: 'location',editable: true,flex: 1,},
    {field: 'renewalDt',headerName: 'Renewal Date',editable: true,},
    {field: 'mapCustomer',headerName: 'User',editable: true,flex: 1,},
    {field: 'action',headerName: 'Action',flex: 1,
      renderCell: (params) => {
        return (
        <>
          <Link to={'/assets/' + params.row.id}>
            <ModeEditOutlineOutlinedIcon />
          </Link>
          <DeleteOutlineOutlinedIcon
           onClick={() =>handleDelete(params.row.id)}
          />
        </>
      )}
    }
  ];
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const handleFormSubmit = (values) => {
    console.log(values);
  }
  const initialValues = {
    installDt: "",
    device_id: "",
    device_model: "",
    sim: "",
    sim_imea: "",
    vehicleNo: "",
    vehicleType: "",
    location: "",
    renewalDt: "",
    mapCustomer: ""
}
const assetsSchema= yup.object().shape({
  installDt: yup.string().required('required'),
  device_id: yup.string().required('required'),
  device_model: yup.string().required('required'),
  sim: yup.string().required('required'),
  sim_imea: yup.string().required('required'),
  vehicleNo: yup.string().required('required'),
  vehicleType: yup.string().required('required'),
  location: yup.string().required('required'),
  renewalDt: yup.string().required('required'),
  mapCustomer: yup.string().required('required'),
})
const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear() + 1; // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();

const materialDateInput = `${year}-${month}-${date}`; // combining to format for defaultValue or value attribute of material <TextField>


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="assets" subtitle="Manage your assets's Stock" />
        <Button variant='contained' onClick={handleOpen}>Add</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Header title="Add assets" subtitle="Add new assets Details" />
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={assetsSchema}
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
                <TextField
                  
                  variant='filled'
                  type='date'
                  label='Installation Date'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.installDt}
                  name='installDt'
                  error={!!touched.installDt && !!errors.installDt}
                  helperText={!!touched.installDt && !!errors.installDt}
                  sx={{ gridAutoColumns: 'span 4'}}
                />
                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Customer Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.customer}
                        name='customer'
                        error={!!touched.customer && !!errors.customer}
                        helperText={!!touched.customer && !!errors.customer}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />
                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Vehicle Number'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.vehicleNo}
                        name='vehicleNo'
                        error={!!touched.vehicleNo && !!errors.vehicleNo}
                        helperText={!!touched.vehicleNo && !!errors.vehicleNo}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Imea Number'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.imea}
                        name='imea'
                        error={!!touched.imea && !!errors.imea}
                        helperText={!!touched.imea && !!errors.imea}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Sim Number'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.sim}
                        name='sim'
                        error={!!touched.sim && !!errors.sim}
                        helperText={!!touched.sim && !!errors.sim}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Engineer Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.engineer}
                        name='engineer'
                        error={!!touched.engineer && !!errors.engineer}
                        helperText={!!touched.engineer && !!errors.engineer}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='location'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.location}
                        name='location'
                        error={!!touched.location && !!errors.location}
                        helperText={!!touched.location && !!errors.location}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />
                    
                    <TextField
                        
                        variant='filled'
                        type='date'
                        label='Renewal Date'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={materialDateInput}
                        name='renewalDt'
                        error={!!touched.renewalDt && !!errors.renewalDt}
                        helperText={!!touched.renewalDt && !!errors.renewalDt}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />
                 

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Vehicle Type'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.vehicleType}
                        name='vehicleType'
                        error={!!touched.vehicleType && !!errors.vehicleType}
                        helperText={!!touched.vehicleType && !!errors.vehicleType}
                        sx={{ gridAutoColumns: 'span 4'}}
                    />

                    <TextField
                        
                        variant='filled'
                        type='text'
                        label='Map Customer'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.mapCustomer}
                        name='mapCustomer'
                        error={!!touched.mapCustomer && !!errors.mapCustomer}
                        helperText={!!touched.mapCustomer && !!errors.mapCustomer}
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
      <DataGrid checkboxSelection disableRowSelectionOnClick  rows={data} columns={columns} />
      </Box>
    </Box>
  )
}

export default Assets;
