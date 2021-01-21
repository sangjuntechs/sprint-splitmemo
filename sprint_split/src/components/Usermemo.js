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

  useEffect(() => {
    Axios.get("http://localhost:5000/usermemo").then((response) => {
      setMemo(response.data.data);
    });
  });

  const split = () => {
    const memoss = memo.map((memo) => {
      return memo.card_memo.split(" ");
    });
    setSplitMemo(memoss);
    console.log(splitMemo);
  };


  return (
    <div>
      <button onClick={split}>dd</button>
      {splitMemo.map((memo) => {
          return memo.map((memos) => {
              return <button onClick={() => {console.log(memos)}}>{memos}</button>
          })
      })}
    </div>
  );
};

export default UserMemo;
