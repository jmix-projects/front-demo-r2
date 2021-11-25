import {useState} from "react";
import {Modal} from "antd";

export const OpenDialogProto = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
        <p>Modal Content</p>
      </Modal>
    </>
  );
}
