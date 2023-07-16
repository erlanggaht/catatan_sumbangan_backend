import konek_db from "../models/connect_database.js"
import Query_Getdata from '../query/getData_query.js'

const {get_data,get_data_last} = Query_Getdata

class Get_Data {

    static GetData (req,res) {
        konek_db.query(get_data(),(err,result) => {
            if(err?.message) return res.status(500).json({Kesalahan_Server_getdata:err }) 
            if(result.rowCount > 0) {
                res.status(200).json(result.rows)
            }else {
                res.status(400).json({msg:"ada kesalahan saat ambil data"})
            }
        })
    }
    


    static GetData_Last (req,res) {
        konek_db.query(get_data_last(),(err,result) => {
            if(err?.message) return res.status(500).json({Kesalahan_Server_getdatalast:err }) 
            if(result.rowCount > 0) {
                res.status(200).json(result.rows[0])
            }else {
                res.status(400).json({msg:"ada kesalahan saat ambil data akhir"})
            }
        })
    }

}

export default Get_Data