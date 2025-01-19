import React from "react";
import { Menu, Dropdown, Layout, Typography } from "antd";
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  ProfileOutlined,
  FileSearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const { Header } = Layout;
const { Text } = Typography;

const categories = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: "Ghee & Oil",
    path: "/categories/ghee-oil",
  },
  {
    key: "2",
    icon: <UnorderedListOutlined />,
    label: "Original Organic Honey",
    path: "/categories/honey",
  },
  {
    key: "3",
    icon: <ProfileOutlined />,
    label: "Nuts & Dates",
    path: "/categories/nuts-dates",
  },
  {
    key: "4",
    icon: <FileSearchOutlined />,
    label: "Organic Spices",
    path: "/categories/spices",
  },
  {
    key: "5",
    icon: <AppstoreOutlined />,
    label: "Organic Oil",
    path: "/categories/oil",
  },
  {
    key: "6",
    icon: <ShoppingCartOutlined />,
    label: "Rice, Pulse & Grains",
    path: "/categories/rice-grains",
  },
  {
    key: "7",
    icon: <AppstoreOutlined />,
    label: "Super Foods",
    path: "/categories/super-foods",
  },
  {
    key: "8",
    icon: <UnorderedListOutlined />,
    label: "Sweeteners & Dairy",
    path: "/categories/sweeteners-dairy",
  },
  {
    key: "9",
    icon: <ProfileOutlined />,
    label: "Pickle & Chutney",
    path: "/categories/pickle-chutney",
  },
  {
    key: "10",
    icon: <FileSearchOutlined />,
    label: "Dry Fruits & Dates",
    path: "/categories/dry-fruits-dates",
  },
];

const navbarItems = [
  { key: "home", label: "Home", path: "/" },
  { key: "products", label: "All Products", path: "/products" },
  { key: "updates", label: "Updates", path: "/updates" },
  { key: "orderTrack", label: "Order Track", path: "/order-track" },
  { key: "contact", label: "Contact Us", path: "/contact" },
];

const categoriesMenu = (
  <Menu
    style={{
      backgroundColor: "#008000",
      borderRadius: "0px",
    }}
  >
    {categories.map((category) => (
      <Menu.Item
        key={category.key}
        style={{
          backgroundColor: "#008000",
          borderRadius: "0px",
        }}
      >
        <Link
          to={category.path}
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {category.icon} {category.label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

const ListItems = (
  <Menu
    style={{
      backgroundColor: "#008000",
      borderRadius: "0px",
    }}
  >
    {navbarItems.map((category) => (
      <Menu.Item
        key={category.key}
        style={{
          backgroundColor: "#008000",
          borderRadius: "0px",
        }}
      >
        <Link
          to={category.path}
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          {category.label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

const MenuBarItem = () => {
  return (
    <Layout
      style={{
        backgroundColor: "#008000",
        padding: "0 20px",
        marginTop: "20px",
      }}
    >
      <Header
        className="area flex items-center md:justify-start justify-between"
        style={{ backgroundColor: "#008000", padding: "0 20px" }}
      >
        <Dropdown
          overlay={categoriesMenu}
          trigger={["hover"]}
          overlayStyle={{
            backgroundColor: "#008000",
            borderRadius: "0px",
          }}
          placement="bottomLeft"
        >
          <Text
            style={{
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "20px",
            }}
          >
            <AppstoreOutlined style={{ marginRight: "5px" }} />
            Categories
          </Text>
        </Dropdown>

        {/* Navbar Items with Links */}
        <div className="hidden md:flex">
          {navbarItems.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              style={{
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
                marginLeft: "20px",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Dropdown
          className="md:hidden flex"
          overlay={ListItems}
          trigger={["hover"]}
          overlayStyle={{
            backgroundColor: "#008000",
            borderRadius: "0px",
          }}
          placement="bottomLeft"
        >
          <Text
            style={{
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              marginRight: "20px",
            }}
          >
            <CiMenuFries className="text-white text-xl" />
          </Text>
        </Dropdown>
      </Header>
    </Layout>
  );
};

export default MenuBarItem;
