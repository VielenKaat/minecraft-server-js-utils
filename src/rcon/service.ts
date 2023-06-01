import { RCONClient } from "@minecraft-js/rcon"

const settings = {
  rconaddress: "0.0.0.0",
  rconpassword: "asd",
}

// TODO: Change the IP address and password to fetch from .env or server.properties
const client = new RCONClient("123123.0.123.1", "password123")

client.connect()

// if connection is successful, log to terminal
client.on("authenticated", () => {
  // console.log(`Connected to RCON server at ${settings.rconaddress}`)
  console.log("Connected to RCON server")
})

client.on("error", (e: any) => {
  console.log(Object.keys(e))
  switch (e.errno) {
    case -3008:
      console.log("Address not found!")
  }
})

process.on("warning", (e) => {
  console.warn(e.stack)
})
module.exports = client
