import React from 'react'
import { Box, useTheme } from "@mui/material";
interface FooterProps{}

const Footer:React.FC<FooterProps>=() =>{
  const theme=useTheme()
return <footer>
  <Box bgcolor={theme.palette.grey["800"]}>
    <p>Hello From Footer</p>
  </Box>
</footer>
}
export default Footer