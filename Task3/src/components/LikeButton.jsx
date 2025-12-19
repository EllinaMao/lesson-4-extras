import React from "react";
import "../assets/css/modules/LikeButton.module.css";
class LikeButton extends React.Component {
  state = { liked: false };

  handleClick = () => {
    this.setState((prevState) => ({ liked: !prevState.liked }));
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        className={this.state.liked ? "liked" : "not-liked"}
      >
        {this.state.liked ? "🤍" : "❤️"}
      </button>
    );
  }
}

export default LikeButton;