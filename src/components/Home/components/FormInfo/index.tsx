import Form, { Field } from "rc-field-form";
import styles from "./index.module.scss";
import { Button, Col } from "antd";
const Input = ({ value = "", ...props }) => <input value={value} {...props} />;

const FormInfo = () => {
  const [form] = Form.useForm();
  return (
    <Col className={styles.formInfoStyle}>
      <h3>Đăng ký nhận tư vấn</h3>
      <Form
        form={form}
        onFinish={(values) => {
          console.log(values);
          form.resetFields();
        }}
        className={styles.formStyles}
      >
        <Field name="name">
          {({ onChange, value }, meta) => {
            return (
              <Input
                placeholder="Họ và tên..."
                onChange={(e: any) => onChange(e)}
                value={value}
                meta={meta}
              />
            );
          }}
        </Field>
        <Field name="phone">
          {({ onChange, value }, meta) => {
            return (
              <Input
                placeholder="Số điện thoại..."
                onChange={(e: any) => onChange(e)}
                value={value}
                meta={meta}
              />
            );
          }}
        </Field>
        <Field name="email">
          {({ onChange, value }, meta) => {
            return (
              <Input
                placeholder="Email..."
                onChange={(e: any) => onChange(e)}
                value={value}
                meta={meta}
              />
            );
          }}
        </Field>
        <Field name="note">
          {({ onChange, value }, meta) => {
            return (
              <Input
                placeholder="Ghi chú..."
                onChange={(e: any) => onChange(e)}
                value={value}
                meta={meta}
              />
            );
          }}
        </Field>
        <Button htmlType="submit">Gửi</Button>
      </Form>
    </Col>
  );
};

export default FormInfo;
