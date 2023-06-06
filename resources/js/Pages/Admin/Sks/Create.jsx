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
    const [name, setName] = useState("");
    const [tranfer, setTranfer] = useState("");

    const storeBank = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/banks",
            {
                //data
                name: name,
                tranfer: tranfer,
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
                                        <label className="form-label fw-bold">Bank Name</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Bank Name" />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Biaya Tranfer</label>
                                        <input type="number" className="form-control" value={tranfer} onChange={(e) => setTranfer(e.target.value)} placeholder="Enter Nominal Tranfer" />
                                    </div>
                                    {errors.tranfer && (
                                        <div className="alert alert-danger">
                                            {errors.tranfer}
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
