import styled from "styled-components"

export const FormArea = styled.div`
  form {
    display: flex;
    margin: auto;
    flex-direction: column;
    padding: 10px;
    max-width: 500px;
    input {
      font-size: 20px;
      color: #FFFFFF;
      padding: 15px;
      border: 1px solid #999999;
      margin: 5px;
    }
    button {
      background: #E4BB29;
      padding: 15px;
      font-size: 20px;
      cursor: pointer;
    }
    a {
      background: black;
    }
  }
`

export const Titulo = styled.h1`
  margin: auto;
  color: #E4BB29;
`