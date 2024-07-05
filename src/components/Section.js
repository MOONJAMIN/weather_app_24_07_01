import styled from "styled-components";

const SectionO = styled.div`
  margin-top: 50%;
  padding: 0 20px;
  h3 {
    font-size: 46px;
  }
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;
const TempWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .temp {
    display: flex;
    font-size: 180px;
    font-weight: 200;
    span {
      display: block;
      font-size: 90px;
      /* transform: translate(200px -170px); */
    }
  }
`;
const Temp = styled.div`
  width: 50%;
  &:nth-child(2) {
    height: 180px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }
`;
const Num = styled.div`
  font-size: 34px;
  font-weight: 300;
  padding: 20px 0;
  &:nth-child(2) {
    border-top: 1px solid #eee;
  }
`;

export const Section = ({ tempData }) => {
  return (
    <SectionO>
      <h3>Hot</h3>
      <TempWrap>
        <Temp className="temp">
          {Math.round(tempData.main.temp)}
          <span>°</span>
        </Temp>

        <Temp>
          <Num>
            {Math.round(tempData.main.temp_max)} <span>°</span>c
          </Num>

          <Num>
            {Math.round(tempData.main.temp_min)} <span>°</span>c
          </Num>
        </Temp>
      </TempWrap>
    </SectionO>
  );
};
