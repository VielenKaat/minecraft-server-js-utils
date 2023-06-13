import { Request, Response } from "express"
const RCONClient = require("../rcon/RCONService")
const express = require("express")
const router = express.Router()
const client = new RCONClient("0.0.0.0", "password123")

router.get("/", (req: Request, res: Response) => {
  res.send("hello world!")
})

router.get("/getPlayers", async (req: Request, res: Response) => {
  const result = await client.getPlayers()
  console.log(result)
  res.send(result)
})
module.exports = router
