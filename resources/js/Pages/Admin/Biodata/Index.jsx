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

export default function BiodatasIndex() {
    const { biodatas } = usePage().props;
    console.log(biodatas);
    return (
        <>
            <Head>
                <title>Bidoata - SIKAP</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href="/admin/biodatas/create"
                                    className="btn btn-md btn-primary border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Add
                                </Link>
                            </div>
                            <div className="col-md-9 col-12 mb-2">
                                <Search URL={"/admin/biodata"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-home"></i> Biodata
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
                                                    Kota
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
                                                    Kelurahan/desa
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Bank
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Nik
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Alamat
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    No. Rekening
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    No. HP
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Foto KTP
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Foto Buku Tabungan
                                                </th>
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Foto
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
                                        {biodatas.data.map((biodata, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {++index +
                                                            (biodatas.current_page -
                                                                1) *
                                                                biodatas.per_page}
                                                    </td>
                                                    <td>{biodata.city.name}</td>
                                                    <td>{biodata.subdistrict.name}</td>
                                                    <td>{biodata.village.name}</td>
                                                    <td>{biodata.bank.name}</td>
                                                    <td>{biodata.name}</td>
                                                    <td>{biodata.nik}</td>
                                                    <td>{biodata.alamat}</td>
                                                    <td>{biodata.norek}</td>
                                                    <td>{biodata.nohp}</td>
                                                    <td>
                                                        <a
                                                                className="btn btn-success"
                                                                target="_blank"
                                                                href={biodata.filektp}
                                                            >
                                                                <i className="fa fa-pdf">
                                                                    {" "}
                                                                    Lihat
                                                                </i>{" "}
                                                            </a>
                                                    </td>
                                                    <td>
                                                        <a
                                                                className="btn btn-success"
                                                                target="_blank"
                                                                href={biodata.filebukutabungan}
                                                            >
                                                                <i className="fa fa-pdf">
                                                                    {" "}
                                                                    Lihat
                                                                </i>{" "}
                                                            </a>
                                                    </td>
                                                    <td>
                                                        <a
                                                                className="btn btn-success"
                                                                target="_blank"
                                                                href={biodata.foto}
                                                            >
                                                                <i className="fa fa-pdf">
                                                                    {" "}
                                                                    Lihat
                                                                </i>{" "}
                                                            </a>
                                                    </td>
                                                    <td className="text-center">
                                                        {hasAnyPermission([
                                                            "biodatas.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/admin/biodatas/${biodata.id}/edit`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        )}
                                                        {hasAnyPermission([
                                                            "biodatas.delete",
                                                        ]) && (
                                                            <Delete
                                                                URL={
                                                                    "/admin/biodatas"
                                                                }
                                                                id={biodata.id}
                                                            />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <Pagination
                                    links={biodatas.links}
                                    align={"end"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
