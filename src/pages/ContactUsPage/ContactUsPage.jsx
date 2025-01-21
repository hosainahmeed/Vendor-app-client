import { Form, Input, Button, Upload, Row, Col } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Lottie from "react-lottie";
import animationData from "../../../public/Contact.json";

const { TextArea } = Input;

function ContactUsPage() {
  const onFinish = (values) => {
    console.log("Submitted Values: ", values);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="area py-12"
    >
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* Left Section */}
        <Col xs={24} md={12}>
          <div>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Let’s talk about everything!
            </h1>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "red",
                marginBottom: "20px",
              }}
            >
              With Live Chat
            </h1>
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>
              Fill out the form and let us know about your problem. Our team
              will get back to you as soon as possible!
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Lottie
              options={defaultOptions}
              height="100%"
              width="100%"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            />
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={24} md={12}>
          <Form
          requiredMark={false}
            layout="vertical"
            onFinish={onFinish}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Form.Item
              name="name"
              label="Enter Your Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Enter Your Name" />
            </Form.Item>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input placeholder="example@gmail.com" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="mobile"
                  label="Mobile Number"
                  rules={[
                    { required: true, message: "Please enter your number!" },
                  ]}
                >
                  <Input placeholder="Mobile Number" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="address"
              label="Enter Your Address"
              rules={[
                { required: true, message: "Please enter your address!" },
              ]}
            >
              <Input placeholder="Enter Your Address" />
            </Form.Item>

            <Form.Item
              name="upload"
              label="Upload a Photo or Screenshot of your Problem"
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e?.fileList;
              }}
            >
              <Upload.Dragger
                name="files"
                action="/upload"
                listType="picture"
                multiple
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Drag and drop a file here or click
                </p>
              </Upload.Dragger>
            </Form.Item>

            <Form.Item
              name="problem"
              label="Please Explain Your Problem Here"
              rules={[
                { required: true, message: "Please explain your problem!" },
              ]}
            >
              <TextArea
                placeholder="Please Explain Your Problem Here."
                rows={4}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#28a745",
                  borderColor: "#28a745",
                  width: "100%",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUsPage;
