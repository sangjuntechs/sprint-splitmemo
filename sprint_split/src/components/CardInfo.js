import React from 'react'
import styled from 'styled-components'
import image from '../img/AppIcon.jpg'

const CardContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border: 1px solid rgb(50,50,50);
    width:300px;
    background-color:rgb(50,50,50);
`

const CardMemoContainer = styled.div`
    display:flex;
    flex-direction:column;
    font-size:12px;
    width:300px;
    background-color:rgb(50,50,50);
    color:white;
    
`

const ImgCard = styled.img`
    width:300px;
    height:300px;
`

const P = styled.p`
    all: unset;
    margin:3px;
    border: 1px solid white;
    padding:3px;
`

function CardInfo() {

    return (
        <CardContainer>
            <ImgCard src={image}></ImgCard>
            <CardMemoContainer>
            <P>사용자명:ray</P>
            <P>사용자번호:10i3209490219501</P>
            <P>카드번호:7</P>
            <P>카드타입:food</P>
            <P>설정일시:2021/01/25</P>
            <P>작성일시:2021/01/25</P>
            <P>내용:고등어구이 1마리 된장찌개 1인분 공기밥 1공기 김치 20g 김치전 5조각</P>
            </CardMemoContainer>
        </CardContainer>
    )
}

export default CardInfo;