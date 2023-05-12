import { Box } from '@mui/material'
import React from 'react'

const mainContentScroll = () => {
  return (
    <Box 
    sx={{
        p: 2,
        flex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        maxHeight: "75%",
      }}>
    

    </Box>
  )
}

export default mainContentScroll