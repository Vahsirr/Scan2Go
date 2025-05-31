import React from 'react'
import CustomerContext from './CustomerContext'
const localhost="http://localhost:2000"
const CustomerState=()=>{
    return(
        <CustomerContext.Provider value={{}}>
            {props.children}
        </CustomerContext.Provider>
    )
}
export default CustomerState