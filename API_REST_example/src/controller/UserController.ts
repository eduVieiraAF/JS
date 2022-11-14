import { Request, Response } from "express";
import User from "../database/schemas/User";

class UserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        
        try {
            const userExists = await User.findOne({ email })

            if (userExists) return res.status(400).json({ 
                error: "Ops..." ,
                message: "User already exists!"
            })

            const user = await User.create({
                name,
                email,
                password
            });

            return res.json(user);
        } catch (error) {
            return res.status(500).json({
                error: "Registration failed",
                message: error
            })
        }
    }
}

export default new UserController;