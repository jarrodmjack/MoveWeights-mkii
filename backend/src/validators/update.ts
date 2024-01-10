import { body, oneOf, validationResult } from "express-validator";
import { UPDATE_STATUS } from "../constants/update";

// create product

// did not include version because optional
export const createUpdateFieldValidator = [
    body("title").exists().isString(),
    body("body").exists().isString(),
    body("productId").exists().isString(),
]

export const updateUpdateFieldValidator = [
    body("title").optional().isString(),
    body("body").optional().isString(),
    body("version").optional().isString(),
    body("asset").optional().isString(),
    body('status').optional().isIn([UPDATE_STATUS.SHIPPED, UPDATE_STATUS.DEPRECATED, UPDATE_STATUS.IN_PROGRESS]).optional(),
]