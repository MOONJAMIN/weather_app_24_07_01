import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const Menu = styled.header`
  font-size: 24px;
  text-align: center;
`;

const MyLocation = styled.div`
  h3 {
    font-size: 20px;
    text-align: center;
    font-weight: 200;
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    font-weight: 200;
  }
`;
const More = styled.div`
  font-size: 26px;
`;

export const Header = ({ headerData }) => {
  return (
    <SHeader>
      <Menu>
        <FontAwesomeIcon icon={faBars} />
      </Menu>
      <MyLocation>
        <h3>{headerData.name}</h3>
        <p>Sat, 19:30pm</p>
      </MyLocation>
      <More>
        <FontAwesomeIcon icon={faPlus} />
      </More>
    </SHeader>
  );
};
