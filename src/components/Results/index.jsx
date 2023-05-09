import React from "react";
import { ImageItem, PostItem } from "./components";
import { ResultsContainer, ButtonGroup, Tab } from "./styled";

export default class Results extends React.Component {
  tabTypes = ["Tweets", "Imagens"];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.tabTypes[0],
      windowWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }

  handleResize = () => {
    // Update the state with the new window size
    this.setState({ windowWidth: window.innerWidth });
  };

  twitterImages = () => {
    // Random image generator
    // This will be removed when API is implemented
    const ImgGen = () => {
      let images = [];
      for (let i = 0; i < 10; i++) {
        images.push(
          <ImageItem
            key={"image" + (i + 1)}
            background={`https://loremflickr.com/720/720/`}
          />
        );
      }
      return images;
    };

    return (
      <ul className="listImages">
        <ImgGen />
      </ul>
    );
  };
  // };

  twitterPosts = () => {
    // Random post generator
    // This will be removed when API is implemented
    const PostGen = () => {
      let posts = [];
      for (let i = 0; i < 10; i++) {
        posts.push(
          <PostItem
            key={"post" + (i + 1)}
            avatar={"https://loremflickr.com/720/720/face/"}
            order={i + 1}
          />
        );
      }
      return posts;
    };

    return (
      <ul className="listPost">
        <PostGen />
      </ul>
    );
  };

  displayWithoutTabs = () => {
    const TwitterImages = this.twitterImages;
    const TwitterPosts = this.twitterPosts;
    return (
      <div className="listContainer">
        <TwitterImages />
        <TwitterPosts />
      </div>
    );
  };

  displayWithTabs = () => {
    // Check which tab is active and displays the corresponding
    // content according to {state.activeTab}
    return (
      <>
        <ButtonGroup>
          {this.tabTypes.map((type) => (
            <Tab
              key={type}
              active={this.state.activeTab === type}
              onClick={() => this.setState({ activeTab: type })}
            >
              {type}
            </Tab>
          ))}
        </ButtonGroup>

        {this.state.activeTab === "Tweets"
          ? this.twitterPosts()
          : this.twitterImages()}
      </>
    );
  };

  render() {
    const DisplayWithoutTabs = this.displayWithoutTabs;
    const DisplayWithTabs = this.displayWithTabs;
    return (
      <ResultsContainer>
        <h2 className="listTitle">
          Exibindo os <span className="tagCount">10</span> resultados mais
          recentes para #<span className="tagName">natureza</span>
        </h2>
        {/* <div className="listContainer"> */}
        {this.state.windowWidth > 1024 ? (
          <DisplayWithoutTabs />
        ) : (
          <DisplayWithTabs />
        )}
        {/* </div> */}
      </ResultsContainer>
    );
  }
}
