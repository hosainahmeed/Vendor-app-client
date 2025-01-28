import SearchBar from "../../../components/form/input/SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuBarItem from "../../../components/MenuBarItem";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Button } from "antd";

function NavbarHeader() {
  const cartItems = [
    { id: 1, name: "Product 1", quantity: 2 },
    { id: 2, name: "Product 2", quantity: 1 },
  ];

  // Menu for dropdown
  const menu = (
    <Menu id="remove-scroll" className="w-48 max-h-96 overflow-y-scroll">
      <h1 className="font-semibold p-2">Add To cart Product</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <Menu.Item key={item.id}>
              <div className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
              </div>
            </Menu.Item>
          ))}
          <Menu.Divider />
          <Menu.Item key="show-all">
            <Button
              className="w-full border-none bg-green-600 text-white"
              onClick={() => {
                console.log("Show All Items clicked");
                // Add your navigation logic here
              }}
            >
              Show All
            </Button>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item>
          <p className="text-center text-gray-500">Your cart is empty.</p>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div className="pt-3 bg-white">
      <div className="area flex py-2 items-center justify-between">
        <h1> Have a question? Call us 01917363622</h1>
        <div className="flex gap-2">
          <h1 className="hover:bg-green-700 hover:text-white cursor-pointer p-3">Sign In</h1>
          <h1 className="hover:bg-green-700 hover:text-white cursor-pointer p-3">Sign Up</h1>
        </div>
      </div>
      <div className="area flex-bet gap-4 px-2">
        <Link to={"/"}>
          <h3 className="text-lg font-bold text-green-700 text-nowrap">
            খাঁটি দানা
          </h3>
        </Link>
        <SearchBar />
        <div className="flex-center gap-2">
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            placement="bottomRight"
            arrow
          >
            <ShoppingCartIcon className="cursor-pointer text-2xl" />
          </Dropdown>
        </div>
      </div>
      <MenuBarItem />
    </div>
  );
}

export default NavbarHeader;
