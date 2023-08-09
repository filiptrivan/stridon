import { useFormik } from "formik";
import axios from "axios";
import { validacija } from "./validacija";
import { BeatLoader } from "react-spinners";
import { useState, forwardRef } from "react";
import { Snackbar, Alert, AlertProps } from "@mui/material";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);
const FormaZaPopunjavanje = ({translate}: any) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      naziv_firme: "",
      adresa_firme: "",
      pib: "",
      maticni_broj_firme: "",
      kontakt_telefon: "",
      ime: "",
      prezime: "",
    },
    onSubmit: (values, { resetForm }) => {
      setSubmitted(true);
      resetForm();
      formSubmit();
    },
    validationSchema: validacija,
  });

  const formSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/b2b/create", {
        email: formik.values.email,
        naziv_firme: formik.values.naziv_firme,
        adresa_firme: formik.values.adresa_firme,
        pib: formik.values.pib, // ?
        maticni_broj_firme: formik.values.maticni_broj_firme,
        kontakt_telefon: formik.values.kontakt_telefon,
        ime: formik.values.ime,
        prezime: formik.values.prezime,
      });
      setError("");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSubmitted(false);
  };

  return (
    <div className="max-w-[1140px] m-auto py-10 border-2 rounded-md p-4 sm:p-16">
      {error && (
        <div
          className="text-white p-2 bg-red-600 rounded-md mt-[-50px] absolute"
          role="alert"
        >
          {error}
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <input
          type="ime"
          name="ime"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-7"
          placeholder={translate("Ime")}
          value={formik.values.ime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.ime && formik.errors.ime && (
          <div className="p-1 text-red-600 absolute rounded-md mt-[-33px]">
            {formik.errors.ime}
          </div>
        )}

        <input
          type="prezime"
          name="prezime"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-8"
          placeholder={translate("Prezime")}
          value={formik.values.prezime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.prezime && formik.errors.prezime && (
          <div className="p-1 text-red-600 absolute rounded-md mt-[-34px]">
            {formik.errors.prezime}
          </div>
        )}
        <input
          type="email"
          name="email"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-7"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="p-1 text-red-600 absolute rounded-md mt-[-33px]">
            {formik.errors.email}
          </div>
        )}
        <input
          type="naziv_firme"
          name="naziv_firme"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-7"
          placeholder={translate("Naziv firme")}
          value={formik.values.naziv_firme}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.naziv_firme && formik.errors.naziv_firme && (
          <div className="p-1 text-red-600 absolute rounded-md mt-[-33px]">
            {formik.errors.naziv_firme}
          </div>
        )}
        <input
          type="adresa_firme"
          name="adresa_firme"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-7"
          placeholder={translate("Adresa firme")}
          value={formik.values.adresa_firme}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.adresa_firme && formik.errors.adresa_firme && (
          <div className="p-1 text-red-600 absolute rounded-md mt-[-33px]">
            {formik.errors.adresa_firme}
          </div>
        )}
        <input
          type="pib"
          name="pib"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-7"
          placeholder={translate("Pib firme")}
          value={formik.values.pib}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.pib && formik.errors.pib && (
          <div className="p-1 text-red-600 absolute rounded-md mt-[-33px]">
            {formik.errors.pib}
          </div>
        )}
        <input
          type="maticni_broj_firme"
          name="maticni_broj_firme"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-7"
          placeholder={translate("Matični broj firme")}
          value={formik.values.maticni_broj_firme}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.maticni_broj_firme &&
          formik.errors.maticni_broj_firme && (
            <div className="p-1 text-red-600 absolute rounded-md mt-[-33px]">
              {formik.errors.maticni_broj_firme}
            </div>
          )}
        <input
          type="kontakt_telefon"
          name="kontakt_telefon"
          className="bg-transparent border border-black/40 rounded-md w-full p-3 mb-7"
          placeholder={translate("Kontakt telefon")}
          value={formik.values.kontakt_telefon}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.kontakt_telefon && formik.errors.kontakt_telefon && (
          <div className="p-1 text-red-600 absolute rounded-md mt-[-33px]">
            {formik.errors.kontakt_telefon}
          </div>
        )}

        <button
          type="submit"
          className="p-3 text-black font ring-1 bg-white hover:bg-slate-100 ring-red-500 rounded-md w-full font-semibold"
          disabled={formik.isSubmitting}
        >
          {!loading && translate("Potvrdi")}
          <BeatLoader
            color="#111b2c"
            loading={loading}
            // cssOverride={override}
            size={7}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </button>
        <Snackbar
          open={submitted}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <SnackbarAlert onClose={handleClose} severity="success" className="bg-green-600 text-white text-base">
            Forma je uspešno potvrđena
          </SnackbarAlert>
        </Snackbar>
      </form>
    </div>
  );
};

export default FormaZaPopunjavanje;
