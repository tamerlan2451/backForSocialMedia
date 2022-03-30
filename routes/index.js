const { Router } = require("express");
const importUser = require("./user.route");
const importPost = require("./post.route");
const importNotification = require("./notification.route");

const router = Router();

router.use(importUser);
router.use(importPost);
router.use(importNotification);

module.exports = router;
