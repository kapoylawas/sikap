//import React
import React from "react";

//import layout
import LayoutAdmin from "../../../Layouts/Admin";

//import component Head and usePage
import { Head, usePage } from "@inertiajs/inertia-react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

export default function Dashboard() {
    //destruct props
    const { auth, user } = usePage().props;

    return (
        <>
            <Head>
                <title>Dashboard - Sikap</title>
            </Head>
            <LayoutAdmin>
                <div className="row mt-4">
                    <div className="col-12 col-md-12 col-lg-12 mb-4">
                        <div className="alert alert-success border-0 shadow-sm mb-0">
                            Selamat Datang, <strong>{auth.user.name}</strong>
                        </div>
                    </div>
                </div>

                {hasAnyPermission(["dashboard.statistics"]) && (
                    <div className="col-12 col-lg-3 mb-4">
                        <div className="card border-0 rounded shadow-sm overflow-hidden">
                            <div className="card-body p-0 d-flex align-items-center">
                                <div
                                    className="bg-success py-4 px-5 mfe-3"
                                    style={{ width: "130px" }}
                                >
                                    <i className="fas fa-check-circle fa-2x text-white"></i>
                                </div>
                                <div>
                                    <div className="text-value text-success">
                                        {user}
                                    </div>
                                    <div className="text-muted text-uppercase font-weight-bold small">
                                        USER
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </LayoutAdmin>
        </>
    );
}
