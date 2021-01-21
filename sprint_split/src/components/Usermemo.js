import React, { useEffect, useState } from 'react';
import Axios from 'axios'

const UserMemo = () => {

    const [memo, setMemo] = useState([]);
    const [splitMemo, setSplitMemo] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/usermemo').then((response) => {
            setMemo(response.data.data)
        })
    })

    const split = () => {
        const memoss = memo.map((memo) => {
            return memo.card_memo.split(" ")
        })
        setSplitMemo(memoss)
        console.log(splitMemo)
    }

    return (
        <div>
            <button onClick = {split}>split</button>
            {splitMemo.map((memo) => {
                return memo.map((memos) => {
                    return <button value={memos}>{memos}</button>
                })
            })}
        </div>
    )
}

export default UserMemo;