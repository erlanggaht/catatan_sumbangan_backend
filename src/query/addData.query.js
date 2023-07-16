class Query_addData {

    static get_username (username) {
        return `SELECT * FROM akun_admin where username = '${username}'`
    }

    static get_saldo_last () {
        return `select saldo from Kas order by id DESC limit 1  `
    }

    static add_data (  
        keterangan,
        tanggal,
        penerimaan,
        jenis,
        pengeluaran,
        saldo_last,
        username) {
        return `
        INSERT INTO Kas(id,login_uid,kode,keterangan,tanggal,penerimaan,jenis,pengeluaran,saldo) 
        values (default,'${username}',default,'${keterangan}','${tanggal}',${penerimaan},'${jenis}',${pengeluaran},${penerimaan - pengeluaran});
        UPDATE Kas SET penerimaan = 0 WHERE penerimaan IS  NULL; 
        UPDATE Kas SET pengeluaran = 0 WHERE pengeluaran IS  NULL; 
        `
    }


}

export default Query_addData