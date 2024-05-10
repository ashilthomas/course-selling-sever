// const jsonewebToken = require('jsonwebtoken');
import jsonewebToken from "jsonwebtoken"
import "dotenv/config"

const secretKey = process.env.SE;

const generateToken = (email)=>{
    return jsonewebToken.sign({data:email},"stdsjkfhkk",{expiresIn:"1d"})
}

export default generateToken;