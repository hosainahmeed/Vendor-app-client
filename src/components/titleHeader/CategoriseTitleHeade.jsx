import { Link } from "react-router-dom";

function CategoriseTitleHeade({ title }) {
  return (
    <div className="mb-4 mt-12">
      <div className="flex-bet px-2">
        <h1 className="text-xl font-bold my-2">{title}</h1>
        <Link to={"/products"}>
          <h2 className="font-bold hover:text-green-600">Vew All</h2>
        </Link>
      </div>
      <div className="h-[2px] w-full bg-slate-400/60"></div>
    </div>
  );
}

export default CategoriseTitleHeade;
