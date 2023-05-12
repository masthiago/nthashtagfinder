import React, { useEffect, useState } from "react";
import { AboutMainStyled, AboutTextAndImageStyle, AboutUsStyle, } from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import aboutContentImage from "../../assets/img/aboutImage.svg";
import emailBoxIcon from "../../assets/img/envelope_font_awesome.svg";
import gitHubIcon from "../../assets/img/github.svg";
import linkednIcon from "../../assets/img/linkedin.svg";
import developerInfos from "./developers.json";
import Airtable from "airtable";

export default function AboutPageContent() {
  const userData = [...developerInfos];

  const [siteRecordState, setSiteRecordState] = useState([]);
  useEffect(() => {
    let records = [];
    var base = new Airtable({ apiKey: 'keykXHtsEPprqdSBF' }).base('app6wQWfM6eJngkD4');
    var squadId = '05-23';

    base('Projeto')
      .select({
        filterByFormula: `Squad = '${squadId}'`,
        view: 'Grid view'
      })
      .eachPage(
        function page(pageRecords, fetchNextPage) {
           records.push(...pageRecords);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
          const atualizedResults = records.map(function (record) {
            console.log('Retrieved', record.get('Sobre'));
            return (record.get('Sobre'));
          });
          setSiteRecordState(atualizedResults);
        }

      );
    console.log(siteRecordState)
  }, [])

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
              <p>
                {siteRecordState.map((siteRecordStateUnit,index)=>{
                return <p key={index} style={{ wordWrap: 'break-word', width:'100%' }}>{siteRecordStateUnit}</p>
              })}
              </p>
              
          </div>
          <div id="aboutImageContent">
            <img src={aboutContentImage} alt='ilustrative developer' />
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
