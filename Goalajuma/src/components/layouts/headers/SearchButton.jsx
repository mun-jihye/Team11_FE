import styled from "styled-components";
import Icon from "@/components/common/Icon";
import { Palette } from "@/styles/Palette";
import { FaSearch } from "react-icons/fa";
import Modal from "@/components/common/modal/Modal";
import { useState } from "react";
import ModalLayout from "@/components/common/modal/ModalLayout";
import SearchInput from "@/components/search/SearchInput";
import SearchModal from "@/components/search/SearchModal";

const SearchButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const clickModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div>
      <Search>
        <Icon
          size="23px"
          color={Palette.point_blue}
          onClick={() => {
            clickModal();
          }}
        >
          <FaSearch />
        </Icon>
      </Search>
      {modalVisible && (
        <SearchModal maskClosable={true} onClose={closeModal}></SearchModal>
        // <Modal
        //   visible={modalVisible}
        //   closable={true}
        //   maskClosable={true}
        //   onClose={closeModal}
        // >
        //   <SearchInput></SearchInput>
        // </Modal>
      )}
    </div>
  );
};

const Search = styled.button`
  // 위치 다시 조정
  position: absolute;
  right: 20px;
  top: 15px;
  color: #7192ff;
  background-color: #fff;
  border-width: 0px;
  cursor: pointer;
`;

export default SearchButton;
