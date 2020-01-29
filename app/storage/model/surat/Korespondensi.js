export const Korespondensi = {
    name: 'korespondensi',
    primaryKey : 'korespondensi_id',
    properties: {
        distributor_id:'string?',
        distributor_image_preview:'string?',
        distributor_jabatan:'string?',
        distributor_jabatan_kode:'string?',
        distributor_jabatan_nama:'string?',
        distributor_kode:'string?',
        distributor_nama:'string?',
        distributor_unit:'string?',
        distributor_unit_kode:'string?',
        distributor_unit_nama:'string?',
        ekspedisi_id:'string?',
        ekspedisi_kode:'string?',
        ekspedisi_nama:'string?',
        itipe_id:'string?',
        itipe_kode:'string?',
        itipe_nama:'string?',
        jenis_id:'string?',
        jenis_kode:'string?',
        jenis_nama:'string?',
        jenis_nomor_awal:'boolean?',
        kelas_id:'string?',
        kelas_kode:'string?',
        kelas_nama:'string?',
        korespondensi_id:'string?',
        korespondensi_isinternal:'boolean?',
        korespondensi_nomor:'string?',
        korespondensi_penerima:'string?',
        korespondensi_pengirim:'string?',
        korespondensi_perihal:'string?',
        korespondensi_properti:'string?',
        lokasi_id:'string?',
        lokasi_kode:'string?',
        lokasi_nama:'string?',
        media_id:'string?',
        media_kode:'string?',
        media_nama:'string?',
        pembuat_image_preview:'string?',
        penerima_id:'string?',
        penerima_jabatan:'string?',
        penerima_jabatan_kode:'string?',
        penerima_jabatan_nama:'string?',
        penerima_kode:'string?',
        penerima_nama:'string?',
        penerima_unit:'string?',
        penerima_unit_kode:'string?',
        penerima_unit_nama:'string?',
        pengubah_tgl:'string?',
        penyelesai_id:'string?',
        penyelesai_jabatan:'string?',
        penyelesai_jabatan_kode:'string?',
        penyelesai_jabatan_nama:'string?',
        penyelesai_kode:'string?',
        penyelesai_nama:'string?',
        penyelesai_unit:'string?',
        penyelesai_unit_kode:'string?',
        penyelesai_unit_nama:'string?',
        penyetuju_id:'string?',
        penyetuju_image_preview:'string?',
        penyetuju_jabatan:'string?',
        penyetuju_jabatan_kode:'string?',
        penyetuju_jabatan_nama:'string?',
        penyetuju_kode:'string?',
        penyetuju_nama:'string?',
        penyetuju_unit:'string?',
        penyetuju_unit_kode:'string?',
        penyetuju_unit_nama:'string?',
        prioritas_id:'string?',
        prioritas_kode:'string?',
        prioritas_nama:'string?',
        prioritas_retensi:'string?',
        sifat_color:'string?',
        sifat_id:'string?',
        sifat_kode:'string?',
        sifat_nama:'string?',
        surat_agenda:'string?',
        surat_agenda_sub:'string?',
        surat_arsip:'string?',
        surat_catatan:'string?',
        surat_distribusi_staf:'string?',
        surat_distribusi_tgl:'date?',
        surat_ekspedisi:'string?',
        surat_id:'string?',
        surat_induk_id:'string?',
        surat_induk_nomor:'string?',
        surat_isdistribusi:'boolean?',
        surat_isnomor:'boolean?',
        surat_israhasia:'boolean?',
        surat_isselesai:'boolean?',
        surat_isterima:'boolean?',
        surat_itipe:'string?',
        surat_jenis:'string?',
        surat_kelas:'string?',
        surat_kepada:'string?',
        surat_keterangan:'string?',
        surat_korespondensi:'string?',
        surat_korespondensi_surat:'string?',
        surat_lampiran:'string?',
        surat_lampiran_sub:'string?',
        surat_lokasi:'string?',
        surat_lokasi_sub:'string?',
        surat_media:'string?',
        surat_model:'int?',
        surat_nomor:'string?',
        surat_pengirim:'string?',
        surat_perihal:'string?',
        surat_prioritas:'string?',
        surat_prioritas_tgl:'date?',
        surat_properti:'string?',
        surat_properti_buat_tgl:'date?',
        surat_properti_data:'string?',
        surat_properti_hapus_tgl:'date?',
        surat_properti_id:'string?',
        surat_properti_pembuat_id:'string?',
        surat_properti_pembuat_jabatan:'string?',
        surat_properti_pembuat_jabatan_nama:'string?',
        surat_properti_pembuat_kode:'string?',
        surat_properti_pembuat_nama:'string?',
        surat_properti_pembuat_unit:'string?',
        surat_properti_pembuat_unit_nama:'string?',
        surat_properti_pemulih_id:'string?',
        surat_properti_pemulih_jabatan:'string?',
        surat_properti_pemulih_jabatan_nama:'string?',
        surat_properti_pemulih_kode:'string?',
        surat_properti_pemulih_nama:'string?',
        surat_properti_pemulih_unit:'string?',
        surat_properti_pemulih_unit_nama:'string?',
        surat_properti_penghapus_id:'string?',
        surat_properti_penghapus_jabatan:'string?',
        surat_properti_penghapus_jabatan_nama:'string?',
        surat_properti_penghapus_kode:'string?',
        surat_properti_penghapus_nama:'string?',
        surat_properti_penghapus_unit:'string?',
        surat_properti_penghapus_unit_nama:'string?',
        surat_properti_pengubah_id:'string?',
        surat_properti_pengubah_jabatan:'string?',
        surat_properti_pengubah_jabatan_nama:'string?',
        surat_properti_pengubah_kode:'string?',
        surat_properti_pengubah_nama:'string?',
        surat_properti_pengubah_unit:'string?',
        surat_properti_pengubah_unit_nama:'string?',
        surat_properti_pulih_tgl:'date?',
        surat_properti_ubah_tgl:'date?',
        surat_registrasi:'string?',
        surat_retensi_tgl:'date?',
        surat_ringkasan:'string?',
        surat_selesai_staf:'string?',
        surat_selesai_tgl:'date?',
        surat_setuju:'string?',
        surat_setuju_isurut:'boolean?',
        surat_setuju_komentar:'string?',
        surat_setuju_setuju:'string?',
        surat_setuju_staf:'string?',
        surat_setuju_tgl:'date?',
        surat_setuju_total:'int?',
        surat_sifat:'string?',
        surat_sla:'string?',
        surat_tanggal:'date?',
        surat_terima_staf:'string?',
        surat_tujuan:'string?',
        surat_unit:'string?',
        surat_usebalas:'boolean?',
        surat_useretensi:'boolean?',
        surat_usesetuju:'boolean?',
        surat_usesla:'boolean?',
        unit_id:'string?',
        unit_kode:'string?',
        unit_nama:'string?',
        unit_source_id:'string?',
        unit_source_kode:'string?',
        unit_source_nama:'string?',
    }
}