import { body, validationResult } from "express-validator";

// create product

export const updateProductFieldValidator = [
    body("name").optional().isString(),
];

export const createProductFieldValidator = [
    body("name").isString(),
];
