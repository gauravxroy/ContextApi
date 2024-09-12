// this is the js file becouse it is not returning any jsx , components
import React, { createContext } from "react";
const UserContext = createContext(); //a varible that contain context
export default UserContext; // exports UserContext , for use in another files

// steps:
//    step01: create a context
//    step02: create a context provider (.jsx)
