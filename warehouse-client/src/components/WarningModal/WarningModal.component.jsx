import { Button, Card, Typography, Box, Modal } from "@mui/material";

const WarningModal = ({ message, showWarningModal, onDeleteClick, onCancelClick }) => {
  return (
    <Modal open={showWarningModal}>
      <Card
        elevation={8}
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}>
        <Typography align='center'>{message}</Typography>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around", mt: 2 }}>
          <Button onClick={onDeleteClick} variant='contained' color='error'>
            Delete
          </Button>
          <Button onClick={onCancelClick} variant='outlined' color='error'>
            Cancel
          </Button>
        </Box>
      </Card>
    </Modal>
  );
};

export default WarningModal;
