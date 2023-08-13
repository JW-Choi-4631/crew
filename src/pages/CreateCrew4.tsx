import React from "react";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import StyledDiv from "../components/StyledDiv";
import SelectedDiv from "../components/SelectedDiv";

function CreateCrew4() {
  const category = sessionStorage.getItem("category");
  const location = sessionStorage.getItem("location");
  const crewType = sessionStorage.getItem("crewType");
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "375px", height: "812px" }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", width: "100%" }}>
        <Header prevPage="/create_crew3" />
        <ProgressBar step={4} />
        <div style={{ display: "flex", flexDirection: "column", width: "375px", gap: "8px", marginTop: "36px" }}>
          <SelectedDiv>
            <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
              01관심사<span style={{ marginLeft: "12px", fontWeight: "normal" }}>{category}</span>
            </p>
          </SelectedDiv>
          <SelectedDiv>
            <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
              02지역<span style={{ marginLeft: "12px", fontWeight: "normal" }}>{location}</span>
            </p>
          </SelectedDiv>
          <SelectedDiv>
            <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
              03모임유형<span style={{ marginLeft: "12px", fontWeight: "normal" }}>{crewType}</span>
            </p>
          </SelectedDiv>
          <StyledDiv>
            <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
              04날짜<span style={{ marginLeft: "12px", fontWeight: "normal" }}>모임일시를 선택해주세요</span>
            </p>
          </StyledDiv>
        </div>
      </div>
    </div>
  );
}

export default CreateCrew4;
