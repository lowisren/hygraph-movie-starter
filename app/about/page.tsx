import { title } from "@/components/primitives";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-10">
        <h1 className={title()}>Hygraphlix movie streaming platform starter</h1>
        <p className="my-10">
          This project is a starter template for Hygraph. It combines content
          from Hygraph, Federate This Demo API, OMDB, Mux, Next.js 14, NextUI,
          and Tailwind CSS
        </p>
      </section>
      <section className="py-10">
        <h2 className="mb-4 text-3xl font-bold">Clone Hygraph project</h2>
        <Link href="https://app.hygraph.com/clone/60a5f60969474157a5bb6cec6452e833?name=Hygraph%20Movie%20Platform%20Starter">
          <Image
            src="https://hygraph.com/button"
            width={170}
            height={32}
            alt="Clone movie project"
          />
        </Link>
      </section>
      <section className="py-4">
        <h2 className="mb-4 text-3xl font-bold">
          Starter Installation methods
        </h2>
        <h3 className="mb-2 text-2xl font-bold">
          Option 1: One-click Deployment
        </h3>

        <p className="py-4 text-xl">Deploy to Netlify</p>
        <Link href="https://app.netlify.com/start/deploy?repository=https://github.com/lowisren/hygraph-movie-starter">
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            className="mb-4"
            width={170}
            height={32}
            alt="Deploy to Netlify"
          />
        </Link>
        <p className="py-4 text-xl">Deploy to Vercel</p>
        <Link href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flowisren%2Fhygraph-movie-starter&env=HYGRAPH_ENDPOINT">
          <Image
            src="https://vercel.com/button"
            className="mb-4"
            width={100}
            height={32}
            alt="Deploy with Vercel"
          />
        </Link>
        <h3 className="my-4 text-2xl font-bold">Option 2: Manual clone</h3>
        <p className="text-xl font-bold">Clone this repo:</p>

        <code className="flex flex-col gap-4 p-2 py-2 my-2 text-white bg-gray-800 border border-gray-700 rounded md:text-center">
          npx degit https://github.com/lowisren/hygraph-movie-starter/
        </code>
      </section>
      <h2 className="mb-4 text-3xl font-bold">Running the project</h2>
      <ol className="mb-4 list-decimal list-inside">
        <li>
          The project needs a Hygraph content API endpoint with matching content
          and schema
        </li>
        <li>
          Add the endpoint to <code>.env.local</code> as{" "}
          <code>HYGRAPH_ENDPOINT</code>
        </li>
        <li>
          Copy the .env.sample file, add your endpoint and save as .env.local in
          the main project directory
        </li>
        <li>Run npm run dev</li>
      </ol>
      <h2 className="mb-4 text-3xl font-bold">Connecting Mux</h2>
      <ol className="mb-4 list-decimal list-inside">
        <li>
          <Link href="https://dashboard.mux.com/signup" className="underline">
            Sign up for a Mux account
          </Link>
        </li>
        <li>
          <Link
            href="https://app.hygraph.com/apps/mux/new"
            className="underline"
          >
            Install the Mux app in your Hygraph project
          </Link>
        </li>
        <li>
          <Link
            href="https://hygraph.com/docs/integrations/connect-mux"
            className="underline"
          >
            Create access tokens for your Mux account
          </Link>
        </li>
      </ol>
    </div>
  );
}
