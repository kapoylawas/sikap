//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage
import { Head, Link, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";

export default function SksCreate() {
    //destruct props "errors" & "roles"
    const { errors } = usePage().props;

    //state
    const [desa, setDesa] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [tahun, setTahun] = useState("");
    const [name, setName] = useState("");
    const [tglsk, setTglsk] = useState("");
    const [filesk, setFilesk] = useState("");
    
    

    const storeSk = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/sks",
            {
                //data
                desa: desa,
                jabatan: jabatan,
                tahun: tahun,
                name: name,
                tglsk: tglsk,
                filesk: filesk,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Create SK - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/sks"
                    className="btn btn-md btn-primary border-0 shadow"
                    type="button"
                >
                    <i className="fa fa-long-arrow-alt-left me-2"></i>
                    Kembali
                </Link>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-paper"></i> Add New
                                    SK
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeSk}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Desa</label>
                                        <input type="text" className="form-control" value={desa} onChange={(e) => setDesa(e.target.value)} placeholder="Masukkan nama Desa" />
                                    </div>
                                    {errors.desa && (
                                        <div className="alert alert-danger">
                                            {errors.desa}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Jabatan</label>
                                        <input type="text" className="form-control" value={jabatan} onChange={(e) => setJabatan(e.target.value)} placeholder="Masukkan Jabatan" />
                                    </div>
                                    {errors.jabatan && (
                                        <div className="alert alert-danger">
                                            {errors.jabatan}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Tahun</label>
                                        <input type="text" className="form-control" value={tahun} onChange={(e) => setTahun(e.target.value)} placeholder="Masukkan Tahun" />
                                    </div>
                                    {errors.tahun && (
                                        <div className="alert alert-danger">
                                            {errors.tahun}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Nama</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama" />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Tanggal SK</label>
                                        <input type="text" className="form-control" value={desa} onChange={(e) => setTglsk(e.target.value)} placeholder="Masukkan Tanggal SK" />
                                    </div>
                                    {errors.tglsk && (
                                        <div className="alert alert-danger">
                                            {errors.tglsk}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">File SK</label>
                                        <input type="text" className="form-control" value={filesk} onChange={(e) => setFilesk(e.target.value)} placeholder="Masukkan File SK" />
                                    </div>
                                    {errors.filesk && (
                                        <div className="alert alert-danger">
                                            {errors.filesk}
                                        </div>
                                    )}
                                    

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i> Save
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-md btn-warning"
                                        >
                                            <i className="fa fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
