import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  function clickHandler() {
    router.push("/portfolio/1");
  }

  return (
    <>
      <h1>This is home page</h1>

      <ul>
        <Link
          href={{
            pathname: "/portfolio/[id]",
            query: { id: 1 },
          }}
        >
          <li>Go to portfolio</li>
        </Link>

        <li>
          <button onClick={clickHandler}>go to portfolio</button>
        </li>

        {/* <Link>
          <li></li>
        </Link> */}
      </ul>
    </>
  );
}

export default Home;
