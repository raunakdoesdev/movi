import { Bookmark, PlusCircle } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "~/components/ui/scroll-area";

type Providers = "Netflix" | "Hulu" | "Amazon Prime" | "HBO Max" | "Disney+";

// const ProviderLogos = {
//     ""
// }

type Movie = {
  coverImage: string;
  title: string;
  description: string;
  rottenTomatoes: number;
  imdb: number;
  streamingOn: Providers[];
  friendScore: number;
  movieScore: number;
};

export function DisplayMovie({ movie }: { movie: Movie }) {
  const RottenTomatoes =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/757px-Rotten_Tomatoes.svg.png";
  return (
    <div className="flex w-full flex-col items-center space-y-4 bg-background p-8">
      <Image
        alt={movie.title}
        src={movie.coverImage}
        width={300}
        height={400}
        className="mx-auto rounded-xl shadow-2xl"
      />

      <h1 className="mx-auto flex flex-row items-center text-2xl font-semibold">
        {movie.title}
        <PlusCircle className="ml-2" />
        <Bookmark className="ml-2" />
      </h1>

      <div className="no-scrollbar w-full overflow-x-auto">
        <div className="flex w-fit flex-row space-x-2">
          <div className="flex w-screen flex-row space-x-4 rounded-xl">
            <div className="flex w-1/2 flex-row space-x-2 rounded-xl bg-accent p-4">
              <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border border-black font-semibold text-green-500">
                {movie.movieScore}
              </div>
              <div className="flex flex-col">
                <b>Movi Score</b>
                <span className="whitespace-pre-wrap text-xs">
                  How you'll like it.
                </span>
              </div>
            </div>
            <div className="flex w-1/2 flex-row space-x-2 rounded-xl bg-accent p-4">
              <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border border-black font-semibold text-yellow-500">
                {movie.friendScore}
              </div>
              <div className="flex flex-col">
                <b>Friend Score</b>
                <span className="whitespace-pre-wrap text-xs">
                  What your friends think.
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-screen flex-row space-x-2">
            <div className="flex w-1/2 flex-row space-x-2 rounded-xl bg-accent p-4">
              <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border border-black font-semibold text-green-500">
                {"83%"}
              </div>
              <div className="flex flex-col">
                <b>Rotten Tomatoes</b>
              </div>
            </div>
            <div className="flex w-1/2 flex-row space-x-2 rounded-xl bg-accent p-4">
              <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border border-black font-semibold text-yellow-500">
                {movie.friendScore}
              </div>
              <div className="flex flex-col">
                <b>IMDB</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>{movie.description}</p>
    </div>
  );
}
