import "../assets/css/modules/PostCard.module.css";

import LikeButton from "./LikeButton";

function PostCard({ title, date, text, image }) {
  return (
    <article className="post-card">
      <div className="post-content">
        <h3 className="post-title">{title}</h3>
        <span className="post-date">{date}</span>
        <p className="post-text">{text}</p>
      <img src={image} alt={title} className="post-image" />
        <LikeButton />
      </div>
    </article>
  );
}

export default PostCard;