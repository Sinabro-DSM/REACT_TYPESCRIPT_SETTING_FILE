import * as S from "../styles";
import { InputProps } from "../../../interfaces/upload";
import Hashtag from "../../public/hashtag/hashtag";

export default function Input({
  label,
  pholder,
  choose,
  event,
  hashtagArr,
  name,
  value,
}: InputProps) {
  return (
    <S.InpBox>
      <label>
        {label}
        <span>{choose && "( 선택 )"}</span>
      </label>
      <input
        name={name}
        placeholder={pholder}
        onChange={event}
        value={value && value}
      ></input>
      {hashtagArr && hashtagArr.length > 0 && (
        <S.HashtagBox>
          {hashtagArr.map((e, index: number) => (
            <Hashtag contents={e} key={index} />
          ))}
        </S.HashtagBox>
      )}
    </S.InpBox>
  );
}
