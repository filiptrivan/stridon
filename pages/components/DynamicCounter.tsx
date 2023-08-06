import React, { useEffect, useState, useRef } from "react";

interface CounterValue {
  startValue: number;
  endValue: number;
  duration: number;
  intervalId: NodeJS.Timeout | null;
}

const DynamicCounter = ({translate}:any) => {
  const [values, setValues] = useState<CounterValue[]>([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const counterSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".num");
    const interval = 3000; // Change this value to adjust the counting speed
    const newValues: CounterValue[] = [];
    valueDisplays.forEach((valueDisplay) => {
      const endValue = parseInt(valueDisplay.getAttribute("data-val") || "");
      if (!isNaN(endValue)) {
        let startValue = endValue === 10630 ? 10000 : 0; // Adjust the start value for 10630
        newValues.push({
          startValue,
          endValue,
          duration: Math.floor(interval / Math.abs(endValue - startValue)), // Adjust the duration based on the difference
          intervalId: null,
        });
      }
    });
    setValues(newValues);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }
    return () => observer.disconnect();
  }, [counterSectionRef]);

  useEffect(() => {
    if (!isIntersecting) return;
    const valueCounters = values.map((value) => {
      return new Promise<void>((resolve) => {
        const intervalId = setInterval(() => {
          const newValues = [...values];
          newValues.forEach((newValue, index) => {
            if (newValue.startValue < newValue.endValue) {
              newValues[index].startValue += 1;
            } else {
              clearInterval(newValue.intervalId as NodeJS.Timeout);
            }
          });
          setValues(newValues);
          resolve();
        }, value.duration);
        const newValues = [...values];
        newValues.find((newValue) => newValue === value)!.intervalId =
          intervalId;
        setValues(newValues);
      });
    });
    Promise.all(valueCounters).then(() => setIsIntersecting(false));
  }, [isIntersecting]);

  // grid gap-10 lg:grid-cols-4 m-auto justify-center max-w-[1140px] p-3 text-center pb-14 pt-10

  return (
    <div className="w-full bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="text-slate-50 sm:text-4xl text-2xl text-center pt-12 px-10">
        {translate("Brojevi govore umesto nas")}
      </div>
      <div
        className="grid gap-10 lg:grid-cols-4 m-auto justify-center max-w-[1140px] p-3 text-center pb-20 pt-12"
        ref={counterSectionRef}
      >
        {/* <div className="  border-r-zinc-950 border-r "> */}
        <div className=" ">
          <i className="fas fa-utensils "></i>
          <div
            className="text-5xl font-medium mb-3 text-gray-500 num"
            data-val="10630"
          >
            {values.length > 0 ? values[0].startValue.toLocaleString()+'+' : "0"}
          </div>
          <div className="text-xl mb-3 text-slate-50">{translate("Veleprodajnih kupaca")}</div>
        </div>
        {/* <div className="  border-r-zinc-950 border-r "> */}
        <div className=" ">
          <i className="fas fa-smile-beam"></i>
          <div
            className="text-5xl font-medium mb-3 text-gray-500 num"
            data-val="120"
          >
            {values.length > 1 ? values[1].startValue.toLocaleString()+'+' : "0"}
          </div>
          <div className="text-xl mb-3 text-slate-50">{translate("Dilera širom Srbije")}</div>
        </div>
        {/* <div className="  border-r-zinc-950 border-r "> */}
        <div className=" ">
          <i className="fas fa-list"></i>
          <div
            className="text-5xl font-medium mb-3 text-gray-500 num"
            data-val="100"
          >
            {values.length > 2 ? values[2].startValue.toLocaleString()+'%' : "0"}
          </div>
          <div className="text-xl mb-3 text-slate-50">{translate("Zadovoljstvo uslugom")}</div>
        </div>
        <div className="">
          <i className="fas fa-star"></i>
          <div
            className="text-5xl font-medium mb-3 text-gray-500 num"
            data-val="30"
          >
            {values.length > 3 ? values[3].startValue.toLocaleString()+'+' : "0"}
          </div>
          <div className="text-xl mb-3 text-slate-50">
            {translate("Brendova koje zastupamo")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCounter;
