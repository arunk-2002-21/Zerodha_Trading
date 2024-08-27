const {model} = require('mongoose');

const { HoldingSchema } = require('../Schema/HoldingSchema');

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = {HoldingsModel};