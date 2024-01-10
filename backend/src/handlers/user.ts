import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
    //all database queries are async
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password),
        },
    });

    const token = createJWT(user);
    res.json({ token });
};

export const signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
        //step 1 -> does the user exist at all?
        where: {
            username: username,
        },
    });

    const isValid = await comparePasswords(password, user.password); //  step 2 -> check if the passwords match

    if (!isValid) {
        res.status(401);
        res.json({ message: "Incorrect password" });
    }

    const token = createJWT(user);
    res.json({ token });
};
