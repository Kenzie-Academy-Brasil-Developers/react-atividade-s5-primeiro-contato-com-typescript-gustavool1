import styled from "styled-components";

export const StyledInput = styled.input`
  width: inherit;
  border-radius: 5px;
  background-color: rgb(40, 44, 52);
  color: white;
  border: 2px solid rgb(112, 109, 109);
  height: 25px;
  font-size: 18px;
  padding: 10px;
  margin: 2px;
`;

export const InputContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  div {
    width: 100px;
    display: flex;
  }
  label {
    width: 100px;
  }
`;
