import { FC } from "react";
import TopSection from "./components/TopSection";
import WeSection from "./components/WeSection";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import TeamSection from "./components/TeamSection";

const Home: FC = () => {
    return (
        <main className="flex-grow bg-white">
            <div>
                <TopSection />
                <WeSection />
                <TeamSection />
                <ServicesSection />
                {/* <ProjectsSection /> */}
                <ClientsSection />
            </div>
        </main>
    )
}

export default Home