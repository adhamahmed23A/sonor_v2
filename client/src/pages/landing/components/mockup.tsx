import { CopyIcon, PlusIcon, UploadIcon } from "lucide-react";

export const Mockup = () => {
  return (
    <>
      <div className=" w-full h-120 lg:h-150 mt-12 p-px border bg-conic-gradient animate-rotate-border rounded-lg">
        <div className="w-full h-full bg-muted dark:bg-background rounded-lg p-2 flex flex-col">
          {/* Mockup Buttons */}
          <div className="w-full flex items-center justify-between p-1">
            <div className="flex items-center gap-1.5">
              <div className="rounded-full size-2 bg-muted-foreground" />
              <div className="rounded-full size-2 bg-muted-foreground" />
              <div className="rounded-full size-2 bg-muted-foreground" />
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground ">
              <UploadIcon className="size-3.5 hover:text-foreground duration-200" />
              <PlusIcon className="size-3.5 hover:text-foreground duration-200" />
              <CopyIcon className="size-3.5 hover:text-foreground duration-200" />
            </div>
          </div>
          {/* Mockup Image */}
        </div>
      </div>
    </>
  );
};
