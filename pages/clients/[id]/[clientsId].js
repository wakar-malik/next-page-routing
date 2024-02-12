import { useRouter } from "next/router";

function Clients2() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.clientsId);

  return <h1>This is Clients2 page</h1>;
}

export default Clients2;
