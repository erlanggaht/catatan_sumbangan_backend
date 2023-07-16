import Query_Delete from '../query/delete_query.js'
import konek_db from "../models/connect_database.js"
import { compareSync } from 'bcrypt'

const {delete_query,get_password} = Query_Delete


function dcrypt_password (password, password_hash_db) {
    const compare = compareSync(password.toString(),password_hash_db)
    return compare
}


class Delete_Data {

    static delete_data (req,res) {
        const {kode,uid,password} = req.body 

        konek_db.query(get_password(uid),(err,result) => {
            if(err?.message) return res.status(500).json({Kesalahan_Server_getpassword:err }) 
            if(result.rowCount > 0) {
                const hash_password = result.rows[0].password 
                if(!dcrypt_password(password,hash_password)) return res.status(401).json({msg:"data gagal dihapus. Password Salah!"})
                konek_db.query(delete_query(kode),(err,result) => {
                    if(err?.message) return res.status(500).json({Kesalahan_Server_getpassword:err }) 
                        if(result[1].rowCount > 0) { 
                            res.status(200).json({msg:`data dengan kode ${kode} berhasil dihapus`})
                        }else res.status(400).json({msg:`data dengan kode ${kode} gagal dihapus`})
                })
            }

        })

        

    }

}

export default Delete_Data