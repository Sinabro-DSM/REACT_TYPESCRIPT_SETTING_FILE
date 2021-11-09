import * as S from "./styles";
import FeedCard from "../feedCard";
import { FeedCardProps, FeedListProps } from "./../../../interfaces/feedCard";
import { useEffect, useState } from "react";

export default function FeedCardList({ newArr }: FeedListProps) {
  const [columnArr, setColumnArr] = useState<any[]>([]);
  const [check, setCheck] = useState<boolean>(false);
  let tmpArr: any[] = [[], [], [], []];
  useEffect(() => {
    check ? (tmpArr = columnArr) : setCheck(true);
    for (let i = 0; i < 4; i++) {
      const length = newArr.length / 4;
      for (let j = length * i; j < length * i + length; j++) {
        const addArr = newArr[j];
        addArr && tmpArr[i].push(addArr);
      }
    }
    setColumnArr(() => tmpArr);
  }, [newArr]);
  return (
    <>
      <S.Wrapper>
        <S.Container>
          {columnArr.map((arr: any, id: number) => (
            <S.Column key={id}>
              {arr.map((e: FeedCardProps, index: number) => (
                <S.Content key={index}>
                  <FeedCard
                    profileSrc={e.profileSrc}
                    name={e.name}
                    imgSrc={e.imgSrc}
                    time={e.time}
                    title={e.title}
                    tag={e.tag}
                    heart={e.heart}
                    userId={e.userId}
                    feedId={e.feedId}
                  />
                </S.Content>
              ))}
            </S.Column>
          ))}
        </S.Container>
      </S.Wrapper>
    </>
  );
}
