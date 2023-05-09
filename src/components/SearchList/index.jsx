import React from "react";
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
  Text
} from "./style";
import Header from "../Header";
import Footer from '../Footer'

const SearchList = () => {
  var listing = [
    {
      hashtag: "#hashtagname",
      data: "xx/xx",
      hora: "xx:xx"
    }
  ];

  //substituir mais tarde
  var n = 0;

  while (n < 6) {
    n++;
    listing.push({
      hashtag: "#hashtagname",
      data: "xx/xx",
      hora: "xx:xx"
    });
  }
  /* ------------------ */

  /*  const listingMap = listing.map((number) => <li>{number}</li>); */
  return (
    <>
      <Background />
      <Header />
      <Wrapper>
        <Container>
          <Title>Buscas realizadas</Title>
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

            <>
              {/* List */}
              {listing.map((textList) => (
                <TextList>
                  <TextHashtag>{textList.hashtag}</TextHashtag>
                  <Texts>
                    <Text>{textList.data}</Text>
                    <Text>{textList.hora}</Text>
                  </Texts>
                </TextList>
              ))}
            </>
          </List>
        </Container>
      </Wrapper>
      <Footer /> 
    </>
  );
};

export default SearchList;