import React, { useEffect, useState } from "react";
import DynamicCounter from "./DynamicCounter";

const DynamicCounterContainer = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender ? <DynamicCounter /> : null;
};

export default DynamicCounterContainer;
