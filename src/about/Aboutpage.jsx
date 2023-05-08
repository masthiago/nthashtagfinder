import React from "react";
import { AboutMainStyled, AboutTextAndImageStyle, AboutUsStyle } from "./AboutpageStyle";
import developerInfos from "./developers.json";
import aboutContentImage from "../about/imagesSvg/aboutImage.svg"
import gitHubIcon from "../about/imagesSvg/github.svg"
import emailBoxIcon from "../about/imagesSvg/envelope_font_awesome.svg"
import linkednIcon from "../about/imagesSvg/linkedin.svg"
import Header from "../components/Header/indexHeader";
import Footer from "../components/Footer/indexFooter";


export default function AboutPageContent() {
    const userData = [...developerInfos];
    return (
        <> 
        <Header /> 
        <AboutMainStyled>
           {/*  <div style={{height:'100%',display:'flex',justifyContent:"center"}}> */}
                <AboutTextAndImageStyle>
                    <div id="titleAndTextContent">
                        <h1 >Sobre o projeto</h1>
                        <p style={{ margin: "0px" }}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        </p>
                    </div>
                    <div id="aboutImageContent">
                        <img src={aboutContentImage} alt="ilustrative image" />
                    </div>
                </AboutTextAndImageStyle>
                <AboutUsStyle>
                    <h2 >Quem somos</h2>
                    <div id="itensPositions">
                        {userData.map((developersInfoUnit, index) => {
                            return (
                                <div id="developersDataContent" key={index}>
                                    <img id="developersImage" key={index} src={developersInfoUnit.userImage} />
                                    <h3 style={{ color: '#72EFDB' }}>{developersInfoUnit.UserTitle}</h3>
                                    <p /* style={{backgroundColor:"gray", textAlign:"center"}} */>{developersInfoUnit.userText}</p>
                                    <div id="iconsBoxContent">
                                        <img src={gitHubIcon} alt="github icon" style={{ width: "20px", height: "20px"/* , backgroundColor: "red" */ }} />
                                        <img src={emailBoxIcon} alt="github icon" style={{ width: "20px", height: "20px"/* , backgroundColor: "red"  */ }} />
                                        <img src={linkednIcon} alt="github icon" style={{ width: "20px", height: "20px"/* , backgroundColor: "red"  */ }} />

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </AboutUsStyle>
            {/* </div> */}
        </AboutMainStyled>
        <Footer /> 
        </>

    )
};


