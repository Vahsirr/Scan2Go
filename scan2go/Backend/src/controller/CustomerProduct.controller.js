const CustomerProductModel=require('../model/CutomerProduct.model');

exports.saveCustomerProduct=async(req,res)=>{
    try {
        let success=false;
        const customerproduct=new CustomerProductModel({
            customer_id:req.customer_data.id,
            product_id:req.params.pid
        })
        const savemyproduct=await customerproduct.save();
        if(savemyproduct){
            success=true
            return await res.status(200).json({success,Message:"Product Saved Successfully",Response:savemyproduct});
        }else{
            success=false
            return await res.status(500).json({success,Message:"Not Saved",Response:savemyproduct});
        }
    } catch (error) {
        return await res.status(500).json({Message:"Internal Server Error",error});
    }
}

exports.getCustomerProducts=async(req,res)=>{
    try {
        const data=await CustomerProductModel.find({customer_id:req.customer_data.id});
        if(!data){
            return await res.status(404).json({Message:"NotFound"});
        }else{
            return await res.status(200).json({Message:"Success",Response:data});
        }
    } catch (error) {
        return await res.status(500).json({Message:"Internal Server Error",Error:error.message});
    }
}
exports.deleteCustomerProductsAfterPayment=async(req,res)=>{
    try {
        const data=await CustomerProductModel.deleteMany({customer_id:req.customer_data.id});
        if(!data){
            return await res.status(404).json({Message:"NotFound"});
        }else{
            return await res.status(200).json({Message:"Success",Response:data});
        }
    } catch (error) {
        return await res.status(500).json({Message:"Internal server error",error}) ;
    }
}