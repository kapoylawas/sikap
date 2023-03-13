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

import axios from "axios";

export default function VillageCreate() {
    const { errors, cities } = usePage().props;

    const [cityID, setCityID] = useState("");
    const [kecamatanID, setKecamatanID] = useState("");
    const [kecamatans, setKecamatans] = useState([]);
    const [name, setName] = useState("");

    //method getkecamatanByKota
    const getkecamatanByKota = async (city_id) => {
        //set state province ID
        setCityID(city_id);

        //get cities by province id
        axios.get(`/kecamatan?city_id=${city_id}`).then((response) => {
            setKecamatans(response.data);
        });
    };

    const showKelurahan = (subdistrict_id) => {
        //set state cityID
        setKecamatanID(subdistrict_id);
    };

    const storeKelurahan = async (e) => {
        e.preventDefault();

        //sending data
        Inertia.post(
            "/admin/villages",
            {
                //data
                city_id: cityID,
                subdistrict_id: kecamatanID,
                name: name,
            },
            {
                onSuccess: () => {
                    //show alert
                    Swal.fire({
                        title: "Success!",
                        text: "Data saved successfully!",
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
                <title>Kecamatan Create - SIKAP</title>
            </Head>
            <LayoutAccount>
                <Link
                    href="/admin/villages"
                    className="btn btn-md btn-primary border-0 shadow"
                    type="button"
                >
                    <i className="fa fa-long-arrow-alt-left me-2"></i>
                    Kembali
                </Link>
                <div class="row mt-3">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow-sm border-top-success">
                            <div className="card-header">
                                <span className="font-weight-bold">
                                    <i className="fa fa-home"></i> Add New
                                    Kelurahan
                                </span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={storeKelurahan}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">
                                                    Kota
                                                </label>
                                                <select
                                                    className="form-select"
                                                    value={cityID}
                                                    onChange={(e) =>
                                                        getkecamatanByKota(
                                                            e.target.value
                                                        )
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
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Kecamatan
                                            </label>
                                            <select
                                                className="form-select"
                                                onChange={(e) =>
                                                    showKelurahan(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Select Kelurahan --
                                                </option>
                                                {kecamatans.map(
                                                    (kecamatan, index) => (
                                                        <option
                                                            key={index}
                                                            value={kecamatan.id}
                                                        >
                                                            {kecamatan.name}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            {errors.subdistrict_id && (
                                                <div className="alert alert-danger mt-2">
                                                    {errors.subdistrict_id}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder="Enter Kelurahan/Desa Name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
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
