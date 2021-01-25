import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid gray;
  padding: 30px;
`;

function FoodInfo() {
  return (
    <Container>
      선택된 음식 테이블
      <div
        style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}
      >
        음식명:
        <input style={{ padding: "6px" }} value="자반고등어구이" /> 브랜드:{" "}
        <input style={{ padding: "6px" }} value="" /> 먹은 양:{" "}
        <input style={{ padding: "6px" }} type="number" />g 먹은 개수:{" "}
        <input style={{ padding: "6px" }} type="number" />
      </div>
      <div
        style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}
      >
        음식명:
        <input style={{ padding: "6px" }} value="된장찌개" /> 브랜드:{" "}
        <input style={{ padding: "6px" }} value="" /> 먹은 양:{" "}
        <input style={{ padding: "6px" }} type="number" />g 먹은 개수:{" "}
        <input style={{ padding: "6px" }} type="number" />
      </div>
      <div
        style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}
      >
        음식명:
        <input style={{ padding: "6px" }} value="쌀밥" /> 브랜드:{" "}
        <input style={{ padding: "6px" }} value="" /> 먹은 양:{" "}
        <input style={{ padding: "6px" }} type="number" />g 먹은 개수:{" "}
        <input style={{ padding: "6px" }} type="number" />
      </div>
      <div
        style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}
      >
        음식명:
        <input style={{ padding: "6px" }} value="김치" /> 브랜드:{" "}
        <input style={{ padding: "6px" }} value="" /> 먹은 양:{" "}
        <input style={{ padding: "6px" }} type="number" />g 먹은 개수:{" "}
        <input style={{ padding: "6px" }} type="number" />
      </div>
      <div
        style={{ margin: "10px", padding: "10px", border: "1px solid gray" }}
      >
        음식명:
        <input style={{ padding: "6px" }} value="김치전" /> 브랜드:{" "}
        <input style={{ padding: "6px" }} value="" /> 먹은 양:{" "}
        <input style={{ padding: "6px" }} type="number" />g 먹은 개수:{" "}
        <input style={{ padding: "6px" }} type="number" />
      </div>
    </Container>
  );
}

export default FoodInfo;
