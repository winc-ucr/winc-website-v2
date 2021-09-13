import React, { useState, useEffect } from "react";
import { Link, navigate, graphql, useStaticQuery } from "gatsby";
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import WincLogo from "../../images/winclogo.png";
import "./navbar.css";

const navLinks = [
  { to: "/about", text: "About" },
  { to: "/programs", text: "Programs" },
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
          height: "5.25rem",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#FA6C5E",
          color: "white",
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
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
                to={"/"}
              >
                WINC;
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
            href="https://linktr.ee/winc_ucr"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div
              className="actionButton"
              style={{
                backgroundColor: "white",
                color: "black",
                border: "0.125rem solid black",
              }}
            >
              JOIN NOW
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
