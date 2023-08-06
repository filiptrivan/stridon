const Text = ({ translate }: any) => {
  return (
    <div className="max-w-[1140px] mx-auto text-center p-4 sm:p-2 mb-20">
      <h2 className="text-2xl sm:text-3xl  font-medium text-center pb-2 pt">
        {translate("key1")}
      </h2>
      <h3 className="text-base sm:text-xl mb-20">
        <b>{translate("key2")}</b> {translate("key3")}
      </h3>
      <h2 className="text-2xl sm:text-3xl  font-medium text-center pb-2 pt">
        {translate("key4")}
      </h2>
      <h3 className="text-base sm:text-xl">
        {translate("key5")}
        <br />
        <br />
        {translate("key6")}
        <br />
        <br />
        {translate("key7")}{" "}
        <b>DeWalt, Bosch, Makita, Metabo, Festool, Senco i Rubi.</b>
        {translate("key8")}
        <br />
        <br />
        <b>{translate("key9")}</b> {translate("key10")}{" "}
        <b> {translate("key11")}</b> {translate("key12")}
        <b>{translate("key13")}</b>
        {translate("key14")}
        <br />
        <br />
        {translate("key15")}
        <br />
        <br />
        {translate("key16")} <b>Vojislava Ilića 141b</b>.
      </h3>
    </div>
  );
};

export default Text;
