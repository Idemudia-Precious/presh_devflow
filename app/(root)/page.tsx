import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);

  return (
    <>
      <h1 className="text-3xl text-violet-700 font-black">
        Welcome to the world of NextJS
      </h1>
    </>
  );
};

export default Home;
