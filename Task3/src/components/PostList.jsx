import RenderList from "./RenderList";
import PostCard from "./PostCard";
import "../assets/css/modules/PostList.module.css";


function PostList({ posts, className = "post-card" }) {
  return (
    <RenderList items={posts} renderItem={PostCard} className={className} />
  );
}
export default PostList;
