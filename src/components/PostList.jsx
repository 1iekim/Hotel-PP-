import { useState } from "react";
import PostItem from "./PostItem";
import Modal from "./modal/Modal";

const PostList = ({ posts }) => {
  const [modalData, setModalData] = useState({
    modalTitle: "",
    modalText: "",
    modalStatus: false,
  });

  let theme = ["orange", "orange", "blue", "blue"];

  const refreshModalData = (title, text, status) => {
    setModalData({ modalTitle: title, modalText: text, modalStatus: status });
  };

  return (
    <ul className="posts__list">
      <Modal
        title={modalData.modalTitle}
        text={modalData.modalText}
        status={modalData.modalStatus}
        closeModal={refreshModalData}
      />
      {posts.map(({ id, title, text }) => {
        theme = [theme[1], theme[2], theme[3], theme[0]];
        return (
          <PostItem
            key={id}
            theme={theme[0]}
            title={title}
            text={text}
            showModal={refreshModalData}
          />
        );
      })}
    </ul>
  );
};

export default PostList;
