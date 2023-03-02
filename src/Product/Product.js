import "./Product.css";

export default function Product(props) {
  return (
    <div>
      <h2>Product Card</h2>
      <div className="card">
        <img src={props.image} />
        <h1 className="tittle">{props.tittle}</h1>
        <p className="price">${props.price}</p>
        <p>solern solern solern solern</p>
        <p><button>Add To Cart</button></p>
      </div>
    </div>
  );
}
