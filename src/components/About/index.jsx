import React from "react";
import { AboutMainStyled, AboutTextAndImageStyle, AboutUsStyle, } from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import aboutContentImage from "../../assets/img/aboutImage.svg";
import emailBoxIcon from "../../assets/img/envelope_font_awesome.svg";
import gitHubIcon from "../../assets/img/github.svg";
import linkednIcon from "../../assets/img/linkedin.svg";
import developerInfos from "./developers.json";

export default function AboutPageContent() {
  const userData = [...developerInfos];
  return (
    <>
      <Header />
      <AboutMainStyled>
        <AboutTextAndImageStyle>
          <div id="titleAndTextContent">
            <h1>Sobre o projeto</h1>
            <p style={{ margin: "0px", color:'#e6e6e6' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor.
            </p>
          </div>
          <div id="aboutImageContent">
            <img src={aboutContentImage} alt="ilustrative image" />
          </div>
        </AboutTextAndImageStyle>
        <AboutUsStyle>
          <h2>Quem somos</h2>
          <div id="itensPositions">
            {userData.map((developersInfoUnit, index) => {
              return (
                <div id="developersDataContent" key={index}>
                  <img
                    id="developersImage"
                    key={index}
                    src={developersInfoUnit.userImage}
                  />
                  <h3 style={{ color: "#72EFDB" , fontWeight:"bold"}}>
                    {developersInfoUnit.UserTitle}
                  </h3>
                  <p style={{color:'#bfbfbf', fontSize:'11px', letterSpacing:'0.23px'}}>
                    {developersInfoUnit.userText}
                  </p>
                  <div id="iconsBoxContent">
                    <img
                      src={gitHubIcon}
                      alt="github icon"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <img
                      src={emailBoxIcon}
                      alt="github icon"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    <img
                      src={linkednIcon}
                      alt="github icon"
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </AboutUsStyle>
      </AboutMainStyled>
      <Footer />
    </>
  );
}
