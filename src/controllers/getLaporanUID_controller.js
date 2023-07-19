import konek_db from "../models/connect_database.js"
import Query_GetLaporanUID from "../query/getLaporan_query.js"

const {get_laporan_uid} = Query_GetLaporanUID

class GetLaporan_UID {

    static getLaporan_uid (req,res) {
        const login_uid = req.params.uid

        konek_db.query(get_laporan_uid(login_uid),(err,result) => {
            if(err?.message) return res.status(500).json({Kesalahan_Server_getdatauid:err }) 

            if(result.rowCount > 0) {
                res.status(200).json(result.rows)
            }else {
                res.status(400).json({msg:'tidak ada data laporan yang ditulis dengan id '+login_uid})
            }

        })

    }


}

export default GetLaporan_UID