function Card (props) {
    const {src, alt, series } = props;

    return (
        <div className="container-card-comics">
            <img className="card" src={src} alt={alt} />
            <h3 className="text-white"> {series.toUpperCase()} </h3>
        </div>
    );
}

export default Card