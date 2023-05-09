import React from "react";

export class ImageItem extends React.Component {
  render() {
    return (
      <li style={{ backgroundImage: `url(${this.props.background})` }}>
        Postado por <br />
        <span className="imageUser"> @twitterusername {this.props.order}</span>
      </li>
    );
  }
}

export class PostItem extends React.Component {
  render() {
    return (
      <li>
        <img className="userAvatar" src={this.props.avatar} alt="" />
        <div className="tweetContainer">
          <h4 className="userInfo">
            UserName {this.props.order}{" "}
            <span className="userName">@twitterusername{this.props.order}</span>{" "}
          </h4>
          <p className="userPost">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam.
            Elit ullamco est magna mollit minim in id sit. Lorem occaecat fugiat
            pariatur elit. Laboris ad consequat do aute sint ut excepteur.
          </p>
          <a href="/" className="userLink">
            Ver mais no Twitter
          </a>
        </div>
      </li>
    );
  }
}
