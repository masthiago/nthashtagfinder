import React, { useEffect, useState } from "react";
import { AboutMainStyled, AboutTextAndImageStyle, AboutUsStyle, LoadScreenStyle, } from "./styled";
import Header from "../Header";
import Footer from "../Footer";
import aboutContentImage from "../../assets/img/aboutImage.svg";
import emailBoxIcon from "../../assets/img/envelope_font_awesome.svg";
import gitHubIcon from "../../assets/img/github.svg";
import linkednIcon from "../../assets/img/linkedin.svg";
import Airtable from "airtable";
import reactSpinLogo from "../../assets/img/giphyreactspin.gif";



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
            return (aboutRecordUnit.get('Sobre'));
          });
          setSiteRecordState(atualizedResults);
        }

      );
  }, []);

  /*
    No requests get acima estamos pegando as informações da plataforma airtable. Utilizamos o airtable.js como 
    framework de apoio. Criamos uma variavel com valor de array vazio no inicio do useeffect para armazenar as informações contidas
    na lista do airtable (pageRecords) e após a pegarmos todas as informações contidas no airtable, a função done
    é chamada para finalizar nosso get. Apos os dados serem armazenados na nossa variavel aboutRecords, depois que a função
    done for finalizada, criamos outra variavel e como valor passamos a nossa variavel inicial (aboutRecords) com um map
    (para pegar as informações que estao dentro da aboutRecords) e por fim, mudamos nosso state inicial com o valor da nossa variavel
    intermediária (atualizedResults), dessa forma, garantimos que o estado inicial sempre vai estar atualizado
    somente apos a função done ser chamada.
  */

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
        }

      );
  }, []);

  /* 
    Neste request temos a mesma situação do primeiro, porem no primeiro só pegamos uma informação do airtable. 
    A diferença desse request é que vamos armazenar varias informações dentro da nossa array, entao temos
    um objeto que recebe todas informações do airtble, depois de armazenar as informações e realizar o map,
    atualizamos nosso state (developerState).
  */


  if (developerState.length <= 0 & siteRecordState.length <= 0) {
    return (
      <>
        <Header />
        <LoadScreenStyle>
          <img src={reactSpinLogo} alt="page loading" style={{ width: '200px', height: '200px' }} />
          <p style={{ fontSize: '30px', marginTop: '30px' }}>
            Carregando...
          </p>
        </LoadScreenStyle>
        <Footer />
        {/*
          Essa condição foi criada para fazer um pequeno load até que as informações
          sejam buscadas do Airtable.
        */}
      </>

    )
  };
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
            {/* Mapeamos nosso primeiro state para mostrar as informações sobre nosso projeto */}
          </div>
          <div id="aboutImageContent">
            <img src={aboutContentImage} alt='ilustrative developer' />
          </div>
        </AboutTextAndImageStyle>
        <AboutUsStyle>
          <h2>Quem somos</h2>
          <div id="itensPositions">
            {developerState.map((developerStateUnit, index) => {
              return (
                <div id="developersDataContent" key={index}>
                  <img
                    id="developersImage"
                    alt='developers'
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
                    <a href={`mailto:${developerStateUnit.email}`}>
                      <img
                        src={emailBoxIcon}
                        alt="email icon"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </a>
                    <a href={developerStateUnit.linkedin}>
                      <img
                        src={linkednIcon}
                        alt="linkedin icon"
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />
                    </a>
                    {/* Mapeamos nosso segundo state para mostrar as informações sobre os desenvolvedores
                    que trabalharam no projeto */}
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
