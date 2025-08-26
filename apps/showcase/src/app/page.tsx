import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-orange-600 to-red-900 text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Brag<span className="text-red-950">Doc</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            <button
              type="button"
              className="flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            >
              <h3 className="text-2xl font-bold">Lorem ipsum dolor sit amet</h3>
              <div className="text-lg">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </div>
            </button>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
