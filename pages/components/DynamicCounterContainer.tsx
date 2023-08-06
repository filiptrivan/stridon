import React, { useEffect, useState } from "react";
import DynamicCounter from "./DynamicCounter";

const DynamicCounterContainer = ({translate}:any) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  return shouldRender ? <DynamicCounter translate={translate}/> : null;
};

export default DynamicCounterContainer;
