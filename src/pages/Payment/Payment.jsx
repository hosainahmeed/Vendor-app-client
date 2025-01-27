import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Row,
  Col,
  Typography,
  Divider,
  Grid,
} from "antd";

const { Title, Text } = Typography;
const { Option } = Select;
const { useBreakpoint } = Grid;

function Payment() {
  const location = useLocation();
  const { price = 0, productName = "Product" } = location?.state || {};

  const [form] = Form.useForm();
  const [shippingCharge, setShippingCharge] = useState(0);
  const screens = useBreakpoint();

  const handleLocationChange = (value) => {
    setShippingCharge(value === "Inside Dhaka" ? 60 : 120);
  };

  const totalPrice = price + shippingCharge;

  return (
    <div className="area flex items-center justify-center bg-gray-100  p-4">
      <Row
        gutter={[16, 16]}
        className="max-w-6xl mx-auto"
        style={{ width: "100%" }}
      >
        {/* Billing Info */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <Title level={4} className="text-green-700">
                1. Billing Info
              </Title>
            }
          >
            <Form requiredMark={false} form={form} layout="vertical">
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                  { required: true, message: "Please enter your full name" },
                ]}
              >
                <Input
                  placeholder="Full Name"
                  size={screens.xs ? "large" : "middle"}
                />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input
                  placeholder="Phone"
                  size={screens.xs ? "large" : "middle"}
                />
              </Form.Item>

              <Form.Item
                label="Full Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address" },
                ]}
              >
                <Input.TextArea
                  placeholder="Full Address"
                  rows={3}
                  size={screens.xs ? "large" : "middle"}
                />
              </Form.Item>

              <Form.Item
                label="Location"
                name="location"
                rules={[
                  { required: true, message: "Please select your location" },
                ]}
              >
                <Select
                  placeholder="Select your location"
                  onChange={handleLocationChange}
                  size={screens.xs ? "large" : "middle"}
                >
                  <Option value="Inside Dhaka">Inside Dhaka (60 Tk)</Option>
                  <Option value="Outside Dhaka">Outside Dhaka (120 Tk)</Option>
                </Select>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* Order Summary */}
        <Col xs={24} lg={12}>
          <Card
            title={
              <Title level={4} className="text-green-700">
                2. Order Summary
              </Title>
            }
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <Text>{productName}</Text>
                <Text>{price} Tk</Text>
              </div>
              <div className="flex justify-between items-center mb-2">
                <Text>Shipping Charge</Text>
                <Text>{shippingCharge} Tk</Text>
              </div>
              <div className="flex justify-between items-center mb-2">
                <Text>Coupon</Text>
                <Text>- 0.00 Tk</Text>
              </div>
              <Divider />
              <div className="flex justify-between items-center font-bold text-lg">
                <Text>Total</Text>
                <Text>{totalPrice} Tk</Text>
              </div>
              <Button
              type="dashed"
                block
                size={screens.xs ? "large" : "middle"}
                className="mt-4 bg-green-700 text-white hover:bg-green-800 border-none"
              >
                Order
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Payment;
