const {Schema, model} = require("mongoose");

const droneSchema = new Schema(
    {
        speed: {
            type: String,
            required: [true, "speed field is required"],
        },
        firstname: {
            type: String,
            required: [true, "firstname field is required"],
        },
        lastname: {
            type: String,
            required: [true, "lastname field is required"],
        },
    },
    {timestamps: true}
);

module.exports = model("drones", droneSchema);
