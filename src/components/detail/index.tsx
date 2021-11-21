import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Hashtag from "../public/hashtag/hashtag";
import Clothes from "./clothes";
import Sidebar from "./sidebar";
import PhotoContatiner from "./photoContatiner";
import {
  ACCESS_TOKEN,
  requestWithAccessToken,
  requestWithOutAccessToken,
} from "../../utils/axios";
import { DetailProps, ImgProps } from "../../interfaces/detail";
import CommentBox from "./commentBox";

const Detail = ({ match }: any) => {
  const postId = match?.params?.id;

  const [modalShow, setModalShow] = useState<boolean>(false);

  const [postContent, setPostContent] = useState<DetailProps>();
  const [photos, setPhotos] = useState<ImgProps>();

  const requestPost = (postId: number) => {
    requestWithOutAccessToken({
      method: "get",
      url: `/post/${postId}`,
      headers: {},
      data: {},
    })
      .then((res) => {
        setPostContent(res);
        setPhotos(res.picture);
      })
      .catch((err) => {});
  };

  const showModal = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    requestPost(postId);
  }, []);

  return (
    <>
      <S.Wapper>
        <S.Container>
          <Sidebar />
          <S.Top>
            <S.PostInformation>
              <span>제목</span>
              <h1>{postContent?.title}</h1>
              <span>6 days ago</span>
              <S.TagBox>
                {postContent?.tag?.map((e: string, index: number) => (
                  <Hashtag key={index} contents={e} />
                ))}
              </S.TagBox>
            </S.PostInformation>
            <S.Profile src="" />
          </S.Top>
          <PhotoContatiner
            picture={/* postContent?.picture */ []}
            open={showModal}
            show={modalShow}
          />
          <S.Explanation>
            <h6>설명</h6>
            <p>{postContent?.contents}</p>
          </S.Explanation>
          <CommentBox />
        </S.Container>
        <Clothes close={showModal} show={modalShow} />
      </S.Wapper>
    </>
  );
};

export default Detail;
