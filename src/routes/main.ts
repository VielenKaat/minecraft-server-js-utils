import { Request, Response } from "express"

const express = require("express")
const router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.send("Hello world from main!")
})

router.get("/getPlayers", (req: Request, res: Response) => {})
module.exports = router
