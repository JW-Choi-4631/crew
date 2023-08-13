import React from "react";

interface Props {
  step: number;
}

function ProgressBar(props: Props) {
  const progressStep: Array<number> = Array(props.step).fill(0);
  return (
    <div style={{ display: "flex", width: "100%", height: "5px", backgroundColor: "#F9FAFB" }}>
      {progressStep.map(() => (
        <div style={{ width: "10%", backgroundColor: "#0A84FF" }}></div>
      ))}
    </div>
  );
}

export default ProgressBar;
