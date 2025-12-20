function Image({ src, alt, className = "image" }) {
    return (
        <img className={className} src={src} alt={alt} />
    );
}
export default Image;