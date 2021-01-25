import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  padding: 8px;
  border: 2px solid black;
  margin: 2px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  background-color: #fcc729;
  cursor: pointer;
  transition: 0.2s linear;
  :hover {
    color: #fcc729;
    background-color: black;
  }
`;

const FoodCard = styled.div`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid gray;
  margin: 7px;
  background-color: #ffffcc;
`;

const UserMemo = () => {
  const [memo, setMemo] = useState([]);
  const [splitMemo, setSplitMemo] = useState([]);
  const [selectMemo, setSelectMemo] = useState([]);
  const [Foods, setFoods] = useState([]);
  const [filterFoods, setFilterFoods] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/usermemo").then((response) => {
      setMemo(response.data.data);
    });

    Axios.get("http://localhost:5000/food").then((response) => {
      setFoods(response.data.data);
    });
  }, []);

  const split = () => {
    const memoss = memo.map((memo) => {
      return memo.card_memo.split(" ");
    });
    setSplitMemo(memoss);
    console.log(splitMemo);
  };

  const filterFoodsFn = () => {
    // eslint-disable-next-line array-callback-return
    const filterFoods = Foods.filter((food) => {
      if (food.food_name) {
        return (
          food.food_name.toLowerCase().includes(selectMemo) ||
          food.food_group.toLowerCase().includes(selectMemo)
        );
      }
    });
    setFilterFoods(filterFoods);
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "foodName") {
      setSelectMemo(value);
    }
  };

  return (

    <div style={{ width: "100%", display: "flex" }}>
      <div style={{display:'flex'}}>
      <div>
        <div style={{ width: "100%", maxWidth:'800px' ,}}>
          <Button style={{ backgroundColor: "dodgerblue" }} onClick={split}>
            스플릿
          </Button>
          {splitMemo.map((memo) => {
            return memo.map((memos) => {
              return (
                <Button
                  onClick={filterFoodsFn}
                  onMouseOver={() => {
                    setSelectMemo(memos);
                  }}
                >
                  {memos}
                </Button>
              );
            });
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{display:'flex'}}>
          <input
            style={{ padding: "15px", margin: "5px" }}
            value={selectMemo}
            name="foodName"
            onChange={onChange}
          ></input>
          
          <Button style={{backgroundColor:'black', color:'white'}}onClick={filterFoodsFn}>찾기</Button>
          <Button style={{backgroundColor:'dodgerblue', color:'black'}}>피드백 ㄱ ㄱ</Button>
          </div>
          <div
            style={{
              height: "400px",
              minWidth: "300px",
              overflow: "scroll",
              border: "2px solid gray",
              borderRadius: "5px",
              margin: "10px",
              padding: "10px",
            }}
          >
            {filterFoods.map((foods) => {
              return (
                <FoodCard>
                  <div style={{ fontSize: "14px", margin: "3px" }}>
                    {`${foods.food_name}[${foods.food_group}] ${foods.food_standard_gram}g`}{" "}
                    <button style={{}}>선택</button>
                  </div>
                </FoodCard>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{}}>
        <div>
          <p style={{fontSize:'12px'}}>이전 섭취 목록</p>
          <div style={{width:'500px', height:'570px',border:'2px solid gray', borderRadius:'5px'}}>
            <div style={{padding:'10px', backgroundColor:'#99ffcc', borderRadius:'10px', margin:'5px'}}>사과를 담은 요거트 1개  150g</div>
            <div style={{padding:'10px', backgroundColor:'#99ffcc', borderRadius:'10px', margin:'5px'}}>참프레 허브 닭가슴살 2개 아임 닭 300g</div>
            <div style={{padding:'10px', backgroundColor:'#99ffcc', borderRadius:'10px', margin:'5px'}}>사과1 크래미3 구운계란2개 150g/150g/200g</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserMemo;
