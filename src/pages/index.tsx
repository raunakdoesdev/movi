import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { List, PersonStanding, Search } from "lucide-react";

export default function Home() {
  const movie = {
    coverImage:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rottenTomatoes: 94,
    imdb: 9,
    friendScore: 7.4,
    movieScore: 8.2,
  };
  return (
    <Tabs
      defaultValue="list"
      className="flex h-screen  w-screen flex-col justify-between space-y-2"
    >
      <TabsContent className="grow overflow-y-auto" value="list">
        <DisplayMovie movie={movie} />
      </TabsContent>
      <TabsContent className="h-full grow" value="search">
        This is your account
      </TabsContent>
      <TabsContent className="h-full grow" value="profile">
        This is your account
      </TabsContent>
      <TabsList className="h-full max-h-16 w-full">
        <TabsTrigger className="flex w-full flex-col space-y-2" value="list">
          <List />
          List
        </TabsTrigger>
        <TabsTrigger className="flex w-full flex-col space-y-2" value="search">
          <Search />
          Search
        </TabsTrigger>
        <TabsTrigger className="flex w-full flex-col space-y-2" value="profile">
          <PersonStanding />
          Profile
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

import { Bookmark, PlusCircle } from "lucide-react";
import Image from "next/image";

type Movie = {
  coverImage: string;
  title: string;
  description: string;
  rottenTomatoes: number;
  imdb: number;
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
