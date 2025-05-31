const mongoose = require('mongoose');
mongoose.set('autoIndex', false);
const CustomerProductSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
       ref:'Customer_Details'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product_Details',
        unique:true
    },
    
}, {
    timestamps: true
});
const CustomerProductModel = new mongoose.model("Customer_Product_Detail", CustomerProductSchema);
CustomerProductModel.createIndexes({ field: 1 }, { wtimeout: 100000 },{maxTimeMS:100000},{ background: true });
module.exports = CustomerProductModel