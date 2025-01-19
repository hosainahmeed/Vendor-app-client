import BannerSection from "./Allsections/BannerSection";
import NewUpdate from "./Allsections/NewUpdate";
import TopCategory from "./Allsections/TopCategory";
import LatestProducts from "./Allsections/LatestProducts";
import Gallery from "../../components/showcase/Gallery";
import OrganicSpices from "./Allsections/OrganicSpices";
import OriginalOrganicProduct from "./Allsections/OriginalOrganicProduct";
import ShopByBrands from "./Allsections/ShopByBrands";
import Newsletter from "./Allsections/Newsletter";

function Home() {
  return (
    <div>
      <BannerSection />
      <NewUpdate />
      <TopCategory />
      <LatestProducts />
      <Gallery />
      <OriginalOrganicProduct />
      <OrganicSpices />
      <ShopByBrands />
      <Newsletter />
    </div>
  );
}

export default Home;
