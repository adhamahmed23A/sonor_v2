import { useTheme } from "@/providers/theme-provider";
import { Button } from "./button";
import { Moon, Sun } from "lucide-react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Button
        variant="ghost"
        size="icon-sm"
        className="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className=" text-foreground" />
        ) : (
          <Moon className=" text-foreground" />
        )}

        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};
