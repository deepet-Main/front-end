import { Navbar } from "../../components/Navbar";
import { Container } from "./styles";
import { Sidebar } from "../../components/SideBar";

export function LandingPage() {
  return (
    <Container className="bg-gradient-to-br from-orange-400 to-orange-200 h-full flex justify-center">
      <Sidebar />
      <Navbar />
      <h1 className="mt-20">Landing </h1>
    </Container>
  );
}
