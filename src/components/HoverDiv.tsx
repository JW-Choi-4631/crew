import styled from "styled-components";

const HoverDiv = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 56px;
  border: 1px solid blue;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

export default HoverDiv;

// style={{ width: "50%", height: "100%", textAlign: "center",
//lineHeight: "56px", border: "1px solid blue", borderRadius: "4px" }
