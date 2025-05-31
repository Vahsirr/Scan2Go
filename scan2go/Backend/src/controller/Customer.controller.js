const CustomerModel=require('../model/Customer.model')
const { validationResult } = require('express-validator');
const jwt=require('jsonwebtoken');
const JWT_TOKEN="!!!!customer!!!!";
const nodemailer=require('nodemailer');


//Sending Email by using "Nodemailer"

const secureEmail = async (email,id) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'anandvsahay13@gmail.com',
          pass: 'itgiyxofqsowjimq'
        }
      });
      const mail = {
        from: "anandvsahay13@gmail.com",
        to: email,
        subject: "Scan2Go Email Verification",
        html: `<p>Hi User ,<br> Please <a href="http://localhost:2000/api/customer/verify?id=${id}">Verify</a> your Email</p>`
      };
      transporter.sendMail(mail, async (error, info) => {
        try {
          if (error) {
            console.log(error);
          } else {
            console.log("Email has been sent successfully", info.response);
          }
        } catch (error) {
          console.log(error);
        }
      })
  
    } catch (error) {
      console.log(error)
    }
  }
  
  //Route 1: Verifying Email  
  
  exports.verifyEmail = async (req, res) => {
    try {
      const register_table = await CustomerModel.updateOne({ _id: req.query.id }, { $set: { is_verified: 1 } });
      console.log("Data Updated in Registraion Table", register_table);
      res.json({ Message: "Your Email is Verified" });
    } catch (error) {
      console.log(error);
    }
  }

exports.registerCustomer = async (req, res) => {
    try {
        let success=false;

                const customer = new CustomerModel({
                    customer_email: req.body.email,
                    customer_mobile: req.body.mobile,
                });
                const savecustomer = await customer.save();
                const data = {
                    customer_data: {
                        id: savecustomer.id
                    }
                }
                const customer_registration_athentication = jwt.sign(data, JWT_TOKEN);
                success=true
                await res.status(200).json({success, Message: "New Mobile Number Registered", Response: savecustomer,Customer_Authentication:customer_registration_athentication  });
                secureEmail(req.body.email,savecustomer._id);
    } catch (error) {
        return await res.status(500).json({ Message:"Internal Server Error",error});
    }
}

exports.loginAndFetchCustomer = async (req, res) => {
    const { mobile } = req.body
    try {
        const error=await validationResult(req);
        if(!error.isEmpty()){
           return await res.status(400).json({Message:"Enter a valid Mobile Number",Error:error.array()});
        }else{
        let success=false;
        const customer = await CustomerModel.findOne({ customer_mobile: mobile });
        if (!customer) {
            success=false;
            return await res.status(400).json({success, Message: "You are Not Registered yet !" });
        } else {
            const data = {
                customer_data: {
                    id: customer.id
                }
            }
            const customer_login_athentication = jwt.sign(data, JWT_TOKEN);
                success=true
                return await res.status(200).json({success, Message: "Customer Login Successfull",Customer_Login_Authentication:customer_login_athentication });
        }
    }
    } catch (error) {
        return await res.status(500).json({ Message: 'Internal Server Error', Error: error.message });
    }
}



