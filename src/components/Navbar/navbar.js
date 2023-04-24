import { Link } from "gatsby";
import React, { useState } from "react";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import Logo from "../../images/winclogofull.png";
import "./navbar.css";

const navLinks = [
  // { to: "/donate", text: "Donate" },
  { to: "/about", text: "About" },
  { to: "/#programs", text: "Programs" },
  { to: "/events", text: "Events" },
];

const NavigationBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className="navbar"
        style={{
          position: "fixed",
          zIndex: 2,
          top: 0,
          padding: "0 2rem",
          width: "100%",
          maxWidth: "100vw",
          height: "5.25rem",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          boxShadow: "0 8px 8px -8px rgba(250, 108, 94, 0.4)",
          // backgroundColor: "#FA6C5E",
          color: "black",
        }}
      >
        <div
          className="navbarContents"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FA6C5E",
                  textDecoration: "none",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "bold",
                  maxWidth: "7rem",
                }}
                to={"/"}
              >
                <img
                  src={Logo}
                  alt="winc logo"
                  style={{ width: "inherit", margin: 0, padding: 0 }}
                />
              </Link>
            </div>
          </div>
          <div className="navbarLinks" style={{ display: "flex" }}>
            {navLinks.map((link) => (
              <div className="navbarLink">
                <Link
                  style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                  to={link.to}
                >
                  {link.text.toUpperCase()}
                </Link>
              </div>
            ))}
          </div>
          <a
            className="navbarAction"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform"
            target="_blank"
            rel="norefferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              className="actionButton"
              style={{
                backgroundColor: "black",
                color: "white",
                border: "0.125rem solid black",
              }}
            >
              JOIN
            </div>
          </a>
          {!isOpen ? (
            <VscMenu
              className="menu"
              style={{ cursor: "pointer" }}
              size="2em"
              onClick={() => setOpen(true)}
            />
          ) : null}
          {isOpen ? (
            <VscChromeClose
              className="menu"
              style={{ cursor: "pointer" }}
              size="2em"
              onClick={() => setOpen(false)}
            />
          ) : null}
        </div>
      </div>
      {isOpen ? (
        <div className="mobileLinks">
          {navLinks.map((link) => (
            <div className="mobileNavLink">
              <Link
                style={{ fontSize: "1.25rem", fontWeight: "bold" }}
                to={link.to}
              >
                {link.text.toUpperCase()}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default NavigationBar;
