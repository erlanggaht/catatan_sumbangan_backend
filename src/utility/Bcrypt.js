import { hashSync } from "bcrypt";

function Hashing_Pass (password) {
    return hashSync(password,10)
}


export default Hashing_Pass