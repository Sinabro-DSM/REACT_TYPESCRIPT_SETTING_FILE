import { DescirptionProp } from "../../../interfaces/upload";
import * as S from "../styles";

export default function Description({ event, name }: DescirptionProp) {
  return (
    <S.InpBox>
      <label>상세설명</label>
      <textarea
        name={name}
        placeholder="게시물에 대한 설명을 입력해주세요. ( 300자 이내 )"
        onChange={event}
      />
    </S.InpBox>
  );
}
