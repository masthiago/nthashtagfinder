import React from 'react';
import { ImageItem, PostItem } from './components';
import { ResultsContainer, ButtonGroup, Tab } from './styled';
import { ThreeDots } from 'react-loader-spinner';
// import { doTheMagic } from './twitter';
import { doTheMagic } from './twitter2';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class Results extends React.Component {
  tabTypes = ['Tweets', 'Imagens'];
  
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.tabTypes[0],
      data: null,
      error: null,
      loding: false,
      windowWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
    this.handleSearchForm = this.handleSearchForm.bind(this);
  }

  async componentDidMount() {
    window.addEventListener('resize', this.handleResize); // add event listener for window resize
    document.querySelector('.searchBar')
      .addEventListener('submit', this.handleSearchForm); // add event listener for search form submit
  }

  componentWillUnmount() {
    window.addEventListener('resize', null);  // remove event listener for window resize
    document.querySelector('form.searchBar')
      .addEventListener('submit', null);      // remove event listener for search form submit
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth }); // Update the state when window is resized
  };

  handleSearchForm = async (event) => {
    event.preventDefault();
    const hashtag = event.target.querySelector('.textSearch').value
    this.setState({ error: null, data: null, loding: true });
    
    const data = await doTheMagic(hashtag, this.state.data?this.state.data.nextToken:null);
    console.log(data);
    this.setState({ data: data, loding: false  });
    if (data.error) this.setState({ error: data.error });
  }

  twitterImages = () => {
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

  // Formatter for tweets
  twitterPosts = () => {
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
                    Exibindo os{' '}
                    <span className='tagCount'>
                      {this.state.data ? this.state.data.tweets.length : 0}
                    </span>{' '}
                    resultados mais recentes para #
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

        {/* <InfiniteScroll
          dataLength={this.state.data.tweets.length} //This is important field to render the next data
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={this.refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >
          {items}
        </InfiniteScroll> */}

      </>
    );
  }
}
