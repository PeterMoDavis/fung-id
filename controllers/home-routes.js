const { Post } = require("../models");
const router = require("express").Router();

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

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // Otherwise, render the 'login' template
  res.render("login");
});

module.exports = router;
