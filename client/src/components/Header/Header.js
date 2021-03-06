import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import ShoppingCartButton from "./../../components/ShoppingCartButton/ShoppingCartButton.js";
import laundrLogo from "./../../assets/laundrLogo.png";
import blueLaundrLogo from "./../../assets/blueCombine.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  routeChange(path) {
    window.location.pathname = path;
  }

  render() {
    return (
      <div className="topnav">
        <Link id="logo-link" to="/">
          <img
            className="topnav-logo"
            src={this.props.page === "home" ? laundrLogo : blueLaundrLogo}
            alt="Laundr Logo"
          />
        </Link>
        <div className="topnav-right align">
          {this.props.currentUser ? (
            <div
              style={{
                display: "table-row",
              }}
            >
              <button
                className="topnav-button"
                onMouseDown={this.routeChange.bind(this, "/History")}
              >
                HISTORY
              </button>
              <button
                className="topnav-button"
                onMouseDown={this.routeChange.bind(this, "/Logout")}
              >
                LOG OUT
              </button>
              <ShoppingCartButton
                itemsInCart={this.props.itemsInCart}
                onAddToCartClick={this.props.handleAddToCartClick}
                onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
                products={this.props.products}
                currentUser={this.props.currentUser}
              />
            </div>
          ) : (
            <div
              style={{
                display: "table-row",
              }}
            >
              <button
                className="topnav-button"
                onMouseDown={this.routeChange.bind(this, "/Login")}
              >
                LOG IN
              </button>
              <button
                className="topnav-button"
                onMouseDown={this.routeChange.bind(this, "/Signup")}
              >
                SIGN UP
              </button>
              <ShoppingCartButton
                itemsInCart={this.props.itemsInCart}
                onAddToCartClick={this.props.handleAddToCartClick}
                onRemoveFromCartClick={this.props.handleRemoveFromCartClick}
                products={this.props.products}
                currentUser={this.props.currentUser}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
