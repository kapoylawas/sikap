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
            {/* <div className="list-group list-group-flush">
                {hasAnyPermission(['dashboard.index']) && 
                    <Link href="/admin/dashboard" className={`${ url.startsWith('/admin/dashboard') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-tachometer-alt me-2"></i> Dashboard</Link>
                }
                {hasAnyPermission(['roles.index']) && 
                    <Link href="/admin/roles" className={`${ url.startsWith('/admin/roles') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-shield-alt me-2"></i> Roles</Link>
                }
                {hasAnyPermission(['permissions.index']) && 
                    <Link href="/admin/permissions" className={`${ url.startsWith('/admin/permissions') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-key me-2"></i> Permissions</Link>
                }
                {hasAnyPermission(['users.index']) && 
                    <Link href="/admin/users" className={`${ url.startsWith('/admin/users') ? "active list-group-item list-group-item-action list-group-item-light p-3" : "list-group-item list-group-item-action list-group-item-light p-3"}`}><i className="fa fa-users me-2"></i> Users</Link>
                }
            </div> */}

            <nav
                id="sidebarMenu"
                class="sidebar d-lg-block bg-black text-white collapse"
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
                                            class="bi bi-wallet-fill me-3"
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
                                    class="dropdown-divider mt-2 mb-2 border-gray-700"
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
                                                    class="bi bi-person-lines-fill me-2"
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
                                                class="bi bi-diagram-3 me-2"
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
                                                    class="bi bi-person-add me-2"
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
                                    class="dropdown-divider mt-2 mb-2 border-gray-700"
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
                                                    class="bi bi-building me-2"
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
                    </ul>
                </div>
            </nav>
        </>
    );
}
