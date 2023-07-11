import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <p>Home</p>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/vlog">World</Link>
            <br />
            <Link href="/vlog/vietnam">Vietnam</Link>
          </li>
          <li>
            {/* <Link href="/post/33?display=true">Post 33</Link><br /> */}
            <Link href="/posts">Post home</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
