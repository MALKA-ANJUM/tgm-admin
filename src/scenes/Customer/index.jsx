import React, { useEffect, useState, useContext } from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Modal, TextField, useMediaQuery } from '@mui/material';
import Header from "../../components/Header";
import { tokens } from '../../theme';
import {useTheme} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import axios from 'axios';

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

 
const Customer = () => {

  // color pallette
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // for view table
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8081/customer')
    .then(res => setTableData(res.data))
    .catch(err => console.log(err));
  }, [])

  const deviceSchema= yup.object().shape({
    // regis_dt: yup.string().required('required'),
    username: yup.string().required('required'),
    address: yup.string().required('required'),
    phone_no: yup.string().required('required'),
    email: yup.string().required('required'),
    vehicle_no: yup.string().required('required'),
  })
  const columns = [
    { field: 'user_id', headerName: 'id', flex: 0.5},
    // { field: 'regis_dt', headerName: 'Date', editable: true, flex: 1, },
    { field: 'username', headerName: 'Username', editable: true, flex: 1, },
    { field: 'address', headerName: 'Address', editable: true, flex: 1, },
    { field: 'phone_no',  headerName: 'Mobile Number',  type: 'number',  editable: true,  flex: 1,   headerAlign: "left", align: "left",},
    { field: 'email', headerName: 'Email Id', editable: true, flex: 1, },
     { field: 'vehicle_no',  headerName: 'Vehicle Number',  editable: true,  flex: 1,},
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => {
        return (
        <>
            <Link to={'/customer/' + params.row.user_id}>
                <ModeEditOutlineOutlinedIcon />
            </Link>
            <DeleteOutlineOutlinedIcon
                onClick={() =>handleDelete(params.row.user_id)}
            />
        </>
      )
      }
    }
  ];

  // for modal open and close
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);
   
  // for delete functionality
  const loadData = async () => {
    const response = await axios.get('http://localhost:8081/customer');
    setTableData(response.data);
  }
  const handleDelete = (user_id) => {
    if(window.confirm("Are you sure?")){
        axios.delete('http://localhost:8081/deleteCustomer/' + user_id);
        setTimeout(() => loadData(), 500);
    }
  }
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  
  

  // adding data
  const [values, setValues] = useState({
    // regis_dt: "",
    username: "",
    address: "",
    phone_no: "",
    email: "",
    vehicle_no: "",
  })

  // const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/addCustomer', values)
    .then(res => {
        console.log(res)
        // navigate('/customer')
    })
    .catch(err => console.log(err))
  }

  
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
      <Header title="Customer" subtitle="Manage your Customer" />
      <Button variant='contained' onClick={handleOpen}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header title="Add Customer" subtitle="Add New Customer Details" />
            <Formik
              onSubmit={handleFormSubmit}
              validationSchema={deviceSchema}
            >
              <form onSubmit={handleFormSubmit}>
                <Box
                  display='grid'
                  gap='30px'
                  gridTemplateColumns='repeat(2, minmax(0, 1fr))'
                  sx={{
                    '& > div' : {gridColumn: isNonMobile ? undefined : 'span"4'},
                  }}
                >
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateField']}>
                      <DateField 
                        variant='filled'
                        label="Registration Date" 
                        name='regis_dt'
                        onChange={e => setValues({...values, regis_dt: e.target.value})}
                        sx={{ gridAutoColumns: 'span 4'}}
                      />
                    </DemoContainer>
                  </LocalizationProvider> */}

                  <TextField
                    variant='filled'
                    type='text'
                    label='Customer Name'
                    name='username'
                    onChange={e => setValues({...values, username: e.target.value})}
                    sx={{ gridAutoColumns: 'span 4'}}
                  />
                  <TextField
                    variant='filled'
                    type='text'
                    label='Mobile Number'
                    name='phone_no'
                    onChange={e => setValues({...values, phone_no: e.target.value})}
                    sx={{ gridAutoColumns: 'span 4'}}
                  />
                  <TextField   
                    variant='filled'
                    type='text'
                    label='Address'
                    name='address'
                    onChange={e => setValues({...values, address: e.target.value})}
                    sx={{ gridAutoColumns: 'span 4'}}
                  />
                  <TextField
                    variant='filled'
                    type='email'
                    label='Email Id'
                    name='email'
                    onChange={e => setValues({...values, email: e.target.value})}
                    sx={{ gridAutoColumns: 'span 4'}}
                  />
                  <TextField
                    variant='filled'
                    type='text'
                    label='Vehicle No.'
                    name='vehicle_no'
                    onChange={e => setValues({...values, vehicle_no: e.target.value})}
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
  <DataGrid components={{ Toolbar: GridToolbar }}  disableColumnSelector
      disableDensitySelector disableRowSelectionOnClick 
      slotProps={{
        toolbar: {
          showQuickFilter: true,
          quickFilterProps: { debounceMs: 500 },
        },
      }}
      getRowId={(row) => row.user_id} rows={tableData} columns={columns} />
  </Box>
</Box>
  )
}

export default Customer;
