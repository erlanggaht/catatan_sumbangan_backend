import konek_db from "../models/connect_database.js"
import Query_Signup from "../query/signup_query.js"
import Hashing_Pass from "../utility/Bcrypt.js"
import UID from "../utility/UID.js"

const {
    add_data,
    get_data_token_organisasi,
    cek_username
    } = Query_Signup


class Sign_Up {
    

    static Register = async (req,res) => {
    const uid = UID()
    const {username,password,nama_lengkap,alamat,token} = req.body
    // Hashing Password
    const password_hash = await Hashing_Pass(password)
    
    // BodyReq
    const BodyReq = {username,password_hash,nama_lengkap,alamat,uid}
    
    // Get Ambil Token Organisasi
    konek_db.query(get_data_token_organisasi(token),(err,result) => {
        if(err?.message) res.status(500).json({Kesalahan_Server_gettokenorganisasi:err })
        
        if(result.rowCount > 0) {
            // Check Apakah username sudah ada ?
            konek_db.query(cek_username(username),(err,result) => {
                if(err?.message) return res.status(500).json({Kesalahan_Server_cekusername:err }) 
                    if(result.rowCount == 0 && result.rows.length === 0) {
                         // Insert Data 
                         konek_db.query(add_data(BodyReq),(err,result) => {
                            if(err?.message) return res.status(500).json({Kesalahan_Server_adddata:err }) 
                                if(result.rowCount > 0) {
                                    res.status(201).json({msg:'Terima kasih telah bergabung di organisasi kami. silahkan login'}) 
                                }
                                else {
                                    res.status(400).json({msg:"daftar gagal."})
                                }
                        })
                    }
                    else {
                        res.status(400).json({msg : "silahkan gunakan username lain"})                                   
                         }
            })

        } else res.status(401).json({msg : "Token organisasi tidak valid. silahkan hubungi admin"})

    })
    }

}

export default Sign_Up
