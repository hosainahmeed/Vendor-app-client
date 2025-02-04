import { useState } from "react";
import SearchBar from "../../../components/form/input/SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuBarItem from "../../../components/MenuBarItem";
import CategoriesMenu from "../../../components/CategoriesMenu";
import { Link } from "react-router-dom";
import { Menu, Button, Drawer, Row, Col, Image, Space, Tabs } from "antd";
import { motion } from "framer-motion";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import NavbarMenu from "../../../components/NavbarMenu";

function NavbarHeader() {
  const [visible, setVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      quantity: 2,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Product 2",
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showMenuDrawer = () => {
    setMenuVisible(true);
  };

  const onMenuClose = () => {
    setMenuVisible(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const menuItems = (
    <Menu>
      <Menu.Item key="menu">
        <span>Menu</span>
      </Menu.Item>
      <Menu.Item key="categories">
        <span>Categories</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="pt-3 bg-white">
      {/* Hidden on small screens */}
      <div className="hidden md:flex area  py-2 items-center justify-between">
        <h1> Have a question? Call us 01917363622</h1>
        <div className="flex gap-2">
          <h1 className="hover:bg-green-700 hover:text-white cursor-pointer p-3">
            Sign In
          </h1>
          <h1 className="hover:bg-green-700 hover:text-white cursor-pointer p-3">
            Sign Up
          </h1>
        </div>
      </div>

      {/* Navbar for all screens */}
      <div className="area flex-bet gap-4 px-2">
        {/* Hamburger button for small screens */}
        <div className="md:hidden">
          <Button type="text" onClick={showMenuDrawer}>
            <MenuOutlined className="text-2xl" />
          </Button>
        </div>

        {/* Logo */}
        <Link to={"/"}>
          <h3 className="text-lg font-bold text-green-700 text-nowrap">
            খাঁটি দানা
          </h3>
        </Link>

        {/* Search bar (hidden on small screens) */}
        <div className="hidden md:block flex-grow">
          <SearchBar />
        </div>

        {/* Search icon for small screens */}
        <div className="md:hidden">
          <Button type="text" onClick={toggleSearch}>
            <SearchOutlined className="text-2xl" />
          </Button>
          {searchVisible && (
            <div className="absolute bg-white p-4 shadow-lg w-full left-0 top-16 z-50">
              <SearchBar />
            </div>
          )}
        </div>

        {/* Cart icon */}
        <ShoppingCartIcon
          className="cursor-pointer text-2xl"
          onClick={showDrawer}
        />
      </div>

      {/* MenuBarItem (hidden on small screens) */}
      <div className="hidden md:block">
        <MenuBarItem />
      </div>

      {/* Drawer for cart */}
      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={400}
      >
        {cartItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Row gutter={16} className="mb-4">
              <Col span={6}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />
              </Col>
              <Col span={14}>
                <Space direction="vertical">
                  <span className="font-semibold">{item.name}</span>
                  <span>x{item.quantity}</span>
                </Space>
              </Col>
              <Col span={4}>
                <Button type="link" danger>
                  Delete
                </Button>
              </Col>
            </Row>
          </motion.div>
        ))}
      </Drawer>

      {/* Drawer for hamburger menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={onMenuClose}
        visible={menuVisible}
        width={300}
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Menu" key="1">
            <CategoriesMenu />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Categories" key="2">
            <NavbarMenu />
          </Tabs.TabPane>
        </Tabs>
      </Drawer>
    </div>
  );
}

export default NavbarHeader;
