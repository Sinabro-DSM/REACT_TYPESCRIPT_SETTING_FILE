import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { PostProps } from "../../interfaces/detail";
import Comments from "./comments";
import { WIDTH, COLOR } from "../../styles/index";
import {
  ClothesInformation,
  Share,
  Prev,
  Next,
  Heart,
} from "../../assets/index";
import Hashtag from "../public/hashtag/hashtag";
import Clothes from "./clothes";

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
  const photoBoxRef: MutableRefObject<any> = useRef();
  const copyUrlRef: MutableRefObject<any> = useRef();
  const heartRef: MutableRefObject<any> = useRef();

  const subWidthString: string[] = WIDTH.sub.split("p");
  const subWidth: number = +subWidthString[0];

  const [modalShow, setModalShow] = useState<boolean>(false);
  const [heartToggle, setHeartToggle] = React.useState<boolean>(false);
  const [photoLocation, setPhotoLocation] = React.useState<number>(1);
  const [translatePhoto, setTranslatePhoto] = React.useState<number>(0);
  useEffect(() => {
    setTranslatePhoto(-(subWidth * (photoLocation-1)));
  }, [photoLocation]);
  useEffect(() => {
    console.log(photoLocation);
    console.log(translatePhoto);
    photoBoxRef.current.style.transform = `translateX(${translatePhoto}px)`;

  }, [translatePhoto]);

  const NextSlide = () => {
    if (photoLocation < imgSrc.length) {
      setPhotoLocation(photoLocation + 1);
    } else {
      alert("사진을 더이상 넘길 수 없습니다.");
    }
  };

  const PrevSlide = () => {
    if (photoLocation <= 1) {
      alert("사진을 더이상 넘길 수 없습니다.");
    } else {
      setPhotoLocation(photoLocation - 1);
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

  const clickHeart = () => {
    if (heartToggle === false) {
      setHeartToggle(true);
      heartRef.current.style.backgroundColor = COLOR.subColor;
    } else {
      setHeartToggle(false);
      heartRef.current.style.backgroundColor = COLOR.mainColor;
    }
  };

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <S.Wapper>
      <S.Container>
        <S.Sidebar>
          <div>
            <div ref={heartRef} onClick={clickHeart}>
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
            <span>{time} days ago</span>
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
            <S.ClothesInformation onClick={openModal}>
              <ClothesInformation />
            </S.ClothesInformation>
            <div ref={photoBoxRef}>
              {imgSrc.map((e: string, index: number) => (
                <S.Photo key={index} src={e} />
              ))}
            </div>
          </S.PhotoBox>
          <S.NextBtn onClick={NextSlide}>
            <Next />
          </S.NextBtn>
        </S.PhotoContainer>
        <S.PhotoPageCount>
          {photoLocation} / {imgSrc.length}
        </S.PhotoPageCount>
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
        close={closeModal}
        show={modalShow}
        top="마크곤잘레스 4XL"
        bottom="유니클로 청바지 4XL"
        shoes="나이기 에어 4XL"
      />
    </S.Wapper>
  );
};

export default Detail;
