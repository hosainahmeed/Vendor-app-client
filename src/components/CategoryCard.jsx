/* eslint-disable react/prop-types */
import { Card } from "antd";
function CategoryCard({ data }) {
  const { image, name } = data;
  return (
    <div>
      <Card>
        <div className="flex flex-col items-center justify-center gap-2">
          <img className="w-24  h-24 object-cover" src={image}></img>
          <p className="font-bold">{name}</p>
        </div>
      </Card>
    </div>
  );
}

export default CategoryCard;
