//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

import Search from "../../../Shared/Search";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import component search

import Delete from "../../../Shared/Delete";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function JabatansIndex() {
    const { jabatans } = usePage().props;

    return (
        <>
            <Head>
                <title>Jabatan - SIKAP</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href="/admin/jabatans/create"
                                    className="btn btn-md btn-primary border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Add
                                </Link>
                            </div>
                            <div className="col-md-9 col-12 mb-2">
                                <Search URL={"/admin/jabatans"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-home"></i> Master
                                    Kelompok Jabatan
                                </span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped table-hovered">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    style={{ width: "5%" }}
                                                >
                                                    No.
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Kelompok Jabatan
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Nama Jabatan
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {jabatans.data.map((jabatan, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {++index +
                                                            (jabatans.current_page -
                                                                1) *
                                                                jabatans.per_page}
                                                    </td>
                                                    <td>{jabatan.job.name}</td>
                                                    <td>{jabatan.name}</td>
                                                    <td className="text-center">
                                                        {hasAnyPermission([
                                                            "jabatans.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/admin/jabatans/${jabatan.id}/edit`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "jabatans.delete",
                                                        ]) && (
                                                            <Delete
                                                                URL={
                                                                    "/admin/jabatans"
                                                                }
                                                                id={jabatan.id}
                                                            />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <Pagination links={jabatans.links} align={"end"} />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
