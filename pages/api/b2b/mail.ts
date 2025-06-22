import { sendMail } from "../../../services/mailService";
import { NextApiResponse, NextApiRequest } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const {
      email,
      naziv_firme,
      adresa_firme,
      pib,
      maticni_broj_firme,
      kontakt_telefon,
      ime, 
      prezime,
    } = req.body;

    switch (method) {
      case "POST": {
        await sendMail(
          "B2B Prijava",
          // "aleksatrivan@gmail.com",
          "filiptrivan5@gmail.com",
          `
          EMAIL: ${email}\n
          NAZIV FIRME: ${naziv_firme}\n
          ADRESA FIRME: ${adresa_firme}\n
          PIB: ${pib}\n
          MATICNI BROJ: ${maticni_broj_firme}\n
          KONTAKT TELEFON: ${kontakt_telefon}\n
          IME: ${ime}\n
          PREZIME: ${prezime}\n
          `
        );
        res.status(200).send("Success");
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err: any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
