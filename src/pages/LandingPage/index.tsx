import { Navbar } from "../../components/Navbar";
import { Container } from "./styles";
import { Sidebar } from "../../components/SideBar";

export function LandingPage() {
  return (
    <Container className="bg-gradient-to-br from-orange-400 to-orange-200 h-full flex justify-center px-3">
      <Navbar />
      <div className="max-w-5xl">
        <Sidebar />

        <h1 className="mt-20">Landing </h1>
      </div>
    </Container>
  );
}
