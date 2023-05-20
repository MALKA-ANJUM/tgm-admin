import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header";
import { Box, Button, TextField } from '@mui/material';
import { tokens } from '../../theme';
import {useTheme} from '@mui/material';

const initialValues = {
    installDt: "",
    customer: "",
    imea: "",
    sim: "",
    engineer: "",
    location: "",
    renewalDt: "",
    vehicleNo: "",
    vehicleType: "",
    mapCustomer: ""
}

// const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const deviceSchema= yup.object().shape({
    installDt: yup.string().required('required'),
    customer: yup.string().required('required'),
    imea: yup.string().required('required'),
    sim: yup.string().required('required'),
    engineer: yup.string().required('required'),
    location: yup.string().required('required'),
    renewalDt: yup.string().required('required'),
    vehicleNo: yup.string().required('required'),
    vehicleType: yup.string().required('required'),
    mapCustomer: yup.string().required('required'),
})

const AddDevice = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const isNonMobile = useMediaQuery('(min-width: 600px)')
    const handleFormSubmit = (values) => {
      console.log(values);
    }

  return (
    <Box maxWidth='700px'
    width='100%'
    m='20px auto'>
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
                        value={values.renewalDt}
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
                        value={values.renewalDt}
                        name='renewalDt'
                        error={!!touched.renewalDt && !!errors.renewalDt}
                        helperText={!!touched.renewalDt && !!errors.renewalDt}
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
    )
}

export default AddDevice;
