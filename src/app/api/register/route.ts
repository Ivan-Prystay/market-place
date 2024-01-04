import axios from 'axios'
import { error } from 'console';
// import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {

  const { email, password, userName } = await request.json();
  // const hashedPassword = await bcrypt.hash(password, 5);
  const credentials = {
    email,
    // password: hashedPassword,
    password,
    userName

  }
  const response = await axios.post('https://marketplace-auth.onrender.com/v1/auth/sign-up', credentials)
  try {
    console.log('!!!response!!!: ', response);
    return new NextResponse(JSON.stringify({ message: "user is registered" }), { status: 200 });
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ message: err }), {
      status: 500
    });
    console.error(err)
  }
};