const amqplib = require('amqplib');

const amqp_url = process.env.CLOUDAMQP_URL || 'amqp://10.30.134.27:5672';

async function do_consume() {
    const conn = await amqplib.connect(amqp_url, "heartbeat=60");
    const ch = await conn.createChannel()
    const q = 'test_queue';
    await conn.createChannel();
    await ch.assertQueue(q, {durable: true});
    await ch.consume(q, function (msg) {
        console.log(msg.content.toString());
        ch.ack(msg);
        ch.cancel('myconsumer');
        }, {consumerTag: 'myconsumer'});
    setTimeout( function()  {
        ch.close();
        conn.close();},  500 );
}

do_consume();