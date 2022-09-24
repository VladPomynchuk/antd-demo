import './App.css';
import { Button, Input, Rate, Spin } from 'antd';
import styled from 'styled-components';

const App = () => (
  <Container>
    <Box>
      <StyledBtn type="primary">Button</StyledBtn>
      <StyledBtn>Button</StyledBtn>
      <StyledBtn2 type="primary">Button</StyledBtn2>
      <StyledSpinner size="large"></StyledSpinner>
      <StyledInput placeholder="Basic usage" />
      <Rate />
    </Box>
  </Container>
);

export default App;

export const Container = styled.div`
  padding: 50px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledBtn = styled(Button)`
  width: 200px;
  /* height: 60px; */
  /* background-color: ${p => p.theme.colors.primaryColor}; */
  margin-bottom: 20px;
`;

export const StyledBtn2 = styled(StyledBtn)`
  height: 60px;
`;

export const StyledInput = styled(Input)`
  border: none;
  border-radius: 0;
  width: 400px;
  margin-bottom: 40px;

  box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

  background-color: ${p => p.theme.colors.inputBackground};

  :focus {
    background-color: ${p => p.theme.colors.white};
  }
`;

export const StyledSpinner = styled(Spin)`
  margin-bottom: 60px;
  width: 50px;
  font-size: 50px;
`;
