import React from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";
import StyledMain from "../components/StyledMain";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function Foto(props) {
  function handleTakePhoto(dataUri) {
    console.log("take picture");
  }
  return (
    <>
      <StyledHeader>
        <HeaderTitle>Tell me the Whiskie</HeaderTitle>
        <HeaderImage />
      </StyledHeader>
      <StyledMain>
        <p>Camera functions in progress...</p>
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
      </StyledMain>
      <StyledFooter />
    </>
  );
}

export default Foto;
