import { Roadmap } from "@prisma/client";
import RoadmapCard from "./roadmap-card";
import NoMenteeRoadmaps from "./no-mentee-roadmaps";

interface RoadmapsListProps {
  type: "mentee" | "mentor";
  roadmaps: Roadmap[];
}

export default function RoadmapsList({ type, roadmaps }: RoadmapsListProps) {
  const roadmapsLength = roadmaps.length;

  if (type === "mentee" && !roadmapsLength) {
    return <NoMenteeRoadmaps />;
  }

  const title =
    (type === "mentee" ? "Mentee Roadmaps" : "Mentor Roadmaps") +
    ` (${roadmapsLength})`;
  return (
    <div className="mb-6">
      <div className="flex items-center gap-x-2 mb-6">
        <p className="text-xs uppercase text-gray tracking-[2.4px] font-bold">
          {title}
        </p>
      </div>
      <div>
        {roadmaps.map((roadmap) => (
          <RoadmapCard key={roadmap.id} roadmap={roadmap} />
        ))}
      </div>
    </div>
  );
}
