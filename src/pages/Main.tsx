import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/CategoryList";

function Main() {
  const navigate = useNavigate();
  const goToNextPage = () => {};

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width: "375px", height: "812px", backgroundColor: "white", padding: "16px" }}>
        <div style={{ width: "100%", height: "112px", backgroundColor: "#ECEFF2", borderRadius: "22px" }}></div>
        <div style={{ display: "flex", width: "100%", height: "204px", marginTop: "17px", gap: "9px" }}>
          <div onClick={() => navigate("/find_crew")} style={{ width: "50%", height: "100%", backgroundColor: "#ECEFF2", borderRadius: "22px", cursor: "pointer" }}>
            <p style={{ fontWeight: "bold", marginLeft: "10px" }}>내 주변 모임 찾기</p>
          </div>
          <div onClick={() => navigate("/create_crew")} style={{ width: "50%", height: "100%", backgroundColor: "#ECEFF2", borderRadius: "22px", cursor: "pointer" }}>
            <p style={{ fontWeight: "bold", marginLeft: "10px" }}>모임 생성</p>
          </div>
        </div>
        <p>관심사별 모임 찾기</p>
        <CategoryList goToNextPage={goToNextPage} />
      </div>
    </div>
  );
}
export default Main;
