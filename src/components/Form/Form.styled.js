import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => `${theme.spacing(6)}`};
  width: 400px;
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

export const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  font-family: sans-serif;
  font-size: 16px;
  outline: none;
  margin-top: 4px;
`

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  padding-top: ${({ theme }) => `${theme.spacing(3)}`};
  padding-bottom: ${({ theme }) => `${theme.spacing(3)}`};
  padding-left: ${({ theme }) => `${theme.spacing(4)}`};
  padding-right: ${({ theme }) => `${theme.spacing(4)}`};
  width: 120px;
  border: none;
  border-radius: ${({ theme }) => `${theme.spacing(1)}`};
  background-color: #2196f3;
  color: #fff;
  font-size: inherit;
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 3250ms;
  :hover,
  :focus {
    background-color: #1976d2;
  }
`;
