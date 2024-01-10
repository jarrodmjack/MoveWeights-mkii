import { body } from "express-validator";

// create product

export const updateUpdatePointFieldValidator = [
    body("name").optional().isString(),
    body("description").optional().isString(),
];

export const createUpdatePointFieldValidator = [
    body("name").isString(),
    body("description").isString(),
    body("updateId").isString(),
];
