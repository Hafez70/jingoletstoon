import { useTranslation } from "react-i18next";

const UseCustomTranslate = (pageName) => {
  const { t } = useTranslation();

  const tr = (value) => t(`translations.${pageName}.${value}`);
  return tr;
};
export default UseCustomTranslate;
