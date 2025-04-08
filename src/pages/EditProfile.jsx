import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useSignUp from "../../hooks/useSignUp";
import useProfilePic from "../../hooks/useProfilePic"; // Import the hook for updating profile picture
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

const EditProfile = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    imageUrl: "",
  });
  const navigate = useNavigate();
  const { login } = useLogin();
  const { signUp } = useSignUp();
  const { updateProfilePic } = useProfilePic(); 
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  const handleProfileUpdate = async () => {

    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const userRef = doc(firestore, "users", userInfo.uid);

    const updatedFields = {
        username: inputs.username || userInfo.username,
        email: inputs.email || userInfo.email,
        imageUrl: inputs.imageUrl || userInfo.imageUrl,
    };

    try {
        await updateDoc(userRef, updatedFields);
        localStorage.setItem("user-info", JSON.stringify({ ...userInfo, ...updatedFields }));
        console.log("Profile updated!");
        navigate("/profile");
    } catch (err) {
        console.error("Update failed:", err);
    }
};


  return (
    <>
      <Header />
      <EditProfileContainer>
        <Title>Edit Profile</Title>
        <FormGroup>
            <InputLabel>Username</InputLabel>
            <Input
                placeholder={userInfo.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
        </FormGroup>

        <FormGroup>
            <InputLabel>E-mail</InputLabel>
            <Input
                placeholder={userInfo.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
        </FormGroup>

        <FormGroup>
            <InputLabel>User Profile Image</InputLabel>
            <Input
                placeholder="Enter image URL" type="url"
                onChange={(e) => setInputs({ ...inputs, imageUrl: e.target.value })}
            />
        </FormGroup>

        <EditButton onClick={handleProfileUpdate}>Edit</EditButton>

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
  color: whitesmoke;
  justify-content: center;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 36px;
  padding: 10px 15px;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;
  max-width: 700px;
  justify-content: center;
`;

const InputLabel = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 3px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: black;
  background-color: whitesmoke;
`;

const EditButton = styled.button`
  background-color: rgb(199, 52, 8);
  color: white;
  font-size: 18px;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(131, 27, 9);
  }
`;