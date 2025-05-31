const mongoose = require('mongoose');
mongoose.set('autoIndex', false);
const CustomerSchema = new mongoose.Schema({
    customer_email: {
        type: String,
        required: true,
        unique: true
    },
    customer_mobile: {
        type: Number,
        required: true,
        unique:true
    },
    is_verified:{
        type:Number,
        default:0
    }
}, {
    timestamps: true
});
const CustomerModel = new mongoose.model("Customer_Details", CustomerSchema);
CustomerModel.createIndexes({ field: 1 }, { wtimeout: 100000 },{maxTimeMS:100000},{ background: true });
module.exports = CustomerModel