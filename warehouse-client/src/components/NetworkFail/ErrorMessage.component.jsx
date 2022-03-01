import { Box, Typography } from "@mui/material";
import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <Box sx={{ width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography variant='h1' align='center' sx={{ fontSize: "3rem" }}>
        {errorMessage}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
