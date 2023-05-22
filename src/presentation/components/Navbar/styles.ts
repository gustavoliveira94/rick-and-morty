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

  @media (max-width: 600px) {
    justify-content: space-between;
    padding: 0 35px;

    .logo {
      width: 150px;
    }
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

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: auto;
    margin-right: 0;
  }
`;
