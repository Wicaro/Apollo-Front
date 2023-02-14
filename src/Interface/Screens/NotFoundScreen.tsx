import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundTitle = styled.h1`
  margin: 0;
  font-size: 36px;
  color: grey;
`;

const NotFoundText = styled.p`
  margin: 0;
  font-size: 36px;
  color: grey;
`;

const NotFoundButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
`;

const NotFoundScreen = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Página não encontrada</NotFoundText>
      <NotFoundButton to="/">Voltar para a página inicial</NotFoundButton>
    </NotFoundWrapper>
  );
};

export default NotFoundScreen;
