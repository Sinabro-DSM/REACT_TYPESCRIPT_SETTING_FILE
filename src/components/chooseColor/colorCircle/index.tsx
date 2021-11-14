import * as S from "./styles";
import { RGBList } from "../../../export/rgbList";

export default function ColorCircle() {
  const sqaureItems = [1, 2, 3, 4, 5, 6];

  return (
    <S.Container>
      {RGBList.map((rgb, index) => (
        <S.ColorLevelWrap key={index} deg={index}>
          {sqaureItems.map((item, index) => (
            <S.ColorSquare
              background={`rgb(${rgb.r},${rgb.g},${rgb.b},${1 / item})`}
              key={index}
            />
          ))}
        </S.ColorLevelWrap>
      ))}
    </S.Container>
  );
}
