import { Badge } from "@/components/ui/badge";
import { ListCheck } from "lucide-react";

const UsageSection = () => {
  return (
    <div className="section-container mt-36 flex flex-col items-center gap-4">
      {/* Announcement */}
      <Badge variant={"outline"} className="p-2.5! text-[13px]">
        <ListCheck />
        Usage
      </Badge>
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.97]">
        How can you use it
      </h1>
      {/* Description */}
      <p className="mx-auto max-w-sm text-center text-sm leading-[1.4] text-muted-foreground sm:max-w-lg sm:text-base md:max-w-2xl">
        Learn how it works with a simple step-by-step guide.
        <br /> Get up and running effortlessly in minutes.
      </p>
      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800"></div>
    </div>
  );
};

export default UsageSection;
