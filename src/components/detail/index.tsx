import React, { MutableRefObject, useRef, useState } from "react";
import * as S from "./styles";
import { PostProps } from "../../interfaces/detail";
import Comments from "./comments";
import {
  ClothesInformation,
  Share,
  Prev,
  Next,
  Heart,
} from "../../assets/index";
import Hashtag from "../public/hashtag/hashtag";

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
  const PhotoBoxRef: MutableRefObject<any> = useRef();
  const copyUrlRef: MutableRefObject<any> = useRef();

  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [photoLocaltion, setPhotoLocation] = useState<number>(0);

  const NextSlide = () => {
    PhotoBoxRef.current.style.transform = "translate(-400px)";
    if (imgSrc.length != photoIndex) {
      setPhotoLocation(photoLocaltion + 400);
      console.log(photoLocaltion);
      setPhotoIndex(photoIndex + 1);
    }
  };

  const PrevSlide = () => {
    PhotoBoxRef.current.style.transform = "translate(0px)";
    if (imgSrc.length != 0) {
      setPhotoLocation(photoLocaltion - 400);
      console.log(photoLocaltion);
      setPhotoIndex(photoIndex + 1);
    }
  };

  const copyUrl = (e: any) => {
    if (!document.queryCommandSupported("copy")) {
      return alert("복사 기능이 지원되지 않는 브라우저입니다.");
    } else {
      copyUrlRef.current.select();
      document.execCommand("copy");
      e.target.focus();
      return alert("링크가 복사되었습니다.");
    }
  };

  return (
    <S.Wapper>
      <S.Container>
        <S.Sidebar>
          <div>
            <div>
              <Heart size="24" color="#ffffff" />
            </div>
            <span>{heart}개</span>
          </div>
          <div>
            <div onClick={copyUrl}>
              <Share />
              <form>
                <textarea ref={copyUrlRef} value={window.location.href} />
              </form>
            </div>
            <span>Share</span>
          </div>
        </S.Sidebar>
        <S.Head>
          <S.PostInformation>
            <span>제목</span>
            <h1>{title}</h1>
            <span>{time}</span>
            <S.TagBox>
              {tag.map((e: string, index: number) => (
                <Hashtag key={index} contents={e} />
              ))}
            </S.TagBox>
          </S.PostInformation>
          <S.Profile src={profileSrc} />
        </S.Head>
        <S.PhotoContainer>
          <S.PrevBtn onClick={PrevSlide}>
            <Prev />
          </S.PrevBtn>
          <S.PhotoBox>
            <S.ClothesInformation>
              <ClothesInformation />
            </S.ClothesInformation>
            <div ref={PhotoBoxRef}>
              {imgSrc.map((e: string, index: number) => (
                <S.Photo key={index} src={e} />
              ))}
            </div>
          </S.PhotoBox>
          <S.NextBtn onClick={NextSlide}>
            <Next />
          </S.NextBtn>
        </S.PhotoContainer>
        <S.PhotoPageCount>1/6</S.PhotoPageCount>
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
            profileSrc=""
            name=""
            contents = ""
            />
        </S.CommentsBox>
      </S.Container>
    </S.Wapper>
  );
};

export default Detail;
