"use client";

import { useEffect, useState } from "react";
import { getTechLogos } from "@/lib/utils";
import Image from "next/image";

interface TechIconProps {
  techStack: string[];
}

interface TechIcon {
  tech: string;
  url: string;
}

export default function DisplayTechIcons({ techStack }: TechIconProps) {
  const [icons, setIcons] = useState<TechIcon[]>([]);

  useEffect(() => {
    async function fetchIcons() {
      const data = await getTechLogos(techStack);
      setIcons(data);
    }
    fetchIcons();
  }, [techStack]);

  return (
    <div className="flex flex-row">
      {icons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={`relative group bg-dark-300 rounded-full p-2 flex-center ${
            index > 1 ? "-ml-3" : ""
          }`}
        >
          <span className="tech-tooltip">{tech}</span>
          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
}
