import { RCONClient } from "@minecraft-js/rcon"
import RCONService from "./RCONService"

const client = new RCONService()

const serviceAPI = {
  /**
   * This methods retrieves all the players in the server
   */
  getAllPlayers: () => {
    console.log("running get all players")
    client.executeCommand("say hello mom")
  },
}
module.exports = serviceAPI
