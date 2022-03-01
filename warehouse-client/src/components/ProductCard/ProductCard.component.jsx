import { useState } from "react";

import { Paper, Typography, Input, Button, Box, CircularProgress, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import Message from "../Message/Message.component";
import WarningModal from "../WarningModal/WarningModal.component";

import "./ProductCard.styles.css";

const ProductCard = ({
  name,
  shopProducts,
  warehouseProducts,
  location,
  onDeleteProduct,
  message,
  updateProductLoading,
  deleteProductLoading,
  onOrder,
}) => {
  const [quantityToOrder, setQuantityToOrder] = useState("");
  const [showWarningModal, toggleShowWarningModal] = useState(false);

  const quantity = shopProducts ? shopProducts.quantity : warehouseProducts.quantity;

  const onChangeInput = (e) => {
    setQuantityToOrder(e.target.value);
  };

  const onPressEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onOrder(name, quantityToOrder, quantity);
    }
  };

  const toggleWarningModal = () => {
    toggleShowWarningModal(!showWarningModal);
  };

  return (
    <Paper square elevation={0}>
      {message && !message.sticky && <Message message={message.message} type={message.type} />}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography className='product-name' variant='h2' color='#28234A' sx={{ fontSize: "2rem", padding: "2% 20px", mt: 2 }}>
          {name}
        </Typography>
        {location === "Warehouse" ? (
          deleteProductLoading ? (
            <CircularProgress size='1.5rem' sx={{ m: 3 }} />
          ) : (
            <IconButton onClick={toggleWarningModal} sx={{ height: "40px", m: 2 }}>
              <DeleteIcon sx={{ color: "#E91E63" }} />
              <WarningModal
                message='Are you sure you want to delete the product?'
                showWarningModal={showWarningModal}
                onDeleteClick={() => onDeleteProduct(name)}
                onCancelClick={toggleWarningModal}
              />
            </IconButton>
          )
        ) : null}
      </Box>
      <Box className='product-card'>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography>
            Quantity: <strong style={{ fontSize: "1.5rem" }}>{quantity}</strong>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "5%", alignItems: "center" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography align='center'>Quantity to order:</Typography>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
              <Input
                sx={{ width: "50px" }}
                onChange={onChangeInput}
                onKeyUp={onPressEnter}
                value={quantityToOrder}
                type='number'
                autoComplete='none'
              />
              {updateProductLoading ? (
                <Box sx={{ width: "90px", height: "37px" }}>
                  <CircularProgress size='1.5rem' sx={{ ml: 2 }} />
                </Box>
              ) : (
                <Button
                  sx={{ width: "90px" }}
                  onClick={() => {
                    onOrder(name, quantityToOrder, quantity);
                    setQuantityToOrder("");
                  }}
                  variant='contained'>
                  Order
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductCard;
