import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Customeremailregistration = () => {
    const [credentitals, setCredentitals] = useState({ email: "", mobile:"" })
    let navigate = useNavigate()
    const registercustomer = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:2000/api/customer/registercustomer', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentitals.email, mobile: credentitals.mobile })
        });
        const json = await response.json();
        if (json.success) {
            //save the token and redirect
            localStorage.setItem('token', json.Customer_Authentication);
            navigate("/userpage");
            alert("Registration Successfull")
        } else if(json.Message === "Internal Server Error")  {
                 alert(json.Message); 
        }else{
            alert(json.Message);
        }
    }
    const onchangecustomer = (e) => {
        setCredentitals({ ...credentitals, [e.target.name]: e.target.value })
    }
  return (
    <div>
        <div>
            <div className="d-flex flex-column vh-100 justify-content-center align-items-center ">
                <form action="">
                <div className='text-center'><label className='mt-2 text-white fs-4'>Enter Your Email</label></div>
                <div className='mt-3'>
                    <input type="email" className='form-control mt-2 autofocus' name="email" onChange={onchangecustomer} value={credentitals.email}/>
                </div>
                <div className='mt-3 text-center'>
                    <button onClick={registercustomer} className='btn btn-primary btn-md'>Verify Email</button>
                </div>
                </form>                
            </div>
        </div>

    </div>
  )
}

export default Customeremailregistration