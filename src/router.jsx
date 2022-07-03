import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Login, Details, Search, Redirect } from "./Components";
import { ReadContext } from "./context";

export default function Router() {
  const { auth } = ReadContext();

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route index element={auth ? <Search /> : <Login />} />

        {/* Protected Routes */}
        <Route path="/">
          {auth ? (
            <Route path="/details" element={<Details />} />
          ) : (
            <Route path="*" element={<Redirect />} />
          )}
        </Route>
      </Routes>
    </>
  );
}
