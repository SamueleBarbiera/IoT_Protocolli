const coap = require("coap");
req = coap.request("coap://localhost/droni");

console.log("Client Request...");

req.on("response", function (res) {
    res.pipe(process.stdout);
});
req.end();
