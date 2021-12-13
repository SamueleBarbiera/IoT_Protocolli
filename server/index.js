var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get("/drones", function (req, res, next) {
    res.send("List of drones: [TODO]");
    return next();
});

server.get("/drones/:id", function (req, res, next) {
    res.send("Current values for drone " + req.params["id"] + ": [TODO]");
    return next();
});

server.post("/drones/:id", function (req, res, next) {
    res.send("Data received from drone [TODO]");
    console.log(req.body);
    return next();
});

