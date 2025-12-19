import style from "../assets/css/modules/PostCard.module.css"; 
import Image from "./Image";
import LikeButton from "./LikeButton";

function PostCard({ title, date, text, image }) {
  return (
    <article className={style["post-card"]}>
      <div className={style["post-content"]}>
        

            
        <h3 className={style["post-title"]}>{title}</h3>
        <span className={style["post-date"]}>{date}</span>
        <p className={style["post-text"]}>{text}</p>
        
        <Image src={image} alt={title} styleName="postImage" />
        
        <LikeButton />
      </div>
    </article>
  );
}

export default PostCard;