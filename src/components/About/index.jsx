import React, { useEffect, useState } from "react";
import { AboutMainStyled, AboutTextAndImageStyle, AboutUsStyle, } from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import aboutContentImage from "../../assets/img/aboutImage.svg";
import emailBoxIcon from "../../assets/img/envelope_font_awesome.svg";
import gitHubIcon from "../../assets/img/github.svg";
import linkednIcon from "../../assets/img/linkedin.svg";
import Airtable from "airtable";

export default function AboutPageContent() {
  
  const [siteRecordState, setSiteRecordState] = useState([]);
  useEffect(() => {
    let aboutRecords = [];
    let base = new Airtable({ apiKey: 'keykXHtsEPprqdSBF' }).base('app6wQWfM6eJngkD4');
    let squadId = '05-23';

    base('Projeto')
      .select({
        filterByFormula: `Squad = '${squadId}'`,
        view: 'Grid view'
      })
      .eachPage(
        function page(pageRecords, fetchNextPage) {
          aboutRecords.push(...pageRecords);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          let atualizedResults = aboutRecords.map((aboutRecordUnit) => {
            /*  console.log('Retrieved', aboutRecordUnit.get('Sobre')); */
            return (aboutRecordUnit.get('Sobre'));
          });
          setSiteRecordState(atualizedResults);
        }

      );
    /*  console.log(siteRecordState) */
  }, []);


  const [developerState, setDeveloperState] = useState([]);


  useEffect(() => {
    let developersRecords = [];
    let base = new Airtable({ apiKey: 'keykXHtsEPprqdSBF' }).base('app6wQWfM6eJngkD4');
    let squadId = '05-23';

    base('Equipe')
      .select({
        filterByFormula: `Squad = '${squadId}'`,
        view: 'Grid s8'
      })
      .eachPage(
        function page(pageRecords, fetchNextPage) {
          developersRecords.push(...pageRecords);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          let developersRecordsMapStorage = developersRecords.map((developersRecordsUnit) => {
            /*  console.log('Retorno dos dados developers',developersRecordsUnit.get('Nome', 'Descrição', 'Github', 'Email', 'Linkedin', 'Imagem')) */
            /*  console.log('Retrieved', aboutRecordUnit.get('Sobre')); */
            return {
              name: developersRecordsUnit.get('Nome'),
              description: developersRecordsUnit.get('Descrição'),
              github: developersRecordsUnit.get('Github'),
              email: developersRecordsUnit.get('Email'),
              linkedin: developersRecordsUnit.get('LinkedIn'),
              imageUrl: developersRecordsUnit.get('Imagem')[0].url
            };
          });
          setDeveloperState(developersRecordsMapStorage);
          /*  console.log(developerState, 'estado dev nova função') */
        }

      );
    /*  console.log(siteRecordState) */
  }, []);

  useEffect(() => { console.log(developerState, 'estado atualizado dev') }, [developerState])


  /*
  
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keykXHtsEPprqdSBF'}).base('app6wQWfM6eJngkD4');
        
        base('Projeto').select({
            // Selecting the first 3 records in Grid view:
            
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
        
            records.forEach(function(record) {
                console.log('Retrieved', record.get('Squad'));
            });
        
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
        
   */
  return (
    <>

      <Header />
      <AboutMainStyled>
        <AboutTextAndImageStyle>
          <div id="titleAndTextContent">
            <h1>Sobre o projeto</h1>

            {siteRecordState.map((siteRecordStateUnit, index) => {
              return <p key={index} style={{ wordWrap: 'break-word', width: '100%' }}>{siteRecordStateUnit}</p>
            })}


          </div>
          <div id="aboutImageContent">
            <img src={aboutContentImage} alt='ilustrative developer' />
          </div>
        </AboutTextAndImageStyle>
        <AboutUsStyle>
          <h2>Quem somos</h2>
          <div id="itensPositions">
            {/* {userData.map((developersInfoUnit, index) => {
              return (
                <div id="developersDataContent" key={index}>
                  <img
                    id="developersImage"
                    key={index}
                    src={developersInfoUnit.userImage}
                  />
                  <h3>
                    {developersInfoUnit.UserTitle}
                  </h3>
                  <p>
                    {developersInfoUnit.userText}
                  </p>
                  <div id="iconsBoxContent">
                    <img
                      src={gitHubIcon}
                      alt="github icon"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    <img
                      src={emailBoxIcon}
                      alt="github icon"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    />
                    <img
                      src={linkednIcon}
                      alt="github icon"
                      style={{
                        width: "25px",
                        height: "25px",
                      }}
                    /> */}
            {developerState.map((developerStateUnit, index) => {
              return (
                <div id="developersDataContent" key={index}>
                  <img
                    id="developersImage"
                    key={index}
                    src={developerStateUnit.imageUrl}
                  />
                  <h3>
                    {developerStateUnit.name}
                  </h3>
                  <p>
                    {developerStateUnit.description}
                  </p>
                  <div id="iconsBoxContent">
                    <a href={developerStateUnit.github}>
                      <img
                        src={gitHubIcon}
                        alt="github icon"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </a>
                    <a href={`mailto:${developerStateUnit.email}`} /* style={{}} */>
                      <img
                        src={emailBoxIcon}
                        alt="github icon"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </a>
                    <a href={developerStateUnit.linkedin}>
                      <img
                        src={linkednIcon}
                        alt="github icon"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </a>
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
