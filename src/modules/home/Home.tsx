import { FC } from "react";
import TopSection from "./components/TopSection";
import WeSection from "./components/WeSection";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";

const Home: FC = () => {
    return (
        <main className="flex-grow">
            <div>
                <TopSection />
                <WeSection />
                <ServicesSection />
                {/* <ProjectsSection /> */}
                <ClientsSection />
            </div>
        </main>
    )
}

export default Home