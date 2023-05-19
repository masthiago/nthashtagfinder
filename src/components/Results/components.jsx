import React from 'react';
import ReactMomdal from 'react-modal';
import { ModalContainer } from './styled';

ReactMomdal.setAppElement('#root');

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000ca',
    overflow: 'none',
  },
  content: {
    position: 'absolute',
    top: '25px',
    left: '25px',
    right: '25px',
    bottom: '25px',
    border: '0',
    background: '#000000ca',
    overflow: 'none',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    padding: '0',
  },
};

export class ImageItem extends React.Component {
  state = {
    id: this.props.id,
    mediaKey: this.props.mediaKey,
    mediaUrl: this.props.mediaUrl,
    modalIsOpen: false,
    name: this.props.name,
    text: this.props.text,
    url: this.props.url,
    username: this.props.username,
  };

  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  };

  closeModal = (event) => {
    event.stopPropagation(); // Sem isso não fecha
    this.setState({ modalIsOpen: false });
  };

  render() {
    const mediaUrl = `${process.env.REACT_APP_CORS_URL}` + this.state.mediaUrl;
    return (
      <li
        style={{ backgroundImage: `url(${mediaUrl})`, cursor: 'pointer' }}
        onClick={this.openModal}
      >
        Postado por <br />
        <a
          rel='noreferrer'
          href={this.state.url}
          target='_blank'
          className='imageUser'
        >
          {' '}
          @{this.state.username}
        </a>
        <ReactMomdal
          key={'modal' + this.state.id + '_' + this.state.mediaKey}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyle}
          contentLabel={this.state.text}
          shouldCloseOnOverlayClick={true}
        >
          <ModalContainer style={{ backgroundImage: `url(${mediaUrl}` }}>
            <div className='modalHeader'>
              <p className='modalUser'>@{this.state.username}</p>
              <button className='modalClose' onClick={this.closeModal}>
                X
              </button>
            </div>
            <div className='modalFooter'>{this.state.text}</div>
          </ModalContainer>
        </ReactMomdal>
      </li>
    );
  }
}

export class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.avatar,
      id: this.props.id,
      text: this.props.text,
      username: this.props.username,
      name: this.props.name,
      url: this.props.url,
    };
  }
  render() {
    const avatar =
      `${process.env.REACT_APP_CORS_URL}` +
      this.state.avatar.replace('_normal', '');
    return (
      <li>
        <img className='userAvatar' src={avatar} alt={this.state.username} />
        <div className='tweetContainer'>
          <h4 className='userInfo'>
            {this.state.name}{' '}
            <span className='userName'>@{this.state.username}</span>
          </h4>
          <p className='userPost'>{this.state.text}</p>
          <a
            rel='noreferrer'
            href={this.state.url}
            className='userLink'
            target='_blank'
          >
            Ver mais no Twitter
          </a>
        </div>
      </li>
    );
  }
}
