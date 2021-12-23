import { gql } from "@apollo/client";

const GET_POST = gql`
  query GetPost($postId: Float!) {
    getPost(postId: $postId) {
      id
      replyToId
      postId
      ownerId
      title
      description
      upvotes
      tags
      postedAt
      comments {
        id
        replyToId
        postId
        ownerId
        title
        description
        upvotes
        tags
        postedAt
      }
    }
  }
`;

export default GET_POST;