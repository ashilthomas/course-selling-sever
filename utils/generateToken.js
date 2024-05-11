// const jsonewebToken = require('jsonwebtoken');
import jsonewebToken from "jsonwebtoken"
import "dotenv/config"

const secretKey = process.env.SE;

const generateToken = (email)=>{
    return jsonewebToken.sign({data:email},"stdsjkfhkk",{expiresIn:"1d"})
}

export default generateToken;

export const adminToken = (user) => {
    return jsonewebToken.sign({ data: user.id, role: user.role }, process.env.SE, {
      expiresIn: "1d",
    });
  };