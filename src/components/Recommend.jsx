import React, { useState } from "react";
import styled from "styled-components";
import { Route, Navigate, Routes } from "react-router-dom";

import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";


export default function Recommend() {
  const data = [
    {
      id: 1,
      image: "https://www.nomadicchica.com/en/productive/wp-content/uploads/2020/02/Marrakesh-best-things-to-do-Morocco-Woman-Gloria-Apara-Nomadicchica.com-7.jpg",
      title: "Marrakesh",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      duration: "Approx 2 night trip",
    
    },
    {
      id: 2,
      image: Destination2,
      title: "Fes",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      duration: "Approx 2 night trip",
     
    },
    {
      id: 3,
      image: Destination3,
      title: "Tanger",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      duration: "Approx 2 night trip",
      
    },
    {
      id: 4,
      image: Destination4,
      title: "Rabat",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      duration: "Approx 1 night trip",
      
    },
    {
      id: 5,
      image: Destination5,
      title: "Essaouira",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      duration: "Approx 2 night 2 day trip",
    
    },
    {
      id: 6,
      image: Destination6,
      title: "Marzouga",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.",
      duration: "Approx 3 night 2 day trip",
      
    },
  ];
  const openDestinationPage = (destination) => {
    setSelectedDestination(destination);
  };
  const closeDestinationPage = () => {
    setSelectedDestination(null);
  };

  const packages = [
    "Top Destinations",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
 /* const [selectedDestination, setSelectedDestination] = useState(null);
  const handleCardClick = (destination) => {
    setSelectedDestination(destination);
    };
    const closePopup = () => {
      setSelectedDestination(null);
    }; */
  const [selectedDestination, setSelectedDestination] = useState(null);

 
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination, index) => {
          return (
            <div
            className="destination"
            key={index}
            onClick={() => openDestinationPage(destination)}
          >
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>More than 20 guides</span>
                <span>{destination.duration}</span>
              </div>
              

            </div>
          );
        })}
      </div>
      {selectedDestination && (
        <Navigate to={`/destination/${selectedDestination.id}`} replace />
      )}
      <Routes>
        <Route
          path="/destination/:id"
        />
      </Routes>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #336B87;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #76CCCF;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
        hright: 100%;
        border-radius: 1rem;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #336B87;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
/*const Popup = styled.div`
  
  background-color: rgba(0, 0, 0, 0.5);

  .popup-content {
    background-color: white;
    

    img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 1rem;
    }

    button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: #336B87;
      color: white;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  }
`
*/