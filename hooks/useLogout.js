import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const useLogout = () => {
    const [signOut, isLoggingOut, error] = useSignOut(auth);

    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info");

        }
        catch (error) {
            console.log(error);
        }
    };
    return {handleLogout, isLoggingOut, error};
};

export default useLogout;