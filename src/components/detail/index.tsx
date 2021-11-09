import React, { useState } from "react";
import * as S from "./styles";
import { PostProps } from "../../interfaces/detail";
import Comments from "./comments";
import Hashtag from "../public/hashtag/hashtag";
import Clothes from "./clothes";
import Sidebar from "./sidebar";
import PhotoContatiner from "./photoContatiner";

const Detail = ({
  profileSrc,
  imgSrc,
  time,
  title,
  tag,
  contents,
  commentCount,
  heart,
}: //userId,
//postId,
PostProps) => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const showModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <S.Wapper>
        <S.Container>
          <Sidebar heart={heart} />
          <S.Top>
            <S.PostInformation>
              <span>제목</span>
              <h1>{title}</h1>
              <span>{time} days ago</span>
              <S.TagBox>
                {tag.map((e: string, index: number) => (
                  <Hashtag key={index} contents={e} />
                ))}
              </S.TagBox>
            </S.PostInformation>
            <S.Profile src={profileSrc} />
          </S.Top>
          <PhotoContatiner imgSrc={imgSrc} open={showModal} show={modalShow} />
          <S.Explanation>
            <h6>설명</h6>
            <p>{contents}</p>
          </S.Explanation>
          <S.CommentsBox>
            <p>댓글 {commentCount}개</p>
            <input
              type="text"
              placeholder="댓글 남기기 (엔터를 누르면 등록됩니다.)"
            />
            <Comments
              profileSrc="https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg"
              name="야길동"
              contents="예뼈요~"
            />
          </S.CommentsBox>
        </S.Container>
        <Clothes
          close={showModal}
          show={modalShow}
          top="마크곤잘레스 4XL"
          bottom="유니클로 청바지 4XL"
          shoes="나이기 에어 4XL"
        />
      </S.Wapper>
    </>
  );
};

export default Detail;
