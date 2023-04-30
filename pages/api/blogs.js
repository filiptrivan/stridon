// pages/api/blogs.js
import { prisma } from "../../server/db/client";

export default async function handle(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      const blog = await prisma.blog.create({
        data: {
          title: req.body.title,
          main_img: req.body.main_img,
          description: req.body.description,
          slug: req.body.slug,
          vrsta_id: req.body.vrsta_id,
        },
      });
      res.status(201).json(blog);
      break;
    case "GET":
      const blogs = await prisma.blog.findMany();
      res.status(200).json(blogs);
      break;
    case "DELETE":
      const id = parseInt(req.query.id);
      const deletedBlog = await prisma.blog.delete({
        where: {
          id: id,
        },
      });
      res.status(200).json(deletedBlog);
      break;
    case "PUT":
      const idBloga = parseInt(req.query.id);
      const updateBlog = await prisma.blog.update({
        where: {
          id: idBloga,
        },
        data: {
          title: req.body.title,
          main_img: req.body.main_img,
          description: req.body.description,
          slug: req.body.slug,
          vrsta_id: req.body.vrsta_id,
        },
      });
      res.status(201).json(updateBlog);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

