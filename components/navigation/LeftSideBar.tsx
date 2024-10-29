import ROUTES from "@/constants/route";
import Link from "next/link";
import { Button } from "../ui/button";
import NavLinks from "./navbar/NavLinks";
import { auth, signOut } from "@/auth";
import Image from "next/image";

const LeftSideBar = async () => {
  const session = await auth();

  const isOnline = session;

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-md:hidden md:w-[100px] lg:w-[266px]">
      <section className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </section>

      {isOnline ? (
        <div className="flex flex-col gap-3">
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <div className="flex gap-3 justify-center items-center flex-row w-full">
              <Image
                src="/icons/arrow-left.svg"
                alt="log out"
                width={20}
                height={20}
                className="invert-colors"
              />
              <button className="max-lg:hidden" type="submit">
                Log Out
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <Button
            className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Link>
          </Button>

          <Button
            className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
            asChild
          >
            <Link href={ROUTES.SIGN_UP}>
              <Image
                src="/icons/sign-up.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default LeftSideBar;
