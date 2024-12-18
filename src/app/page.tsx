'use client';
import styles from "./page.module.css";
import WormholeConnect from "@wormhole-foundation/wormhole-connect";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WormholeConnect />
      </main>
    </div>
  );
}
