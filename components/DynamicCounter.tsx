import React, { useEffect, useState, useRef } from "react";

interface CounterValue {
  startValue: number;
  endValue: number;
  duration: number;
  intervalId: NodeJS.Timeout | null;
}

const DynamicCounter = ({translate}:any) => {
  const [values, setValues] = useState<CounterValue[]>([]);
  // This state is now our switch for SEO vs. animation
  const [isIntersecting, setIsIntersecting] = useState(false);
  const counterSectionRef = useRef<HTMLDivElement>(null);

  // NO CHANGES to this useEffect
  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".num");
    const interval = 3000;
    const newValues: CounterValue[] = [];
    valueDisplays.forEach((valueDisplay) => {
      const endValue = parseInt(valueDisplay.getAttribute("data-val") || "");
      if (!isNaN(endValue)) {
        let startValue = endValue === 10630 ? 10000 : 0;
        newValues.push({
          startValue,
          endValue,
          duration: Math.floor(interval / Math.abs(endValue - startValue)),
          intervalId: null,
        });
      }
    });
    setValues(newValues);
  }, []);

  // NO CHANGES to this useEffect
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

  // NO CHANGES to this useEffect
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
  }, [isIntersecting, values]); // Note: Added 'values' to dependency array for correctness

  // MINIMAL CHANGES ARE HERE
  return (
    <div className="w-full bg-stone-50 text-center py-20 px-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 text-primaryRed">
        {translate("Brojevi govore umesto nas")}
      </h2>
      <div
        className="grid gap-10 lg:grid-cols-4 m-auto justify-center max-w-[1140px] text-center"
        ref={counterSectionRef}
      >
        <h3>
          <div
            className="text-5xl font-medium mb-3 num"
            data-val="10630"
          >
            {/* If intersecting, animate. If not, show final value for SEO. */}
            {isIntersecting && values.length > 0
              ? values[0].startValue.toLocaleString() + '+'
              : "10,630+"}
          </div>
          <div className="text-xl mb-3">{translate("Veleprodajnih kupaca")}</div>
        </h3>
        <h3>
          <div
            className="text-5xl font-medium mb-3 num"
            data-val="120"
          >
            {isIntersecting && values.length > 1
              ? values[1].startValue.toLocaleString() + '+'
              : "120+"}
          </div>
          <div className="text-xl mb-3">{translate("Dilera širom Srbije")}</div>
        </h3>
        <h3>
          <div
            className="text-5xl font-medium mb-3 num"
            data-val="100"
          >
            {isIntersecting && values.length > 2
              ? values[2].startValue.toLocaleString() + '%'
              : "100%"}
          </div>
          <div className="text-xl mb-3">{translate("Zadovoljstvo uslugom")}</div>
        </h3>
        <h3>
          <div
            className="text-5xl font-medium mb-3 num"
            data-val="30"
          >
            {isIntersecting && values.length > 3
              ? values[3].startValue.toLocaleString() + '+'
              : "30+"}
          </div>
          <div className="text-xl mb-3">
            {translate("Brendova koje zastupamo")}
          </div>
        </h3>
      </div>
    </div>
  );
};

export default DynamicCounter;