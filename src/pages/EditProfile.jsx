import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useProfilePic from "../../hooks/useProfilePic";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    imageUrl: "",
  });
  const navigate = useNavigate();
  const { updateProfilePic } = useProfilePic();

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("user-info"));
    if (storedUserInfo) {
      setUserInfo(storedUserInfo);
      // Initialize inputs with current values
      setInputs({
        username: storedUserInfo.username || "",
        email: storedUserInfo.email || "",
        imageUrl: storedUserInfo.imageUrl || "",
      });
    } else {
      // Redirect if no user information is found
      navigate("/login");
    }
  }, [navigate]);

  const handleProfileUpdate = async () => {
    if (!userInfo) return;

    const userRef = doc(firestore, "users", userInfo.uid);

    const updatedFields = {
      username: inputs.username || userInfo.username,
      email: inputs.email || userInfo.email,
      imageUrl: inputs.imageUrl || userInfo.imageUrl,
    };

    try {
      await updateDoc(userRef, updatedFields);
      
      // Update local storage with new user info
      const updatedUserInfo = { ...userInfo, ...updatedFields };
      localStorage.setItem("user-info", JSON.stringify(updatedUserInfo));
      
      // If image URL was updated, call the profile pic update hook
      if (inputs.imageUrl && inputs.imageUrl !== userInfo.imageUrl) {
        await updateProfilePic(inputs.imageUrl);
      }
      
      console.log("Profile updated!");
      navigate("/profile");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (!userInfo) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <EditProfileContainer>
        <Title>Edit Profile</Title>
        
        <AvatarPreview>
          <Avatar 
            src={inputs.imageUrl || userInfo.imageUrl || "/blank-profile-picture.png"} 
            alt="Profile Picture" 
          />
          <PreviewText>Profile Image Preview</PreviewText>
        </AvatarPreview>
        
        <FormGroup>
          <InputLabel>Username</InputLabel>
          <Input
            placeholder="Enter username"
            defaultValue={userInfo.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <InputLabel>E-mail</InputLabel>
          <Input
            placeholder="Enter email"
            defaultValue={userInfo.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <InputLabel>User Profile Image</InputLabel>
          <Input
            placeholder="Enter image URL" 
            type="url"
            defaultValue={userInfo.imageUrl}
            onChange={(e) => setInputs({ ...inputs, imageUrl: e.target.value })}
          />
        </FormGroup>

        <ButtonGroup>
          <CancelButton onClick={() => navigate("/profile")}>Cancel</CancelButton>
          <EditButton onClick={handleProfileUpdate}>Save Changes</EditButton>
        </ButtonGroup>
      </EditProfileContainer>
    </>
  );
};

export default EditProfile;

const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  align-items: center;
  padding: 20px;
  color: #333;
  justify-content: center;
  text-align: left;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 36px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

const AvatarPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  object-fit: cover;
  border: 3px solid #ddd;
  margin-bottom: 10px;
`;

const PreviewText = styled.p`
  font-size: 14px;
  color: #666;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;
  max-width: 700px;
`;

const InputLabel = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 3px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: black;
  background-color: whitesmoke;
  
  &:focus {
    outline: none;
    border-color: rgb(199, 52, 8);
    box-shadow: 0 0 0 2px rgba(199, 52, 8, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const EditButton = styled.button`
  background-color: rgb(199, 52, 8);
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(131, 27, 9);
  }
`;

const CancelButton = styled.button`
  background-color: #6c757d;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5a6268;
  }
`;