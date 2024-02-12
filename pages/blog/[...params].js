import { useRouter } from "next/router";
import React from "react";

function MultipleParams() {
  const router = useRouter();
  console.log(router.query);

  return <h1>This is MultipleParams page</h1>;
}

export default MultipleParams;
