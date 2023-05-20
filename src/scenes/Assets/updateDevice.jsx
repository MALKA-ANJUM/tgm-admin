import React from 'react'
import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header";
// import { tokens } from '../../theme';
// import {useTheme} from '@mui/material';

// const initialValues = {
//   firstname: "",
//   lastname: "",
//   contact: "",
//   email: "",
// }

// const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const deviceSchema= yup.object().shape({
//   firstname: yup.string().required('required'),
//   lastname: yup.string().email('invalid email').required('required'),
//   contact: yup.string().matches(phoneRegExp, 'phone number is not valid').required('required'),
//   email: yup.string().required('required'),
// })

const UpdateDevice = () => {
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);

    const isNonMobile = useMediaQuery('(min-width: 600px)')
    const handleSubmit = (values) => {
      console.log(values);
    }
  return (
    <Box m="20px">
    
        <Header title="Update Device" subtitle="Update your Device Details" />
         
     
      
            <form onSubmit={handleSubmit}>
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
                type='text'
                label='Change Customer Name'
                name='customer'
                sx={{ gridAutoColumns: 'span 4'}}
               />

              <TextField
                
                variant='filled'
                type='text'
                label='Change Imea No.'
                name='imea'
                sx={{ gridAutoColumns: 'span 4'}}
               />

              <TextField
                
                variant='filled'
                type='text'
                label='Change Sim No'
                name='sim'
                sx={{ gridAutoColumns: 'span 4'}}
               />

              <TextField
                
                variant='filled'
                type='text'
                label='Change Engineer Name'
                name='engineer'
                sx={{ gridAutoColumns: 'span 4'}}
               />
              <TextField
                
                variant='filled'
                type='text'
                label='Change location'
                name='location'
                sx={{ gridAutoColumns: 'span 4'}}
               />

              <TextField
                
                variant='filled'
                type='text'
                label='Change vehicle'
                name='vehicle No'
                sx={{ gridAutoColumns: 'span 4'}}
               />
              </Box>
              <Box>
                <Button type='submit' variant='h3'>
                  Save Changes
                </Button>
              </Box>
            </form>
       
    </Box>
  )
}

export default UpdateDevice
