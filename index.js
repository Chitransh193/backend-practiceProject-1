const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

/* routes */

app.get("/", (req,res) => {
  fs.readdir("./files",(err,files) => {
    res.render("index", { files: files });
  })
});

app.post("/create", (req,res) => {
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,`${req.body.details}`,(err) => {
   res.redirect("/");
  })
});

app.get("/readfile/:filename",(req,res) => {
  fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,data) => {
    res.render("read",{ filedata : data , title: req.params.filename });
  })
});

app.get("/delete/:filename", (req,res) => {
  fs.unlink(`./files/${req.params.filename}`,(err) => {
    res.redirect("/");
  })
})

app.get("/rename/:filename",(req,res) => {
  res.render("rename",{ oldname : req.params.filename });
})

app.post("/rename/:filename",(req,res) => {
  fs.rename(`./files/${req.params.filename}`,`./files/${req.body.newname}.txt`, (err) => {
    res.redirect("/");
  })
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
});