const express = require("express")

const app = express()

const middle = (req, res, next) => {
    console.log("middleware")
    next()
}

const middle2 = (req, res, next) => {
    console.log("middleware2")
    next()
}
app.use(middle)

app.get("/",  (req, res) => {
    console.log("api zero")
    res.send("This is default Api")
})

app.get("/one", middle2, (req, res) => {
    console.log("api first")
    res.send("this is first Api")
})

app.get("/two", middle2, (req, res) => {
    console.log("api second")
    res.send("This is second Api")
})

app.get("/three", (req, res) => {
    console.log("api third")
    res.send("This is third Api")
})

app.get("/four", (req, res) => {
    console.log("api fourth")
    res.send("This is fourth Api")
})

app.listen(7000, console.log("Server running in port 7000"))