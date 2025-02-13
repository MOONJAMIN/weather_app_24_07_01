import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Helmet } from "react-helmet-async";
import { Title } from "../components/Title";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(255, 108, 31, 1) 0%,
    rgba(212, 46, 46, 1) 100%
  );
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName={"HOME"} />
          {data && (
            <Container>
              <Header headerData={data} />

              <Section tempData={data} />
            </Container>
          )}
        </>
      )}
    </>
  );
};
