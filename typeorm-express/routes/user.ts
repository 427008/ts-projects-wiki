import {Router} from "express";
import UserController from "../controller/user.controller";

const router = Router();

// Get one user
router.get(
    "/:id([0-9]+)",
    UserController.getOneById
);

//Create a new user
router.post("/",
    UserController.newUser);

//Edit one user
router.put(
    "/:id([0-9]+)",
    UserController.editUser
);

//Delete one user
router.delete(
    "/:id([0-9]+)",
    UserController.deleteUser
);

router.patch(
    "/:id([0-9]+)",
    // [checkJwt], checkRole(["ADMIN"])
    UserController.restoreUser
);

export default router;
