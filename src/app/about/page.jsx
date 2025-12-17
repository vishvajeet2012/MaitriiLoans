import YourNextFinanclegoal from "@/components/Landing/YourNextFinanclegoal";
import MaitriiABout from "./aboutHero";
import TeamCarouselSection from "./direactor";
import TeamSection from "./team";
import MissionVision from "./missionVisssion";

export default function AboutPage() {
    return (
        <div>
            <MaitriiABout />
            <MissionVision />
              <YourNextFinanclegoal/>
            <TeamCarouselSection />
            <TeamSection />
        </div>
    );
}