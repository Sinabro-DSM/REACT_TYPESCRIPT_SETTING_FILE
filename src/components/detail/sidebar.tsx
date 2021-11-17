import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { HeartProps } from "../../interfaces/detail";
import { COLOR } from "../../styles/index";
import { Share, Heart } from "../../assets/index";

const Sidebar = ({ heart }: HeartProps) => {
  const copyUrlRef: MutableRefObject<any> = useRef();
  const heartRef: MutableRefObject<any> = useRef();

  const [heartToggle, setHeartToggle] = React.useState<boolean>(false);

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
  return (
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
  );
};

export default Sidebar;
