import { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import ShopPage from "./pages/ShopPage";
import ShopsListPage from "./pages/ShopsListPage";
import SignInPage from "./pages/SignInPage";
import LogsPage from "./pages/LogsPage";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App({ isSignedIn }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {isSignedIn ? <Route path='/' element={<ShopPage />} /> : <Route path='/' element={<SignInPage />} />}
        {isSignedIn ? <Route path='/shops/:location' element={<ShopPage />} /> : <Route path='/shops/:location' element={<SignInPage />} />}
        {isSignedIn ? <Route path='/shops' element={<ShopsListPage />} /> : <Route path='/shops' element={<SignInPage />} />}
        {isSignedIn ? <Route path='/logs' element={<LogsPage />} /> : <Route path='/logs' element={<SignInPage />} />}
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isSignedIn: state.authReducer.message.success,
});

export default connect(mapStateToProps, null)(App);
