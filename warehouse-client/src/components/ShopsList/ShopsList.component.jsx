import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { deleteShop, resetMessage } from "../../redux/app/actions";

import { Paper, Typography, Box, LinearProgress } from "@mui/material";
import ShopCard from "../ShopCard/ShopCard.component.jsx";
import SearchField from "../SearchField/SearchField.component.jsx";
import Message from "../Message/Message.component";

const ShopsList = ({
  shops,
  loadingSearch,
  message,
  deleteShopLoading,
  searchQuery,
  deleteShop,
  location,
  onChangeLocation,
  resetMessage,
}) => {
  shops.sort((a, b) => (a.location > b.location ? 1 : b.location > a.location ? -1 : 0));

  const [shopsToLoad, setShopsToLoad] = useState(10);

  const filteredShops = shops.filter((log, idx) => idx < shopsToLoad);

  const scroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      setShopsToLoad((shopsToLoad) => shopsToLoad + 10);
    }
  };

  useEffect(() => {
    shopsToLoad < shops.length && window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
    // eslint-disable-next-line
  }, []);

  const onDeleteShop = (location) => {
    deleteShop(location, searchQuery);
    onChangeLocation(location);
    resetMessage();
  };

  return (
    <>
      <Paper className='shop-list' elevation={0} sx={{ my: 5, borderRadius: "30px 30px 0 0" }}>
        <Typography variant='h1' align='center' color='#28234A' sx={{ mb: 5, py: 5, fontSize: "3.8rem" }}>
          Shops
        </Typography>
        <SearchField />
        <Box sx={{ position: "relative", paddingTop: "20px" }}>
          {loadingSearch && (
            <Box sx={{ width: "100%", position: "absolute" }}>
              <LinearProgress />
            </Box>
          )}
        </Box>
        {message && message.sticky && <Message message={message.message} type={message.type} sticky={message.sticky} />}
        {filteredShops
          ? filteredShops.map((shop) => (
              <ShopCard
                key={shop.shopId}
                location={shop.location}
                onDeleteShop={onDeleteShop}
                loading={deleteShopLoading && shop.location === location}
              />
            ))
          : null}
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => ({
  loadingSearch: state.searchReducer.loading,
  message: state.shopReducer.message,
  deleteShopLoading: state.shopReducer.deleteShopLoading,
  searchQuery: state.searchReducer.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  deleteShop: (location, searchQuery) => dispatch(deleteShop(location, searchQuery)),
  resetMessage: () => dispatch(resetMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopsList);
