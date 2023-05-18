import React from 'react';
import { ImageItem, PostItem } from './components';
import { ResultsContainer, ButtonGroup, Tab } from './styled';
import { ThreeDots } from 'react-loader-spinner';
import { doTheMagic, normalizeString } from './twitter';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Results extends React.Component {
  nextToken = null;
  tabTypes = ['Tweets', 'Imagens'];
  tweets = [];
  hashtag = '';

  state = {
    activeTab: this.tabTypes[0],
    hasNext: false,
    hasTweets: false,
    loading: false,
    windowWidth: window.innerWidth,
  };

  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this); // Monitora tamanho do viewport
    this.handleSearchForm = this.handleSearchForm.bind(this); // Monitora formulário de busca
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize); // add event listener for window resize
    document
      .querySelector('.searchBar')
      .addEventListener('submit', this.handleSearchForm); // add event listener for search form submit
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); // remove event listener for window resize
    // TODO: Investigar porque o eventListener abaixo gera erro ao clicar em Login
    // document.querySelector('.searchBar').removeEventListener('submit', this.handleSearchForm); // remove event listener for search form submit
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth }); // Update the state when window is resized
  };

  handleSearchForm = async (event) => {
    event.preventDefault();
    this.tweets = [];
    this.hashtag = event.target.querySelector('.textSearch').value;
    this.setState({ loading: true });
    const data = await doTheMagic(this.hashtag, this.nextToken);
    await this.updateState(data);
    this.setState({ loading: false });
  };

  infiniteLoad = async () => {
    // Colegar dados da API usando dados na state
    const data = await doTheMagic(this.hashtag, this.nextToken);
    await this.updateState(data);
  };

  updateState = async (data) => {
    console.log('updateState', data);
    // Escruturar no state separadamente a partir do retorno de doTheMagic
    this.tweets = this.tweets ? [...this.tweets, ...data.tweets] : data.tweets;
    this.nextToken = data.nextToken;
    this.setState({ hasNext: data.nextToken ? true : false });
    this.tweets.length > 0
      ? this.setState({ hasTweets: true })
      : this.setState({ hasTweets: false });
  };

  showTweets = () => {
    const PostGen = () => {
      let posts = [];
      if (this.tweets) {
        this.tweets.map((post, index) => {
          posts.push(
            <PostItem
              key={'tweet' + post.id + '_' + index}
              avatar={post.user.profile_image_url}
              id={post.id}
              text={post.text}
              name={post.user.name}
              username={post.user.username}
              url={
                'https://twitter.com/' +
                post.user.username +
                '/status/' +
                post.id
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

  showImages = () => {
    const ImgGen = () => {
      let images = [];
      if (this.tweets) {
        this.tweets.map((post, index) => {
          if (post.media && post.media.url) {
            images.push(
              <ImageItem
                key={'image' + post.id + '_' + index}
                id={post.id}
                mediaKey={post.media.media_key}
                mediaUrl={post.media.url}
                name={post.user.name}
                url={
                  'https://twitter.com/' +
                  post.user.username +
                  '/status/' +
                  post.id
                }
                username={post.user.username}
                text={post.text}
              />
            );
          }
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

  displayWithoutTabs = () => {
    const ShowImages = this.showImages;
    const ShowTweets = this.showTweets;
    return (
      <div className='listContainer'>
        <ShowImages />
        <ShowTweets />
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
          ? this.showTweets()
          : this.showImages()}
      </>
    );
  };

  render = () => {
    const DisplayWithoutTabs = this.displayWithoutTabs;
    const DisplayWithTabs = this.displayWithTabs;
    return (
      <ResultsContainer>
        {this.state.hasTweets ? (
          <>
            <h2 className='listTitle'>
              Exibindo os {this.tweets.length} resultados mais recentes para { '#' + normalizeString(this.hashtag)}
            </h2>
            <InfiniteScroll
              dataLength={this.tweets.length} //This is important field to render the next data
              next={this.infiniteLoad}
              hasMore={this.state.hasNext ? true : false}
              loader={<></>}
              endMessage={<></>}
            >
              {this.state.windowWidth > 768 ? (
                <DisplayWithoutTabs />
              ) : (
                <DisplayWithTabs />
              )}
            </InfiniteScroll>
          </>
        ) : (
          <></>
        )}
        {this.state.loading ? (
          <ThreeDots
            height='80'
            width='80'
            radius='9'
            color='#1e3e7b'
            ariaLabel='three-dots-loading'
            visible={this.loading}
          />
        ) : (
          <>
            {this.hashtag && !this.state.hasNext ? (
              <h2 className='listTitle'>Nenhum resultado encontrado.</h2>
            ) : (
              <></>
            )}
          </>
        )}
      </ResultsContainer>
    );
  };
}
