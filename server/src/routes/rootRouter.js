import express from "express"

const rootRouter = new express.Router()

rootRouter.get("/", (req, res) => {
  res.render("home")
})

export default rootRouter