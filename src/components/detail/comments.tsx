import * as S from "./styles";
import { CommentProps } from "../../interfaces/detail";

const Comments = ({
  profileSrc,
  name,
  contents,
}: //userId
CommentProps) => {
  return (
    <S.CommentsBox>
      <S.Comment>
        <img src={profileSrc} />
        <div>
          <span>{name}</span>
          <p>{contents}</p>
        </div>
      </S.Comment>
    </S.CommentsBox>
  );
};

export default Comments;
