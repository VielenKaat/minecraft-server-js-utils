import { RCONClient } from "@minecraft-js/rcon"

class RCONService {
  client: RCONClient

  constructor(ip: string = "0.0.0.0", password: string = "") {
    this.client = new RCONClient(ip, password)
    this.connect()
  }

  connect() {
    this.client.connect()
    this.client.on("authenticated", () => {
      console.log("Connected to RCON server!")
    })

    this.client.on("authentication_failed", () => {
      console.log("auth failed!")
    })

    this.client.on("error", (e: any) => {
      console.log(e)
      switch (e.errno) {
        case -3008:
          console.log("Address not found! Please enter a valid IP address")
      }
    })

    process.on("warning", (e) => {
      console.warn(e.stack)
    })
  }

  async getPlayers() {
    return await this.client.executeCommandAsync("list")
  }
}

module.exports = RCONService
