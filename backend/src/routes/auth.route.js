import express from "express"
import { login, logout, signup, updateProfile } from "../controllers/auth.contoller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/test", (req, res) => {
    return res.status(403).json({ message: "Test arcjet :D"});
});

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));

export default router