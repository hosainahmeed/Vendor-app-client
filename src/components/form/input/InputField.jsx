
import { Input, Form } from "antd";

const InputField = ({
  label,
  name,
  rules,
  placeholder,
  type = "text",
  ...props
}) => {
  return (
    <Form.Item label={label} name={name} rules={rules} {...props}>
      <Input type={type} placeholder={placeholder} />
    </Form.Item>
  );
};

export default InputField;
