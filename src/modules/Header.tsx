import { ArrowLeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  return (
    <div className="flex p-4 items-center justify-between px-6 py-4 shadow-md bg-white">
      {pathname === "/" ? (
        <>
          <h1 onClick={() => navigate("/")} className="text-2xl font-bold text-gray-800 cursor-pointer">Stacks</h1>
          <Button onClick={() => navigate("/create")} type="primary" size="large">
            <PlusOutlined />
            Create
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => navigate(-1)} type="primary">
            <ArrowLeftOutlined />
          </Button>
          <h1 onClick={() => navigate("/")} className="text-2xl font-bold text-gray-800 cursor-pointer">Stacks</h1>
        </>
      )}
    </div>
  );
};

export default Header;
