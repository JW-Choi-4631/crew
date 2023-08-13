import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import StyledDiv from "../components/StyledDiv";
import SelectedDiv from "../components/SelectedDiv";
import HoverDiv from "../components/HoverDiv";

function CreateCrew3() {
  const navigate = useNavigate();
  const category = sessionStorage.getItem("category");
  const location = sessionStorage.getItem("location");
  const saveCrewType = (param: string) => {
    sessionStorage.setItem("crewType", param);
    navigate("/create_crew4");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "375px", height: "812px" }}>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", width: "100%" }}>
        <Header prevPage="/create_crew2" />
        <ProgressBar step={3} />
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
          <StyledDiv>
            <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
              03모임유형<span style={{ marginLeft: "12px", fontWeight: "normal" }}>모임유형을 선택해주세요</span>
            </p>
          </StyledDiv>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <p style={{ width: "100%", height: "56px", fontWeight: "bold", lineHeight: "56px", marginBlockStart: "0px", marginBlockEnd: "0px" }}>모임 유형이 어떻게 될까요?</p>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", height: "56px", gap: "8px" }}>
          <HoverDiv onClick={() => saveCrewType("단기모임 (번개)")}>단기 모임 (번개)</HoverDiv>
          <HoverDiv onClick={() => saveCrewType("장기모임 (정모)")}>장기 모임 (정모)</HoverDiv>
        </div>
      </div>
    </div>
  );
}

export default CreateCrew3;
