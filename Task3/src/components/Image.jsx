import styles from "../assets/css/modules/Image.module.css";

function Image({ src = "/vite.svg", alt = "", styleName = "avatar" }) {
  const myStyle = styles[styleName];

  return <img className={myStyle} src={src} alt={alt} />;
}

export default Image;
