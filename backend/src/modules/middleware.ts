import { validationResult } from "express-validator";

export const validateRequest = async (req, res, next) => { // this function has access to "next" because it is passed into the route handler as middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    } else {
        next()
    }
};
