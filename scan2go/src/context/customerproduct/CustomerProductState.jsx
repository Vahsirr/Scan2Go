import React, { useState } from "react";
import customerproductContext from "./CustomerProductContext";
const localhost = "http://localhost:4000"
const CustomerProductState = (props) => {
    const getcustomerpurchaseitem = {};
    const [getcustomerpurchase, setGetCustomerPurchase] = useState(getcustomerpurchaseitem)


    // getting customer seleted products
    const getCustomerSeletedProducts = async (bid) => {
        const response = await fetch(`${localhost}/api/product/getproductbybarcode/${bid}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
        if (json.Message === "Success") {
               console.log(json.data)
               setGetCustomerPurchase(json.data);       

        }
    }

    //Adding a Product

    const Addcustomerproduct = async (pid) => {
        const response = await fetch(`http://localhost:2000/api/customerproduct/savecutomerproduct/${pid}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-customer-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9kYXRhIjp7ImlkIjoiNjQ0ZGIwYTYxZWZkYTQxNTM2OTFkYTkxIn0sImlhdCI6MTY4MjgzNTE0MH0.p7ZbREJh09rHw2KSMnSBWq8QvXjmH8x_riSDm9Rw8FE"
            },
        });
        const data = await response.json();
        if(data.Message==="Internal Server Error"){
            if(data.error.keyPattern.product_id){
                alert("Product is Already Scanned");
            }
        }
        else {
            getCustomerPurchaseDetails();
        }
    }
    //getting all purchase details

    const getCustomerPurchaseDetails = async () => {
        const response = await fetch('http://localhost:2000/api/customerproduct/getcustomerpurchasedetail', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-customer-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9kYXRhIjp7ImlkIjoiNjQ0ZGIwYTYxZWZkYTQxNTM2OTFkYTkxIn0sImlhdCI6MTY4MjgzNTE0MH0.p7ZbREJh09rHw2KSMnSBWq8QvXjmH8x_riSDm9Rw8FE"

            }
        });
        const json = await response.json();
        if (json.Message === "Internal Server Error") {
            console.log(json.Error);
        }
        if (json.Message === "Success") {
            json.Response.map((e) => {
                getCustomerProductsByProductId(e.product_id);
            })
        }
    }
    const getCustomerProductsByProductId = async (id) => {
        const response = await fetch(`${localhost}/api/product/getproductsbypid/${id}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            }
        });
        const json = await response.json();
    }
    return (
        <customerproductContext.Provider value={{ getcustomerpurchase, getCustomerSeletedProducts }}>
            {props.children}
        </customerproductContext.Provider>
    )
}
export default CustomerProductState