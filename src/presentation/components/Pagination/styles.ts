import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
`;

export const Pagination = styled.button<{ current?: boolean }>`
  background-color: #712512;
  border: ${({ current }) => (current ? '1px solid #feda79' : 'none')};
  color: ${({ current }) => (current ? '#feda79' : '#fff')};
  width: 25px;
  height: 25px;
  margin-right: 10px;
  cursor: pointer;
`;
