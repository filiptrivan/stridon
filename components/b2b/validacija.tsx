import * as Yup from "yup";

export const validacija = Yup.object({
  email: Yup.string().email("Neispravan email").required("Email je obavezan"),
  naziv_firme: Yup.string()
    .min(3, "Naziv firme mora imati najmanje 3 karaktera")
    .max(50, "Naziv firme ne sme imati više od 50 karaktera")
    .required("Naziv firme je obavezan"),
  adresa_firme: Yup.string()
    .min(3, "Adresa firme mora imati najmanje 3 karaktera")
    .max(50, "Adresa firme ne sme imati više od 50 karaktera")
    .required("Adresa firme je obavezna"),
  pib: Yup.string()
    .min(9, "PIB mora imati najmanje 9 cifara")
    .max(9, "PIB ne sme imati više od 9 cifara")
    .required("PIB je obavezan"),
  maticni_broj_firme: Yup.string()
    .min(8, "Matični broj mora imati najmanje 8 cifara")
    .max(8, "Matični broj ne sme imati više od 8 cifara")
    .required("Matični broj je obavezan"),
  kontakt_telefon: Yup.string()
    .min(6, "Kontakt telefon mora imati najmanje 6 karaktera")
    .max(17, "Kontakt telefon ne sme imati više od 36 karaktera")
    .required("Kontakt telefon je obavezan"),
  ime: Yup.string()
    .min(2, "Ime mora imati najmanje 2 karaktera")
    .max(36, "Ime ne sme imati više od 36 karaktera")
    .required("Ime je obavezno"),
  prezime: Yup.string()
    .min(2, "Prezime mora imati najmanje 2 karaktera")
    .max(36, "Prezime ne sme imati više od 36 karaktera")
    .required("Prezime je obavezno"),
});
