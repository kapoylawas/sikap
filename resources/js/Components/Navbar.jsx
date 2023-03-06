//import React
import React from "react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Link and usePage
import { Link, usePage } from "@inertiajs/inertia-react";

//import component bootstrap
import { NavDropdown } from "react-bootstrap";

export default function Navbar() {
    //destruct URL from props
    const { auth } = usePage().props;

    //function logout
    const logoutHandler = async (e) => {
        e.preventDefault();

        Inertia.post("/logout");
    };

    return (
        <>
            <nav className="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
                <div className="container-fluid px-0">
                    <div
                        className="d-flex justify-content-between w-100"
                        id="navbarSupportedContent"
                    >
                        <div className="d-flex align-items-center"></div>

                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item dropdown ms-lg-3">
                                <a
                                    className="nav-link dropdown-toggle pt-1 px-0"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div className="media d-flex align-items-center">
                                        <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                            <span className="mb-0 font-small fw-bold text-gray-900"></span>
                                        </div>
                                    </div>
                                </a>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0"></ul>
                                </div>
                            </li>
                        </ul>
                        <NavDropdown
                            title={auth.user.name}
                            className="fw-bold dark"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item onClick={logoutHandler}>
                                <i className="fa fa-sign-out-alt me-2"></i>{" "}
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </nav>
        </>
    );
}
