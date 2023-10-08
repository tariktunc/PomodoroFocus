"use client";

import React, { useState } from "react";
import Head from "next/head";
import HeaderStyles from "../../header.module.scss";
import Colorsetting from "./colorsetting";

export default function Themesetting({ themeTask, openPop }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCloseClick = () => {
    closeSetting();
  };

  const handleReloadClick = () => {
    window.location.reload();
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className={HeaderStyles.themesetting}>
      <div>
        <a>Theme</a>
      </div>
      <div>
        <a>Color Theme</a>
        <div>
          <button
            onClick={() => {
              openPopup();
              openPop();
            }}></button>
          <button onClick={openPopup}></button>
          <button onClick={openPopup}></button>
        </div>
      </div>
      <Colorsetting isOpen={isPopupOpen} onClose={closePopup} />{" "}
    </div>
  );
}
