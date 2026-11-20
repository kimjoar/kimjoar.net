import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import Stamp from "../components/Stamp";
import { fraunces, plexMono } from "../lib/fonts";
import s from "../styles/Home.module.css";

const description =
  "Kim Joar Bekkelund: engineer and team builder, leading client architecture at Tana.";

function Note({ n, children }: { n: number; children: ReactNode }) {
  return (
    <>
      <label htmlFor={`note-${n}`} className={s.ref}>
        <span className={s.srOnly}>Note </span>
        {n}
      </label>
      <input type="checkbox" id={`note-${n}`} className={s.toggle} />
      <span className={s.note}>
        <span className={s.noteNum}>{n}</span>
        {children}
      </span>
    </>
  );
}

export default function Home() {
  return (
    <div className={`${s.page} ${fraunces.variable} ${plexMono.variable}`}>
      <Head>
        <title>Kim Joar Bekkelund</title>
        <meta name="description" content={description} />
        <meta
          key="theme-color-light"
          name="theme-color"
          content="#fbf8f2"
          media="(prefers-color-scheme: light)"
        />
        <meta
          key="theme-color-dark"
          name="theme-color"
          content="#191713"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="Kim Joar Bekkelund" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://kimjoar.net/" />
        <meta
          property="og:image"
          content="https://kimjoar.net/brand/kj-stamp-square.png"
        />
        <meta name="twitter:card" content="summary" />
      </Head>

      <header className={s.top}>
        <Link href="/" className={s.home} aria-label="Kim Joar Bekkelund">
          <Stamp size={30} />
        </Link>
        <span className={s.meta}>Notes on work, and the life around it</span>
        <a className={s.meta} href="mailto:hei@kimjoar.net">
          hei@kimjoar.net
        </a>
      </header>

      <main className={s.main}>
        <section className={s.hero}>
          <h1 className={s.name}>
            Kim Joar
            <br />
            Bekkelund
          </h1>
          <p className={s.pronounce}>
            <span aria-hidden="true">↳ </span>“Kim Yoo-ar”
          </p>
          <p className={s.lede}>
            Engineer, team builder, and curious traveller. A few notes on the
            work, and on what happens away from the keyboard.
          </p>
        </section>

        <section className={s.section} aria-labelledby="now">
          <h2 id="now" className={s.label}>
            <span>§ 1</span> Now
          </h2>
          <div className={s.prose}>
            <p>
              <span className={s.runin}>These days</span> I lead client
              architecture at <a href="https://tana.inc/">Tana</a>
              <Note n={1}>
                <strong>Tana</strong> · 2022– <br />
                Client Architect Lead. Data and sync, core architecture, AI
                infrastructure, and access control.
              </Note>
              , where I work on the foundations: how data loads and syncs
              between devices, how the codebase is shaped so others can build
              quickly inside it, and how AI can act safely on people’s behalf.
            </p>
            <p>
              Lately that has meant a new document and sync layer, held to one
              shared spec across web and iOS; AI that only writes to tools like
              your CRM after a person has approved it; and meetings where
              Tana’s AI keeps working when a guest joins the call.
            </p>
          </div>
        </section>

        <section className={s.section} aria-labelledby="before">
          <h2 id="before" className={s.label}>
            <span>§ 2</span> Before
          </h2>
          <div className={s.prose}>
            <p>
              <span className={s.runin}>Before that</span> I spent three years
              at <a href="https://www.cognite.com">Cognite</a>
              <Note n={2}>
                <strong>Cognite</strong> · 2019–22 <br />
                Director, then Senior Director of Application Engineering. Also
                the employee development framework and leveling guidelines.
              </Note>{" "}
              helping build Industry Applications, as it grew to eight teams and
              about fifty engineers.
            </p>
            <p>
              Earlier, I worked on community integrity at{" "}
              <a href="https://about.meta.com">Facebook</a>
              <Note n={3}>
                <strong>Facebook</strong> · 2018–19 <br />
                Reporting and support flows across Facebook, Messenger, and
                Instagram.
              </Note>
              , on the Kibana platform at{" "}
              <a href="https://www.elastic.co">Elastic</a>
              <Note n={4}>
                <strong>Elastic</strong> · 2015–18 <br />
                Principal engineer. Cloud UI, then the groundwork for Kibana’s
                core and plugin architecture.
              </Note>
              , and on real-time road traffic systems as a consultant at{" "}
              <a href="https://www.bekk.no">Bekk</a>
              <Note n={5}>
                <strong>Bekk</strong> · 2011–15 <br />
                From roadside devices to visualizations, for the Norwegian
                Public Roads Administration.
              </Note>
              .
            </p>
            <p>
              What I care about has stayed fairly constant: pragmatic
              engineering, teams where anyone can step up, and building products
              people love.
            </p>
          </div>
        </section>

        <section className={s.section} aria-labelledby="away">
          <h2 id="away" className={s.label}>
            <span>§ 3</span> Away
          </h2>
          <div className={s.prose}>
            <p>
              <span className={s.runin}>Away from the keyboard</span> it is
              family, camping, biking, and travelling. I’m the father of two
              girls, and curious about the world after visiting more than fifty
              countries
              <Note n={6}>And counting.</Note>.
            </p>
          </div>
        </section>

        <section className={s.closing}>
          <p>
            Write to me at{" "}
            <a href="mailto:hei@kimjoar.net">hei@kimjoar.net</a>, or find the
            longer version on{" "}
            <a href="https://www.linkedin.com/in/kimjoar/">LinkedIn</a>.
          </p>
        </section>
      </main>

      <footer className={s.colophon}>
        <Stamp size={96} />
        <span className={s.meta}>Set in Fraunces &amp; IBM Plex Mono</span>
      </footer>
    </div>
  );
}
