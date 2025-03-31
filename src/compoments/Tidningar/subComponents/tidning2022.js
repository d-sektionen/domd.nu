import HTMLFlipBook from "react-pageflip";
import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Importera alla sidor
import sida1 from "../../../res/images/Tidning/2022/1.png";
import sida2 from "../../../res/images/Tidning/2022/2.png";
import sida3 from "../../../res/images/Tidning/2022/3.png";
import sida4 from "../../../res/images/Tidning/2022/4.png";
import sida5 from "../../../res/images/Tidning/2022/5.png";
import sida6 from "../../../res/images/Tidning/2022/6.png";
import sida7 from "../../../res/images/Tidning/2022/7.png";
import sida8 from "../../../res/images/Tidning/2022/8.png";
import sida9 from "../../../res/images/Tidning/2022/9.png";
import sida10 from "../../../res/images/Tidning/2022/10.png";
import sida11 from "../../../res/images/Tidning/2022/11.png";
import sida12 from "../../../res/images/Tidning/2022/12.png";
import sida13 from "../../../res/images/Tidning/2022/13.png";
import sida14 from "../../../res/images/Tidning/2022/14.png";
import sida15 from "../../../res/images/Tidning/2022/15.png";
import sida16 from "../../../res/images/Tidning/2022/16.png";
import sida17 from "../../../res/images/Tidning/2022/17.png";
import sida18 from "../../../res/images/Tidning/2022/18.png";
import sida19 from "../../../res/images/Tidning/2022/19.png";
import sida20 from "../../../res/images/Tidning/2022/20.png";
import sida21 from "../../../res/images/Tidning/2022/21.png";
import sida22 from "../../../res/images/Tidning/2022/22.png";
import sida23 from "../../../res/images/Tidning/2022/23.png";
import sida24 from "../../../res/images/Tidning/2022/24.png";
import sida25 from "../../../res/images/Tidning/2022/25.png";
import sida26 from "../../../res/images/Tidning/2022/26.png";
import sida27 from "../../../res/images/Tidning/2022/27.png";
import sida28 from "../../../res/images/Tidning/2022/28.png";
import sida29 from "../../../res/images/Tidning/2022/29.png";
import sida30 from "../../../res/images/Tidning/2022/30.png";
import sida31 from "../../../res/images/Tidning/2022/31.png";
import sida32 from "../../../res/images/Tidning/2022/32.png";

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

function MyAlbum2022() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      marginTop={8}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="90vh"
    >
      {/* Titel ovanför tidningen */}
       {/* Titel ovanför tidningen */}
         <Typography
     variant="h4"
     fontWeight="bold"
     mb={4}
     sx={{
       color: "#FFC0CB", // Ljusrosa färg
       textShadow: "1px 1px 2px black, 0 0 3px #FF1493, 0 0 5px #FF69B4", // Rosa glow-effekt
       textAlign: "center",
       marginBottom: 0
     }}
   >
   
        DömD-Tidningen 2022
      </Typography>

      <HTMLFlipBook
        width={isMobile ? 320 : 550} // Anpassa bredden för mobil
        height={isMobile ? 500 : 800} // Anpassa höjden för mobil
        size="stretch"
        minWidth={315}
        maxWidth={600}
        minHeight={400}
        maxHeight={1000}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="tidning"
        drawShadow={false}
        startPage={0}
        flippingTime={500}
        useMouseEvents={true}
        usePortrait={isMobile} // Om det är mobil, visa en sida i taget
        showPageCorners={true}
        clickEventForward={true}
      >
        <PageCover>
          <img src={sida1} width="100%" />
        </PageCover>
        {[
            sida2, sida3, sida4, sida5, sida6, sida7, sida8, sida9, sida10,
          sida11, sida12, sida13, sida14, sida15, sida16, sida17, sida18, sida19,
          sida20, sida21, sida22, sida23, sida24, sida25, sida26, sida27, sida28, sida29,
          sida30, sida31, sida32,
        ].map((page, index) => (
          <Page key={index} number={index + 1}>
            <img src={page} width="100%" />
          </Page>
        ))}

        <PageCover>
          <img src={sida32} width="100%" />
        </PageCover>
      </HTMLFlipBook>
    </Box>
  );
}

export default MyAlbum2022;
