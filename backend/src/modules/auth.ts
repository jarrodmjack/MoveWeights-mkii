import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash)
}

export const hashPassword = (password) => {
    return bcrypt.hash(password, 5)
}

export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
    );
    return token;
};

export const protectRoutes = (req, res, next) => {
    const bearer = req.headers.authorization

    if(!bearer) {
        res.status(401)
        res.json({msg: "Not authorized to access resource"})
        return
    }

    const [, token] = bearer.split(' ')

    if (!token) {
        res.status(401)
        res.json({msg: "Not authorized"})
        return
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user // adding the user to the request object. Since this is a middleware, all of my route handlers have acess to req.user
        next()
    } catch (e) {
        res.status(401)
        res.json({msg: "Invalid token"})
        return
    }


}