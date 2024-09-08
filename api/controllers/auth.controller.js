import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body

  //HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password: ", hashedPassword)

  //CREATE NEW USER AND SAVE TO DB
  const newUSer = await prisma.user.create({
    
  })
  
}
export const login = (req, res) => {
  //db operations
}
export const logout = (req, res) => {
  //db operations
}