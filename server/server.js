const { response } = require("express");
const express = require("express");
const cors = require("cors");
const Items = require("./config");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3005, () => console.log("app running port 3005"));

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
