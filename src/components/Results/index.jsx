import React from 'react';
import { ImageItem, PostItem } from './components';
import { ResultsContainer, ButtonGroup, Tab } from './styled';
import { ThreeDots } from 'react-loader-spinner';
import { doTheMagic } from './twitter';


export default class Results extends React.Component {
  tabTypes = ['Tweets', 'Imagens'];
  
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.tabTypes[0],
      data: null,
      loding: false,
      windowWidth: window.innerWidth,
      error: null,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleSearchForm = this.handleSearchForm.bind(this);
  }

  async componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.querySelector('.searchBar').addEventListener('submit', this.handleSearchForm);
  }
  componentWillUnmount() {
    window.addEventListener('resize', null);
    document.querySelector('form.searchBar').addEventListener('submit', null);
  }

  handleResize = () => {
    // Update the state with the new window size
    this.setState({ windowWidth: window.innerWidth });
  };

  handleSearchForm = async (event) => {
    event.preventDefault();
    const hashtag = event.target.querySelector('.textSearch').value
    this.setState({ error: null, data: null, loding: true });
    const data = await doTheMagic(hashtag);
    this.setState({ data: data, loding: false  });
    if (data.error) this.setState({ error: data.error });
  }

  twitterImages = () => {
    // Random image generator
    // This will be removed when API is implemented
    const ImgGen = () => {
      let images = [];

      if (this.state.data) {
        this.state.data.images.map((post) => {
          images.push(
            <ImageItem
              key={'image' + post.tweet.id}
              id={post.tweet.id}
              mediaKey={post.media.media_key}
              mediaUrl={post.media.url}
              name={post.user.name}
              url={
                'https://twitter.com/' +
                post.user.username +
                '/status/' +
                post.tweet.id
              }
              username={post.user.username}
            />
          );
        });
      }
      return images;
    };

    return (
      <ul className='listImages'>
        <ImgGen />
      </ul>
    );
  };

  twitterPosts = () => {
    // Formatter for tweets
    const PostGen = () => {
      let posts = [];

      if (this.state.data) {
        this.state.data.tweets.map((post) => {
          posts.push(
            <PostItem
              key={'tweet' + post.tweet.id}
              avatar={post.user.profile_image_url}
              id={post.tweet.id}
              text={post.tweet.text}
              name={post.user.name}
              username={post.user.username}
              url={
                'https://twitter.com/' +
                post.user.username +
                '/status/' +
                post.tweet.id
              }
            />
          );
        });
      }
      return posts;
    };

    return (
      <ul className='listPost'>
        <PostGen />
      </ul>
    );
  };

  search = async (term) => {
    this.setState({ error: null, data: null, loding: true });
    const data = await doTheMagic(term);
    this.setState({ data: data });
    this.setState({ loding: false });
    if (data.error) this.setState({ error: data.error });
  };

  displayWithoutTabs = () => {
    const TwitterImages = this.twitterImages;
    const TwitterPosts = this.twitterPosts;
    return (
      <div className='listContainer'>
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

        {this.state.activeTab === 'Tweets'
          ? this.twitterPosts()
          : this.twitterImages()}
      </>
    );
  };

  render() {
    const DisplayWithoutTabs = this.displayWithoutTabs;
    const DisplayWithTabs = this.displayWithTabs;
    return (
      <>
        {/* <ResultsContainer>
          <form onSubmit={this.search}>
            <input
              type='text'
              name='hashtag'
              id='hashtag'
              style={{ color: '#000' }}
            />
            <button type='submit' style={{ color: '#000' }}>
              Search
            </button>
          </form>
        </ResultsContainer> */}
        {this.state.data || this.state.loding ? (
          <>
            <ResultsContainer>
              {this.state.loding ? (
                <ThreeDots
                  height='80'
                  width='80'
                  radius='1'
                  color='#797abb'
                  ariaLabel='three-dots-loading'
                  wrapperStyle={{}}
                  wrapperClassName=''
                  visible={true}
                />
              ) : (
                <>
                  <h2 className='listTitle'>
                    Exibindo os <span className='tagCount'>
                      {this.state.data ? this.state.data.tweets.length : 0}
                    </span> resultados mais recentes para #
                    <span className='tagName'>
                      {this.state.data ? this.state.data.hashtag : ''}
                    </span>
                  </h2>
                  {this.state.windowWidth > 1024 ? (
                    <DisplayWithoutTabs />
                  ) : (
                    <DisplayWithTabs />
                  )}
                </>
              )}
            </ResultsContainer>
          </>
        ) : (
          <ResultsContainer />
        )}
      </>
    );
  }
}
