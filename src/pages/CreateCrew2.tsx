import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import StyledDiv from "../components/StyledDiv";
import SelectedDiv from "../components/SelectedDiv";

interface Props {
  setIsClick: React.Dispatch<React.SetStateAction<Boolean>>;
}

function LocationModal(props: Props) {
  const navigate = useNavigate();
  const location = useRef("");
  return (
    <GreyDiv>
      <Modal>
        <div onClick={() => props.setIsClick(false)} style={{ border: "1px solid blue", cursor: "pointer", width: "fit-content", marginLeft: "auto" }}>
          X
        </div>
        <input
          onChange={(event) => {
            location.current = event.target.value;
          }}
          type="text"
          placeholder="지역을 입력해주세요"
        />
        <button
          onClick={() => {
            sessionStorage.setItem("location", location.current);
            navigate("/create_crew3");
          }}
        >
          Next
        </button>
      </Modal>
    </GreyDiv>
  );
}

function CreateCrew2() {
  const category = sessionStorage.getItem("category");
  const [isClick, setIsClick] = useState<Boolean>(false);
  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", width: "375px", height: "812px" }}>
      <Header prevPage="/create_crew" />
      <ProgressBar step={2} />
      <div style={{ display: "flex", flexDirection: "column", width: "375px", gap: "8px", marginTop: "36px" }}>
        <SelectedDiv>
          <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
            01관심사<span style={{ marginLeft: "12px", fontWeight: "normal" }}>{category}</span>
          </p>
        </SelectedDiv>
        <StyledDiv onClick={() => setIsClick(true)}>
          <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
            02지역<span style={{ marginLeft: "12px", fontWeight: "normal" }}>지역을 선택해주세요</span>
          </p>
        </StyledDiv>
      </div>
      {isClick && <LocationModal setIsClick={setIsClick} />}
    </div>
  );
}

// const StyledDiv = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 56px;
//   color: #9e9e9e;
//   background-color: #f9fafb;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     color: white;
//     background-color: #0a84ff;
//   }
// `;

const GreyDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Modal = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: white;
  border: 1px solid black;
  z-index: 2;
  border-radius: 32px 32px 0 0;
`;

export default CreateCrew2;
