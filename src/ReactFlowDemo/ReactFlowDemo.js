import { useEffect, useState } from "react";
import { TableStyled } from "./ReactFlowDemo.styled";

const ReactFlowDemo = () => {
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Effect callback called");

    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products)
        setIsLoading(false)
      });
  }, []);

  console.log(products);

  return (
    <div>
      <h3>React flow demo</h3>
      {isLoading ? (
        "Loading..."
      ) : (
        <TableStyled>
          <tr>
            <th width="35%">Title</th>
            <th width="25%">Brand</th>
            <th width="25%">Category</th>
            <th width="15%">Price</th>
          </tr>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.title}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </TableStyled>
      )}
    </div>
  );
};

export default ReactFlowDemo;
