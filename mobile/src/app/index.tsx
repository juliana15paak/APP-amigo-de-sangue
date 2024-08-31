import { Link } from "expo-router";

export default function Index() {
  return (
    <>
      <Link href={"/cadastro"}>Cadastro</Link>
      <Link href={"/login"} className="mt-5">Login</Link>
    </>
  );
}