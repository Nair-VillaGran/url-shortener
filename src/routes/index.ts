const express = require("express");
const router = express.Router();
import { urlIndex } from "../controllers/url.controller";

router.get("/:code", urlIndex);

export default router;
