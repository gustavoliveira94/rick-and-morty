import styled from 'styled-components';

export const ContentSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 40px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 15px;
  border-radius: 8px;

  input {
    width: 350px;
    height: 50px;
    border: 0;
    background-color: transparent;
    font-family: Creepster, cursive;

    @media (max-width: 600px) {
      width: 280px;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 18px;
    }

    img {
      width: 45px;
    }
  }
`;

export const Clear = styled.button`
  background-color: transparent;
  border: none;
  font-family: 'Creepster', cursive;
  text-decoration: underline;
  margin-left: 20px;
  cursor: pointer;
  margin: 15px 0 0 340px;

  @media (max-width: 600px) {
    margin-left: 270px;
  }
`;
