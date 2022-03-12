import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addShop, resetMessage, search, setSearchQuery } from "../redux/app/actions";
import capitalize from "../utils/capitalize";

import { Container } from "@mui/material";

import Header from "../components/Header/Header.component";
import ShopsList from "../components/ShopsList/ShopsList.component";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.component";
import Loader from "../components/Loader/Loader.component";
import Message from "../components/Message/Message.component";
import AddForm from "../components/AddForm/AddForm.component";
import ErrorMessage from "../components/NetworkFail/ErrorMessage.component";

const ShopsListPage = ({
  addShop,
  addShopMessage,
  addShopLoading,
  resetMessage,
  token,
  shops,
  onSearch,
  setSearchQuery,
  searchQuery,
  errorMessage,
}) => {
  const [location, setLocation] = useState("");

  const onChangeLocation = (location) => {
    setLocation(location);
  };

  const onAddShop = (shopLocation) => {
    const location = capitalize(shopLocation);
    addShop(location);
    setLocation("Add Shop");
    resetMessage();
  };

  const onPressEnter = (shopLocation) => {
    onAddShop(shopLocation);
  };

  useEffect(() => {
    if (token) window.sessionStorage.setItem("token", token);

    return () => {
      resetMessage();
      setSearchQuery("");
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    searchQuery ? onSearch("shops", searchQuery) : onSearch("shops", "");

    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <ScrollToTop>
      <Header />
      {errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : shops && shops.length >= 0 ? (
        <Container data-aos='fade' maxWidth='lg'>
          <ShopsList shops={shops} onChangeLocation={onChangeLocation} location={location} />
          {addShopMessage && location === "Add Shop" ? <Message message={addShopMessage.message} type={addShopMessage.type} /> : null}
          <AddForm loading={addShopLoading} onClick={onAddShop} onKeyUp={onPressEnter} placeholder='Shop Location' buttonLabel='Add Shop' />
        </Container>
      ) : (
        <Loader />
      )}
    </ScrollToTop>
  );
};

const mapStateToProps = (state) => ({
  addShopMessage: state.shopReducer.message,
  addShopLoading: state.shopReducer.addShopLoading,
  token: state.authReducer.message.token,
  shops: state.searchReducer.searchResult,
  searchQuery: state.searchReducer.searchQuery,
  errorMessage: state.searchReducer.errorMessage,
});

const mapDispatchProps = (dispatch) => ({
  addShop: (location) => dispatch(addShop(location)),
  resetMessage: () => dispatch(resetMessage()),
  onSearch: (searchFor, query, location) => dispatch(search(searchFor, query, location)),
  setSearchQuery: (query) => dispatch(setSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchProps)(ShopsListPage);
