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

export default function JabatansCreate() {
    const { errors, jobs } = usePage().props;

    //state
    const [jobsID, setJobsID] = useState("");
    const [name, setName] = useState("");
    const [tarifgaji, setTarifgaji] = useState("");

    const storeJabatans = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/jabatans",
            {
                //data
                job_id: jobsID,
                name: name,
                tarifgaji: tarifgaji,
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
                <title>Create Jabatan - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/jobs"
                    className="btn btn-md btn-primary border-0 shadow"
                    type="button"
                >
                    <i className="fa fa-long-arrow-alt-left me-2"></i>
                    Kembali
                </Link>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="col-12">
                            <div className="card border-0 rounded shadow-sm border-top-success">
                                <div className="card-header">
                                    <span className="font-weight-bold">
                                        <i className="fa fa-home"></i> Add New
                                        Kelompok Jabatan Name
                                    </span>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={storeJabatans}>
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Kelompok Jabatan
                                                </label>
                                                <select
                                                    className="form-select"
                                                    value={jobsID}
                                                    onChange={(e) =>
                                                        setJobsID(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        -- Select Kelompok
                                                        Jabatan --
                                                    </option>
                                                    {jobs.map((job) => (
                                                        <option
                                                            value={job.id}
                                                            key={job.id}
                                                        >
                                                            {job.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {errors.job_id && (
                                                <div className="alert alert-danger">
                                                    {errors.job_id}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Kelompok Jabatan Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                placeholder="Enter Kelompok Jabatan"
                                            />
                                        </div>
                                        {errors.name && (
                                            <div className="alert alert-danger">
                                                {errors.name}
                                            </div>
                                        )}
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">
                                                Tarif Gaji
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={tarifgaji}
                                                onChange={(e) =>
                                                    setTarifgaji(e.target.value)
                                                }
                                                placeholder="Enter Tarif Gaji"
                                            />
                                        </div>
                                        {errors.tarifgaji && (
                                            <div className="alert alert-danger">
                                                {errors.tarifgaji}
                                            </div>
                                        )}
                                        <div>
                                            <button
                                                type="submit"
                                                className="btn btn-md btn-success me-2"
                                            >
                                                <i className="fa fa-save"></i>{" "}
                                                Save
                                            </button>
                                            <button
                                                type="reset"
                                                className="btn btn-md btn-warning"
                                            >
                                                <i className="fa fa-redo"></i>{" "}
                                                Reset
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
