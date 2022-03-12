import { useState } from "react";

import { Box, Input, Button, CircularProgress } from "@mui/material";

const AddForm = ({ loading, onClick, onKeyUp, placeholder, buttonLabel }) => {
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onPressEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onKeyUp(name);
      setName("");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center", my: 5 }}>
      {loading ? <CircularProgress size='1.5rem' sx={{ mr: 2 }} /> : null}
      <Input
        onChange={onNameChange}
        value={name}
        onKeyUp={onPressEnter}
        sx={{ width: "50%", maxWidth: "300px" }}
        placeholder={placeholder}
      />
      <Button
        onClick={() => {
          onClick(name);
          setName("");
        }}
        variant='contained'
        sx={{ ml: 5 }}>
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default AddForm;
