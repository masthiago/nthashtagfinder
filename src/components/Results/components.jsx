import React from "react";
import { Link } from "react-router-dom";

export class ImageItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      mediaKey: this.props.mediaKey,
      mediaUrl: this.props.mediaUrl,
      name: this.props.name,
      url: this.props.url,
      username: this.props.username,
    };
  }
  render() {
    const mediaUrl = String("https://cors.eu.org/" + this.state.mediaUrl);
    return (
      <li style={{ backgroundImage: `url(${mediaUrl})` }}>
        Postado por <br />
        <a className="imageUser"> @{this.state.username}</a>
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
    const avatar = String("https://cors.eu.org/" + this.state.avatar).replace("_normal", "");
    return (
      <li>
        <img className="userAvatar" src={avatar} alt={this.state.username} />
        <div className="tweetContainer">
          <h4 className="userInfo">
            {this.state.name}  <span className="userName">@{this.state.username}</span>
          </h4>
          <p className="userPost">
            {this.state.text}
          </p>
          <a rel="noreferrer" href={this.state.url} className="userLink" target="_blank">
            Ver mais no Twitter
          </a>
        </div>
      </li>
    );
  }
}
