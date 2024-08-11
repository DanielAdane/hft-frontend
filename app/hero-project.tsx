import Badge from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import Progress from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface HeroProjectProps {
  image: string;
  title: string;
  category: string;
  progress: number;
}
const HeroProject: FC<HeroProjectProps> = ({
  image,
  title,
  category,
  progress,
}) => {
  return (
    <div className="w-[375px] flex gap-2 shadow-md p-2 bg-white rounded">
      <Image src={image} width={120} height={100} alt={category} />
      <div className="flex flex-col gap-2 basis-[65%]">
        <p className="mb-2">{title}</p>
        <Progress value={progress} />
        <div className="w-full flex items-center justify-between mt-2">
          <Badge>{category}</Badge>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "text-xs font-light",
            })}
            href="/projects"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroProject;
