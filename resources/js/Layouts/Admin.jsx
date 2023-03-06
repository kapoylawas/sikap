//import React
import React, { useState } from "react";

//import component bootstrap
import { NavDropdown } from "react-bootstrap";

//import usePage
import { usePage } from "@inertiajs/inertia-react";

//import inertia adapter
import { Inertia } from "@inertiajs/inertia";

//import Sidebar
import Sidebar from "../Components/Sidebar";

import Navbar from "../Components/Navbar";

export default function LayoutAccount({ children }) {
    //get props auth
    const { auth } = usePage().props;

    //state toggle
    const [sidebarToggle, setSidebarToggle] = useState(false);

    //function toggle hanlder
    const sidebarToggleHandler = (e) => {
        e.preventDefault();

        if (!sidebarToggle) {
            //add class on body
            document.body.classList.add("sb-sidenav-toggled");

            //set state "sidebarToggle" to true
            setSidebarToggle(true);
        } else {
            //remove class on body
            document.body.classList.remove("sb-sidenav-toggled");

            //set state "sidebarToggle" to false
            setSidebarToggle(false);
        }
    };

    //function logout
    const logoutHandler = async (e) => {
        e.preventDefault();

        Inertia.post("/logout");
    };

    return (
        <>
            {/* <div className="d-flex sb-sidenav-toggled" id="wrapper">
                <div className="bg-sidebar" id="sidebar-wrapper">
                    <div className="sidebar-heading bg-light text-center">
                    <img src="/assets/images/logo.png" width={'40'}/> 
                    <strong>Sikap</strong> <small></small></div>
                    <Sidebar />
                </div>
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="btn btn-success-dark" onClick={sidebarToggleHandler}><i className="fa fa-list-ul"></i></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <NavDropdown title={auth.user.name} className="fw-bold" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={logoutHandler}><i className="fa fa-sign-out-alt me-2"></i> Logout</NavDropdown.Item>
                                </NavDropdown>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div> */}

            <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
                <a class="navbar-brand me-lg-5" href="/">
                    <img class="navbar-brand-dark" src="" />
                    <img class="navbar-brand-light" src="" />
                </a>
                <div class="d-flex align-items-center">
                    <button
                        class="navbar-toggler d-lg-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <Sidebar />
            <main class="content">
                <Navbar />
                {children}
            </main>
        </>
    );
}
