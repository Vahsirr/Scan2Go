import React, { useState } from 'react'
import {Toaster,toast} from 'react-hot-toast'
import OtpInput from 'otp-input-react'
import PhoneInput from 'react-phone-input-2'
import { BsShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import 'react-phone-input-2/lib/style.css'
import { auth} from './firebase'
import { useNavigate } from 'react-router-dom'
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth'
const MobileAuthentication = () => {
    const  navigate=useNavigate();
    const [otp, setOtp] = useState("")
    const [ph, setPh] = useState("")
    const [showotp, setShowOTP] = useState(false);
    const onCaptchaVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invidible',
                callback: (response) => {
                    onSignup()
                },
                'expired-callback': () => {
                }
            }, auth);
        }
    }
    const onSignup = () => {
        onCaptchaVerify()
        const appVerifier = window.recaptchaVerifier
        const formatPh = '+' + ph
        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setShowOTP(true);
                toast.success("OTP sent successfully")
            }).catch((error) => {
                console.log(error)
            });
    }
    const onOTPVerify=()=>{
        window.confirmationResult.confirm(otp).then(async(res)=>{
            alert("Login Successfull");
               navigate('/userpage')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <div className='d-flex justify-content-center flex-column align-items-center text-white vh-100'>
                <Toaster toastOptions={{duration:4000}}/>
                <div id="recaptcha-container"></div>
                <p className='fs-4'>
                    Welcome To
                </p>
                <p className='fw-semibold fs-3'>
                    Scan2Go
                </p>
                {showotp ?
                    <>
                        <div className='text-white p-4 bg-dark rounded-circle'>
                            <BsShieldLockFill size={30} />
                        </div>
                        <label htmlFor="otp" className='fs-5 mt-2'>
                            Enter your OTP
                        </label>
                        <div className='text-center mt-3'>
                            <OtpInput
                                OTPLength={6}
                                value={otp}
                                onChange={setOtp}
                                otpType="number"
                                disabled={false}
                                autofocus
                                className="container"
                            >
                            </OtpInput>
                        </div>
                        <div>
                            <div className=''>
                                <button onClick={onOTPVerify} className='btn btn-lg btn-dark mt-3 px-3'>
                                    <span>Verify OTP</span>
                                </button>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className='text-white p-4 bg-dark rounded-circle'>
                            <BsTelephoneFill size={30} />
                        </div>
                        <label htmlFor="ph" className='fs-5 mt-2'>
                            Enter Your Mobile Number
                        </label>
                        <div className='text-center mt-3'>
                            <PhoneInput country={'in'} value={ph} onChange={setPh} />
                        </div>
                        <div>
                            <div className='text-center'>
                                <button className='btn btn-lg btn-dark mt-3' onClick={onSignup}>
                                    <span>Send code via SMS</span>
                                </button>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}
export default MobileAuthentication