import { useEffect, useState } from "react";
import ProductsTable from "./ProductsTable";
import UsersTable from "./UsersTable";
import { StyledContainer } from "./ReactFlowDemo.styled";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";

const ReactFlowDemo = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("");

  useEffect(() => {
    if (type !== "") {
      setIsLoading(true);

      setTimeout(() => {
        fetch(`https://dummyjson.com/${type}`)
          .then((response) => response.json())
          .then((data) => {
            if (type === "products") {
              setProducts(data.products);
            } else {
              setUsers(data.users);
            }
            setIsLoading(false);
          });
      }, 3000);
    }
  }, [type]);

  const renderContent = () => {
    if (type === "") {
      return null;
    }

    if (isLoading) {
      return (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      );
    }

    if (type === "products") {
      return <ProductsTable products={products} />;
    }

    return <UsersTable users={users} />;
  };

  const handleSelectChange = (e) => {
    setType(e.target.value);
    setUsers([]);
    setProducts([]);
  };

  return (
    <StyledContainer>
      <h3>React flow demo</h3>
      <Box width="200px" marginBottom="20px;">
        <FormControl fullWidth>
          <InputLabel size="small" id="demo-simple-select-label">
            Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleSelectChange}
            size="small"
          >
            <MenuItem value="products">Products</MenuItem>
            <MenuItem value="users">Users</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box width="100%">{renderContent()}</Box>
    </StyledContainer>
  );
};

export default ReactFlowDemo;
