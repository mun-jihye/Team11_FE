import MainButton from "./MainButton";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {function} props.onClick 투표시 실행. 참여 여부 변경
 * @param { array } props.options 옵션 리스트
 * @param { boolean } props.participate 참여여부
 * @param { boolean } props.isOwner 투표자인지의 여부
 * @param {string} props.active  투표 상태
 */

const ButtonLayout = ({ onClick, options, participate, isOwner, active }) => {
  const optionList = options;
  //choice 하나만 선택할 수 있는 함수 구현해서 프롭스로 보내주기

  return (
    <>
      <Container>
        {optionList?.map((option, index) => {
          return (
            <MainButton
              onClick={onClick}
              key={index}
              name={option.optionName}
              value={option.optionRatio}
              number={option.optionCount}
              src={option.image}
              choiced={option.choiced}
              participate={participate}
              isOwner={isOwner}
              active={active}
            />
          );
        })}
      </Container>
    </>
  );
};

ButtonLayout.propTypes = {
  onClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  participate: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1rem;
  text-align: center;
`;

export default ButtonLayout;