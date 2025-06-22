import Item from "./FooterItem";
import { PRODUCTS, INFORMACIJE, KOMPANIJA, RADNOVREME } from "../data/FooterMenu";
const FooterItemsContainer = ({translate}:any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 mb-14">
      <Item Links={PRODUCTS} title={translate("Call centar")} translate={translate}/>
      <Item Links={RADNOVREME} title={translate("Radno Vreme")} translate={translate}/>
      <Item Links={INFORMACIJE} title={translate("Informacije")} translate={translate}/>
      <Item Links={KOMPANIJA} title={translate("Kompanija")} translate={translate}/>
    </div>
  );
};

export default FooterItemsContainer;