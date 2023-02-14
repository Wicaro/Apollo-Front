import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MaintenanceWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MaintenanceText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

const MaintenanceImage = styled.img`
  width: 130px;
  height: 100px;
  margin-bottom: 20px;
  animation: rotate 2s infinite linear;

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

const MaintenanceScreen = () => (
  <MaintenanceWrapper>
    <MaintenanceImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Maintenance Image" />
    <MaintenanceText  style={{margin:"0px"}}>Estamos em manutenção no momento.</MaintenanceText>
    <MaintenanceText  style={{margin:"0px"}}>Voltaremos em breve!</MaintenanceText>
    <Link to="/">
      <Button>Voltar para a página inicial</Button>
    </Link>
  </MaintenanceWrapper>
);

export default MaintenanceScreen;
