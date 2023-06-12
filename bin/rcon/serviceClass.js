"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rcon_1 = require("@minecraft-js/rcon");
class RCONService {
    constructor(ip = "0.0.0.0", password = "") {
        this.client = new rcon_1.RCONClient(ip, password);
        this.connect();
    }
    connect() {
        this.client.connect();
        this.client.on("authenticated", () => {
            console.log("Connected to RCON server!");
        });
        this.client.on("error", (e) => {
            console.log(e);
            switch (e.errno) {
                case -3008:
                    console.log("Address not found! Please enter a valid IP address");
            }
        });
        process.on("warning", (e) => {
            console.warn(e.stack);
        });
    }
}
module.exports = RCONService;
