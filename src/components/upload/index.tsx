import Input from "./writeComponent/input";
import * as S from "./styles";
import React, { useState } from "react";
import Description from "./writeComponent/description";
import AddImg from "./addImg";

export default function Upload() {
  const [hashtagArr, setHashtagArr] = useState<string[]>([]);
  const [imgArr, setImgArr] = useState<string[]>([]);
  const [data, setData] = useState({
    title: "",
    hashtag: "",
    description: "",
    top: "",
    bottom: "",
    shoes: "",
  });
  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const addHashtag = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setHashtagArr((arr) => [...arr, data.hashtag]);
    setData({
      ...data,
      hashtag: "",
    });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <Input
          pholder="게시물 제목을 입력하세요"
          label="제목"
          choose={false}
          event={handleEvent}
          name="title"
        />
        <form action="" onSubmit={addHashtag}>
          <Input
            pholder="해쉬태그를 추가해주세요. ( 엔터를 누르면 등록됩니다 )"
            label="해쉬태그"
            choose={false}
            event={handleEvent}
            name="hashtag"
            hashtagArr={hashtagArr}
            value={data.hashtag}
          />
        </form>
        <AddImg />
        <Description name="description" event={handleEvent} />
        <Input
          pholder="상의 정보를 적어주세요."
          label="상의 정보"
          choose={true}
          event={handleEvent}
          name="top"
        />
        <Input
          pholder="하의 정보를 적어주세요."
          label="하의 정보"
          choose={true}
          event={handleEvent}
          name="bottom"
        />
        <Input
          pholder="신발 정보를 적어주세요."
          label="신발 정보"
          choose={true}
          event={handleEvent}
          name="shoes"
        />
        <S.SubBtn>업로드</S.SubBtn>
      </S.Container>
    </S.Wrapper>
  );
}
