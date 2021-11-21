import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { HeartProps } from "../../interfaces/detail";
import { COLOR } from "../../styles/index";
import { Share, Heart } from "../../assets/index";
import {
  ACCESS_TOKEN,
  requestWithAccessToken,
  requestWithOutAccessToken,
} from "../../utils/axios";

const Sidebar = ({ match }: any) => {
  const postId = match?.params?.id;
  const userId = localStorage.getItem("userId");

  const copyUrlRef = useRef<any>(null);
  const heartRef = useRef<any>(null);

  const [heartToggle, setHeartToggle] = React.useState<boolean>(false);
  const [hangerCnt, setHeart] = useState<number | string | undefined>();

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

  const requesteHeartGet = (postId: number) => {
    requestWithOutAccessToken({
      method: "get",
      url: `/post/hanger/${postId}`,
      headers: {},
      data: {
        postId,
      },
    })
      .then((res) => {
        setHeart(res);
      })
      .catch((err) => {});
  };

  const requesteHeartPost = (
    postId: number,
    userId: number | string | null
  ) => {
    requestWithAccessToken({
      method: "post",
      url: `/post/hanger`,
      headers: { authorization: "Bearer " + ACCESS_TOKEN },
      data: {
        postId,
        userId,
      },
    })
      .then((res) => {
        setHeartToggle(true);
        heartRef.current.style.backgroundColor = COLOR.subColor;
        requesteHeartGet(postId);
      })
      .catch((err) => {
        alert("로그인을 해주세요.");
      });
  };

  const requesteHeartDelete = (
    postId: number,
    userId: number | string | null
  ) => {
    requestWithAccessToken({
      method: "delete",
      url: `/post/hanger`,
      headers: { authorization: "Bearer " + ACCESS_TOKEN },
      data: {
        postId,
        userId,
      },
    })
      .then((res) => {
        setHeartToggle(false);
        heartRef.current.style.backgroundColor = COLOR.mainColor;
        requesteHeartGet(postId);
      })
      .catch((err) => {});
  };

  const clickHeart = () => {
    if (heartToggle === false) {
      requesteHeartPost(postId, userId);
    } else {
      requesteHeartDelete(postId, userId);
    }
  };

  useEffect(() => {
    requesteHeartGet(postId);
  }, []);

  return (
    <S.Sidebar>
      <div>
        <div ref={heartRef} onClick={clickHeart}>
          <Heart size="24" color="#ffffff" />
        </div>
        <span>{hangerCnt}개</span>
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
  );
};

export default Sidebar;
