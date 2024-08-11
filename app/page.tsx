import MaxWidthWrapper from "@/components/max-width-wrapper";
import Button from "@/components/ui/button";
import HeroProject from "./hero-project";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const HERO_PROJECTS = [
  {
    image: "/hero-proj-1.png",
    title: "Educate 500 Orphans in Syria",
    category: "Education",
    progress: 70,
  },
  {
    image: "/hero-proj-2.png",
    title: "Provide Urgent Medical Attention ",
    category: "Physical Healthy",
    progress: 30,
  },
  {
    image: "/hero-proj-3.png",
    title: "Nourishing Hope: Serving Food",
    category: "Food Security",
    progress: 45,
  },
];

export default function Home() {
  return (
    <MaxWidthWrapper className="pt-5">
      <div className="flex items-center gap-5">
        <div>
          <h1 className="text-4xl font-normal mb-4 leading-snug">
            Make changes and <span className="sm:block">help the world</span>
          </h1>
          <p className="max-w-prose text-sm font-light">
            Hope for Tomorrow non-profit organisation that collaborates with
            volunteers to deliver humanitarian aid and disaster relief to
            vulnerable communities.
          </p>
          <div className="flex gap-4 my-5">
            <Button>Donate now</Button>
            <Button variant="secondary">Learn more</Button>
          </div>
        </div>
        <div className="hidden md:block basis-1/2 relative bg-[url('/mock-shape.png')] bg-no-repeat bg-contain bg-center min-h-[400px]">
          <div className="flex flex-col gap-5 items-center">
            {HERO_PROJECTS.map((project) => (
              <HeroProject key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap gap-2 sm:gap-4 bg-light-gray rounded-md my-10 md:my-20 p-5">
        <h3 className="text-primary text-lg">Explore project:</h3>
        {[...Array(15)].map((_, i, arr) => (
          <>
            {i !== arr.length - 1 ? (
              <Link
                className="bg-white p-2 rounded-full text-sm font-light"
                key={i}
                href="/projects"
              >
                Category {i + 1}
              </Link>
            ) : (
              <Link
                className="flex items-center bg-white p-2 rounded-full text-sm font-light"
                key={i}
                href="/projects"
              >
                See All <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            )}
          </>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
