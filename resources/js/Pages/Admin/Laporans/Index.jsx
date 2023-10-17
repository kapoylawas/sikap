//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage, Link
import { Head, usePage, Link } from "@inertiajs/inertia-react";

export default function SksIndex() {
    return (
        <>
            <Head>
                <title>Laporan - SIKAP</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-5"></div>
                <div className="row mt-2 mb-4"></div>
            </LayoutAccount>
        </>
    );
}
