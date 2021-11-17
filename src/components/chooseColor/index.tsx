import ColorCircle from "./colorCircle";
import * as S from "./styles";

export default function ChooseColor() {
  return (
    <S.Container>
      <S.Information>
        <div className="line" />
        <h1 className="title">
          HEX <strong>COLOR</strong> TO
          <br />
          FASHION
        </h1>
        <h3 className="sub-title">원하는 옷의 색상을 선택해주세요! </h3>
        <p className="description">
          저희 사이트에서는 '컬러' 에 집중하는사용자를 위해서
          <br />
          옷의 색상을 분석하여 분류하였습니다. <br />
          지금 바로 색상을 선택하여 옷을 만나보세요
        </p>
      </S.Information>
      <ColorCircle />
    </S.Container>
  );
}
