import Input from "./writeComponent/input";
import * as S from "./styles";
import React, { useEffect, useState } from "react";
import Description from "./writeComponent/description";
import AddImg from "./addImg";
import { UploadInfor } from "../../interfaces/upload";
import FastAverageColor from "fast-average-color";
import { requestWithAccessToken } from "./../../utils/axios";

export default function Upload() {
  const [hashtagArr, setHashtagArr] = useState<string[]>([]);
  const [imgArr, setImgArr] = useState<string[]>([]);
  const [imgUrl, setImgUrl] = useState<string>("");
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

  const uploadPost = () => {
    const inforObj: UploadInfor = {
      title: data.title,
      files: imgArr,
      topInfo: data.top,
      bottomInfo: data.bottom,
      shoesInfo: data.shoes,
      content: data.description,
      tags: hashtagArr,
    };
    requestWithAccessToken({
      method: "post",
      url: "/post",
      headers: { "content-type": "multipart/form-data" },
      data: inforObj,
    })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        alert("에러");
      });
  };

  useEffect(() => {
    if (imgArr.length === 0) return;
    const getColor = new FastAverageColor();
    getColor
      .getColorAsync(imgUrl)
      .then((res) => {
        const r = res.value[0];
        const g = res.value[1];
        const b = res.value[2];
        console.log(r, g, b);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [imgUrl, imgArr]);

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
        <AddImg callbackSetImgArr={setImgArr} callbackSetImgUrl={setImgUrl} />
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
        <S.SubBtn onClick={uploadPost}>업로드</S.SubBtn>
      </S.Container>
    </S.Wrapper>
  );
}
