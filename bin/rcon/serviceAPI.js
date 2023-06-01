"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client = require("./service");
const serviceAPI = {
    /**
     * This methods retrieves all the players in the server
     */
    getAllPlayers: () => {
        console.log("running get all players");
        client.executeCommand("say hello mom");
    },
};
module.exports = serviceAPI;
