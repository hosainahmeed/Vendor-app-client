import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  ProfileOutlined,
  FileSearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

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

const CategoriesMenu = () => {
  return (
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
};

export default CategoriesMenu;
