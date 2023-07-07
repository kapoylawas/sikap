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

export default function HonorCreate() {
    //destruct props "errors" & "datas"
    const { errors, jabatans } = usePage().props;

    //state
    const [jobID, setJobID] = useState("");
    const [tahun, setTahun] = useState("");
    const [nominal, setNominal] = useState("");
    
    const storeHonor = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/honor",
            {
                //data
                jabatan_id: jobID,
                tahun: tahun,
                nominal: name,
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
                <title>Create Data Honor - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/honor"
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
                                    <i className="fa fa-paper"></i> Add New Honor
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeHonor}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Jabatan
                                        </label>
                                        <select
                                            className="form-select"
                                            value={jobID}
                                            onChange={(e) =>
                                                setJobID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Jabatan --
                                            </option>
                                            {jabatans.map((jabatan) => (
                                                <option
                                                    value={jabatan.id}
                                                    key={jabatan.id}
                                                >
                                                    {jabatan.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.jabatan_id && (
                                        <div className="alert alert-danger">
                                            {errors.jabatan_id}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Tahun
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={tahun}
                                            onChange={(e) =>
                                                setTahun(e.target.value)
                                            }
                                            placeholder="Masukkan Tahun"
                                        />
                                    </div>
                                    {errors.tahun && (
                                        <div className="alert alert-danger">
                                            {errors.tahun}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Nominal
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={nominal}
                                            onChange={(e) =>
                                                setNominal(e.target.value)
                                            }
                                            placeholder="Masukkan Nominal"
                                        />
                                    </div>
                                    {errors.nominal && (
                                        <div className="alert alert-danger">
                                            {errors.nominal}
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
