const { response } = require("express");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Items = require("./config");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

connectDB();

app.use(express.json());
app.use(cors());

app.listen(3005, () => console.log("app running port 3005"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

dotenv.config({ path: "./config/config.env" });

const Comment = require("../server/modules/Comment");

app.post("/comment", async (req, res) => {
  try {
    await Comment.create(req.body);
    console.log("request:", req.body);
    res.send({ msg: "Comment submitted" });
  } catch (err) {
    console.error(err);
    res.send({ msg: err });
  }
});

app.post("/create_flashcard", async (req, res) => {
  const data = req.body;
  console.log(data);
  await Items.doc("flashcard1").set(data);
  res.send(data);
});

app.get("/", async (req, res) => {
  const getData = await Items.get();
  // const data = getData.forEach(doc => {
  //   console.log(doc.id, '=>', doc.data());
  // });
  // console.log("getData:", getData.docs.data);

  const dataObj = getData.docs.map((item) => item.data());
  // console.log(":", dataObj.contact);
  res.send(dataObj);
});

app.put("/put", async (req, res) => {
  await Doc.doc("SpY3YGHpJ1t2m7ZeKX62").set(req.body);
  res.send({ msg: "Document updated", ...req.body });
});

app.delete("/delete_one", async (req, res) => {
  await Doc.doc(req.body.id).delete();
  res.send({ msg: "Document deleted" });
  // res.redirect("/");
});
app.delete("/delete_all", async (req, res) => {
  const response = await Doc.get();
  const dataObj = response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  dataObj.forEach(async (doc) => {
    await Doc.doc(doc.id).delete();
  });
  res.send({ msg: "All Documents deleted" });
  // res.redirect("/");
});
