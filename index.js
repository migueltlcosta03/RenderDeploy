import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const name = "Rita";

app.get("/", (req, res) => {
    res.render("index.ejs", { name: name });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})