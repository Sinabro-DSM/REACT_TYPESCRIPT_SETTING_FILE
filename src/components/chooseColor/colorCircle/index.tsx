import * as S from "./styles";
import { RGBList } from "../../../export/rgbList";
import { useHistory } from "react-router";

export default function ColorCircle() {
  const sqaureItems = [1, 2, 3, 4, 5, 6];
  const history = useHistory();

  const routeToFeedForRGB = ({ p_R, p_G, p_B, p_opacity }: any) => {
    const r = Math.round(p_R * p_opacity);
    const g = Math.round(p_G * p_opacity);
    const b = Math.round(p_B * p_opacity);
    history.push(`/feed?r=${r}&g=${g}&b=${b}`);
  };

  return (
    <S.Container>
      {RGBList.map((rgb, index) => (
        <S.ColorLevelWrap key={index} deg={index}>
          {sqaureItems.map((item, index) => (
            <S.ColorSquare
              onClick={() =>
                routeToFeedForRGB({
                  p_R: rgb.r,
                  p_G: rgb.g,
                  p_B: rgb.b,
                  p_opacity: 1 / item,
                })
              }
              background={`rgb(${rgb.r},${rgb.g},${rgb.b},${1 / item})`}
              key={index}
            />
          ))}
        </S.ColorLevelWrap>
      ))}
    </S.Container>
  );
}
