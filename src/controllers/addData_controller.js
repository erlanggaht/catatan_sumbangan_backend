import konek_db from "../models/connect_database.js"
import Query_addData from "../query/addData.query.js"

const {add_data,get_username,get_saldo_last} = Query_addData

class Add_Data {

    static AddData (req,res) {
        const {keterangan,tanggal,penerimaan,jenis,pengeluaran,username} = req.body

        
      konek_db.query(get_username(username),(err,result) => {
        if(err?.message) return res.status(500).json({Kesalahan_Server_getusername:err }) 
        const username_UID = result.rows[0].uid 
        if(result.rowCount > 0 ) {
            konek_db.query(get_saldo_last(),(err,result) => {
            if(err?.message) return res.status(500).json({Kesalahan_Server_getusername:err }) 
                if(result.rowCount > 0 || result.rowCount === 0) {
                    const saldo_last = result.rows[0]?.saldo || 0
                    konek_db.query(add_data(
                        keterangan,
                        tanggal,
                        penerimaan,
                        jenis,
                        pengeluaran,
                        saldo_last,
                        username_UID),(err,result) => {
    
                            if(err?.message) return res.status(500).json({Kesalahan_Server_getadddata:err }) 
            
                            if(result[0].command == 'INSERT' || result[0].rowCount > 0  ) {
                                res.status(201).json({msg:"data berhasil dimasukan."})
                            }else {
                                res.status(400).json({msg:'ada kesalahan saat mendambahkan data.'})
                            }
                        })
                } else {
                    res.status(403).json({msg:'ada kesalahan saat mendambahkan data.'})
                }
                
                })
           
        }
        
        
      })

        
    }


}


export default Add_Data