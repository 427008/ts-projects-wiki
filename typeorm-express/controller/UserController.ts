import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    static getOneById = async (req: Request, res: Response) => {
        const id: number = Number(req.params.id);
        try {
            const user = await getRepository(User).findOneOrFail(id); // , process.env.ORM_CONFIG_NAME
            res.json({ success: true, data: user});
        } catch (error) {
            res.status(404).json({ success: false, message:'not found'});
        }
    };
}
