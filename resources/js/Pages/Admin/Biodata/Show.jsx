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
                                        Tab content for Biodata
                                    </Tab>
                                    <Tab eventKey="history" title="Histori Jabatan">
                                        Tab content for Histori jabatan 
                                        {/* {biodatas.sktransaction.map((city) => (
                                            <div>
                                                {}
                                            </div>
                                        ))} */}
                                        {biodatas.sktransaction.map((sk) => (
                                                <div>
                                                    {sk.sk.jabatan.name}
                                                </div>
                                            ))}
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
