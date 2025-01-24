import { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import axios from "axios";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [productsTitle, setProductsTitle] = useState([]);
  const placeholderText = "search by product name";

  // Fetch product data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/ProductData.json");
        setProductData(response.data);
      } catch (err) {
        console.error("Error fetching product data:", err);
      }
    };

    fetchProducts();
  }, []);

  // Extract product names when data changes
  useEffect(() => {
    if (productData.length > 0) {
      setProductsTitle(productData.map((item) => item?.product_name));
    }
  }, [productData]);

  // Typing animation for placeholder
  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setPlaceholder((prev) => {
        if (prev.length === placeholderText.length) {
          clearInterval(typingInterval);
          setTimeout(() => setPlaceholder(""), 1500); // Delay before restart
          return prev;
        }
        return placeholderText.slice(0, prev.length + 1);
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() !== "") {
      const matches = productsTitle.filter((product) =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(matches);
      setIsOpen(true);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  };

  // Handle search click
  const handleSearch = () => {
    console.log("Search Input:", inputValue);
    if (inputValue.trim() === "") {
      setIsOpen(false);
    }
  };

  return (
    <div className="w-full relative">
      {/* Search Input */}
      <TextField
        variant="outlined"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            backgroundColor: "#F3F3F3",
            color: "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            outline: "none",
            border: "none",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Search Suggestions Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Paper
            elevation={3}
            style={{
              position: "absolute",
              width: "100%",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 10,
              marginTop: "5px",
              borderRadius: "5px",
            }}
          >
            <List>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ListItem
                    key={index}
                    button
                    onClick={() => {
                      setInputValue(product);
                      setIsOpen(false);
                    }}
                  >
                    <ListItemText primary={product} />
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText primary="No Match Found" />
                </ListItem>
              )}
            </List>
          </Paper>
        </motion.div>
      )}
    </div>
  );
};

export default SearchBar;
