import * as S from "./styles";

export default function AddImg() {
  return (
    <S.InpBox>
      <S.FlexBox>
        <label>
          사진추가
          <span>(3/10)</span>
        </label>
        <S.AddBtn />
      </S.FlexBox>
      <S.Description>사진을 클릭하면 대표사진으로 등록됩니다.</S.Description>
      <S.PreviewBox>
        <img
          src="http://fpost.co.kr/board/data/editor/1909/c985c35b91df6aac20ae74980335ffb9_1569457220_9471.jpg"
          alt=""
        />
      </S.PreviewBox>
    </S.InpBox>
  );
}
