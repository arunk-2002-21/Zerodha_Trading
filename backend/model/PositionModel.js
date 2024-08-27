const {model} = require('mongoose');

const { PositionSchema } = require('../Schema/PositionSchema');

const PositionsModel = new model("position", PositionSchema);

module.exports = {PositionsModel};