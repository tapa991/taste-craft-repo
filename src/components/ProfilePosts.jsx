import useGetUserPosts from "../../hooks/useGetUserPosts"
import styled from "styled-components";

const ProfilePosts = (uid) => {
    const { isLoadingPosts, posts } = useGetUserPosts(uid);

    if (posts.length == 0) {
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
                            <PostImage src={post.imageUrl} style={{ maxWidth: '150px' }}/>
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
  max-width: 150px;
  height: auto;
  border-radius: 8px;
`;

export default ProfilePosts