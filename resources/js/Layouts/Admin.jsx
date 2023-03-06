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
            <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
                <a className="navbar-brand me-lg-5" href="/">
                    <img className="navbar-brand-dark" src="" />
                    <img className="navbar-brand-light" src="" />
                </a>
                <div className="d-flex align-items-center">
                    <button
                        className="navbar-toggler d-lg-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            <Sidebar />
            <main className="content">
                <Navbar />
                {children}
            </main>
        </>
    );
}
