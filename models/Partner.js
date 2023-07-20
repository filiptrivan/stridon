import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    naziv_firme: {
      type: String,
    },
    adresa_firme: {
      type: String,
    },
    pib: {
      type: String,
    },
    maticni_broj_firme: {
      type: String,
    },
    kontakt_telefon: {
      type: String,
    },
    ime: {
      type: String,
    },
    prezime: {
      type: String,
    },
    status: {
      type: String,
      default: "Nije ubačen",
      enum: ["Nije ubačen", "Ubačen"],
    },
  },
  {
    timestamps: true,
  }
);

const Partner =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);

export default Partner;
