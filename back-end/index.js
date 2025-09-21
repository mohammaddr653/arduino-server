require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const array = [];

app.post("/api", (req, res) => {
  const info = req.body;
  if (info.bpm && info.spo2) {
    array.push({
      bpm: info.bpm,
      spo2: info.spo2,
      date: new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" }),
    });
  }
  console.log(req.body);
  res.send({
    message: "data updated",
    data: {},
  });
});

app.get("/api", (req, res) => {
  res.send({
    message: "اطلاعات بروزرسانی شد",
    data: array,
  });
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";
app.listen(port, host, () =>
  console.log(`listening on http://${host}:${port}`)
);
