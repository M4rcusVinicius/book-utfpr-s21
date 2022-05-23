import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import "styles/globals.css";

import { userService } from "services";
import { Nav, Alert } from "components";

export default App;

function App({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ["/account/login", "/account/register"];
    const path = url.split("?")[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/account/login",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <>
      <Head>
        <title>Book UTFPR</title>

        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link href='//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' rel='stylesheet' />

      </Head>

      
      <main>
        <section className="advice">
            <h1 className="advice__title">Este site está em manutenção </h1>
            <p className="advice__description"><span> Agora é só pelo canvas (Banco de dados gratuito é assim msm kkkk)</span></p>
        </section>
        <section className="city-stuff">
            <ul className="skyscrappers__list">
            <li className="skyscrapper__item skyscrapper-1"></li>
            <li className="skyscrapper__item skyscrapper-2"></li>
            <li className="skyscrapper__item skyscrapper-3"></li>
            <li className="skyscrapper__item skyscrapper-4"></li>
            <li className="skyscrapper__item skyscrapper-5"></li>
            </ul>
            <ul className="tree__container">
            <li className="tree__list">
                <ul className="tree__item tree-1">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>
                <ul className="tree__item tree-2">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>
                <ul className="tree__item tree-3">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>  
                <ul className="tree__item tree-4">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>  
                <ul className="tree__item tree-5">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>  
                <ul className="tree__item tree-6">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>  
                <ul className="tree__item tree-7">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>  
                <ul className="tree__item tree-8">
                <li className="tree__trunk"></li>
                <li className="tree__leaves"></li>
                </ul>  
            </li>
            </ul>
            <ul className="crane__list crane-1">
            <li className="crane__item crane-cable crane-cable-1"></li>
            <li className="crane__item crane-cable crane-cable-2"></li>
            <li className="crane__item crane-cable crane-cable-3"></li>
            <li className="crane__item crane-stand"></li>
            <li className="crane__item crane-weight"></li>
            <li className="crane__item crane-cabin"></li>
            <li className="crane__item crane-arm"></li>
            </ul>
            <ul className="crane__list crane-2">
            <li className="crane__item crane-cable crane-cable-1"></li>
            <li className="crane__item crane-cable crane-cable-2"></li>
            <li className="crane__item crane-cable crane-cable-3"></li>
            <li className="crane__item crane-stand"></li>
            <li className="crane__item crane-weight"></li>
            <li className="crane__item crane-cabin"></li>
            <li className="crane__item crane-arm"></li>
            </ul>
            <ul className="crane__list crane-3">
            <li className="crane__item crane-cable crane-cable-1"></li>
            <li className="crane__item crane-cable crane-cable-2"></li>
            <li className="crane__item crane-cable crane-cable-3"></li>
            <li className="crane__item crane-stand"></li>
            <li className="crane__item crane-weight"></li>
            <li className="crane__item crane-cabin"></li>
            <li className="crane__item crane-arm"></li>
            </ul>
        </section>
        </main>
    </>
  );
}
