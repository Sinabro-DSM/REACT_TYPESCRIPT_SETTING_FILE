import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Comments from "./comments";
import {
  ACCESS_TOKEN,
  requestWithAccessToken,
  requestWithOutAccessToken,
} from "../../utils/axios";

const CommentBox = ({ match }: any) => {
  const postId = match?.params?.id;

  const [postComment, setPostComment] = useState<string>("");
  const [comments, setComments] = useState<object[]>([]);

  const requesteCommentGet = (postId: number) => {
    requestWithOutAccessToken({
      method: "get",
      url: `/comments`,
      headers: {},
      data: {},
    })
      .then((res) => {
        setComments(res);
      })
      .catch((err) => {});
  };

  const requesteCommentPost = (comment: string) => {
    requestWithAccessToken({
      method: "post",
      url: `/comments`,
      headers: { authorization: "Bearer " + ACCESS_TOKEN },
      data: {
        postId,
        comment,
      },
    })
      .then((res) => {
        requesteCommentGet(postId);
      })
      .catch((err) => {
        alert("로그인을 해주세요.");
      });
  };
  const onChange = (e: any) => {
    setPostComment(e.target.value);
  };
  const onSubmit = (e: any) => {
    if (e.key === "Enter" && postComment !== "") {
      requesteCommentPost(postComment);
    }
  };

  useEffect(() => {
    requesteCommentGet(postId);
  }, []);

  return (
    <S.CommentsBox>
      <p>댓글 {comments.length}개</p>
      <input
        type="text"
        placeholder="댓글 남기기 (엔터를 누르면 등록됩니다.)"
        onKeyDown={onSubmit}
        onChange={onChange}
        required
      />
      {comments.map((data: any) => {
        return (
          <Comments
            //profileSrc="https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg" // 기본이미지 가져오기
            user_id={data.user_id}
            comment={data.comment}
          />
        );
      })}
    </S.CommentsBox>
  );
};

export default CommentBox;
