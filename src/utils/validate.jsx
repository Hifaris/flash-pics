import Joi from 'joi'

const registerSchema = Joi.object({
    email: Joi.string()
    .email({tlds: false})
    .required()
    .messages({
        "string.empty": "Email is required"
    }),
    password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
        "string.empty": "Password is required",
        "string.pattern.base": "Password must contain a-z A-z 0-9 and must be at least 6 characters"
    }),
    confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({"string.empty":"Confirm password is required",
        "any.only": "Password and Confirm password are not match"
    })
})

const loginSchema = Joi.object({

})

const validateRegister = (input)=>{
    const {error} = registerSchema.validate(input,{
        abortEarly: false
    })
    // console.log(error.details)
    if(error){
        const formatError = error.details.reduce((acc,curr)=>{
         
        // console.log(curr.path[0])
        // console.log(curr.message)
        acc[curr.path[0]] = curr.message
        console.log(acc)
         return acc
        },{})
        return formatError
    }
    return null
}

export default validateRegister