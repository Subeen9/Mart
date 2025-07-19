import "./Customcard.css";

interface CardProps{
    image: string,
    title: string,
    price: string,
    description: string,
    btnName: string
}

function CustomCard({ image, title, price, description, btnName }: CardProps) {
  return (
    <div className="custom-card card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {btnName}
        </a>
      </div>
    </div>
  );
}
export default CustomCard;