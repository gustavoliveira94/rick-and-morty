import styled from 'styled-components';

export const Navbar = styled.div`
  width: 100%;
  height: 100px;
  background-color: #712512;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;

  .logo {
    position: absolute;
    left: 60px;
    width: 180px;
  }
`;

export const Links = styled.div`
  display: flex;

  a {
    text-decoration: underline;
    color: #fff;
    margin-right: 15px;

    p {
      font-family: 'Creepster', cursive;
    }
  }
`;
