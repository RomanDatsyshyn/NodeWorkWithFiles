const router = require("express").Router();
const {
  loadStartPage,
  uploadFile,
  paginationPages,
} = require("../controllers/fileController");

router.get("/", loadStartPage);
router.post("/upload", uploadFile);
router.post("/pagination", paginationPages);

module.exports = router;
