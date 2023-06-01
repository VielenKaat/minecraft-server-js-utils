import { RCONClient } from "@minecraft-js/rcon"

const settings = {
  rconaddress: "0.0.0.0",
  rconpassword: "asd",
}

// TODO: Change the IP address and password to fetch from .env or server.properties
const client = new RCONClient("0.0.0.0", "password123")

client.connect()

// if connection is successful, log to terminal
client.on("authenticated", () => {
  // console.log(`Connected to RCON server at ${settings.rconaddress}`)
  console.log("Connected to RCON server")
})

// TODO: fix this hack later, error should probably be typed to something else
client.on("error", (e: any) => {
  switch (e.errno) {
    case -3008:
      console.log("Address not found!, please enter a valid ip address.")
  }
})

process.on("warning", (e) => {
  console.warn(e.stack)
})

module.exports = client
