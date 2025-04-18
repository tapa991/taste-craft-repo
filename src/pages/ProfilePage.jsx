import Header from '../components/Header'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import ProfilePosts from '../components/ProfilePosts';

const ProfilePage = () => {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();

  return (
    <>
    <Header/>
        <ProfileContainer>
        <ProfileCard>
            <ProfileCardColumn>
            <Avatar src={userInfo.imageUrl || "/blank-profile-picture.png"} alt="Profile Picture" />
            <Button onClick={() => navigate("/editProfile")}>Edit Profile</Button>
            </ProfileCardColumn>

            <ProfileCardColumn>
                <Name>{userInfo.username}</Name>
                <Bio>Email: {userInfo.email}</Bio>
                {/* <Bio>Phone: N/A</Bio>
                <Bio>Subscription: Free</Bio> */}
            </ProfileCardColumn>
        </ProfileCard>
        

        <h2>Shared Meals</h2>
        <Button onClick={() => navigate("/upload")}>Upload Recipe</Button>
        <RecipeContainer>
          <ProfilePosts uid={userInfo.uid}/>
        </RecipeContainer>
    </ProfileContainer>
    </>
  )
}

export default ProfilePage

const ProfileContainer = styled.div`
    margin-left: 100px;
    margin-top: 50px;
`;

const ProfileCard = styled.div`
  display: flex;
  gap: 45px;
  background:rgb(251, 248, 248);
  padding: 2rem;
  border-radius: 5px;
  width: 600px;
  margin-bottom: 80px;
`;

const ProfileCardColumn = styled.div`
  display:flex;
  flex-direction: column;
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #333;
`;

const Bio = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const RecipeContainer = styled.div`
    display: flex;
    align-items: center; 
    gap:50px;
`;

const Image = styled.img`
    height:200px;
    width: 200px;
    object-fit: cover;
    border-radius: 10px;
`;