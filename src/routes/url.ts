import { Router } from "express";
import { getUrl } from "../controllers/url.controller"
// import {} from "../controllers/url.controller";
const router = Router();

router
  .route("/short")
    .post(getUrl);
    
export default router;