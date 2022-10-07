import { CommentType } from 'app/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentsState {
  comments: CommentType[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    createComment(state, { payload: newComment }: PayloadAction<CommentType>) {
      state.comments = [...state.comments, newComment];
    },
    updateComment(
      state,
      { payload: updatedComment }: PayloadAction<CommentType>
    ) {
      state.comments = state.comments.map((comment) => {
        if (comment.id === updatedComment.id) {
          return updatedComment;
        }

        return comment;
      });
    },
    deleteComment(state, { payload: deletedCommentId }: PayloadAction<string>) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== deletedCommentId
      );
    },
    resetComments(state) {
      state.comments = [];
    },
  },
});

export const commentsReducer = commentsSlice.reducer;
export const { createComment, updateComment, deleteComment, resetComments } =
  commentsSlice.actions;
