import { useState, useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [inputValue, setInputValue] = useState("");
  const placeholderText = "Search by product name";
  const navigate = useNavigate();

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setPlaceholder((prev) => {
        if (prev.length === placeholderText.length) {
          clearInterval(typingInterval);
          setTimeout(() => setPlaceholder(""), 1500);
          return prev;
        }
        return placeholderText.slice(0, prev.length + 1);
      });
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full">
      <TextField
        variant="outlined"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "5px",
            backgroundColor: "#F3F3F3",
            color: "black",
          },
          "& .MuiOutlinedInput-notchedOutline": {
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
    </div>
  );
};

export default SearchBar;
