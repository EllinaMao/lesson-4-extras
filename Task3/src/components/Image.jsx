import "../assets/css/Image.css";

function Image({ src = "/vite.svg", alt = "", styles = "image" }) {

  return <img className={styles} src={src} alt={alt}/>;
}

export default Image;