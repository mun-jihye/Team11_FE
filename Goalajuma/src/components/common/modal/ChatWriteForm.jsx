// import PropTypes from 'prop-types'
import { useState } from 'react';
import Img from '../Img'
import styled from "styled-components"; 
// import { useMutation, useQueryClient } from 'react-query';
// import axios from 'axios';

const ChatWriteForm = () => {
  const [write, setWrite] = useState("")
  //const queryClient = useQueryClient();

  // const addComment = async (comment) => {
  //   const response = await axios.post('/votes/{voteId}/comments', { comment });
  //   return response.data;
  // };
  // const mutation = useMutation(addComment, {
  //   // 성공 시 캐시 업데이트
  //   onSuccess: () => {
  //     // 서버로부터 데이터를 다시 불러와서 캐시를 업데이트.
  //     queryClient.invalidateQueries('comments');
  //     // 성공 시 추가적인 로직을 수행할 수 있다.
  //   },
  // });
  const handleUpload = ()=>{
    // mutation 함수를 호출하여 POST 요청을 보냄.
    //mutation.mutate(write);
    console.log(write)
    setWrite("")
  }
  const handleInputChange=(event) =>{
    setWrite(event.target.value)
  }
  return (
    <>
    <FormStyled>
      <Img src="맹구.png" size="35px"/>
      <WriteStyled>
        <input placeholder='댓글 작성'onChange={handleInputChange} value={write}/>
        <UploadStyled onClick={handleUpload}>게시</UploadStyled>
      </WriteStyled>
    </FormStyled>
    </>
  )
}

const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;

`
const WriteStyled = styled.div`
  position: relative;
  top: 30px;
  width: 230px;
  height: 27px;
  border: 0.7px solid #9EB0EA;
  border-radius: 72px;
  display: flex;
  flex-direction: row;

  input{
    border: none;
    background-color: transparent;
    width: 165px;
    left: 5%;
    top: 15%;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(41, 85, 197, 0.5);
    padding-left: 15px;
  }
`
const UploadStyled = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #2955C5;
  border: none;
  background-color: transparent;
`
// const CommentStyled = styled.input`
//   position: relative;
//   left: 5%;
//   top: 15%;
//   font-family: 'Nanum Gothic';
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 16px;
//   color: rgba(41, 85, 197, 0.5);
// `
export default ChatWriteForm