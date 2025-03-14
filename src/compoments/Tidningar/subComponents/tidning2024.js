import HTMLFlipBook from "react-pageflip";
import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

// Importera alla sidor
import Sida1 from "../../../res/images/Tidning/2024/01.png";
import Sida2 from "../../../res/images/Tidning/2024/02.png";
import Sida3 from "../../../res/images/Tidning/2024/03.png";
import Sida4 from "../../../res/images/Tidning/2024/04.png";
import Sida5 from "../../../res/images/Tidning/2024/05.png";
import Sida6 from "../../../res/images/Tidning/2024/06.png";
import Sida7 from "../../../res/images/Tidning/2024/07.png";
import Sida8 from "../../../res/images/Tidning/2024/08.png";
import Sida9 from "../../../res/images/Tidning/2024/09.png";
import Sida10 from "../../../res/images/Tidning/2024/10.png";
import Sida11 from "../../../res/images/Tidning/2024/11.png";
import Sida12 from "../../../res/images/Tidning/2024/12.png";
import Sida13 from "../../../res/images/Tidning/2024/13.png";
import Sida14 from "../../../res/images/Tidning/2024/14.png";
import Sida15 from "../../../res/images/Tidning/2024/15.png";
import Sida16 from "../../../res/images/Tidning/2024/16.png";
import Sida17 from "../../../res/images/Tidning/2024/17.png";
import Sida18 from "../../../res/images/Tidning/2024/18.png";
import Sida19 from "../../../res/images/Tidning/2024/19.png";
import Sida20 from "../../../res/images/Tidning/2024/20.png";
import Sida21 from "../../../res/images/Tidning/2024/21.png";
import Sida22 from "../../../res/images/Tidning/2024/22.png";
import Sida23 from "../../../res/images/Tidning/2024/23.png";
import Sida24 from "../../../res/images/Tidning/2024/24.png";
import Sida25 from "../../../res/images/Tidning/2024/25.png";
import Sida26 from "../../../res/images/Tidning/2024/26.png";
import Sida27 from "../../../res/images/Tidning/2024/27.png";
import Sida28 from "../../../res/images/Tidning/2024/28.png";
import Sida29 from "../../../res/images/Tidning/2024/29.png";
import Sida30 from "../../../res/images/Tidning/2024/30.png";
import Sida31 from "../../../res/images/Tidning/2024/31.png";
import Sida32 from "../../../res/images/Tidning/2024/32.png";
import Sida33 from "../../../res/images/Tidning/2024/33.png";
import Sida34 from "../../../res/images/Tidning/2024/34.png";
import Sida35 from "../../../res/images/Tidning/2024/35.png";
import Sida36 from "../../../res/images/Tidning/2024/36.png";


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

function MyAlbum2024() {
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
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{
          textShadow: "1px 1px 3px brown, 0 0 1em #FFD700",
          textAlign: "center",
        }}
      >
        DömD-Tidningen 2024
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
          <img src={Sida1} width="100%" />
        </PageCover>
        {[
            Sida2, Sida3, Sida4, Sida5, Sida6, Sida7, Sida8, Sida9, Sida10,
          Sida11, Sida12, Sida13, Sida14, Sida15, Sida16, Sida17, Sida18, Sida19,
          Sida20, Sida21, Sida22, Sida23, Sida24, Sida25, Sida26, Sida27, Sida28, Sida29,
          Sida30, Sida31, Sida32, Sida33, Sida34, Sida35
        ].map((page, index) => (
          <Page key={index} number={index + 1}>
            <img src={page} width="100%" />
          </Page>
        ))}

        <PageCover>
          <img src={Sida36} width="100%" />
        </PageCover>
      </HTMLFlipBook>
    </Box>
  );
}

export default MyAlbum2024;
