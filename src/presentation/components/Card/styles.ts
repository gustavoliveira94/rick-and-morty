import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 380px;
  height: 150px;
  background-color: #feda79;
  margin-top: 20px;
  border-radius: 8px;
  color: #712512;
  margin-right: 20px;

  img {
    width: 150px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
`;

export const Infos = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 18px;
    font-family: 'Creepster', cursive;
    text-decoration: underline;
    margin-bottom: 30px;
  }

  small {
    font-family: 'Creepster', cursive;
  }
`;
