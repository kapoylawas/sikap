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
    //destruct props "errors" & "datas"
    const { errors, villages, jabatans, subdistricts } = usePage().props;

    //state
    const [villageID, setVillageID] = useState("");
    const [subdistrictID, setSubdistrictID] = useState("");
    const [jobID, setJobID] = useState("");
    const [tahun, setTahun] = useState("");
    const [name, setName] = useState("");
    const [tglsk, setTglsk] = useState("");
    const [filesk, setFilesk] = useState(null);

    const storeSk = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/sks",
            {
                //data
                village_id: villageID,
                subdistrict_id: subdistrictID,
                jabatan_id: jobID,
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
                                    <i className="fa fa-paper"></i> Add New SK
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeSk}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Kelurahan/Desa
                                        </label>
                                        <select
                                            className="form-select"
                                            value={villageID}
                                            onChange={(e) =>
                                                setVillageID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Desa --
                                            </option>
                                            {villages.map((village) => (
                                                <option
                                                    value={village.id}
                                                    key={village.id}
                                                >
                                                    {village.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.village_id && (
                                        <div className="alert alert-danger">
                                            {errors.village_id}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Kecamatan
                                        </label>
                                        <select
                                            className="form-select"
                                            value={subdistrictID}
                                            onChange={(e) =>
                                                setSubdistrictID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Kecamatan --
                                            </option>
                                            {subdistricts.map((subdistrict) => (
                                                <option
                                                    value={subdistrict.id}
                                                    key={subdistrict.id}
                                                >
                                                    {subdistrict.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.subdistrict_id && (
                                        <div className="alert alert-danger">
                                            {errors.subdistrict_id}
                                        </div>
                                    )}
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
                                            No SK
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Masukkan Nama"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Tanggal SK
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={tglsk}
                                            onChange={(e) =>
                                                setTglsk(e.target.value)
                                            }
                                            placeholder="Masukkan Tanggal SK"
                                        />
                                    </div>
                                    {errors.tglsk && (
                                        <div className="alert alert-danger">
                                            {errors.tglsk}
                                        </div>
                                    )}
                                   <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File SK <li style={{ color: "red" }}>(File Wajib PDF max 4 mb)</li>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setFilesk(e.target.files[0])
                                            }
                                        />
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
