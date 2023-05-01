import Item from "./FooterItem";
import { PRODUCTS, INFORMACIJE, KOMPANIJA, RADNOVREME } from "../../data/FooterMenu";
const FooterItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-14">
      <Item Links={PRODUCTS} title="Call centar" />
      <Item Links={RADNOVREME} title="Radno Vreme" />
      <Item Links={INFORMACIJE} title="Informacije" />
      <Item Links={KOMPANIJA} title="Kompanija" />
    </div>
  );
};

export default FooterItemsContainer;