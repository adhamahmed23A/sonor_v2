import type { Dispatch, SetStateAction } from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Badge } from "./badge";

interface TabsProps {
  tabs: { name: string; value: string; badge: boolean }[];
  setValue: Dispatch<SetStateAction<"monthly" | "yearly">>;
}
const TabsCustomDemo = ({ tabs, setValue }: TabsProps) => {
  const handleValue = (value: string) => {
    setValue(value as "monthly" | "yearly");
  };
  return (
    <div className="w-full max-w-md">
      <Tabs
        onValueChange={handleValue}
        defaultValue="monthly"
        className="gap-4"
      >
        <TabsList className="bg-background gap-1">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-active:bg-primary! data-active:text-primary-foreground! text-muted-foreground hover:text-foreground not-data-active:hover:bg-muted transition-colors duration-300 hover:border dark:data-active:border-transparent! flex gap-2 justify-center items-center"
            >
              {tab.name}
              {tab.badge && <Badge variant={"secondary"}>30% OFF</Badge>}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabsCustomDemo;
