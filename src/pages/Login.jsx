import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const {login} = useLogin();
    const navigate = useNavigate();

    return (
        <LoginPageContainer>
            <BannerContainer>
                <Title>TasteCraft</Title>
                <P>A place to share and find recipes</P>
            </BannerContainer>
            <LoginContainer>
                <LoginDetails>
                    <h1>Sign in to TasteCraft</h1>
                    <Form>
                        <InputLabel>Username/E-mail</InputLabel>
                        <Input placeholder="Enter your username/e-mail..." />

<<<<<<< HEAD
                        <InputLabel>Password</InputLabel>
                        <Input style={{margin: 0}} type="password" placeholder="Enter your password..." />
                        <ForgotPassword>Forgot password?</ForgotPassword>

                        <LoginButton>Login</LoginButton>
                    </Form>
=======
                    <InputLabel>E-mail</InputLabel>
                    <Input placeholder="Enter your e-mail..." onChange={(e) => setInputs({ ...inputs, email: e.target.value})}/>

                    <InputLabel>Password</InputLabel>
                    <Input style={{margin: 0}} type="password" placeholder="Enter your password..." onChange={(e) => setInputs({ ...inputs, password: e.target.value})}/>

                    <LoginButton onClick={async () => {
                        await login({ email: inputs.email, password: inputs.password });
                        navigate("/")
                    }}>Login</LoginButton>
>>>>>>> b6443ceadebae5edcb6d5366749e88b6c56add7b
                    <Signup href="/signup">Sign up here</Signup>
                </LoginDetails>
            </LoginContainer>
        </LoginPageContainer>
    );
};

export default Login;

const LoginPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 50vw;
`;

const BannerContainer = styled.div`
    background-image: url("/buffet.jpeg"); /* Ensure the path is correct */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 40%;
    border-right-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 20px;
    color: white;
`;

const Title = styled.h1`
    font-size: 60px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    background-color: rgba(170, 170, 170, 0.7); /* Semi-transparent */
    padding: 10px 15px;
    border-radius: 10px;
`;

const P = styled.p`
    font-size: 30px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    background-color: rgba(170, 160, 170, 0.7); /* Semi-transparent */
    padding: 10px 15px;
    border-radius: 10px;
`;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    background-color: white;
`;

const LoginDetails = styled.div`
    text-align: left;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(30, 30, 30);
    font-size: 15px;
`;

const Form = styled.form`
    text-align: left;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(30, 30, 30);
    font-size: 15px;
`

const InputLabel = styled.h2`
    font-size: 18px;
    margin-bottom: 5px;
    align-self: flex-start;
    width: fit-content;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 450px;
    color: black;
<<<<<<< HEAD
=======
  
>>>>>>> b6443ceadebae5edcb6d5366749e88b6c56add7b
    margin-bottom: 20px;
    background-color: whitesmoke;
`;

const ForgotPassword = styled.a`
    color: rgb(24, 87, 146);
    font-size: 10px;
    margin-top: 10px;
    text-align: left;
    align-self: flex-start;
`

const LoginButton = styled.button`
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

const Signup = styled.a`
    color: rgb(24, 87, 146);
    font-size: 15px;
    margin-top: 15px;
    text-align: left;
`