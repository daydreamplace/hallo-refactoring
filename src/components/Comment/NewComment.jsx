import { useState } from 'react';
import Modal from '../Modal/Modal';
import styles from './NewComment.module.scss';

const NewComment = ({
  id,
  profile,
  user,
  created_at,
  comment,
  deleteComment,
  modifyComment,
}) => {
  const [commentModal, setCommentModal] = useState(false);
  const [modify, setModify] = useState(false);
  const [text, setText] = useState('');

  return (
    <>
      <div className={styles.newComment}>
        <div className={styles.commentHeader}>
          <div className={styles.commentInfoWrapper}>
            <span className={styles.commentProfile}>
              <img src={profile} width="100%" alt={profile} />
            </span>
            <div className={styles.commentInfo}>
              <span className={styles.commentUser}>{user}</span>
              <span className={styles.commentDate}>{created_at}</span>
            </div>
          </div>
          <div className={styles.commentChangeBtn}>
            <button
              className={styles.commentModify}
              onClick={() => {
                setText(comment);
                setModify(true);
              }}
            >
              수정
            </button>
            <button
              className={styles.commentDelete}
              onClick={() => {
                setCommentModal(!commentModal);
              }}
            >
              삭제
            </button>
          </div>
        </div>
        {modify ? (
          <>
            <textarea
              type="text"
              value={text || ''}
              className={styles.commentInput}
              placeholder="댓글을 입력하세요."
              onChange={event => {
                setText(event.target.value);
              }}
            />
            <div className={styles.modifyButton}>
              <button
                onClick={() => {
                  setModify(false);
                }}
              >
                취소
              </button>
              <button
                className={styles.confirmButton}
                onClick={() => {
                  if (modify) {
                    setModify(false);
                    setText('');
                    modifyComment(id, { comment: text, user: user });
                    return;
                  }
                }}
              >
                완료
              </button>
            </div>
          </>
        ) : (
          <div className={styles.commentContent}>{comment}</div>
        )}
      </div>
      <Modal
        visible={commentModal}
        text="댓글을 삭제하시겠어요?"
        cancelText="아니요"
        confirmText="네, 삭제할래요"
        onClose={() => {
          setCommentModal(false);
        }}
        onConfirm={() => {
          deleteComment(id, user);
        }}
      />
    </>
  );
};

export default NewComment;
