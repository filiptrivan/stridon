// pages/api/vrsta.js
import { prisma } from "../../server/db/client";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const vrsta = await prisma.vrstaBloga.create({
        data: {
          title: req.body.title,
        },
      });
      res.status(201).json(vrsta);
      break;
    case "GET":
      const vrste = await prisma.vrstaBloga.findMany();
      res.status(200).json(vrste);
      break;
    case "DELETE":
      const idVrsta = parseInt(req.query.id);
      const deletedVrsta = await prisma.vrstaBloga.delete({
        where: {
          id: idVrsta,
        },
      });
      res.status(200).json(deletedVrsta);
      break;
    case "PUT":
      const idVrste = parseInt(req.query.id);
      const updateVrste = await prisma.vrstaBloga.update({
        where: {
          id: idVrste,
        },
        data: {
          title: req.body.title,
        },
      });
      res.status(201).json(updateVrste);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

//   id      Int    @id @default(autoincrement())
//   title   String
//   blogovi Blog[]
//   created_time DateTime   @default(now())
//   updated_time DateTime   @updatedAt