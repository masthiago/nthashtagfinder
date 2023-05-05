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
} from "./styled"; // Styled components

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

  handleResize = () => {
    // Update the state with the new window size
    this.setState({ size: window.innerWidth });
  };

  displayWithTabs = () => {
    // Use the TabGroup component to display the results
    // TODO Revise this function and TabGroup to reduce code
    return this.TabGroup();
  };

  displayWithoutTabs = () => {
    const TwitterImages = this.TwitterImages;
    const TwitterPosts = this.TwitterPosts;
    return (
      <>
        <TwitterImages />
        <TwitterPosts />
      </>
    );
  };

  TwitterImages = () => {
    // Random image generator
    // This will be removed when API is implemented
    const ImgGen = () => {
      let tags = [];
      for (let i = 0; i < 10; i++) {
        tags.push(
          <ResultImage
            key={"image" + (i + 1)}
            background={`https://loremflickr.com/720/720/`}
          >
            <p>
              <small>Publicado por:</small>
            </p>
            <p>
              <b>@twitterusername</b>
            </p>
          </ResultImage>
        );
      }
      return tags;
    };

    return (
      <ResultsImageContainer>
        <ImgGen />
      </ResultsImageContainer>
    );
  };

  TwitterPosts = () => {
    // Random post generator
    // This will be removed when API is implemented
    const PostGen = () => {
      let tags = [];
      for (let i = 0; i < 10; i++) {
        tags.push(
          <ResultPost key={"post" + (i + 1)}>
            <div>
              <img
                alt=""
                src="https://loremflickr.com/360/360/face/"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "100%",
                }}
              />
            </div>
            <div>
              <p>
                <strong>UserName </strong>
                <small> @username</small>
              </p>
              <p>
                Laborum ut nostrud voluptate reprehenderit id ullamco nisi non
                aliquip ad et.
              </p>
              <br />
              <p
                style={{
                  color: "#72efdb",
                  fontWeight: "bold",
                }}
              >
                Ver mais no twitter
              </p>
            </div>
          </ResultPost>
        );
      }
      return tags;
    };

    return (
      <ResultsPostContainer>
        <PostGen />
      </ResultsPostContainer>
    );
  };

  TabGroup = () => {
    // Check which tab is active and displays the corresponding
    // content according to the {state.active}
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
    // The methods this.displayWithTabs and this.displayWithoutTabs return React components,
    // but to be called they need to start with capital letters, so here they
    // are referenced as the constants DisplayWithTabs and DisplayWithoutTabs for that purpose.
    const DisplayWithTabs = this.displayWithTabs;
    const DisplayWithoutTabs = this.displayWithoutTabs;

    return (
      <ResultsContainer>
        <ResultsHeader>
          Exibindo os 10 resultados mais recentes para #natureza
        </ResultsHeader>

        <ResultsDynamicContainer>
          {/* 
            Alternates between display forms with or without tabs 
            depending on the size of the screen. 
          */}
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
