import React, { useEffect, useState, useRef } from "react";
const counterData = [
  {
    endValue: 10630,
    startValue: 10000,
    label: "Veleprodajnih kupaca",
    suffix: "+",
  },
  {
    endValue: 120,
    startValue: 0,
    label: "Dilera širom Srbije",
    suffix: "+",
  },
  {
    endValue: 100,
    startValue: 0,
    label: "Zadovoljstvo uslugom",
    suffix: "%",
  },
  {
    endValue: 30,
    startValue: 0,
    label: "Brendova koje zastupamo",
    suffix: "+",
  },
];

const DynamicCounter = ({ translate }: any) => {
  const [displayValues, setDisplayValues] = useState(
    counterData.map((item) => item.endValue)
  );

  const [startAnimation, setStartAnimation] = useState(false);
  const counterSectionRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false); 
  // This hook sets up the observer to detect when the component is visible.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Trigger animation only once when it becomes visible
        if (entry.isIntersecting && !animationTriggered.current) {
          setStartAnimation(true);
          animationTriggered.current = true;
        }
      },
      {
        threshold: 0.5, // Start when 50% of the element is visible
      }
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  // This effect runs only when `startAnimation` becomes true.
  useEffect(() => {
    if (!startAnimation) return;

    // Reset to start values before animating for the user
    setDisplayValues(counterData.map((item) => item.startValue));

    const animationDuration = 2000; // Total animation time in ms

    const intervals = counterData.map((item, index) => {
      const range = item.endValue - item.startValue;
      if (range <= 0) return null; // No animation needed if range is zero or negative

      // Calculate the time per step to finish in `animationDuration`
      const stepTime = Math.abs(Math.floor(animationDuration / range));

      const timer = setInterval(() => {
        setDisplayValues((prevValues) => {
          const newValues = [...prevValues];
          if (newValues[index] < item.endValue) {
            newValues[index] += 1;
          } else {
            clearInterval(timer); // Stop when the end value is reached
          }
          return newValues;
        });
      }, stepTime);
      return timer;
    });

    // Cleanup function to clear intervals if the component unmounts
    return () => intervals.forEach((timer) => timer && clearInterval(timer));
  }, [startAnimation]);

  return (
    <div className="w-full bg-stone-50 text-center py-20 px-4">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 text-primaryRed">
        {translate("Brojevi govore umesto nas")}
      </h2>
      <div
        className="grid gap-10 lg:grid-cols-4 m-auto justify-center max-w-[1140px] text-center"
        ref={counterSectionRef}
      >
        {/* 5. Dynamic Rendering from State */}
        {counterData.map((item, index) => (
          <h3 key={item.label}>
            <div className="text-5xl font-medium mb-3">
              {displayValues[index].toLocaleString()}
              {item.suffix}
            </div>
            <div className="text-xl mb-3">{translate(item.label)}</div>
          </h3>
        ))}
      </div>
    </div>
  );
};

export default DynamicCounter;