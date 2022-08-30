import { addToCart, removeToCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("data", data);
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeToCart(product))}>
        Remove To Cart
      </button>
      <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
      <button onClick={() => dispatch(productList(product))}>
        Get Product List
      </button>
      {data.map((x) => {
        return (
          <>
            <li>{x.title}</li>
            <li>{x.id}</li>
          </>
        );
      })}
    </div>
  );
}

export default Main;
