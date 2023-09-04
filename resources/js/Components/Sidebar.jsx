//import React
import React from "react";

//import permissions
import hasAnyPermission from "../Utils/Permissions";

//import Link and usePage
import { Link, usePage } from "@inertiajs/inertia-react";

export default function Sidebar() {
    //destruct URL from props
    const { url } = usePage();

    return (
        <>
            <nav
                id="sidebarMenu"
                className="sidebar d-lg-block bg-black text-white collapse"
                data-simplebar
            >
                <div className="sidebar-inner px-4 pt-3">
                    <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                        <div className="collapse-close d-md-none">
                            <a
                                href="#sidebarMenu"
                                data-bs-toggle="collapse"
                                data-bs-target="#sidebarMenu"
                                aria-controls="sidebarMenu"
                                aria-expanded="true"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="icon icon-xs"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <ul className="nav flex-column pt-3 pt-md-0">
                        <li className="nav-item">
                            <span className="mt-2 d-flex justify-content-between">
                                <span>
                                    <span className="sidebar-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-wallet-fill me-3"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z" />
                                        </svg>
                                    </span>
                                    <span className="sidebar-text fw-bold">
                                        SIKAP
                                    </span>
                                </span>
                                <span>
                                    <span className="badge badge-sm bg-secondary ms-1 text-gray-800">
                                        PRO
                                    </span>
                                </span>
                            </span>
                        </li>

                        <li
                            role="separator"
                            className="dropdown-divider mt-4 mb-3 border-gray-700"
                        ></li>

                        {hasAnyPermission(["dashboard.index"]) && (
                            <li
                                // className="nav-item"
                                className={`${
                                    url.startsWith("/admin/dashboard")
                                        ? "nav-item active"
                                        : "nav-item"
                                }`}
                            >
                                <Link
                                    href="/admin/dashboard"
                                    className="nav-link d-flex justify-content-between"
                                >
                                    <span>
                                        <span className="sidebar-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                fill="currentColor"
                                                className="bi bi-speedometer2 icon icon-xs me-2"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="sidebar-text">
                                            Dashboard
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        )}

                        {hasAnyPermission(["permissions.index"]) && (
                            <>
                                <li
                                    role="separator"
                                    className="dropdown-divider mt-2 mb-2 border-gray-700"
                                ></li>
                                <li
                                    className={`${
                                        url.startsWith("/admin/permissions")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/permissions"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    fill="currentColor"
                                                    className="bi bi-person-lines-fill me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Permissions
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}

                        {hasAnyPermission(["roles.index"]) && (
                            <li
                                className={`${
                                    url.startsWith("/admin/roles")
                                        ? "nav-item active"
                                        : "nav-item"
                                }`}
                            >
                                <Link
                                    href="/admin/roles"
                                    className="nav-link d-flex justify-content-between"
                                >
                                    <span>
                                        <span className="sidebar-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                className="bi bi-diagram-3 me-2"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                                                />
                                            </svg>
                                        </span>
                                        <span className="sidebar-text">
                                            Roles
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        )}

                        {hasAnyPermission(["users.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/users")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/users"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    className="bi bi-person-add me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Users
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    role="separator"
                                    className="dropdown-divider mt-2 mb-2 border-gray-700"
                                ></li>
                            </>
                        )}

                        {hasAnyPermission(["citys.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/citys")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/citys"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    className="bi bi-building me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                                    <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Kota
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}

                        {hasAnyPermission(["subdistricts.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/subdistricts")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/subdistricts"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    className="bi bi-buildings me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                                                    <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Kecamatan
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}

                        {hasAnyPermission(["villages.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/villages")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/villages"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-house-door me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Kelurahan/Desa
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    role="separator"
                                    className="dropdown-divider mt-2 mb-2 border-gray-700"
                                ></li>
                            </>
                        )}
                        {hasAnyPermission(["banks.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/banks")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/banks"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-bank me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Bank
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}
                        {hasAnyPermission(["jobs.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/jobs")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/jobs"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-person-bounding-box me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Kelompok Jabatan
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}
                        {hasAnyPermission(["jabatans.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/jabatans")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/jabatans"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-person-workspace me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Jabatan
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}

                        {hasAnyPermission(["puskesmas.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/puskesmas")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/puskesmas"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-hospital me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M6 0a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v4H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V16h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1V1a1 1 0 0 0-1-1H6Zm2.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1ZM2.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 9.75v-.5A.25.25 0 0 1 2.25 9Zm0 2h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25ZM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5ZM13.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25ZM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5Zm.25 1.75h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Puskesmas
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}

                        {hasAnyPermission(["honor.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/honor")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/honor"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-cash me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Honor
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    role="separator"
                                    className="dropdown-divider mt-2 mb-2 border-gray-700"
                                ></li>
                            </>
                        )}

                        {hasAnyPermission(["sks.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/sks")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/sks"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-file-earmark-medical-fill me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                SK
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            </>
                        )}
                        {hasAnyPermission(["biodatas.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/biodatas")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/biodatas"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-person-vcard me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Biodata
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    role="separator"
                                    className="dropdown-divider mt-2 mb-2 border-gray-700"
                                ></li>
                            </>
                        )}
                        {hasAnyPermission(["biodatas.index"]) && (
                            <>
                                <li
                                    className={`${
                                        url.startsWith("/admin/laporans")
                                            ? "nav-item active"
                                            : "nav-item"
                                    }`}
                                >
                                    <Link
                                        href="/admin/laporans"
                                        className="nav-link d-flex justify-content-between"
                                    >
                                        <span>
                                            <span className="sidebar-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-files me-2"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                                                </svg>
                                            </span>
                                            <span className="sidebar-text">
                                                Laporan
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    role="separator"
                                    className="dropdown-divider mt-2 mb-2 border-gray-700"
                                ></li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
}
