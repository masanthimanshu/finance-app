import { Link } from "react-router-dom";

export default function Search() {
  return (
    <>
      <h1>Search page</h1>
      <Link to="/details" state={"apple"}>
        Go to Details
      </Link>
    </>
  );
}
