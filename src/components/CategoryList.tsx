import React from "react";
import { styled } from "styled-components";

interface Props {
  goToNextPage: (input: string) => void | null;
}

function CategoryList(props: Props) {
  const categoryList: string[] = ["친목", "음료", "여행", "운동", "책/글", "커리어", "공연/축제", "음악", "만들기", "사진", "반려동물", "자유주제"];
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        height: "258px",
        justifyContent: "center",
        gridTemplateColumns: "80px 80px 80px 80px",
        gridTemplateRows: "80px 80px 80px",
        gridRowGap: "9px",
        gridColumnGap: "7.67px",
      }}
    >
      {categoryList.map((item) => (
        <CategoryDiv
          key={item}
          onClick={() => {
            console.log(item);
            props.goToNextPage(item);
          }}
        >
          {item}
        </CategoryDiv>
      ))}
    </div>
  );
}

const CategoryDiv = styled.div`
  background-color: #eceff2;
  border-radius: 22px;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
`;

export default CategoryList;
