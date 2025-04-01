import { Form, Input, Button, notification } from "antd";
import { users } from "../../constants";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const getStorage = () => {
    localStorage.setItem("isAuth", true);
  };
  const loginHandle = (values) => {
    console.log("Foydalanuvchilar:", users);
    console.log("Kiritilgan ma'lumotlar:", values);

    let findedUser = users.find(
      (user) =>
        user.full_name === values.full_name && user.password === values.password
    );

    if (!findedUser) {
      notification.error({
        message: "Parol yoki username xato",
        description: "Qayta urunib ko'ring",
      });
    } else {
      console.log("Topilgan foydalanuvchi:", findedUser);
      notification.success({
        message: "Muvaffaqiyatli tizimga kirdingiz!",
        description: `Xush kelibsiz, ${findedUser.full_name}!`,
      });
    }
    if (findedUser.role == "Chef") {
      navigate("/Chef");
      getStorage();
    } else if (findedUser.role == "girgitton") {
      navigate("/girgitton");
      getStorage();
    }
  };

  return (
    <div className="container mx-auto w-[85%] h-screen flex justify-center items-center">
      <div className="w-[500px] rounded-lg py-4 px-5 border border-gray-400">
        <Form layout="vertical" size="large" onFinish={loginHandle}>
          <Form.Item
            label="Ismingizni kiriting"
            name="full_name"
            rules={[
              {
                required: true,
                message: "Ismingizni kiritish majburiy",
              },
            ]}
          >
            <Input placeholder="Ismingizni kiriting" />
          </Form.Item>

          <Form.Item
            label="Parolingizni kiriting"
            name="password"
            rules={[
              {
                required: true,
                message: "Parol kiritish majburiy",
              },
            ]}
          >
            <Input.Password
              placeholder="Parolingizni kiriting"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Kirish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
