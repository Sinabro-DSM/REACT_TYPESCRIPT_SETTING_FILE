import * as S from "./styles";
import React from "react";
import { Heart } from "../../../assets";
import { FeedCardProps } from "./../../../interfaces/feedCard";

export default function FeedCard({
  profileSrc,
  name,
  imgSrc,
  time,
  title,
  tag,
  heart,
  userId,
  feedId,
}: FeedCardProps) {
  return (
    <S.Wrapper>
      <S.ProfileBox>
        <img src={profileSrc} />
        <span>{name}</span>
      </S.ProfileBox>
      <S.RepImg src={imgSrc} />
      <S.InforBox>
        <time>{time} days ago</time>
        <span>{title}</span>
        <S.TagBox>
          {tag.map((e: string, index: number) => (
            <div key={index}>#{e}</div>
          ))}
        </S.TagBox>
        <S.GoodBox>
          <Heart size="18" color="#9f9f9f" />
          <span>{heart}개</span>
        </S.GoodBox>
      </S.InforBox>
    </S.Wrapper>
  );
}

// 아래와 같이 사용

{/* <FeedCard
profileSrc="https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg"
name="김팔복"
imgSrc="https://www.itnk.co.kr/news/photo/201908/61461_23574_4342.jpg"
time="5"
title="오늘은 일케 임ㅂ음"
tag={["존잘", "ㅋㅋ"]}
heart="6"
userId="1"
feedId="1"
/> */}