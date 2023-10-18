//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

import axios from "axios";

export default function SksIndex() {
    const { skTransactions } = usePage().props;

    const [triwulan, setTriwulan] = useState("");
    const [tahun, setTahun] = useState("");
    const [getTribulan, setGetTribulan] = useState([]);

    //method get
    const fetchTribulan = async (th) => {
        //set state
        setTahun(th);

        //get tribulan
        axios
            .get(`/admin/tribulan?tribulan=${triwulan}&tahun=${th}`)
            .then((response) => {
                setGetTribulan(response.data);
            });
    };

    return (
        <>
            <Head>
                <title>Laporan - SIKAP</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5"></div>
                <div className="row mt-2 mb-4">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label fw-bold">Kota</label>
                            <select
                                className="form-select"
                                value={triwulan}
                                onChange={(e) => setTriwulan(e.target.value)}
                            >
                                <option value="">-- Pilih Tribulan --</option>
                                <option value="1">I</option>
                                <option value="2">II</option>
                                <option value="3">III</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label fw-bold">tahun</label>
                            <select
                                className="form-select"
                                value={tahun}
                                onChange={(e) => fetchTribulan(e.target.value)}
                            >
                                <option value="">-- Pilih Tahun --</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">
                                <i className="fa fa-paper"></i> Data Gaji Tribulan
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
                                                Nama
                                            </th>
                                            <th
                                                scope="col"
                                                style={{ width: "5%" }}
                                            >
                                                Bank
                                            </th>
                                            <th
                                                scope="col"
                                                style={{ width: "5%" }}
                                            >
                                                Triwulan
                                            </th>
                                            <th
                                                scope="col"
                                                style={{ width: "5%" }}
                                            >
                                                Gaji Perbulan
                                            </th>
                                            <th
                                                scope="col"
                                                style={{ width: "5%" }}
                                            >
                                                Gaji Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getTribulan.map((tw, index) => ( 
                                            <tr key={index}>
                                                <td>{tw.biodata.name}</td>
                                                <td>{tw.biodata.bank.name}</td>
                                                <td>{tw.tribulan}</td>
                                                <td>{tw.sk.jabatan.tarifgaji}</td>
                                                <td>{tw.gaji}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
