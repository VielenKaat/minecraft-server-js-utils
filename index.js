const { notFound, errorHandler } = require("./bin/middleware/errorMiddleware")

const RCONService = require("./bin/rcon/serviceClass")

const client = new RCONService("0.0.0.0", "password123")