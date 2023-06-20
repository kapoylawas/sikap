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

export default function PuskesmasCreate() {
    //destruct props "errors" & "roles"
    const { errors } = usePage().props;

    //state
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const storePuskesmas = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/puskesmas",
            {
                //data
                name: name,
                alamat: alamat,
                email: email,
                phone: phone,
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
                <title>Create Puskesmas - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/puskesmas"
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
                                <span className="font-weight-bold"><i className="fa fa-task"></i> Add New Puskesmas</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storePuskesmas}>
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
                                        <label className="form-label fw-bold">Alamat</label>
                                        <input type="text" className="form-control" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Masukkan Alamat" />
                                    </div>
                                    {errors.alamat && (
                                        <div className="alert alert-danger">
                                            {errors.alamat}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email</label>
                                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Email" />
                                    </div>
                                    {errors.email && (
                                        <div className="alert alert-danger">
                                            {errors.email}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">No. Telpon PIC</label>
                                        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Masukkan No. Telpon PIC" />
                                    </div>
                                    {errors.phone && (
                                        <div className="alert alert-danger">
                                            {errors.phone}
                                        </div>
                                    )}

                                    <div>
                                        <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Save</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
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
