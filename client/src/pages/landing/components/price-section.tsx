import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TabsCustomDemo from "@/components/ui/tab-custom-demo";
import { PLANS } from "@/constants/plans";
import { CircleCheck, DollarSign } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { useState } from "react";
const tabs = [
  { name: "Monthly", value: "monthly", badge: false },
  { name: "Yearly", value: "yearly", badge: true },
];
const PriceSection = () => {
  const [value, setValue] = useState<"monthly" | "yearly">("monthly");
  console.log(value);
  return (
    <>
      <div className="section-container mt-36 flex flex-col items-center gap-4">
        <Badge variant={"outline"} className="p-2.5! text-[13px]">
          <DollarSign />
          Pricing
        </Badge>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[0.97]">
          <span className="text-primary">Plans</span> that fits your target
        </h1>
        <div className="">
          <TabsCustomDemo setValue={setValue} tabs={tabs} />
        </div>
        {/* Grid */}
        <div className="max-w-full mt-10 grid grid-cols-1  lg:grid-cols-3 gap-4">
          {PLANS.map((plan) => (
            <div className="col-span-1 min-h-62 w-full p-5 border border-border rounded-xl hover:border-primary/30 transition-all duration-200 ">
              <div className="h-full w-full flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-sm">{plan.name}</h1>
                  {plan.popular && <Badge>Popular</Badge>}
                </div>
                <h1 className="text-3xl font-semibold font-geist mt-1">
                  <NumberFlow
                    format={{
                      style: "currency",
                      currency: "USD",
                      trailingZeroDisplay: "stripIfInteger",
                    }}
                    value={
                      value === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
                    }
                  />{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    {plan.priceLabel}
                  </span>
                </h1>
                <p className="text-sm text-muted-foreground max-w-2xs">
                  {plan.description}
                </p>
                <Button
                  variant={plan.pro ? "default" : "outline"}
                  className="button"
                >
                  {plan.buttonText}
                </Button>
                <div className="flex justify-center items-center gap-2">
                  <div className="flex-1 h-px bg-border " />
                  <span className="text-sm">Features</span>
                  <div className="flex-1 h-px bg-border " />
                </div>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li className="flex gap-2 items-center text-muted-foreground">
                      <CircleCheck className="size-3.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceSection;
