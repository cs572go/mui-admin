import { createContext } from "react";
import { createTheme } from "@mui/material/styles";

import React from 'react'

export const tokens = (mode) => ({
  ...(mode==='dark'
    ?{
        // paste hex codes
    }
  )
})

export const themeSettings = () => {
  const colors = tokens(mode);

  return{
    palette: {
        
    }
  }
}
