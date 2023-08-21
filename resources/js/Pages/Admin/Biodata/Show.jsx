//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage
import { Head, Link, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function BiodataShow() {
    const { biodatas, cities, subdistricts, villages, banks } = usePage().props;
    console.log(biodatas);

    const [key, setKey] = useState("biodata");

    return (
        <>
            <Head>
                <title>Detail Biodata - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/biodatas"
                    className="btn btn-md btn-primary border-0 shadow"
                    type="button"
                >
                    <i className="fa fa-long-arrow-alt-left me-2"></i>
                    Kembali
                </Link>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-body">
                                <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-3"
                                >
                                    <Tab eventKey="biodata" title="Biodata">
                                        <div className="container-fluid px-4 pt-5 pb-5">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12"></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-3">
                                                        <div className="card border-1 rounded shadow-sm">
                                                            <div className="text-center">
                                                                <img
                                                                    className="image-card-custom"
                                                                    src={
                                                                        biodatas.foto
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card border-0 rounded shadow-sm">
                                                            <div className="card-body">
                                                                <form>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas.name
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Tanggal
                                                                            Lahir
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas.tglLahir
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Nik
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas.nik
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            No
                                                                            Handphone
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas.nohp
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Bank
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas
                                                                                    .bank
                                                                                    .name
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Kota
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas
                                                                                    .city
                                                                                    .name
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Kecamatan
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas
                                                                                    .subdistrict
                                                                                    .name
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Alamat
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder={
                                                                                biodatas.alamat
                                                                            }
                                                                            disabled
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            File
                                                                            KTP
                                                                        </label>
                                                                        <a
                                                                            className="btn btn-success form-control"
                                                                            target="_blank"
                                                                            href={
                                                                                biodatas.filektp
                                                                            }
                                                                        >
                                                                            <i className="fa fa-pdf">
                                                                                {" "}
                                                                                Lihat
                                                                            </i>{" "}
                                                                        </a>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label fw-bold">
                                                                            Buku
                                                                            Tabungan
                                                                        </label>
                                                                        <a
                                                                            className="btn btn-success form-control"
                                                                            target="_blank"
                                                                            href={
                                                                                biodatas.filebukutabungan
                                                                            }
                                                                        >
                                                                            <i className="fa fa-pdf">
                                                                                {" "}
                                                                                Lihat
                                                                            </i>{" "}
                                                                        </a>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab
                                        eventKey="history"
                                        title="Histori Jabatan"
                                    >
                                        <div className="container-fluid px-4 pt-5 pb-5">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12"></div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="card border-0 rounded shadow-sm">
                                                            <div className="card-body">
                                                                <div className="table-responsive">
                                                                    <table className="table table-bordered table-striped table-hovered">
                                                                        <thead>
                                                                            <tr>
                                                                                <th
                                                                                    scope="col"
                                                                                    style={{
                                                                                        width: "2%",
                                                                                    }}
                                                                                >
                                                                                    No
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    style={{
                                                                                        width: "5%",
                                                                                    }}
                                                                                >
                                                                                    Histori
                                                                                    Jabatan
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    style={{
                                                                                        width: "5%",
                                                                                    }}
                                                                                >
                                                                                    Tahun
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {biodatas.sktransaction.map(
                                                                                (
                                                                                    sk,
                                                                                    index
                                                                                ) => (
                                                                                    <tr
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <td className="text-center">
                                                                                            {++index }
                                                                                        </td>
                                                                                        <td>
                                                                                            {
                                                                                                sk
                                                                                                    .sk
                                                                                                    .jabatan
                                                                                                    .name
                                                                                            }
                                                                                        </td>
                                                                                        <td>
                                                                                            {
                                                                                                sk.sk.tahun
                                                                                            }
                                                                                        </td>
                                                                                    </tr>
                                                                                )
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
