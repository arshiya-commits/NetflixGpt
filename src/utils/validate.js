// import React from 'react'

// const validate = (email,password,confirmPassword) => {
//  const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//  const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ;
//  if(!isEmailValid) return "email Id is not Valid";
//  if(!isPassword) return "Password is not valid";

//  return null
// }

// export default validate
const validate = (email, password) => {
  if (!email.includes("@") || !email.includes(".")) {
    return "Email is not valid";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }

//   if (password !== confirmPassword) {
//     return "Passwords do not match";
//   }

  return null;
};

export default validate;
