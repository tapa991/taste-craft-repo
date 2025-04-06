import useGetUserPosts from "../../hooks/useGetUserPosts"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProfilePosts = (uid) => {
    const { isLoadingPosts, posts } = useGetUserPosts(uid);
    const navigate = useNavigate();

    const navigateToPostPage = (id) => {
      console.log(id);
      navigate(`/post/${id}`);
    }  

    if (isLoadingPosts) {
      return <h2>Loading...</h2>
    }
    else if (posts.length == 0) {
        return <h2>You have no posts!</h2>
    }
    else {
        return (
            <>
            <PostList>
                {posts.map(post => (
                    <PostItem key={post.id}>
                        <PostContainer>
                            <h3>{post.title}</h3>
                            <PostImage src={post.imageUrl} onClick={() => navigateToPostPage(post.id)}/>
                        </PostContainer>
                    </PostItem>
                ))}
            </PostList>
            </>
        )
    }
    
}

const PostList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 0;
  list-style: none;
`;

const PostItem = styled.li`
  flex: 0 0 auto;
`;

const PostContainer = styled.div`
  text-align: center;
`;

const PostImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 4px solid black;
  transition: border 0.1s ease; /* Optional: Adds a smooth transition effect */
  
  &:hover {
    border: 4px solid white; /* Change border size and color as needed */
  }
`;

export default ProfilePosts