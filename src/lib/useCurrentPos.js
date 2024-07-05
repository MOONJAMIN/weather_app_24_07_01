import { useEffect, useState } from "react";

export const useCurrentPos = () => {
  const defaultLat = "35.1798200522868";
  const defaultLon = "129.075087492149";
  //   =>기본값 설정해주기
  const [lat, setLat] = useState(defaultLat);
  const [lon, setLon] = useState(defaultLon);
  //   =>유저가 입력하면 값을 갱신한다

  const location = (pos) => {
    const {
      coords: { latitude, longitude },
    } = pos;

    setLat(latitude);
    setLon(longitude);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};
