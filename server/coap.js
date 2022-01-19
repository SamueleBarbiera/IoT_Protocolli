const coap = require("coap");
const server = coap.createServer();

server.on("request", function (req, res) {
    res.end("Prova " + req.url.split("/")[1] + "\n");
});

// CoAP port = 5683
server.listen(function () {
    var req = coap.request("coap://localhost/Drone");
    req.on("response", function (res) {
        res.pipe(process.stdout);
        res.on("end", function () {
            process.exit(0);
        });
    });

    req.end();
});
