import { RCONClient } from "@minecraft-js/rcon"

class RCONService {
  client: RCONClient

  /**
   *
   * @param ip IP Address of the server
   * @param password RCON password of the server
   */
  constructor(ip: string = "0.0.0.0", password: string) {
    this.client = new RCONClient(ip, password)
    this.connect()
  }

  /**
   * Call this method if a reconnect is needed
   */
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

  /**
   *
   * @returns
   */
  async getPlayers(): Promise<string> {
    return this.client.executeCommandAsync("list")
  }
}

export default RCONService
