//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import component search
import Search from "../../../Shared/Search";

import Delete from "../../../Shared/Delete";

//import component pagination
import Pagination from "../../../Shared/Pagination";

export default function HonorIndex() {
    const { honor } = usePage().props;

    return (
        <>
            <Head>
                <title>Honor - SIKAP</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href="/admin/honor/create"
                                    className="btn btn-md btn-primary border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Add
                                </Link>
                            </div>
                            <div className="col-md-9 col-12 mb-2">
                                <Search URL={"/admin/honor"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-paper"></i> Data Honor
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
                                                    Jabatan
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Tahun
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Nominal
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
                                            {honor.data.map((hn, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {++index +
                                                            (honor.current_page -
                                                                1) *
                                                                honor.per_page}
                                                    </td>
                                                    <td>{hn.jabatan.name}</td>
                                                    <td>{hn.tahun}</td>
                                                    <td>{hn.nominal}</td>
                                                    <td className="text-center">
                                                        <Link
                                                            href={`/admin/honor/${hn.id}`}
                                                            className="btn btn-primary btn-sm me-2"
                                                        >
                                                            <i className="fa fa-plus-circle"></i>
                                                        </Link>
                                                        {hasAnyPermission([
                                                            "honor.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/admin/honor/${hn.id}/edit`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "honor.delete",
                                                        ]) && (
                                                            <Delete
                                                                URL={
                                                                    "/admin/honor"
                                                                }
                                                                id={hn.id}
                                                            />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <Pagination links={honor.links} align={"end"} />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
