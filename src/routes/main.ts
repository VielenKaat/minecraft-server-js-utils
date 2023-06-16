require("dotenv").config()
const { RCON_IP, RCON_PASSWORD } = process.env

import { Request, Response } from "express"

const express = require("express")
const router = express.Router()

import RCONService from "../rcon/RCONService"
if (!RCON_IP || !RCON_PASSWORD) {
  console.log("Please remember to configure RCON_IP and RCON_PASSWORD in .env!")
  if (!RCON_IP) {
    console.log("RCON_IP set to default: 0.0.0.0")
  }
  if (!RCON_PASSWORD) {
    console.log("RCON_PASSWORD set to default: password123")
  }

  console.log("\n")
}
const client = new RCONService(RCON_IP, RCON_PASSWORD)

router.get("/", (req: Request, res: Response) => {
  res.send("hello world!")
})

router.get("/getPlayers", async (req: Request, res: Response) => {
  let result = await client.getPlayers()
  // append a comma to make the regex selection easier
  result = result + ","
  console.log(result)

  // regex for getting player count and player list
  const getPlayerCountRegex = /\d+ of a max of \d+/
  const getPlayerListRegex = /[A-z\d]+,/g

  let nameRegexResult = result.match(getPlayerListRegex)

  let nameArray: string[] = []

  // push each match from nameRegexResult into nameArray
  if (!!nameRegexResult) {
    nameRegexResult.forEach((name) => {
      // remove the comma at the end of each match and push
      nameArray.push(name.slice(0, -1))
    })
  }

  let playerCountRegexResult = result.match(getPlayerCountRegex)

  const message = {
    playerList: nameArray,
    playerCount: playerCountRegexResult?.[0],
  }
  res.json(message)
})
module.exports = router
