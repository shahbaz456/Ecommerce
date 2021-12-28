import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import logo from "../Assests/images/log.png";

const Nav = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("user");
    history.push("/signin");
  };
  const { totalQuantities } = useSelector((state) => state.CartReducer);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav__container">
          <div className="nav__left">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* <Row>
            <Col sm="12" md={{ size: 4, offset: 8 }}>
              <Categories />
            </Col>
          </Row> */}
          <div className="nav__right">
            <Link to="/cart">
              <div className="basket">
                <BsFillBagFill className="cart-icon" />
                <span>{totalQuantities}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {userName ? (
        <button className="logout-btn" onClick={logOut}>
          logout
        </button>
      ) : null}
    </div>
  );
};

export default Nav;
