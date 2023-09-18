const Text = ({ translate }: any) => {
  return (
    <div className="max-w-[1140px] mx-auto text-left p-4 sm:p-2 mb-20">
      <h2 className="text-2xl sm:text-3xl font-medium text-cente pb-">
        {translate("key1")}
      </h2>
      <span className="separator"></span>
      <div className="text-base sm:text-lg mb-20">
        <b>{translate("key2")}</b> {translate("key3")}
      </div>
      <h2 className="text-2xl sm:text-3xl  font-medium text-cente pb-">
        {translate("key4")}
      </h2>
      <span className="separator"></span>
      <div className="text-base sm:text-lg">
        {translate("key5")}
        <br />
        <br />
        {translate("key6")}
        <br />
        <br />
        {translate("key7")}{" "}
        <b>DeWalt, Bosch, Makita, Metabo, Festool, Senco i Rubi. </b>
        {translate("key8")}
        <br />
        <br />
        <b>{translate("key9")}</b> {translate("key10")}{" "}
        {translate("key11")} {translate("key12")}
        {translate("key13")}
        {translate("key14")}
        <br />
        <br />
        {translate("key15")}
        <br />
        <br />
        {translate("key16")} <b>Vojislava Ilića 141b</b>.
      </div>
    </div>
  );
};

export default Text;
