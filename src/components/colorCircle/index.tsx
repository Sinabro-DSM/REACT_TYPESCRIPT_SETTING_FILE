import * as S from "./styles";

export default function ColorCircle() {
  const sqaureItems = [1, 2, 3, 4, 5, 6];
  const levelItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const setColor = (item: number) => {
    return 255 - (10 - item) * 20;
  };
  return (
    <S.Container>
      {levelItems.map((level, index) => (
        <S.ColorLevelWrap key={index} deg={level}>
          {sqaureItems.map((item, index) => (
            <S.ColorSquare
              background={`rgb(${255},${setColor(item)},${setColor(item)})`}
              key={index}
            />
          ))}
        </S.ColorLevelWrap>
      ))}
    </S.Container>
  );
}
