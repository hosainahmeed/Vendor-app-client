import { Col, Row } from "antd";
import AuthForm from "../../components/form/input/AuthForm";

function AuthPage() {
  return (
    <div>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={20} sm={16} md={12} lg={8} xl={6}>
          <AuthForm />
        </Col>
      </Row>
    </div>
  );
}

export default AuthPage;
