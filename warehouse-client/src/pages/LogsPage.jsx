import { useEffect } from "react";
import { connect } from "react-redux";

import { Container } from "@mui/material";

import Header from "../components/Header/Header.component";
import Loader from "../components/Loader/Loader.component";
import LogList from "../components/LogList/LogList.component";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.component";
import { getLogs } from "../redux/app/actions";
import ErrorMessage from "../components/NetworkFail/ErrorMessage.component";

const LogsPage = ({ getLogs, logs, token, errorMessage }) => {
  useEffect(() => {
    getLogs();
    if (token) window.sessionStorage.setItem("token", token);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ScrollToTop>
        <Header />
        {errorMessage ? (
          <ErrorMessage errorMessage={errorMessage} />
        ) : logs ? (
          <Container data-aos='fade' maxWidth='lg'>
            <LogList logs={logs} />
          </Container>
        ) : (
          <Loader />
        )}
      </ScrollToTop>
    </>
  );
};

const mapStateToProps = (state) => ({
  logs: state.logReducer.logs,
  token: state.authReducer.message.token,
  errorMessage: state.logReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getLogs: () => dispatch(getLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogsPage);
