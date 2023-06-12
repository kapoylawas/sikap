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

export default function CityCreate() {
    const { errors, cities, subdistricts, villages, banks } = usePage().props;

    const [cityID, setCityID] = useState("");
    const [subdistrictsID, setSubdistrictsID] = useState("");
    const [villagesID, setvillagesID] = useState("");

    return (
        <>
            <Head>
                <title>Create Biodata - SIKAP</title>
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
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-home"></i> Add New
                                    Biodata
                                </span>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Kota
                                        </label>
                                        <select
                                            className="form-select"
                                            value={cityID}
                                            onChange={(e) =>
                                                setCityID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Kota --
                                            </option>
                                            {cities.map((city) => (
                                                <option
                                                    value={city.id}
                                                    key={city.id}
                                                >
                                                    {city.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.city_id && (
                                        <div className="alert alert-danger">
                                            {errors.city_id}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Kecamatan
                                        </label>
                                        <select
                                            className="form-select"
                                            value={subdistrictsID}
                                            onChange={(e) =>
                                                setSubdistrictsID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Kecamatan --
                                            </option>
                                            {subdistricts.map((subdistrict) => (
                                                <option
                                                    value={subdistrict.id}
                                                    key={subdistrict.id}
                                                >
                                                    {subdistrict.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.subdistrict_id && (
                                        <div className="alert alert-danger">
                                            {errors.subdistrict_id}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Kelurahan/Desa
                                        </label>
                                        <select
                                            className="form-select"
                                            value={villagesID}
                                            onChange={(e) =>
                                                setvillagesID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Kelurahan/Desa --
                                            </option>
                                            {villages.map((village) => (
                                                <option
                                                    value={village.id}
                                                    key={village.id}
                                                >
                                                    {village.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.village_id && (
                                        <div className="alert alert-danger">
                                            {errors.village_id}
                                        </div>
                                    )}

                                    <div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-success me-2"
                                        >
                                            <i className="fa fa-save"></i> Save
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
