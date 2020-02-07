import express from "express"

// start express, open port and path to db
const app = express()
const port = process.env.PORT || 8080
//const mongoDbUrl =

// Send message for default URL
app.get("/", (req, res) => res.send("Hello World!"))

// Launch app to listen to specified port
app.listen(port, async () => {
  console.log("Podcast Review server is ready on port " + port)
})

// middleware to log requests
app.use(function(req, res, next) {
  const now = new Date(Date.now())
  console.log(
    "Time: " +
      now.toLocaleDateString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }) +
      " | Request URL: " +
      req.originalUrl +
      " | Request Type: " +
      req.method +
      " | Response: " +
      res.statusCode +
      "\n"
  )
  next()
})
