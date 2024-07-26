import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { DropDownContainer } from './DropDownStyle.jsx';

const DropDown = () => {
  return (
    <DropDownContainer>
      <NavLink
        exact
        to="/"
        style={({ isActive }) => ({
          marginLeft: "10px",
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          marginTop: "20px",
          fontWeight: isActive ? "bold" : "normal",
          transition: "transform 0.3s ease"
        })}
        className="dropdown-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/Anime"
        style={({ isActive }) => ({
          marginLeft: "10px",
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          marginTop: "20px",
          fontWeight: isActive ? "bold" : "normal",
          transition: "transform 0.3s ease"
        })}
        className="dropdown-link"
      >
        Anime
      </NavLink>
      <NavLink
        to="/Manga"
        style={({ isActive }) => ({
          marginLeft: "10px",
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          marginTop: "20px",
          fontWeight: isActive ? "bold" : "normal",
          transition: "transform 0.3s ease"
        })}
        className="dropdown-link"
      >
        Manga
      </NavLink>
      <NavLink
        to="/About"
        style={({ isActive }) => ({
          marginLeft: "10px",
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          marginTop: "20px",
          fontWeight: isActive ? "bold" : "normal",
          transition: "transform 0.3s ease"
        })}
        className="dropdown-link"
      >
        About
      </NavLink>
      <NavLink
        to="/Favorites"
        style={({ isActive }) => ({
          marginLeft: "10px",
          color: isActive ? "yellow" : "white",
          textDecoration: "none",
          marginTop: "20px",
          fontWeight: isActive ? "bold" : "normal",
          transition: "transform 0.3s ease"
        })}
        className="dropdown-link"
      >
        Favorites
      </NavLink>
    </DropDownContainer>
  );
};

export default DropDown;
