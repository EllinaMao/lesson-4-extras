import "../../assets/css/Image.css";

function Image(props) {
  const { src, alt} = props;
  return <img className="clubImage" src={src} alt={alt}/>;
}

export default Image;