import { Router} from "express";
import { loginUser, logoutUser, registerUser,refreshAccesssToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

//middleware
router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secure routes
//verifyJWT is a middleware used here for logoutUser
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccesssToken)


export default router