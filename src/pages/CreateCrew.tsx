import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";

function CreateCrew() {
  const navigate = useNavigate();
  const goToNextPage = (selectedCategory: string) => {
    navigate("/create_crew2");
    sessionStorage.setItem("category", selectedCategory);
  };
  return (
    <div>
      <Header prevPage="/" />
      <ProgressBar step={1} />
      <p>관심사를 선택해주세요.</p>
      <CategoryList goToNextPage={goToNextPage} />
    </div>
  );
}

export default CreateCrew;
