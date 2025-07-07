import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import useCreateStacks from "../hooks/useCreateStacks";
import type { CreateStackType } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { useStack } from "../hooks/useStack";

const Create = () => {
  const { id } = useParams();
  const { data: stack } = useStack(id ? +id : undefined);
  const [name, setName] = useState<string>("");
  const { mutate: createStack } = useCreateStacks();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (stack) {
      setName(stack.name);
    }
  }, [stack]);

  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: CreateStackType = {
      name,
      image:
        "https://thumbs.dreamstime.com/b/falling-drop-rain-blue-earth-image-water-splash-crown-shape-water-splash-crown-shape-falling-drop-earth-140453719.jpg",
    };

    setLoading(true);

    setTimeout(() => {
      createStack(data);
      navigate(-1);
    }, 2000);
  }

  return (
    <>
      <form onSubmit={handleCreate} autoComplete="off" className="p-5">
        <div className="bg-white rounded-md p-5">
          <div className="mt-[30px] flex gap-10">
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-5 !w-[60%]"
              size="large"
              name="name"
              placeholder="Yo'nalish nomini kiriting"
              allowClear
            />
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
              size="large"
            >
              {stack ? "Update" : "Create"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Create;
