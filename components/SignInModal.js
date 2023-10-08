"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import SignUpModal from "./SignUpModal";

const SignInModal = ({ toggleModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTermsAgreedChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleSignIn = () => {
    // Perform your sign-in logic here
    // You can access the email, password, and termsAgreed states here
    // Remember to handle validation and any API requests as needed
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Terms Agreed:", termsAgreed);

    // Close the modal
    toggleModal();
  };

  const toggleSignUpModal = () => {
    setSignUpModal(!signUpModal);
  };

  return (
    <div className="fixed inset-0 backdrop-brightness-100  flex justify-center items-center">
      <div className="bg-[#f8fbff] text-center p-6 relative rounded-lg">
        <button
          className="close-button absolute top-0 right-6 bg-[#d4e8ff] rounded-lg p-1 mt-4"
          onClick={toggleModal}
        >
          <AiOutlineClose />
        </button>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center items-end ">
            <Image src="/CatsIcon.png" alt="CatsIcon" width={75} height={25} />
            <h1 className="theme-1 text-2xl">
              Cats<span className="theme-2">Ezy</span>
            </h1>
          </div>
          <p className="theme-2">Welcome To CatsEzy</p>
          <p className="text-gray-400 text-xs pb-4">
            Login to your account - share your adorable cat video
          </p>
        </div>

        <div className="modal-body space-y-4">
          {/* email field */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="bg-[#d4e8ff] rounded-lg py-2 px-10 block w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          {/* password field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="py-2 px-10 block w-full rounded-lg bg-[#d4e8ff] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              {showPassword ? (
                <AiOutlineEye
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={togglePasswordVisibility}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>

          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={handleTermsAgreedChange}
              className="my-4 mr-2"
            />
            Agreed to terms and conditions
          </label>
        </div>

        <div className="modal-footer">
          <button className="btn-primary" onClick={handleSignIn}>
            Sign In
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="mx-2">or</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div>
          <h1>
            Dont Have an Account?{" "}
            <button
              onClick={toggleSignUpModal}
              className="bg-[#04aeee] p-1 rounded-lg text-white"
            >
              SignUp
            </button>
          </h1>
        </div>

        {signUpModal && (
          <div>
            <SignUpModal
              toggleModal={toggleModal}
              toggleSignUpModal={toggleSignUpModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignInModal;
