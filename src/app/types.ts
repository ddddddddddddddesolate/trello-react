export interface UserType {
  id: string;
  name: string;
}

export interface CardType {
  id: string;
  columnId: string;
  userId: string;
  name: string;
  description?: string;
}

export interface ColumnType {
  id: string;
  name: string;
}

export interface CommentType {
  id: string;
  cardId: string;
  authorId: string;
  text: string;
}
