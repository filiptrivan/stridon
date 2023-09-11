// import { NextApiRequest, NextApiResponse } from "next";
// import PartnerModel from "../../../models/Partner"; // Update the import path if needed
// import db from "../../../utils/db";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === "POST") {
//     try {
//       await db.connectDb();
//       const {
//         email,
//         naziv_firme,
//         adresa_firme,
//         pib,
//         maticni_broj_firme,
//         kontakt_telefon,
//         ime, 
//         prezime,
//       } = req.body;

//       const newPartner = await new PartnerModel({
//         email,
//         naziv_firme,
//         adresa_firme,
//         pib,
//         maticni_broj_firme,
//         kontakt_telefon,
//         ime,
//         prezime,
//       }).save();

//       await db.disconnectDb();

//       return res.status(200).json({
//         partner_id: newPartner._id,
//       });
//     } catch (error:any) {
//       console.log(error);
//       return res.status(500).json({ message: error.message });
//     }
//   } else {
//     return res.status(405).end(); // Return 405 Method Not Allowed for non-POST requests
//   }
// };

// export default handler;