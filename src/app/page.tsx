"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { isMobile, isAndroid, isIOS } from "react-device-detect";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (isAndroid || isAndroid || isMobile) {
      location.replace("http://172.20.65.245:3000");
    }
  }, []);

  return (
    <main className={styles.main}>
      <h1>Ini tampilan Web desktop view server 1</h1>
    </main>
  );
}
