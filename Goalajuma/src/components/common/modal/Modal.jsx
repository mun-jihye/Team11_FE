import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect } from "react";
import Portal from "./Portal";
import { GoX } from "react-icons/go";

function Modal({
  className,
  visible,
  children,
  onClose, // 모달 보임 유무 결정
  maskClosable, // close 아이콘 유무 결정
  closable, //dimmed 처리된 영역 클릭했을 때 모달 닫힘 결정
}) {
  // 배경 누르면 동작
  const onMaskClick = (e) => {
    // target : 모달 배경, currentTarget : 유저가 클릭한 것
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  // 닫힘 버튼을 누르면 동작
  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  // 모달 동작 시 스크롤 중지
  useEffect(() => {
    document.body.style.cssText = `overflow: hidden;`;
    return () => {
      document.body.style.cssText = `position: ""; top: "";`;
    };
  }, []);

  return (
    <Portal elementId="modal">
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {closable && (
            <GoX
              className="modal-close"
              onClick={close}
              style={{ position: "relative", bottom: "10px" }}
            />
          )}
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  maskClosable: PropTypes.bool,
  closable: PropTypes.bool,
};
// 모달 뒷 배경
export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
// 모달 내부
export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export default Modal;
