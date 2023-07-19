class Query_GetLaporanUID {

    static get_laporan_uid(login_uid) {
        return `SELECT kode,keterangan,tanggal,penerimaan,pengeluaran,saldo from Kas where login_uid = '${login_uid}';
        `
    }



}

export default Query_GetLaporanUID