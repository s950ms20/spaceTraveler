export interface MyComment {
  authorName: string;
  authorId: string;
  commentId: string;
  body: string;
}

export class MyComment {
  constructor(
    authorName: string,
    authorId: string,
    commentId: string,
    body: string
    ) {
    this.authorName = authorName;
    this.authorId = authorId;
    this.commentId = commentId;
    this.body = body;
  }
}
