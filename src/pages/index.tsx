import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { List, PersonStanding, Search } from "lucide-react";
import { DisplayMovie } from "~/pages/singleMovie";

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
