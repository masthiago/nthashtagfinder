import React, { Fragment } from "react";
import {
  ButtonGroup,
  ResultImage,
  ResultPost,
  ResultsContainer,
  ResultsDynamicContainer,
  ResultsHeader,
  ResultsImageContainer,
  ResultsPostContainer,
  Tab,
} from "./styled";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.types[0],
      size: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  types = ["Tweets", "Imagens"];

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }

  handleResize = (size, event) => {
    this.setState({ size: window.innerWidth });
  };

  DisplayWithTabs = () => {
    return this.TabGroup();
  };

  DisplayWithoutTabs = () => {
    return <Fragment>DisplayWithoutTabs</Fragment>;
  };

  TwitterImages = () => {
    return (
      <ResultsImageContainer>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
        <ResultImage>&nbsp;</ResultImage>
      </ResultsImageContainer>
    );
  };

  TwitterPosts = () => {
    return (
      <ResultsPostContainer>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
        <ResultPost>&nbsp;</ResultPost>
      </ResultsPostContainer>
    );
  };

  TabGroup = () => {
    return (
      <>
        <ButtonGroup>
          {this.types.map((type) => (
            <Tab
              key={type}
              active={this.state.active === type}
              onClick={() => this.setState({ active: type })}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>

        {this.state.active === "Tweets"
          ? this.TwitterPosts()
          : this.TwitterImages()}
      </>
    );
  };

  render() {
    const DisplayWithTabs = this.DisplayWithTabs;
    const DisplayWithoutTabs = this.DisplayWithoutTabs;
    return (
      <ResultsContainer>
        <ResultsHeader>
          Exibindo os 10 resultados mais recentes para #natureza
        </ResultsHeader>

        <ResultsDynamicContainer>
          {this.state.size > 1024 ? (
            <DisplayWithoutTabs />
          ) : (
            <DisplayWithTabs />
          )}
        </ResultsDynamicContainer>
      </ResultsContainer>
    );
  }
}
