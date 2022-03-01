import { useState } from "react";
import { useNavigate } from "react-router";

import { Paper, Typography, IconButton, Box, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import WarningModal from "../WarningModal/WarningModal.component";

import "./ShopCard.styles.css";

const ShopCard = ({ location, onDeleteShop, loading }) => {
  const [showWarningModal, toggleShowWarningModal] = useState(false);

  const navigate = useNavigate();

  const toggleWarningModal = () => {
    toggleShowWarningModal(!showWarningModal);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Paper onClick={() => navigate(`/shops/${location.toLowerCase()}`)} square className='shop-card' elevation={0}>
        <Typography variant='h2' color='#28234A' sx={{ fontSize: "1.5rem" }}>
          {location}
        </Typography>
        <Typography>Shop</Typography>
      </Paper>
      <Box>
        {loading ? (
          <Box sx={{ width: "90px" }}>
            <CircularProgress size='1.5rem' sx={{ position: "absolute", right: 25, top: 35 }} />
          </Box>
        ) : (
          <IconButton onClick={toggleWarningModal} sx={{ height: "40px", m: 2, position: "absolute", right: 0, top: 10 }}>
            <DeleteIcon sx={{ color: "#E91E63" }} />
            <WarningModal
              message='Are you sure you want to delete the shop?'
              showWarningModal={showWarningModal}
              onDeleteClick={() => onDeleteShop(location)}
              onCancelClick={toggleWarningModal}
            />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default ShopCard;
