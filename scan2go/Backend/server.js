const Connect = require('./dbconfig/dbconfig');
Connect();
const express = require('express');
const cors=require('cors')
const bodyparser = require('body-parser');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const port = process.env.port || 2000;
const customerroutes=require('./src/router/Customer.router');
app.use('/api/customer',customerroutes);
const customerproductroutes=require('./src/router/CustomerProduct.router');
app.use('/api/customerproduct',customerproductroutes);
app.listen(port, async (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running at the port ${port}`);
    } catch (error) {
        return await console.log({ Message: 'Port Error', Error: error.message });
    }
})