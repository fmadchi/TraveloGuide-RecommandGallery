import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2023  ENSAS TraveloGUIDE. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">opinions</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
           <a href="https://www.linkedin.com/in/monir-el-ouarroudi-363601211/"><BsFacebook /></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/monir-el-ouarroudi-363601211/"><AiFillInstagram /></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/monir-el-ouarroudi-363601211/"><BsLinkedin /></a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  color: #FFFFFF;
  justify-content: space-evenly;
  background-color: #76CCCF;
  border-radius: 0.5rem;
  padding: 2.5rem;


  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: #FFFFFF;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #336B87;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #336B87;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
