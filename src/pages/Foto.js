import React, { useState } from "react";
import StyledHeader from "../components/StyledHeader";
import StyledFooter from "../components/StyledFooter";
import HeaderTitle from "../components/header/HeaderTitle";
import HeaderImage from "../components/header/HeaderImage";
import StyledMain from "../components/StyledMain";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

import ImagePreview from "./ImagePreview";

function Foto(props) {
  const [dataUri, setDataUri] = useState("");
  function handleTakePhoto(dataUri) {
    console.log("take picture");
    setDataUri(dataUri);
  }
  const isFullScreen = false;
  return (
    <>
      <StyledHeader>
        <HeaderTitle>Tell me the Whiskie</HeaderTitle>
        <HeaderImage />
      </StyledHeader>
      <StyledMain>
        <p>Camera functions in progress...</p>
        {dataUri ? (
          <ImagePreview dataUri={dataUri} isFullScreen={isFullScreen} />
        ) : (
          <Camera
            onTakePhotoAnimationDone={handleTakePhoto}
            isFullScreen={isFullScreen}
          />
        )}
      </StyledMain>
      <StyledFooter />
    </>
  );
}

export default Foto;
