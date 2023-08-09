//import react
import React, { useState } from "react";

//import layout
import LayoutAccount from "../../../Layouts/Admin";

//import Head, usePage
import { Head, Link, usePage } from "@inertiajs/inertia-react";

//import Inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sweet Alert
import Swal from "sweetalert2";
import Pagination from "../../../Shared/Pagination";
import Search from "../../../Shared/Search";

export default function RoleEdit() {
    //destruct props "errors", "permissions" & "role"
    const { errors, permissions, role } = usePage().props;

    // console.log('permissions',permissions);

    //define state
    const [name, setName] = useState(role.name);
    const [permissionsData, setPermissionsData] = useState(
        role.permissions.map((obj) => obj.name)
    );

    console.log('role',permissionsData);


    //define method "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        //define data
        let data = permissionsData;

        //check item already exists, if so, remove with filter
        if (data.some((name) => name === e.target.value)) {
            data = data.filter((name) => name !== e.target.value);
        } else {
            //push new item to array
            data.push(e.target.value);
        }

        //set data to state
        setPermissionsData(data);
    };

    

    //define method
    const updateRole = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.put(
            `/admin/roles/${role.id}`,
            {
                //data
                name: name,
                permissions: permissionsData,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data updated successfully!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
            }
        );
    };

    return (
        <>
            <Head>
                <title>Edit Roles - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/roles"
                    className="btn btn-md btn-primary border-0 shadow"
                    type="button"
                >
                    <i className="fa fa-long-arrow-alt-left me-2"></i>
                    Kembali
                </Link>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="row">
                            <div class="col-md-9 col-12 mb-2">
                                <Search URL={`/admin/roles/${role.id}/edit`} />
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-shield-alt"></i> Edit
                                    Role
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateRole}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Role Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Enter Role Name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                    <hr />
                                    <div className="mb-3">
                                        <label className="fw-bold">
                                            Permissions
                                        </label>
                                        <br />
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-striped table-hovered">
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                style={{
                                                                    width: "5%",
                                                                }}
                                                            >
                                                                No.
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                style={{
                                                                    width: "15%",
                                                                }}
                                                            >
                                                                Role Name Route
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                style={{
                                                                    width: "15%",
                                                                }}
                                                            >
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {permissions.data.map(
                                                            (
                                                                permission,
                                                                index
                                                            ) => (
                                                                <>
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <td className="text-center">
                                                                            {++index +
                                                                                (permissions.current_page -
                                                                                    1) *
                                                                                    permissions.per_page}
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                permission.name
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="checkbox"
                                                                                value={
                                                                                    permission.name
                                                                                }
                                                                                defaultChecked={permissionsData.some(
                                                                                    (
                                                                                        name
                                                                                    ) =>
                                                                                        name ===
                                                                                            permission.name ??
                                                                                        true
                                                                                )}
                                                                                onChange={
                                                                                    handleCheckboxChange
                                                                                }
                                                                                id={`check-${permission.id}`}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <Pagination
                                            links={permissions.links}
                                            align={"end"}
                                        />
                                        {errors.permissions && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.permissions}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i>{" "}
                                            Update
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-md btn-warning"
                                        >
                                            <i className="fa fa-redo"></i> Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAccount>
        </>
    );
}
