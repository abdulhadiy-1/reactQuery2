import { useState, type FC } from "react";
import type { StackType } from "../types";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { FixDate } from "../service/DateFix";
import StackModal from "./StackModal";
import { useNavigate } from "react-router-dom";

const StackCard: FC<{ item: StackType }> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-between shadow-amber-300 shadow-md  hover:shadow-lg duration-300 rounded-md h-[350px] w-[300px]">
      <div className="h-[50%] rounded-t-md">
        <img
          className="object-cover w-full h-full rounded-t-md"
          src={item.image}
          alt="StackImage"
        />
      </div>
      <div className="p-5 space-y-5">
        <h1>{item.name}</h1>
        <p>{FixDate(item.createdAt)}</p>
        <div className="flex gap-4 justify-end">
          <Button
          onClick={() => navigate(`/update/${item.id}`)}
            type="primary"
            className="!bg-yellow-600 hover:opacity-70 !w-[45px]"
            size="large"
          >
            <EditOutlined />
          </Button>
          <StackModal id={item.id} open={open} setOpen={setOpen}>
            <Button
              onClick={() => setOpen(true)}
              type="primary"
              className="!bg-red-600 hover:opacity-70 !w-[45px]"
              size="large"
            >
              <DeleteOutlined />
            </Button>
          </StackModal>
        </div>
      </div>
    </div>
  );
};

export default StackCard;
