import * as yup from "yup"

export const amountValidator = yup.number().notOneOf([0]).label("Amount")
export const descriptionValidator = yup.string().label("Description")
