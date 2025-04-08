import { useParams } from 'react-router-dom';
import useGetPostById from '../../hooks/useGetPostById';
import styled from 'styled-components';
import Header from '../components/Header';

const PostPage = () => {
    const { id } = useParams();
    const { isLoading, postData, userData } = useGetPostById(id);

    if (isLoading) {
        return <></>;
    }

    return (
        <>
        <Header/>
        <Container>
            <h2>Poster: {userData.username}</h2>
            <h2>{postData.title}</h2>
            <img src={postData.imageUrl} alt="" style={{ width: '30%' }} />
            <p>{postData.description}</p>

            <Section>
                <h3>Ingredients</h3>
                <ul>
                    {postData.ingredients && postData.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </Section>

            <Section>
                <h3>Instructions</h3>
                <ol>
                    {postData.instructions && postData.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </Section>
        </Container>
        </>
    );
};

export default PostPage;

// Styled Components

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const Section = styled.div`
    margin-bottom: 20px;
    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    ul, ol {
        padding-left: 20px;
    }
`;
