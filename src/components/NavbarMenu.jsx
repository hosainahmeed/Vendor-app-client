import { Menu } from "antd";
import { Link } from "react-router-dom";

const navbarItems = [
  { key: "home", label: "Home", path: "/" },
  { key: "products", label: "All Products", path: "/products" },
  { key: "updates", label: "Updates", path: "/updates" },
  { key: "orderTrack", label: "Order Track", path: "/order-track" },
  { key: "contact", label: "Contact Us", path: "/contact" },
];

const NavbarMenu = () => {
  return (
    <Menu
      style={{
        backgroundColor: "#008000",
        borderRadius: "0px",
      }}
    >
      {navbarItems.map((item) => (
        <Menu.Item
          key={item.key}
          style={{
            backgroundColor: "#008000",
            borderRadius: "0px",
          }}
        >
          <Link
            to={item.path}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {item.label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavbarMenu;
