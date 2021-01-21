import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  padding: 5px;
  border: 2px solid black;
  margin: 2px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  background-color: dodgerblue;
  cursor: pointer;
  transition: 0.2s linear;
  :hover {
    color: dodgerblue;
    background-color: black;
  }
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
      setFoods(response.data.data)
    })

  },[]);

  const split = () => {
    const memoss = memo.map((memo) => {
      return memo.card_memo.split(" ");
    });
    setSplitMemo(memoss);
    console.log(splitMemo);
  };

  const filterFoodsFn = () => {
      const filterFoods = Foods.filter((food) => {
          if (food.food_name) {
              return food.food_name.toLowerCase().includes(selectMemo)
          }
      });
      setFilterFoods(filterFoods)
  }


  return (
    <div>
      <button onClick={split}>스플릿</button>
      {splitMemo.map((memo) => {
          return memo.map((memos) => {
              return <Button onClick={filterFoodsFn} onMouseOver={() => {setSelectMemo(memos)}}>{memos}</Button>
          })
      })}
      <div>
      <input style={{padding:'15px', margin:'5px'}}value={selectMemo}></input>
      <button onClick={filterFoodsFn}>찾기</button>
      </div>
      <>{filterFoods.map((foods) => {
          return <div style ={{fontSize:'14px', margin:'3px'}}>{`${foods.food_name} ${foods.food_standard_gram}g`}</div>
      })}</>
    </div>

  
  );
};

export default UserMemo;
