const amqplib = require("amqplib");
//const Broker = require("rascal").BrokerAsPromised;
//const config = require("./config.json");
const amqp_url = process.env.CLOUDAMQP_URL || "amqps://edxgyijm:3xQQbYv2H9ioRo4r_tn3XnVE6upaoRNi@roedeer.rmq.cloudamqp.com/edxgyijm";

async function do_consume() {
    const conn = await amqplib.connect(amqp_url, "heartbeat=60");
    const ch = await conn.createChannel();
    const q = "posizione";
    await conn.createChannel();
    await ch.assertQueue(q, {durable: true});
    await ch.consume(
        q,
        function (msg) {
            console.log(msg.content.toString());
            ch.ack(msg);
            ch.cancel("myconsumer");
        },
        {consumerTag: "myconsumer"}
    );
    setTimeout(function () {
        ch.close();
        conn.close();
    }, 500);
}


do_consume();

/* Usando un broker
async function rascal_consume() {
    console.log("Consuming");
    const broker = await Broker.create(config);
    broker.on("error", console.error);
    const subscription = await broker.subscribe("demo_subscription", "b1");
    subscription.on("message", (message, content, ackOrNack) => {
        console.log(content);
        ackOrNack();
        subscription.cancel();
    });
    subscription.on("error", console.error);
    subscription.on("invalid_content", (err, message, ackOrNack) => {
        console.log("Failed to parse message");
    });
}

rascal_consume().catch(console.error);
*/
