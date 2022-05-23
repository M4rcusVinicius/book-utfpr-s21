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
        <section class="advice">
            <h1 class="advice__title">Site under construction or maintenance </h1>
            <p class="advice__description"><span> Building </span><span> not finished yet</span></p>
        </section>
        <section class="city-stuff">
            <ul class="skyscrappers__list">
            <li class="skyscrapper__item skyscrapper-1"></li>
            <li class="skyscrapper__item skyscrapper-2"></li>
            <li class="skyscrapper__item skyscrapper-3"></li>
            <li class="skyscrapper__item skyscrapper-4"></li>
            <li class="skyscrapper__item skyscrapper-5"></li>
            </ul>
            <ul class="tree__container">
            <li class="tree__list">
                <ul class="tree__item tree-1">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>
                <ul class="tree__item tree-2">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>
                <ul class="tree__item tree-3">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>  
                <ul class="tree__item tree-4">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>  
                <ul class="tree__item tree-5">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>  
                <ul class="tree__item tree-6">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>  
                <ul class="tree__item tree-7">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>  
                <ul class="tree__item tree-8">
                <li class="tree__trunk"></li>
                <li class="tree__leaves"></li>
                </ul>  
            </li>
            </ul>
            <ul class="crane__list crane-1">
            <li class="crane__item crane-cable crane-cable-1"></li>
            <li class="crane__item crane-cable crane-cable-2"></li>
            <li class="crane__item crane-cable crane-cable-3"></li>
            <li class="crane__item crane-stand"></li>
            <li class="crane__item crane-weight"></li>
            <li class="crane__item crane-cabin"></li>
            <li class="crane__item crane-arm"></li>
            </ul>
            <ul class="crane__list crane-2">
            <li class="crane__item crane-cable crane-cable-1"></li>
            <li class="crane__item crane-cable crane-cable-2"></li>
            <li class="crane__item crane-cable crane-cable-3"></li>
            <li class="crane__item crane-stand"></li>
            <li class="crane__item crane-weight"></li>
            <li class="crane__item crane-cabin"></li>
            <li class="crane__item crane-arm"></li>
            </ul>
            <ul class="crane__list crane-3">
            <li class="crane__item crane-cable crane-cable-1"></li>
            <li class="crane__item crane-cable crane-cable-2"></li>
            <li class="crane__item crane-cable crane-cable-3"></li>
            <li class="crane__item crane-stand"></li>
            <li class="crane__item crane-weight"></li>
            <li class="crane__item crane-cabin"></li>
            <li class="crane__item crane-arm"></li>
            </ul>
        </section>
        </main>
    </>
  );
}
