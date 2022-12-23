import Navbar from "./navbar";

interface Parameter {
  children: String;
}

export default function Layout({ children }: Parameter) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
