import { Request, Response } from "express"

const express = require("express")
const router = express.Router()

import RCONService from "../rcon/RCONService"

const client = new RCONService("0.0.0.0", "password123")

router.get("/", (req: Request, res: Response) => {
  res.send("hello world!")
})

router.get("/getPlayers", async (req: Request, res: Response) => {
  let result = await client.getPlayers()
  result = result + ","
  console.log(result)
  const getPlayerCountRegex = /\d+ of a max of \d+/
  const getPlayerListRegex = /[A-z\d]+,/g

  let nameRegexResult = result.match(getPlayerListRegex)

  let nameArray: string[] = []
  if (!!nameRegexResult) {
    nameRegexResult.forEach((name) => {
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
