import { Check, Save } from '@mui/icons-material'
import { Box, CircularProgress, Fab } from '@mui/material'
import { green } from '@mui/material/colors'
import { useState } from 'react'
import React from 'react';

const UserAction = ({ params, rowId, setRowId }) => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(true)
    
    const handleSubmit = () => {
        
    }
  return (
    <Box sx={{
        m:1,
        position: 'relative'
    }}>
      {success ? (
        <Fab
        color='primary'
        sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': {bgcolor: green[700]}
        }}
        >
            <Check />
        </Fab>
      ) : ( <Fab
        color='primary'
        sx={{
            width: 40,
            height: 40,
        }}
        disabled={params.id !== rowId || loading}
        onClick={handleSubmit}
        >
            <Save />
        </Fab>
        )}
        {loading && (
            <CircularProgress
            size={52}
            sx={{
                color: green[500],
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
            }}
            />
        )}
    </Box>
  )
}

export default UserAction
