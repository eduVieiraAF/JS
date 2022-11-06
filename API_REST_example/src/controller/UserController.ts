import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        
        try {
            const user = await User.create({
                name,
                email,
                password
            });

            return res.json(user);
        } catch (error) {
            return res.status(500).send({
                error: "Registration failed",
                message: error
            })
        }
    }
}

export default new UserController;