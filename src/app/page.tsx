import Home from "@/modules/home/Home";
import Footer from "@/modules/shared/components/Footer";
import Header from "@/modules/shared/components/Header";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Home />
      <Footer />
    </main >
  );
}
