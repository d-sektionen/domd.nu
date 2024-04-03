import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import "./style.css";

import { Container } from "@mui/material";

// import Sida0 from "../../res/images/Tidning/0.png";
import Sida1 from "../../res/images/Tidning/01.png";
import Sida2 from "../../res/images/Tidning/02.png";
import Sida3 from "../../res/images/Tidning/03.png";
import Sida4 from "../../res/images/Tidning/04.png";
import Sida5 from "../../res/images/Tidning/05.png";
import Sida6 from "../../res/images/Tidning/06.png";
import Sida7 from "../../res/images/Tidning/07.png";
import Sida8 from "../../res/images/Tidning/08.png";
import Sida9 from "../../res/images/Tidning/09.png";
import Sida10 from "../../res/images/Tidning/10.png";
import Sida11 from "../../res/images/Tidning/11.png";
import Sida12 from "../../res/images/Tidning/12.png";
import Sida13 from "../../res/images/Tidning/13.png";
import Sida14 from "../../res/images/Tidning/14.png";
import Sida15 from "../../res/images/Tidning/15.png";
import Sida16 from "../../res/images/Tidning/16.png";
import Sida17 from "../../res/images/Tidning/17.png";
import Sida18 from "../../res/images/Tidning/18.png";
import Sida19 from "../../res/images/Tidning/19.png";
import Sida20 from "../../res/images/Tidning/20.png";
import Sida21 from "../../res/images/Tidning/21.png";
import Sida22 from "../../res/images/Tidning/22.png";
import Sida23 from "../../res/images/Tidning/23.png";
import Sida24 from "../../res/images/Tidning/24.png";
import Sida25 from "../../res/images/Tidning/25.png";
import Sida26 from "../../res/images/Tidning/26.png";
import Sida27 from "../../res/images/Tidning/27.png";
import Sida28 from "../../res/images/Tidning/28.png";
import Sida29 from "../../res/images/Tidning/29.png";
import Sida30 from "../../res/images/Tidning/30.png";
import Sida31 from "../../res/images/Tidning/31.png";
import Sida32 from "../../res/images/Tidning/32.png";
import Sida33 from "../../res/images/Tidning/33.png";
import Sida34 from "../../res/images/Tidning/34.png";
import Sida35 from "../../res/images/Tidning/35.png";
import Sida36 from "../../res/images/Tidning/36.png";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <p>{props.children}</p>
      <p>{props.number}</p>
    </div>
  );
});

function MyAlbum(props) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("vet inte");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };

  return (
    <body>
      <div>
        <HTMLFlipBook
          width={550}
          height={800}
          size="stretch"
          minWidth={315}
          maxWidth={600}
          minHeight={400}
          maxHeight={1000}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="tidning"
        >
          <PageCover>
            <img src={Sida1} width="100%" />
          </PageCover>
          {/* <Page number="1">
            <img src={Sida1} width="100%" />
          </Page> */}
          <Page number="2">
            <img src={Sida2} width="100%" />
          </Page>
          <Page number="3">
            <img src={Sida3} width="100%" />
          </Page>
          <Page number="4">
            <img src={Sida4} width="100%" />
          </Page>
          <Page number="5">
            <img src={Sida5} width="100%" />
          </Page>
          <Page number="6">
            <img src={Sida6} width="100%" />
          </Page>
          <Page number="7">
            <img src={Sida7} width="100%" />
          </Page>
          <Page number="8">
            <img src={Sida8} width="100%" />
          </Page>
          <Page number="9">
            <img src={Sida9} width="100%" />
          </Page>
          <Page number="10">
            <img src={Sida10} width="100%" />
          </Page>
          <Page number="11">
            <img src={Sida11} width="100%" />
          </Page>
          <Page number="12">
            <img src={Sida12} width="100%" />
          </Page>
          <Page number="13">
            <img src={Sida13} width="100%" />
          </Page>
          <Page number="14">
            <img src={Sida14} width="100%" />
          </Page>
          <Page number="15">
            <img src={Sida15} width="100%" />
          </Page>
          <Page number="16">
            <img src={Sida16} width="100%" />
          </Page>
          <Page number="17">
            <img src={Sida17} width="100%" />
          </Page>
          <Page number="18">
            <img src={Sida18} width="100%" />
          </Page>
          <Page number="19">
            <img src={Sida19} width="100%" />
          </Page>
          <Page number="20">
            <img src={Sida20} width="100%" />
          </Page>
          <Page number="21">
            <img src={Sida21} width="100%" />
          </Page>
          <Page number="22">
            <img src={Sida22} width="100%" />
          </Page>
          <Page number="23">
            <img src={Sida23} width="100%" />
          </Page>
          <Page number="24">
            <img src={Sida24} width="100%" />
          </Page>
          <Page number="25">
            <img src={Sida25} width="100%" />
          </Page>
          <Page number="26">
            <img src={Sida26} width="100%" />
          </Page>
          <Page number="27">
            <img src={Sida27} width="100%" />
          </Page>
          <Page number="28">
            <img src={Sida28} width="100%" />
          </Page>
          <Page number="29">
            <img src={Sida29} width="100%" />
          </Page>
          <Page number="30">
            <img src={Sida30} width="100%" />
          </Page>
          <Page number="31">
            <img src={Sida31} width="100%" />
          </Page>
          <Page number="32">
            <img src={Sida32} width="100%" />
          </Page>
          <Page number="33">
            <img src={Sida33} width="100%" />
          </Page>
          <Page number="34">
            <img src={Sida34} width="100%" />
          </Page>
          <Page number="35">
            <img src={Sida35} width="100%" />
          </Page>

          <PageCover>
            <img src={Sida36} width="100%" />
          </PageCover>
        </HTMLFlipBook>
      </div>
    </body>
  );
}

export default MyAlbum;
