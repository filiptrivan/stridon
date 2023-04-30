import Head from "next/head";
import Hero from "./components/Hero";
import { SliderData } from "./components/SliderData";
import Slider from "./components/Slider";
import Instagram from "./components/Instagram";
import Brendovi from "./components/Brendovi";
import axios from "axios";
import { prisma } from "../server/db/client";
import SnageStridona from "./components/SnageStridona";

export default function Home({ blogs }) {
  return (
    <main>
      <Head>
        <title>Stridon</title>
        <meta name="Prodavnica Alata" content="Mašine i alati" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Hero
        titleNaHomePage={"Stridon Group"}
        opisNaHomePage={
          "Najbolja prodavnica alata u gradu, najveci asortiman alata u Srbiji."
        }
        naslovButtona={"Idi na našu online prodavnicu alata"}
      />
      <Brendovi title={"Brendovi"} />
      <SnageStridona/>
      <Slider slides={SliderData} />
      <Instagram />
      
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.id}</p>
        </div>
      ))}
    </main>
  );
}

export async function getServerSideProps() {
  const blogs = await prisma.blog.findMany()

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
}
