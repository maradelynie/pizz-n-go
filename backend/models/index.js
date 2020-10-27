const mongoose = require('mongoose');

let schema = mongoose.Schema({
  date: {
    type: Date,
    default: new Date()
},
  size: {
    type: String,
    required: true,
    enum: ["large","mediun","small"]
  },
  crust: {
      type: String,
      required: true,
      enum: ["thin","thick"]

  },
  toppings: {
    type: Array,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
});


const ordersModel = mongoose.model('orders', schema);

module.exports = ordersModel;
