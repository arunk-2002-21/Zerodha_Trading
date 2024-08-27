const {model} = require('mongoose');

const { OrderSchema } = require('../Schema/OrderSchema');

const OrdersModel = new model("order", OrderSchema);

module.exports = {OrdersModel};