import konek_db from "../models/connect_database.js"
import Query_GetAdmin from '../query/getAdmin_query.js'
const {get_admin} = Query_GetAdmin

class Get_Admin {

    static GetAdmin (req,res) {
        const {username} = req.body
        konek_db.query(get_admin(username),(err,result) => {
            if(err?.message) return res.status(500).json({Kesalahan_Server_getadmin:err }) 
            if(result.rowCount > 0) {
                res.status(200).json(result.rows)
            }else {
                res.status(400).json({msg:"ada kesalahan saat ambil data"})
            }
        })
    }
    


 

}

export default Get_Admin