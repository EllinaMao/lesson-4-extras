import Image from "./Image";
import "../assets/css/modules/UserProfile.module.css";
function UserProfile({
  name,
  avatar,
  description
}) {
    
  return (
    <div className="user-profile">
      <Image src={avatar} alt={`${name} avatar`} styles="user-avatar" />
      <h2 className="user-name">{name}</h2>
      <p className="user-description">{description}</p>
    </div>
  );
}

export default UserProfile;
