import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
// import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase })=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return(
        <Box width="100%" m="0 10px">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100]}}>
                        {title}
                    </Typography>
                </Box>
                {icon}
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100]}}>
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    )
}
export default StatBox;