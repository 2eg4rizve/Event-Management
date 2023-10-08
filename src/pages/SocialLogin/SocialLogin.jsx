/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { user, googleLogin, githubLogin } = useContext(AuthContext);

    // console.log(user)

    const navigate = useNavigate();



    const handleSocialLogin = (media) => {
        media()
            .then(() => {
                toast.success("User Created Successfully")
                navigate('/')
            })
            .catch(error => {
                toast.error(error.massage)
            })
    }


    return (
        <>
            <div className="text-center mb-[10px]">continue with</div>
            <div className="flex justify-around">

                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-primary   text-black bg-[#F4E869]">Google
                </button>


                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn btn-primary   text-black bg-[#F4E869]">Github
                </button>





            </div>
        </>
    );
};

export default SocialLogin;