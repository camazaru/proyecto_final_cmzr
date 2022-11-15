import { WSresponse } from "../libs/WSresponse.js";
import {userService} from "../service/userService.js";

const loginController = (req, res) => {

    res.render("indexLogin.pug")
}

export default loginController