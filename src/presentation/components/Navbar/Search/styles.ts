import styled from 'styled-components';

export const ContentSearch = styled.div`
  width: calc(100% - 180px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
