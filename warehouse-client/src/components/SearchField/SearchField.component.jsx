import { useState } from "react";
import { connect } from "react-redux";

import { setSearchQuery } from "../../redux/app/actions";

import { Input, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchField = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onPressEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setSearchQuery(search);
      e.target.blur();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center", mb: 5, mx: 5, gap: "10px" }}>
      <SearchIcon onClick={() => setSearchQuery(search)} sx={{ cursor: "pointer" }} />
      <Input onChange={onSearchChange} onKeyUp={onPressEnter} placeholder='Search Products' />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSearchQuery: (query) => dispatch(setSearchQuery(query)),
});

export default connect(null, mapDispatchToProps)(SearchField);
