import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})
app.get("/about", (req, res) => {
    res.render("about.ejs")
})
app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})
app.get("/the-reddits",(req,res)=>{
    res.render("essays/the-reddits.ejs")
})
app.get("/the-best-essay",(req,res)=>{
    res.render("essays/the-best-essay.ejs")
})
app.get("/how-to-do-great-work",(req,res)=>{
    res.render("essays/how-to-do-great-work.ejs")
})
app.get("/the-need-to-read",(req,res)=>{
    res.render("essays/the-need-to-read.ejs")
})
app.get("/alien-truth",(req,res)=>{
    res.render("essays/alien-truth.ejs")
})
app.get("/heresy",(req,res)=>{
    res.render("essays/heresy.ejs")
})
app.get("/is-there-such-a-thing-as-good-taste",(req,res)=>{
    res.render("essays/is-there-such-a-thing-as-good-taste.ejs")
})
app.get("/weird-languages",(req,res)=>{
    res.render("essays/weird-languages.ejs")
})
app.get("/a-project-of-ones-own",(req,res)=>{
    res.render("essays/a-project-of-ones-own.ejs")
})
app.get("/crazy-new-ideas",(req,res)=>{
    res.render("essays/crazy-new-ideas.ejs")
})
app.get("/the-real-reason-to-end-the-death-penalty",(req,res)=>{
    res.render("essays/the-real-reason-to-end-the-death-penalty.ejs")
})
app.get("/write-simply",(req,res)=>{
    res.render("essays/write-simply.ejs")
})
app.get("/earnestness",(req,res)=>{
    res.render("essays/earnestness.ejs")
})
app.get("/donate-unrestricted",(req,res)=>{
    res.render("essays/donate-unrestricted.ejs")
})
app.get("/the-airbnbs",(req,res)=>{
    res.render("essays/the-airbnbs.ejs")
})
app.get("/early-work",(req,res)=>{
    res.render("essays/early-work.ejs")
})
app.get("/the-four-quadrants-of-conformism",(req,res)=>{
    res.render("essays/the-four-quadrants-of-conformism.ejs")
})
app.get("/coronavirus-and-credibility",(req,res)=>{
    res.render("essays/coronavirus-and-credibility.ejs")
})
app.get("/being-a-noob",(req,res)=>{
    res.render("essays/being-a-noob.ejs")
})  
app.get("/the-two-kinds-of-moderate",(req,res)=>{
    res.render("essays/the-two-kinds-of-moderate.ejs")
})
app.get("/having-kids",(req,res)=>{
    res.render("essays/having-kids.ejs")
})
app.get("/novelty-and-heresy",(req,res)=>{
    res.render("essays/novelty-and-heresy.ejs")
})
app.get("/general-and-surprising",(req,res)=>{
    res.render("essays/general-and-surprising.ejs")
})
app.get("/the-risk-of-discovery",(req,res)=>{
    res.render("essays/the-risk-of-discovery.ejs")
})
app.get("/life-is-short",(req,res)=>{
    res.render("essays/life-is-short.ejs")
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
