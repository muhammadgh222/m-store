import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../../redux/actions/userActions";

const BottomNavbar = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="header-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="logo pull-left">
              <a href="index.html">
                <img src="images/home/logo.png" alt="" />
              </a>
            </div>
          </div>

          <div className="col-sm-8">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="mainmenu pull-right">
              <ul
                className="nav navbar-nav collapse navbar-collapse"
                style={{ marginTop: "15px" }}
              >
                {userInfo ? (
                  <>
                    <li>
                      <Link to="/profile">
                        <i
                          className="fa fa-user"
                          style={{ paddingLeft: "15px" }}
                        ></i>{" "}
                        Account
                      </Link>
                    </li>
                    <li>
                      <a href="checkout.html">
                        <i className="fa fa-crosshairs"></i> Checkout
                      </a>
                    </li>
                    <li>
                      <a href="cart.html">
                        <i className="fa fa-shopping-cart"></i> Cart
                      </a>
                    </li>
                    <li>
                      <Link to="/" onClick={logoutHandler}>
                        <i
                          className="fa fa-user"
                          style={{ paddingLeft: "15px" }}
                        ></i>{" "}
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/register">
                        <i className="fa fa-info"></i> Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/login">
                        <i className="fa fa-lock"></i> Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
