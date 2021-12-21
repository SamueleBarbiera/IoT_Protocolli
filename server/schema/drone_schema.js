const {Schema, model} = require("mongoose");

const droneSchema = new Schema(
    {
        speed: {
            type: String,
            required: [true, "speed field is required"],
        },
    },
    {timestamps: true}
);

module.exports = model("drones", droneSchema);
