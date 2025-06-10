const mongoose = require('mongoose');
const {Schema}= mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

// order ka schema 
const orderSchema = new Schema( {
    item : String , 
    price : Number ,
});

// customers schema
const customerSchema = new Schema (
{
    name : String , 
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Order"
        }
    ]
});
// ref : referencing order model 

const Order  = mongoose.model("Order", orderSchema);
const Customer  = mongoose.model("Customer", customerSchema);

const addOrders = async() =>{ 
    let res = await Order.insertMany([
        {item: "Samosa " , price:12},
        {item: "Chips " , price:10},
        {item: "Chocolate " , price:40}]
    );
    console.log(res);
};

const findCustomer = async() =>{ 

    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

findCustomer();
// addOrders();


