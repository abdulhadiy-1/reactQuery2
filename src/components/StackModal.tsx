import { useState, type Dispatch, type FC, type ReactNode, type SetStateAction } from "react";
import { Modal } from "antd";
import { useDeleteStacks } from "../hooks/useDeleteStacks";

const StackModal: FC<{ children: ReactNode, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, id: number | null }> = ({ children, open, setOpen, id }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Do you want to delete this stack?");
  const {mutate} = useDeleteStacks()

  const handleOk = (id: number | null) => {
    setModalText("Deleting...");
    setConfirmLoading(true);
    mutate(id)
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {children}
      <Modal
        title="Delete Stack?"
        okText="Yes"
        open={open}
        onOk={() => handleOk(id)}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default StackModal;
