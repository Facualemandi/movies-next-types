"use client";
import React, { useState } from "react";

import "./nav.css";

const nav = ["Peliculas", "Programas de TV", "Personas"];

const NavBar = () => {
  const [tabSelected, setTabSelected] = useState<string>("Peliculas");

  return (
    <nav className="nav_app">
      <ul className="ul_nav_app">
        {nav.map((tab) => (
          <li
            onClick={() => setTabSelected(tab)}
            className={Boolean(tabSelected === tab) ? tabSelected : undefined}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
