import React from "react";
import styles from "../assets/css/modules/LikeButton.module.css";


class LikeButton extends React.Component {
  state = { liked: false };

  handleClick = () => {
    this.setState((prevState) => ({ liked: !prevState.liked }));
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        className={this.state.liked ? styles.liked : styles.notLiked}
      >
        ♥
      </button>
    );
  }
}

export default LikeButton;