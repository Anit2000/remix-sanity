import type { LinksFunction } from "@remix-run/node";
import Header from './components/Header';
import Footer from './components/Footer';
import stylesheet from "~/tailwind.css";
import { createContext } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import client from "~/lib/sanity";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader(){
  const query = `*[_type == 'header' && title == 'Main header']`;
  const header = await client.fetch(query);
  return json({header})
}
export const LayoutContext =  createContext(null);
export default function App() {
  const layout = useLoaderData();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <LayoutContext.Provider value={layout}>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
        </LayoutContext.Provider>
      </body>
    </html>
  );
}
function Layout({children}: {children: React.ReactNode}) {
  return <>
    <Header/>
    <main>{children}</main>
    <Footer/>
  </>
}