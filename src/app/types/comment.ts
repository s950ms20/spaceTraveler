export interface MyComment {
  authorName: string;
  authorId: string;
  commentId: string;
  body: string;
  postId: number;
}

export class MyComment {
  constructor(
    authorName: string,
    authorId: string,
    commentId: string,
    body: string,
    postId: number
    ) {
    this.authorName = authorName;
    this.authorId = authorId;
    this.commentId = commentId;
    this.body = body;
    this.postId = postId;
  }
}
