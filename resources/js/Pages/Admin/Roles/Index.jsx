// import React
import React from "react";

//import layout
import LayoutAdmin from "../../../Layouts/Admin";

//import component Head and usePage
import { Head, Link, usePage } from "@inertiajs/inertia-react";

import Search from "../../../Shared/Search";

import Delete from "../../../Shared/Delete";

//import component pagination
import Pagination from "../../../Shared/Pagination";
import hasAnyPermission from "../../../Utils/Permissions";

export default function RolesIndex() {
    const { roles } = usePage().props;

    return (
        <>
            <Head>
                <title>Permissions - Sikap</title>
            </Head>
            <LayoutAdmin>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3 col-12 mb-2">
                                <Link
                                    href="/admin/roles/create"
                                    className="btn btn-md btn-primary border-0 shadow w-100"
                                    type="button"
                                >
                                    <i className="fa fa-plus-circle me-2"></i>
                                    Add
                                </Link>
                            </div>
                            <div class="col-md-9 col-12 mb-2">
                                <Search URL={"/admin/roles"} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-2 mb-4">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shield-alt"></i> Roles
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
                                                    Role Name
                                                </th>
                                                {/* <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Permissions
                                                </th> */}
                                                <th
                                                    scope="col"
                                                    style={{ width: "15%" }}
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roles.data.map((role, index) => (
                                                <tr key={index}>
                                                    <td className="text-center">
                                                        {++index +
                                                            (roles.current_page -
                                                                1) *
                                                                roles.per_page}
                                                    </td>
                                                    <td>{role.name}</td>
                                                    {/* <td>
                                                        {role.permissions.map(
                                                            (
                                                                permission,
                                                                index
                                                            ) => (
                                                                <button
                                                                    className="btn btn-success btn-sm shadow-sm border-0 ms-2 mb-2"
                                                                    key={index}
                                                                >
                                                                    {
                                                                        permission.name
                                                                    }
                                                                </button>
                                                            )
                                                        )}
                                                    </td> */}
                                                    <td className="text-center">
                                                        {hasAnyPermission([
                                                            "roles.edit",
                                                        ]) && (
                                                            <Link
                                                                href={`/admin/roles/${role.id}/edit`}
                                                                className="btn btn-primary btn-sm me-2"
                                                            >
                                                                <i className="fa fa-pencil-alt"></i>
                                                            </Link>
                                                        )}
                                                       {hasAnyPermission(['roles.delete']) &&
                                                            <Delete URL={'/admin/roles'} id={role.id} />
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <br />
                                <Pagination links={roles.links} align={"end"} />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </>
    );
}
