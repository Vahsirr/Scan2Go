const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/Scan2GoCustomer'
const ConnectToCustomerDataBase = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log("Customer Database is connected successfully") })
        .catch((error) => { console.log({ Message: "Customer Database connection Error", Error: error }) })
}
module.exports = ConnectToCustomerDataBase