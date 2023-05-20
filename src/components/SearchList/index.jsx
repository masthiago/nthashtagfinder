import React, { useContext, useEffect, useState } from 'react';
import {
  Background,
  Wrapper,
  Container,
  Title,
  List,
  HeadList,
  HeadListItems,
  ItemHashtag,
  Item,
  Items,
  TextList,
  TextHashtag,
  Texts,
  Text,
} from './style';
import Header from '../Header';
import { AuthContext } from '../../Hook/AuthContext';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const squadId = '05-23';

const options = {
  method: 'GET',
  url: 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas',
  params: {
    // view: 'Grid view',
    filterByFormula: `Squad='${squadId}'`,
    sort: [{ field: 'Data', direction: 'desc' }],
    pageSize: 10,
    offset: null, // Inicia com offset null, mas é qualizado quando for retornado algum
  },
  headers: {
    Authorization: 'Bearer keykXHtsEPprqdSBF',
  },
};

const SearchList = () => {
  // Verificando login da caso não logado direcionar para tela de login
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn === false) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  // Outras funções

  // Função chama a que realiza a carga de dados e atualiza o loading
  const next = async () => {
    console.log('next', options.params.offset);
    setLoading(true);
    await getData();
    setLoading(false);
  };

  // Faz efetivamente a coleta de dados e adiciona um array de React Components
  const getData = async () => {
    let tmpHashtags = [];
    console.log('getData.azios - inicio', options.params.offset);

    axios
      .request(options)
      .then((response) => {
        console.log('getData.azios', options.params.offset);
        // Se for retornando um chave offset
        // if (response.data.offset) {
        options.params.offset = response.data.offset || null; // Atualiza o parâmetro offset para a próxima requisição
        setOffset(response.data.offset || null); // Atualiza o estado offset, mas não vi uso ainda
        // } // Se eles vierem na requisição como null, serão armazenados também, signicando o fim da lista (não precisa do else)

        response.data.records.forEach((record) => {
          const date = new Date(record.fields.Data);

          tmpHashtags.push(
            // Array de React Components precisa que seus elemntos tenham uma chave única (key)
            <TextList key={record.id + new Date().toISOString()}>
              <TextHashtag>{record.fields.Hashtag}</TextHashtag>

              <Texts>
                <Text>{date.toLocaleDateString('pt-BR')}</Text>
                <Text>{date.toLocaleTimeString('pt-BR').slice(0, -3)}</Text>
              </Texts>
            </TextList>
          );
        });

        // Se já tiver hashtags, concatena com as novas, senão, só adiciona a primeira vez
        hashtags
          ? setHashtags([...hashtags, ...tmpHashtags])
          : setHashtags(tmpHashtags);

        // console.log('axios', tmpHashtags, response.data.offset, hashtags);

        console.log('getData.azios - fim', options.params.offset);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // States
  const [offset, setOffset] = useState(null); // Estado para armazenar o offset com o valor para abrir próxima página na requisição

  const [hashtags, setHashtags] = useState([]); // Array de React Components para armazenar os dados retornados da requisição

  const [loading, setLoading] = useState(false); // Estado para armazenar o status do loading

  // UseEffects
  useEffect(() => {
    // Fazer a primeira carga de dados
    next();

    return () => {
      options.params.offset = null;
      setOffset(null);
    };
  }, []);

  return (
    <>
      <Background />
      <Header />
      <Wrapper>
        <Container>
          <Title>Buscas realizadas</Title>

          {/* Se loadding == true exiba "Carregando..."  */}
          {loading ? <p>Carregando...</p> : <></>}

          <List>
            <HeadList>
              <HeadListItems>
                <ItemHashtag>Hashtag</ItemHashtag>
                <Items>
                  <Item>Data</Item>
                  <Item>Hora</Item>
                </Items>
              </HeadListItems>
            </HeadList>

            {/* Uma Array de React Compononents não precisa de .map() */}
            <InfiniteScroll
              dataLength={hashtags.length} //This is important field to render the next data
              next={next}
              hasMore={offset ? true : false}
              loader={<>Carregando</>}
              endMessage={<>Fim</>}
            >
              {hashtags}
            </InfiniteScroll>
          </List>
        </Container>
      </Wrapper>
    </>
  );

  // var listing = [
  //   {
  //     hashtag: '#hashtagname',
  //     data: 'xx/xx',
  //     hora: 'xx:xx',
  //   },
  // ];

  // //substituir mais tarde
  // var n = 0;

  // while (n < 6) {
  //   n++;
  //   listing.push({
  //     hashtag: '#hashtagname',
  //     data: 'xx/xx',
  //     hora: 'xx:xx',
  //   });
  // }
  // /* ------------------ */

  //   return (
  //     <>
  //       <Background />
  //       <Header />
  //       <Wrapper>
  //         <Container>
  //           <Title>Buscas realizadas</Title>
  //           <List>
  //             <HeadList>
  //               <HeadListItems>
  //                 <ItemHashtag>Hashtag</ItemHashtag>
  //                 <Items>
  //                   <Item>Data</Item>
  //                   <Item>Hora</Item>
  //                 </Items>
  //               </HeadListItems>
  //             </HeadList>
  //             <>
  //               {/* Colocar em um array de Ract Components */}
  //               <TextList>
  //                 <TextHashtag>{'variavel com hashtag'}</TextHashtag>
  //                 <Texts>
  //                   <Text>{'variavel com data'}</Text>
  //                   <Text>{'variavel com hora'}</Text>
  //                 </Texts>
  //               </TextList>
  //             </>
  //           </List>
  //         </Container>
  //       </Wrapper>
  //     </>
  //   );
  // };
};

export default SearchList;
