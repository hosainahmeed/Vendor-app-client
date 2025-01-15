import React from 'react';
import { Menu, Dropdown, Layout, Typography } from 'antd';
import {
    AppstoreOutlined,
    UnorderedListOutlined,
    ProfileOutlined,
    FileSearchOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

const categories = [
    { key: '1', icon: <AppstoreOutlined />, label: 'Ghee & Oil' },
    { key: '2', icon: <UnorderedListOutlined />, label: 'Original Organic Honey' },
    { key: '3', icon: <ProfileOutlined />, label: 'Nuts & Dates' },
    { key: '4', icon: <FileSearchOutlined />, label: 'Organic Spices' },
    { key: '5', icon: <AppstoreOutlined />, label: 'Organic Oil' },
    { key: '6', icon: <ShoppingCartOutlined />, label: 'Rice, Pulse & Grains' },
    { key: '7', icon: <AppstoreOutlined />, label: 'Super Foods' },
    { key: '8', icon: <UnorderedListOutlined />, label: 'Sweeteners & Dairy' },
    { key: '9', icon: <ProfileOutlined />, label: 'Pickle & Chutney' },
    { key: '10', icon: <FileSearchOutlined />, label: 'Dry Fruits & Dates' },
];

const navbarItems = [
    { key: 'home', label: 'Home' },
    { key: 'products', label: 'All Products' },
    { key: 'updates', label: 'Updates' },
    { key: 'orderTrack', label: 'Order Track' },
    { key: 'contact', label: 'Contact Us' },
];

const categoriesMenu = (
    <Menu
        style={{
            backgroundColor: '#008000',
            borderRadius: '0px',
        }}
    >
        {categories.map((category) => (
            <Menu.Item
                key={category.key}
                icon={category.icon}
                style={{
                    backgroundColor: '#008000',
                    color: 'white',
                    borderRadius: '0px',
                }}
            >
                {category.label}
            </Menu.Item>
        ))}
    </Menu>
);

const MenuBarItem = () => {
    return (
        <Layout style={{ backgroundColor: '#008000', padding: '0 20px', marginTop: '20px' }}>
            <Header className='area' style={{ backgroundColor: '#008000', padding: '0 20px' }}>
                <Dropdown
                    overlay={categoriesMenu}
                    trigger={['hover']}
                    overlayStyle={{
                        backgroundColor: '#008000',
                        borderRadius: '0px',
                    }}
                    placement="bottomLeft"
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: '16px',
                            cursor: 'pointer',
                            marginRight: '20px',
                        }}
                    >
                        <AppstoreOutlined style={{ marginRight: '5px' }} />
                        Categories
                    </Text>
                </Dropdown>

                {/* Other Navbar Items */}
                {navbarItems.map((item) => (
                    <Text
                        key={item.key}
                        style={{
                            color: 'white',
                            fontSize: '16px',
                            cursor: 'pointer',
                            marginLeft: '20px',
                        }}
                    >
                        {item.label}
                    </Text>
                ))}
            </Header>
        </Layout>
    );
};

export default MenuBarItem;
