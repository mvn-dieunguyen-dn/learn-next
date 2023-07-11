import Link from "next/link";

function NotFound() {
  return (
    <>
      <h1>Oppps....!</h1>
      <h2>That page can not be found!!!</h2>
      <p>
        Go back to the
        <Link href="/"> Homepage</Link>
      </p>
    </>
  );
}

export default NotFound;
