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

export default function BiodataEdit() {

    const { errors, biodatas, cities, subdistricts, villages, banks } = usePage().props;
    
    const [cityID, setCityID] = useState(biodatas.city_id);
    const [subdistrictsID, setSubdistrictsID] = useState(biodatas.subdistrict_id);
    const [villagesID, setVillagesID] = useState(biodatas.village_id);
    const [banksID, setBanksID] = useState(biodatas.bank_id);
    const [name, setName] = useState(biodatas.name);
    const [nik, setNik] = useState(biodatas.nik);
    const [alamat, setAlamat] = useState(biodatas.alamat);
    const [tanggalLahir, setTanggalLahir] = useState(biodatas.tglLahir);
    const [norek, setNorek] = useState(biodatas.norek);
    const [nohp, setNohp] = useState(biodatas.nohp);
    const [filektp, setFilektp] = useState(null);
    const [filebukutabungan, setFilebukutabungan] = useState(null);
    const [foto, setFoto] = useState(null);

    return (
        <>
            <Head>
                <title>Edit Biodata - SIKAP</title>
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
                                                setSubdistrictsID(
                                                    e.target.value
                                                )
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
                                                setVillagesID(e.target.value)
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
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Bank
                                        </label>
                                        <select
                                            className="form-select"
                                            value={banksID}
                                            onChange={(e) =>
                                                setBanksID(e.target.value)
                                            }
                                        >
                                            <option value="">
                                                -- Select Bank --
                                            </option>
                                            {banks.map((bank) => (
                                                <option
                                                    value={bank.id}
                                                    key={bank.id}
                                                >
                                                    {bank.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.bank_id && (
                                        <div className="alert alert-danger">
                                            {errors.bank_id}
                                        </div>
                                    )}
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
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Nik
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={nik}
                                            onChange={(e) =>
                                                setNik(e.target.value)
                                            }
                                            placeholder="Enter NIK"
                                        />
                                    </div>
                                    {errors.nik && (
                                        <div className="alert alert-danger">
                                            {errors.nik}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Alamat
                                        </label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            value={alamat}
                                            onChange={(e) =>
                                                setAlamat(e.target.value)
                                            }
                                            placeholder="Enter Alamat"
                                        />
                                    </div>
                                    {errors.alamat && (
                                        <div className="alert alert-danger">
                                            {errors.alamat}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            Tanggal Lahir
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={tanggalLahir}
                                            onChange={(e) =>
                                                setTanggalLahir(e.target.value)
                                            }
                                        />
                                    </div>
                                    {errors.tglLahir && (
                                        <div className="alert alert-danger">
                                            {errors.tglLahir}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            No Rekening
                                        </label>
                                        <input
                                            type="input"
                                            className="form-control"
                                            value={norek}
                                            onChange={(e) =>
                                                setNorek(e.target.value)
                                            }
                                            placeholder="No Rekening"
                                        />
                                    </div>
                                    {errors.norek && (
                                        <div className="alert alert-danger">
                                            {errors.norek}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            No Hanphone/WA
                                        </label>
                                        <input
                                            type="input"
                                            className="form-control"
                                            value={nohp}
                                            onChange={(e) =>
                                                setNohp(e.target.value)
                                            }
                                            placeholder="No Hanphone/WA"
                                        />
                                    </div>
                                    {errors.nohp && (
                                        <div className="alert alert-danger">
                                            {errors.nohp}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File KTP <li style={{ color: "red" }}>(File Wajib PDF, max 4 mb)</li>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setFilektp(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.ktp && (
                                        <div className="alert alert-danger">
                                            {errors.ktp}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File Buku Tabungan <li style={{ color: "red" }}>(File Wajib PDF, max 4 mb)</li>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setFilebukutabungan(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.filebukutabungan && (
                                        <div className="alert alert-danger">
                                            {errors.filebukutabungan}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">
                                            File Foto <li style={{ color: "red" }}>(File Wajib JPG,JPEG,PNG max 4 mb)</li>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            onChange={(e) =>
                                                setFoto(e.target.files[0])
                                            }
                                        />
                                    </div>
                                    {errors.foto && (
                                        <div className="alert alert-danger">
                                            {errors.foto}
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
