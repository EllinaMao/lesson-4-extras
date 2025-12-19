import RenderList from "./RenderList";
import PostCard from "./PostCard";
import styles from "../assets/css/modules/PostList.module.css";

function PostList({ posts }) {
  return (
    <div className={styles["wrapper"]}> 
      <RenderList 
        items={posts} 
        renderItem={PostCard} 
        listClassName={styles["feed-container"]} 
        itemClassName={styles["feed-item"]}
      />
    </div>
  );
}

export default PostList;