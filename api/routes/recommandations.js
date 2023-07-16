import Express from "express";
import { getRecommandation } from "../controllers/recommandation.js";
const router = Express.Router() ;

router.get("/", getRecommandation);

export default router ;  