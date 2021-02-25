import styled from 'styled-components';

export const HealthTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 60px;
  font-weight: 600;
  color: #3C5E45;
`;

export const HealthLabel = styled.span`
  margin-top: 20px;
  font-size: 18px;
  color: #515753;
`;

export const HealthInput = styled.div`
  input {
    width: 80%;
    margin: 10px;
    color: #737A75;
    border: 1px solid #515753;
    border-top: 0;
    border-left: 0;
    border-right: 0;

    &:focus {
      outline: none;
    }
  }
`;
