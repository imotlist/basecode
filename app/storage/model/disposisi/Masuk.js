export const DisposisiMasuk = {
    name: 'disposisimasuk',
    primaryKey : 'disposisi_masuk_id',
    properties: {
        aksi_id:'string?',
        aksi_kode:'string?',
        aksi_nama:'string?',
        baca:{type: 'int', default: 0},
        berkas:{type: 'int', default: 0},
        disposisi_baca_tgl:'date?',
        disposisi_cabut_induk:'string?',
        disposisi_cabut_tgl:'date?',
        disposisi_id:'string?',
        disposisi_induk:'string?',
        disposisi_isbaca:'bool?',
        disposisi_iscabut:'bool?',
        disposisi_ispulih:'bool?',
        disposisi_israhasia:'bool?',
        disposisi_istunggal:'bool?',
        disposisi_jumlah_penerima:{type: 'int', default: 0},
        disposisi_jumlah_penerima_baca:{type: 'int', default: 0},
        disposisi_masuk_aksi:'string?',
        disposisi_masuk_aksi_baca_staf:'string?',
        disposisi_masuk_aksi_baca_tgl:'string?',
        disposisi_masuk_aksi_isbaca:{type: 'int', default: 0},
        disposisi_masuk_aksi_staf:'string?',
        disposisi_masuk_aksi_tgl:'date?',
        disposisi_masuk_baca_staf:'string?',
        disposisi_masuk_baca_tgl:'date?',
        disposisi_masuk_berkasterima_staf:'string?',
        disposisi_masuk_berkasterima_tgl:'date?',
        disposisi_masuk_cabut_staf:'string?',
        disposisi_masuk_cabut_tgl:'date?',
        disposisi_masuk_disposisi:'string?',
        disposisi_masuk_id:'string?',
        disposisi_masuk_induk_baca_staf:'string?',
        disposisi_masuk_induk_baca_tgl:'date?',
        disposisi_masuk_isbaca:{type: 'int', default: 0},
        disposisi_masuk_isberkas:'bool?',
        disposisi_masuk_isberkasterima:'bool?',
        disposisi_masuk_iscabut:'bool?',
        disposisi_masuk_ispulih:'bool?',
        disposisi_masuk_istembusan:'bool?',
        disposisi_masuk_isterima:'bool?',
        disposisi_masuk_isterus:'bool?',
        disposisi_masuk_jumlah_penerima:'string?',
        disposisi_masuk_koreksi_status:{type: 'int', default: 0},
        disposisi_masuk_model:{type: 'int', default: 0},
        disposisi_masuk_model_sub:{type: 'int', default: 0},
        disposisi_masuk_nomor:'string?',
        disposisi_masuk_penerima_id:'string?',
        disposisi_masuk_penerima_jabatan_nama:'string?',
        disposisi_masuk_penerima_nama:'string?',
        disposisi_masuk_penerima_unit_nama:'string?',
        disposisi_masuk_pesan:'string?',
        disposisi_masuk_properti:'string?',
        disposisi_masuk_pulih_staf:'string?',
        disposisi_masuk_pulih_tgl:'date?',
        disposisi_masuk_staf:'string?',
        disposisi_masuk_status:{type: 'int', default: 0},
        disposisi_masuk_status_staf:'string?',
        disposisi_masuk_status_tgl:'date?',
        disposisi_masuk_status_ttd:'string?',
        disposisi_masuk_tembusan_nama:'string?',
        disposisi_masuk_terima_id:'string?',
        disposisi_masuk_terima_jabatan_nama:'string?',
        disposisi_masuk_terima_nama:'string?',
        disposisi_masuk_terima_staf:'string?',
        disposisi_masuk_terima_tgl:'date?',
        disposisi_masuk_terima_unit_nama:'string?',
        disposisi_masuk_terus_staf:'string?',
        disposisi_masuk_terus_tgl:'date?',
        disposisi_mode:'string?',
        disposisi_model:{type: 'int', default: 0},
        disposisi_model_sub:{type: 'int', default: 0},
        disposisi_nomor:'string?',
        disposisi_notadinas:'string?',
        disposisi_notadinas_type:'string?',
        disposisi_pelaku:'string?',
        disposisi_pelaku_nama:'string?',
        disposisi_pengirim_id:'string?',
        disposisi_pengirim_jabatan_nama:'string?',
        disposisi_pengirim_nama:'string?',
        disposisi_pengirim_unit_nama:'string?',
        disposisi_perintah:'string?',
        disposisi_pesan:'string?',
        disposisi_prioritas_tgl:'date?',
        disposisi_properti:'string?',
        disposisi_pulih_staf:'string?',
        disposisi_pulih_tgl:'date?',
        disposisi_staf:'string?',
        disposisi_surat:'string?',
        disposisi_tgl:'date?',
        disposisi_useprioritas:'bool?',
        end:'bool?',
        isPenerima:'bool?',
        isaksi:{type: 'int', default: 0},
        itipe_id:'string?',
        itipe_kode:'string?',
        itipe_nama:'string?',
        jenis_id:'string?',
        jenis_kode:'string?',
        jenis_nama:'string?',
        jenis_nomor_awal:'bool?',
        kelas_id:'string?',
        kelas_kode:'string?',
        kelas_nama:'string?',
        korespondens_unitpenerima_id:'string?',
        korespondensi_id:'string?',
        korespondensi_isinternal:'bool?',
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
        notadinas_arsip:'string?',
        notadinas_bagi_jumlah:'string?',
        notadinas_id:'string?',
        notadinas_isselesai:'string?',
        notadinas_jenis:'string?',
        notadinas_jenis_id:'string?',
        notadinas_jenis_nama:'string?',
        notadinas_jenis_nomor_awal:'string?',
        notadinas_jenis_retensi:'string?',
        notadinas_jnis_kode:'string?',
        notadinas_kelas:'string?',
        notadinas_kelas_id:'string?',
        notadinas_kelas_kode:'string?',
        notadinas_kelas_nama:'string?',
        notadinas_kelas_retensi:'string?',
        notadinas_lampiran:'string?',
        notadinas_lokasi:'string?',
        notadinas_lokasi_id:'string?',
        notadinas_lokasi_kode:'string?',
        notadinas_lokasi_nama:'string?',
        notadinas_lokasi_sub:'string?',
        notadinas_media:'string?',
        notadinas_media_id:'string?',
        notadinas_media_kode:'string?',
        notadinas_media_nama:'string?',
        notadinas_perihal:'string?',
        notadinas_prioritas:'string?',
        notadinas_prioritas_id:'string?',
        notadinas_prioritas_kode:'string?',
        notadinas_prioritas_nama:'string?',
        notadinas_prioritas_retensi:'string?',
        notadinas_prioritas_tgl:'string?',
        notadinas_properti:'string?',
        notadinas_registrasi:'string?',
        notadinas_selesai_staf:'string?',
        notadinas_selesai_tgl:'string?',
        notadinas_setuju:'string?',
        notadinas_setuju_atasan_isurut:'string?',
        notadinas_setuju_kepala_isurut:'string?',
        notadinas_setuju_komentar:'string?',
        notadinas_setuju_staf:'string?',
        notadinas_setuju_tgl:'string?',
        notadinas_sifat:'string?',
        notadinas_sifat_color:'string?',
        notadinas_sifat_id:'string?',
        notadinas_sifat_israhasia:'string?',
        notadinas_sifat_kode:'string?',
        notadinas_sifat_nama:'string?',
        notadinas_tanggal:'string?',
        notadinas_unit:'string?',
        notadinas_unit_id:'string?',
        notadinas_unit_kode:'string?',
        notadinas_unit_nama:'string?',
        pembaca_id:'string?',
        pembaca_jabatan_nama:'string?',
        pembaca_nama:'string?',
        pembaca_unit_nama:'string?',
        pemulih_id:'string?',
        pemulih_jabatan_nama:'string?',
        pemulih_nama:'string?',
        pemulih_unit_nama:'string?',
        pencabut_id:'string?',
        pencabut_jabatan_nama:'string?',
        pencabut_nama:'string?',
        pencabut_unit_nama:'string?',
        penerima_image_preview:'string?',
        penerimaberkas_id:'string?',
        penerimaberkas_jabatan_nama:'string?',
        penerimaberkas_nama:'string?',
        penerimaberkas_unit_nama:'string?',
        penerus_id:'string?',
        penerus_jabatan_nama:'string?',
        penerus_nama:'string?',
        penerus_unit_nama:'string?',
        pengirim_image_preview:'string?',
        perintah_id:'string?',
        perintah_kode:'string?',
        perintah_nama:'string?',
        prioritas_id:'string?',
        prioritas_kode:'string?',
        prioritas_nama:'string?',
        prioritas_retensi:{type: 'int', default: 0},
        sifat_color:'string?',
        sifat_id:'string?',
        sifat_kode:'string?',
        sifat_nama:'string?',
        staf_image_preview:'string?',
        surat_agenda:'string?',
        surat_agenda_sub:'string?',
        surat_arsip:'string?',
        surat_catatan:'string?',
        surat_distribusi_staf:'string?',
        surat_distribusi_tgl:'date?',
        surat_id:'string?',
        surat_imasuk_setuju:'string?',
        surat_imasuk_tolak:'string?',
        surat_imasuk_total:'string?',
        surat_isselesai:{type: 'int', default: 0},
        surat_itipe:'string?',
        surat_jenis:'string?',
        surat_kelas:'string?',
        surat_korespondensi:'string?',
        surat_korespondensi_surat:'string?',
        surat_lampiran:'string?',
        surat_lokasi:'string?',
        surat_media:'string?',
        surat_model:{type: 'int', default: 0},
        surat_nomor:'string?',
        surat_nomor_format:'string?',
        surat_nomor_otomatis:'string?',
        surat_pengirim:'string?',
        surat_perihal:'string?',
        surat_prioritas:'string?',
        surat_prioritas_tgl:'date?',
        surat_properti:'string?',
        surat_properti_buat_tgl:'date?',
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
        surat_registrasi:'string?',
        surat_retensi_tgl:'date?',
        surat_ringkasan:'string?',
        surat_selesai_staf:'string?',
        surat_selesai_tgl:'date?',
        surat_setuju:{type: 'int', default: 0},
        surat_setuju_isurut:'bool?',
        surat_setuju_setuju:'string?',
        surat_setuju_staf:'string?',
        surat_setuju_tgl:'date?',
        surat_setuju_total:'string?',
        surat_sifat:'string?',
        surat_tanggal:'date?',
        surat_terima_staf:'string?',
        surat_tujuan:'string?',
        surat_unit:'string?',
        surat_usebalas:'string?',
        surat_useretensi:'bool?',
        teruskan:{type: 'int', default: 0},
        unit_id:'string?',
        unit_kode:'string?',
        unit_nama:'string?',
        unit_source_id:'string?',
        unit_source_kode:'string?',
        unit_source_nama:'string?',
    }
}