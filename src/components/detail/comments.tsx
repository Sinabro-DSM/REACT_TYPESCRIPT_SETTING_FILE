import * as S from "./styles";
import { CommentProps } from "../../interfaces/detail";

interface Props {}

const Comments = ({
  user_id,
  comment,
}:
CommentProps) => {
  return (
    <S.CommentsBox>
      <S.Comment>
        <img src="https://www.fashionseoul.com/wp-content/uploads/2017/07/20170720_hiphop-6.jpg"/* {profileSrc} */ />
        <div>
          <span>{user_id}</span>
          <p>{comment}</p>
        </div>
      </S.Comment>
    </S.CommentsBox>
  );
};

export default Comments;
