import HTMLFlipBook from "react-pageflip";
import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Importera alla sidor
import Sida1 from "../../../res/images/Tidning/2023/1.png";
import Sida2 from "../../../res/images/Tidning/2023/2.png";
import Sida3 from "../../../res/images/Tidning/2023/3.png";
import Sida4 from "../../../res/images/Tidning/2023/4.png";
import Sida5 from "../../../res/images/Tidning/2023/5.png";
import Sida6 from "../../../res/images/Tidning/2023/6.png";
import Sida7 from "../../../res/images/Tidning/2023/7.png";
import Sida8 from "../../../res/images/Tidning/2023/8.png";
import Sida9 from "../../../res/images/Tidning/2023/9.png";
import Sida10 from "../../../res/images/Tidning/2023/10.png";
import Sida11 from "../../../res/images/Tidning/2023/11.png";
import Sida12 from "../../../res/images/Tidning/2023/12.png";
import Sida13 from "../../../res/images/Tidning/2023/13.png";
import Sida14 from "../../../res/images/Tidning/2023/14.png";
import Sida15 from "../../../res/images/Tidning/2023/15.png";
import Sida16 from "../../../res/images/Tidning/2023/16.png";
import Sida17 from "../../../res/images/Tidning/2023/17.png";
import Sida18 from "../../../res/images/Tidning/2023/18.png";
import Sida19 from "../../../res/images/Tidning/2023/19.png";
import Sida20 from "../../../res/images/Tidning/2023/20.png";
import Sida21 from "../../../res/images/Tidning/2023/21.png";
import Sida22 from "../../../res/images/Tidning/2023/22.png";
import Sida23 from "../../../res/images/Tidning/2023/23.png";
import Sida24 from "../../../res/images/Tidning/2023/24.png";
import Sida25 from "../../../res/images/Tidning/2023/25.png";
import Sida26 from "../../../res/images/Tidning/2023/26.png";
import Sida27 from "../../../res/images/Tidning/2023/27.png";
import Sida28 from "../../../res/images/Tidning/2023/28.png";
import Sida29 from "../../../res/images/Tidning/2023/29.png";
import Sida30 from "../../../res/images/Tidning/2023/30.png";
import Sida31 from "../../../res/images/Tidning/2023/31.png";
import Sida32 from "../../../res/images/Tidning/2023/32.png";
import Sida33 from "../../../res/images/Tidning/2023/33.png";
import Sida34 from "../../../res/images/Tidning/2023/34.png";
import Sida35 from "../../../res/images/Tidning/2023/35.png";
import Sida36 from "../../../res/images/Tidning/2023/36.png";
import Sida37 from "../../../res/images/Tidning/2023/37.png";
import Sida38 from "../../../res/images/Tidning/2023/38.png";
import Sida39 from "../../../res/images/Tidning/2023/39.png";
import Sida40 from "../../../res/images/Tidning/2023/40.png";
import Sida41 from "../../../res/images/Tidning/2023/41.png";
import Sida42 from "../../../res/images/Tidning/2023/42.png";
import Sida43 from "../../../res/images/Tidning/2023/43.png";
import Sida44 from "../../../res/images/Tidning/2023/44.png";


const PageCover = React.forwardRef((props, ref) => (
  <div className="cover" ref={ref} data-density="hard">
    <div>
      <h2>{props.children}</h2>
    </div>
  </div>
));

const Page = React.forwardRef((props, ref) => (
  <div className="page" ref={ref}>
    <p>{props.children}</p>
    <p>{props.number}</p>
  </div>
));

function MyAlbum2023() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      display="flex"
      marginTop={0}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="90vh"
    >
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

        DömD-Tidningen 2023
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
        {/* Omslagssida */}
        <PageCover>
          <img src={Sida1} width="100%" alt="Cover" />
        </PageCover>

        {/* Dynamiskt render alla sidor */}
        {[
          Sida2, Sida3, Sida4, Sida5, Sida6, Sida7, Sida8, Sida9, Sida10,
          Sida11, Sida12, Sida13, Sida14, Sida15, Sida16, Sida17, Sida18, Sida19,
          Sida20, Sida21, Sida22, Sida23, Sida24, Sida25, Sida26, Sida27, Sida28, Sida29,
          Sida30, Sida31, Sida32, Sida33, Sida34, Sida35, Sida36, Sida37, Sida38, Sida39,
          Sida40, Sida41, Sida42, Sida43
        ].map((page, index) => (
          <Page key={index} number={index + 1}>
            <img src={page} width="100%" alt={`Page ${index + 1}`} />
          </Page>
        ))}

        {/* Baksida */}
        <PageCover>
          <img src={Sida44} width="100%" alt="Back Cover" />
        </PageCover>
      </HTMLFlipBook>
    </Box>
  );
}

export default MyAlbum2023
