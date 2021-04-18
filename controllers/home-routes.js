const { Post, Upload } = require("../models");
const router = require("express").Router();
// const exif = require('../public/js/upload');

router.get("/", (req, res) => {
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/mush-room", async (req, res) => {
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });
  const mushrooms = postData.map((mushroom) => mushroom.get({ plain: true }));
  res.render("mush-room", { mushrooms });
});

router.get("/mush-room/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    console.log(postData);
    if (!postData) {
      res.status(404).json({ message: "No mushroom with this id!" });
      return;
    }
    const mushroom = postData.get({ plain: true });
    res.render("shroom", mushroom);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});


router.post("/upload", async (req, res) => {
  console.log("POST UPLOAD", req.body)
  try {
    const uploadData = await Upload.create({
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      url: req.body.url
    });
    res.status(200).json(uploadData);
    console.log(uploadData);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;