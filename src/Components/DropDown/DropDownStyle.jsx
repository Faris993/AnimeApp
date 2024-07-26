import styled from 'styled-components';

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 8vw;
  border-right: 1px solid #454545;
  background-color: #343338;
  height: 100vh;
  position: fixed;
  top: 5vh;
  left: 0;
  padding-top: 20px;

  .dropdown-link {
    margin-left: 10px;
    color: white;
    text-decoration: none;
    margin-top: 20px;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .dropdown-link:hover {
    background-color: #454545;
    transform: scale(1.05);
  }
`;
