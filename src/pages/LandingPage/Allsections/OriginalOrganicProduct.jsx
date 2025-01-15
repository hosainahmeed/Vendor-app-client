import { useState } from "react";
import CategoriseTitleHeade from "../../../components/titleHeader/CategoriseTitleHeade";
import Card from "../../../components/Card";

function OriginalOrganicProduct() {
  const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card

  return (
    <div className="area">
      <CategoriseTitleHeade title={"Original Organic Honey"} />
      <div className="px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Card
            key={idx}
            id={idx}
            isHovered={hoveredCard === idx} // Pass hover state
            onHover={() => setHoveredCard(idx)} // Set hovered card
            onLeave={() => setHoveredCard(null)} // Reset on leave
          />
        ))}
      </div>
    </div>
  );
}

export default OriginalOrganicProduct;
