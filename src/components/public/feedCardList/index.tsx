import FeedCard from "../feedCard";
import * as S from "./styles";
import { FeedCardProps } from "./../../../interfaces/feedCard";

export default function FeedCardList() {
  const arr: FeedCardProps[] = [
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc: "https://www.itnk.co.kr/news/photo/201908/61461_23574_4342.jpg",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc:
        "https://img.sbs.co.kr/newsnet/etv/upload/2019/01/14/30000621148_700.jpg",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc: "https://i.ytimg.com/vi/LhS6fgyvaPE/maxresdefault.jpg",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc:
        "https://www.newsnjoy.or.kr/news/photo/201612/207701_60260_5740.jpg",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc: "https://pbs.twimg.com/media/DBzrGMRV0AI0V2k.jpg:small",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc:
        "https://thumb.mt.co.kr/06/2021/03/2021031613463367586_1.jpg/dims/optimize/",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc:
        "https://file2.nocutnews.co.kr/newsroom/image/2020/12/10/20201210141744836229_8_450_300.jpg",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc: "https://i.ytimg.com/vi/oGJ2ACZY9ig/maxresdefault.jpg",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
    {
      profileSrc:
        "https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg",
      name: "김팔복",
      imgSrc:
        "https://img.seoul.co.kr/img/upload/2017/08/30/SSI_20170830094922_O2.jpg",
      time: "5",
      title: "오늘은 일케 임ㅂ음",
      tag: ["존잘", "ㅋㅋ"],
      heart: "6",
      userId: "1",
      feedId: "1",
    },
  ];
  const columnArr = [1, 2, 3, 4];
  return (
    <>
      <S.Wrapper>
        <S.Container>
          {columnArr.map((e, id) => (
            <S.Column key={e}>
              {arr
                .slice(
                  (arr.length / 4) * id,
                  (arr.length / 4) * id + arr.length / 4
                )
                .map((e, index) => (
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
