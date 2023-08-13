import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";

function FindCrew() {
  return (
    <MapDiv
      style={{
        width: "375px",
        height: "812px",
      }}
    >
      <NaverMap>
        <Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
      </NaverMap>
    </MapDiv>
  );
}

export default FindCrew;
