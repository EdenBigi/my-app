import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { log } from 'console';
import UserLoggedIn from './UserLoggedIn';
import { Divider } from 'antd';


type Props = {
    setRes: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<Props> = ({ setRes }) => {
    const [message, setMessage] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [isLoginSubmit, setIsLoginSubmit] = useState(false);
    const [isSignUpSubmit, setIsSignUpSubmit] = useState(false);

    const [fieldsSignIn, setFieldsSignIn] = useState({
        email: "",
        password: ""
    })
    const [fieldsSignUp, setFieldsSignUp] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    function SignIn() {

        fetch("../backy2y/routes/sessions/login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(fieldsSignIn)
            })

            .then((res) => {

                if (res.statusText === "UserSignedIn") {
                    console.log(res.statusText);
                    navigate(`/userloggedin/`);
                    setRes(res.statusText);
                }
                else if (res.status === 404) {

                    console.log();

                }
                setIsLoginSubmit(true);
            })

            .catch(function (res) { console.log(res) })

    }


    let signUpWasClicked = () => {
        console.log(fieldsSignUp.password + " " + fieldsSignUp.confirmPassword);

        if (fieldsSignUp.password === fieldsSignUp.confirmPassword) {
            postData('http://localhost:5051/api/users', fieldsSignUp)
                .then(data => {
                    console.log("user login returned from server", data); // JSON data parsed by `data.json()` call
                });
        }
        else {
            setMessage("the password is invalid");
        }
        // Example POST method implementation:
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });

            setIsSignUpSubmit(true);
            return response.json(); // parses JSON response into native JavaScript objects
        }
    }

    return (
        <>
            <div className="bg-gray-100 min-h-screen min-w-screen flex justify-center items-center md:py-2">

                {
                    isLogin ? (
                        <div className="SquareRegular bg-white rounded-2xl xl:py-32 lg:py-24 md:py-16 sm:py-16 py-12 shadow-2xl flex flex-col w-4/5 md:w-3/5 sm:w-3/5 lg:w-2/3  items-center max-w-4xl transition duration-1000 ease-out">
                            <h2 className='p-3 text-3xl font-bold text-gray-500'>Yad-2-Yokra</h2>
                            <div className="inline-block border-[1px] justify-center w-[198px] border-gray-500 border-solid"></div>
                            <h3 className='text-xl font-semibold text-gray-500 pt-2'>Sign In!</h3>
                            <div className='flex space-x-2 m-4 items-center justify-center'>
                                <div className='socialIcon'>
                                    <BsFacebook className="text-blue-700" />
                                </div>
                                <div className='socialIcon'>
                                    <BsGithub />
                                </div>
                                <div className='socialIcon'>
                                    <FcGoogle />
                                </div>
                            </div>

                            {/* Inputs */}
                            <div className='flex flex-col items-center justify-center xl:w-2/6 lg:w-2/6 md:w-2/5 sm:w-3/5 w-3/5'>
                                <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-gray-500  m-1 focus:shadow-md focus:border-blue-400 focus:outline-none focus:ring-0' placeholder='Email' name="email" onChange={(e) => setFieldsSignIn({ ...fieldsSignIn, [e.target.name]: e.target.value })}></input>
                                <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-gray-500  m-1 focus:shadow-md focus:border-blue-400 focus:outline-none focus:ring-0' placeholder='Password' name="password" onChange={(e) => setFieldsSignIn({ ...fieldsSignIn, [e.target.name]: e.target.value })}></input>
                                <button className='rounded-2xl m-2 text-white bg-gray-500 px-6 py-2 shadow-md border-gray-500  hover:bg-blue-400 transition duration-200 ease-in' onClick={SignIn}>
                                    Sign In
                                </button>
                            </div>


                            <div className="inline-block border-[1px] justify-center w-20 border-gray-500 border-solid"></div>
                            <p className='text-gray-500 mt-4 text-sm'>Don't have an account?</p>
                            <p className='text-blue-500 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(false)}>Create a New Account?</p>
                        </div>

                    ) : (

                        <div className="SquareRegular backgroundArctic xl:py-32 lg:py-24 md:py-16 sm:py-16 py-12 text-white rounded-2xl shadow-2xl w-3/5 md:w-3/5 sm:w-3/5 lg:w-2/3   flex flex-col items-center max-w-4xl transition duration-1000 ease-in">
                            <h2 className=' p-3 text-3xl font-bold text-black'>Yad-2-Yokra</h2>
                            <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
                            <h3 className='text-xl font-semibold text-black pt-2'>Create Account!</h3>
                            <div className='flex space-x-2 m-4 items-center justify-center'>
                                <div className="socialIcon ">
                                    <BsFacebook className="text-blue-700" />
                                </div>
                                <div className="socialIcon ">
                                    <BsGithub className="text-black" />
                                </div>
                                <div className="socialIcon" >
                                    <FcGoogle />
                                </div>
                            </div>
                            {/* Inputs */}
                            <div className='flex flex-col items-center justify-center mt-2 xl:w-2/6 lg:w-2/6 md:w-2/5 sm:w-3/5'>
                                <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-gray-500 m-1 focus:shadow-md focus:border-blue-400 focus:outline-none focus:ring-0 text-black' placeholder='Email' name="email" onChange={(e) => setFieldsSignUp({ ...fieldsSignUp, [e.target.name]: e.target.value })}></input>
                                <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-gray-500 m-1 focus:shadow-md focus:border-blue-400 focus:outline-none focus:ring-0 text-black' placeholder='Password' name='password' onChange={(e) => setFieldsSignUp({ ...fieldsSignUp, [e.target.name]: e.target.value })}></input>
                                <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-gray-500 m-1 focus:shadow-md focus:border-blue-400 focus:outline-none focus:ring-0 text-black' placeholder='Confirm Password' name='confirmPassword' onChange={(e) => setFieldsSignUp({ ...fieldsSignUp, [e.target.name]: e.target.value })}></input>

                                <button className='rounded-2xl m-4 text-white bg-gray-500 px-6 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in' onClick={signUpWasClicked}>
                                    Sign Up
                                </button>
                            </div>

                            {message ? <div className='items-center mx-5 text-red-700 '>{message}</div> : ""}

                            <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
                            <p className='text-gray-500 mt-4 text-sm'>Already have an account?</p>
                            <p className='text-blue-500 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Sign In to your Account?</p>
                        </div>
                    )
                }




            </div>

        </>
    )
}

export default Login;
