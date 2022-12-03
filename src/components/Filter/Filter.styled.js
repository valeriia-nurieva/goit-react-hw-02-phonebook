import styled from 'styled-components';

export const FilterTitle = styled.label`
  display: inline-block;
  margin-bottom: ${({ theme }) => `${theme.spacing(3)}`};
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 400px;
  
`

export const FilterInput = styled.input`
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
  font-family: sans-serif;
  font-size: 16px;
  outline: none;
`