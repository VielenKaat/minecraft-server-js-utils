import { Request, Response } from "express"
const RCONClient = require("../rcon/serviceClass")
const express = require("express")
const router = express.Router()
const client = new RCONClient()


router.get("/", (req: Request, res: Response) => {
	const test = `testing ${1 + 1}`
	res.send("Hello world from main!")

})

router.get("/getPlayers", (req: Request, res: Response) => {})
module.exports = router
