import * as S from "./styles";
import { CommentProps } from "../../interfaces/detail";
import { BaseProfile } from "../../assets";

const Comments = ({
  //profileSrc,
  user_id,
  comment,
}:
CommentProps) => {
  return (
    <S.CommentsBox>
      <S.Comment>
        <img src={BaseProfile} />
        <div>
          <span>{user_id}</span>
          <p>{comment}</p>
        </div>
      </S.Comment>
    </S.CommentsBox>
  );
};

export default Comments;
