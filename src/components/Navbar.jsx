import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/TRAVILGUIDE-LOGO-2424.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';


export default function Navbar({ onSignInClick } ) {
  const [navbarState, setNavbarState] = useState(false);
 
  

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            TraveloGUIDE
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#recommend">places</a>
          </li>
          <li>
            <a href="#testimonials">opinions</a>
          </li>
        </ul>

        <Link to="/signUp" className="signup">SingUp</Link>
        <Link to="/signin" className="Link">SignIn</Link>

      
    {/*<button onClick={onSignInClick}>
        Sign In
       </button>*/  }  

</Nav>

      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="#home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#recommend" onClick={() => setNavbarState(false)}>
              Places
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              opinions
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle {
      display: none;
    }
  }

  .signup{
    padding: 0.5rem 1rem;
    position: relative;
    left:260px;
    cursor: pointer;
    text-decoration:none;
    color: #76CCCF;
    font-size: 1.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      color: #336B87;
    }
  }

  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #76CCCF;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #336B87;
        }
      }
      &:first-of-type {
        a {
          color: #76CCCF;
          font-weight: 900;
        }
      }
    }
  }
  .Link {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    text-decoration: none;
    background-color: #76CCCF;
    font-size: 1.1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #336B87;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;

    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color:#336B87;
        }
      }
      &:first-of-type {
        a {
          color: #76CCCF;
          font-weight: 900;
        }
      }
    }
  }
`;
