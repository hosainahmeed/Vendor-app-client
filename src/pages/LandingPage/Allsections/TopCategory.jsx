import React, { useEffect, useState } from "react";
import CategoriseTitleHeade from "../../../components/titleHeader/CategoriseTitleHeade";
import axios from "axios";
import CategoryCard from "../../../components/CategoryCard";

function TopCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/top.json");
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching top categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="area">
      <CategoriseTitleHeade title={"Top Categories"}></CategoriseTitleHeade>
      <div className="px-2 grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2">
        {categories?.map((item, idx) => (
          <CategoryCard data={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default TopCategory;
