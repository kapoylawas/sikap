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

export default function SksIndex() {
    const { sks } = usePage().props;

    return (
        <>
            <Head>
                <title>SK - SIKAP</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href="/admin/sks/create"
                                    className="btn btn-md btn-primary border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Add
                                </Link>
                            </div>
                            <div className="col-md-9 col-12 mb-2">
                                <Search URL={"/admin/sks"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-paper"></i> Data SK
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
                                                    Kecamatan
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
                                                    No SK
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Tgl SK
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    File SK
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
                                            {sks.data.map((sk, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {++index +
                                                            (sks.current_page -
                                                                1) *
                                                                sks.per_page}
                                                    </td>
                                                    <td>{sk.village.name}</td>
                                                    <td>{sk.jabatan.name}</td>
                                                    <td>{sk.tahun}</td>
                                                    <td>{sk.name}</td>
                                                    <td>{sk.tglsk}</td>
                                                    <td>
                                                        <a
                                                            className="btn btn-success"
                                                            target="_blank"
                                                            href={sk.filesk}
                                                        >
                                                            <i className="fa fa-pdf">
                                                                {" "}
                                                                Lihat
                                                            </i>{" "}
                                                        </a>
                                                    </td>
                                                    <td className="text-center">
                                                        <Link
                                                            href={`/admin/sks/${sk.id}`}
                                                            className="btn btn-primary btn-sm me-2"
                                                        >
                                                            <i className="fa fa-plus-circle"></i>
                                                        </Link>
                                                        {hasAnyPermission([
                                                            "sks.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/admin/sks/${sk.id}/edit`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "sks.delete",
                                                        ]) && (
                                                            <Delete
                                                                URL={
                                                                    "/admin/sks"
                                                                }
                                                                id={sk.id}
                                                            />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <Pagination links={sks.links} align={"end"} />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
