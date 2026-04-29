import express from "express";

const app = express();



app.get("/", (req, res) => {
  res.send("Health");
});



export default app;
