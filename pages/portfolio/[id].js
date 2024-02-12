import { useRouter } from "next/router";

function Product() {
  const router = useRouter();
  console.log("pathname >>>>", router.pathname);
  console.log("query >>>>", router.query);

  return (
    <div>
      <h1>This is product page</h1>
      <p>product name is {router.query.id}</p>
    </div>
  );
}

export default Product;
