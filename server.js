const { notFound, errorHandler } = require("./bin/middleware/errorMiddleware")

const express = require("express")
const app = express()
const port = 3000

// ROUTERS
const main = require("./bin/routes/main")

// TODO: Add authentication middleware
// app.get("/", (req, res) => {
//   res.send("Hello World!")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/", main)
// TODO: Add error handling middleware
app.use(notFound)
app.use(errorHandler)
