import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "04a8093e40fed3f98b5e3573e7fb35e1",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  const [weather, lat, lon] = queryKey;
  return instance
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((res) => res.data);
};

// get = 보이는방식
// post = 보이지않는 방식
// User-Agent 어떻게 요청을 했는지
