import React, { useState } from "react";
import { AnimateSharedLayout } from "framer-motion`";
export default function Card() {
  const [expanded, setExpanded] = useState();
  return (
    <AnimateSharedLayout>
      {expanded ? <ExpandedCard /> : <CompactCard param=/>}
    </AnimateSharedLayout>
  );
}
