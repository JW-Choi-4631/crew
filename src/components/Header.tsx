import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  prevPage: string;
}

function Header(props: Props) {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", height: "37px" }}>
      <div onClick={() => navigate(props.prevPage)} style={{ marginLeft: "15px" }}>
        &lt;
      </div>
      <div style={{ marginRight: "15px" }}>X</div>
    </div>
  );
}

export default Header;
