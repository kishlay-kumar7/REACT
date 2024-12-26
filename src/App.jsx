import "./product.css";
function Buttons() {
  return (
    <div className="buttons-container">
      <button className="buy">Buy</button>
      <button className="addcart">Add to Cart</button>
    </div>
  );
}
function ProductName({ productName, description, images, price }) {
  let styles = { height: "400px", width: "400px" };
  return (
    <div className="product" style={styles}>
      <img src={images} alt="image1" />
      <h3 className="productname">{productName}</h3>
      <p className="description">{description}</p>
      <h4 className="price"> {price}</h4>

      <Buttons />
    </div>
  );
}
export default function Cart() {
  return (
    <div class="carts">
      <ProductName
        productName="Love Symbol"
        description="Made by johns lourdce"
        images="/1.jpg"
        price="$7.00"
      />
      <ProductName
        productName="Girl Art"
        description="Made by shivani"
        images="/2.jpg"
        price="$3.00"
      />
      <ProductName
        productName="Tower Art"
        description="Made by Diiljeet Joshi"
        images="/3.jpg"
        price="$2.99"
      />
      <ProductName
        productName="Girl Face"
        description="Made by Rohin jit"
        images="/4.jpeg"
        price="$1.60"
      />
    </div>
  );
}
