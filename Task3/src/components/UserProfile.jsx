import Image from "./Image";
import styles from "../assets/css/modules/UserProfile.module.css";

function UserProfile({ name, avatar, description }) {
  return (
    <div className={styles["user-profile"]}>
      {/*Аватар */}
      <div className={styles["avatar-wrapper"]}>
        <Image src={avatar} alt={`${name} avatar`} styleName="avatar" />
      </div>

      {/*Вся информация */}
      <div className={styles["profile-info"]}>
        <div className={styles["header-row"]}>
          <h2 className={styles["user-name"]}>{name}</h2>
        </div>

        {/*блок статистики */}
        <div className={styles["bio"]}>
          <p className={styles["user-description"]}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
