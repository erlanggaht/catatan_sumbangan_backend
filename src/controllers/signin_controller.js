import { compare, compareSync } from "bcrypt"
import konek_db from "../models/connect_database.js"
import Query_SignIn from "../query/signin_query.js"
import createJWT from "../utility/jwt.js"

const {
    get_username,
    get_password
} = Query_SignIn



function dcrypt_password (password, password_hash_db) {
    const compare = compareSync(password.toString(),password_hash_db)
    return compare
}




class Sign_In {
    
    static Login (req,res) {
       const {username,password} = req.body
       
        // Ambil Data Usernama dan Cocockan
            konek_db.query(get_username(username),async (err,result) => {
                
                if(err?.message) return res.status(500).json({Kesalahan_Server_getusername:err }) 
                    if(result.rowCount > 0) { 
                    const checkPassword = dcrypt_password(password,result.rows[0].password)
                    // Jika ada Password maka masuk
                            if(checkPassword) {
                                const {refreshToken,aksesToken} = await createJWT(username)
                              res
                              .status(200)
                              .json({
                              msg:"Berhasil masuk",
                              user_lg : result.rows[0].username,
                              token : {refreshToken,aksesToken}
                            })
                              
                            }else {
                               res.status(401).json({msg:"Password salah"})
                            }
                }else {
                    res.status(401).json({msg:'Username salah!'})
                }
                
        })

    }

}


export default Sign_In