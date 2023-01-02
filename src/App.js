import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isStyledComponent } from "styled-components";


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div``;

function App() {
  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle />
    </>
  );
}

export default App;
