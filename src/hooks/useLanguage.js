import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useAxios from "./useAxios";
import {API_URL} from "../configs";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
const useLanguage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {get} = useAxios();
  const [languages,setLanguages] = useState([])
  const getLanguage = async (props) => {
    const { locale } = props;
    try {
      let res = await get(`${API_URL}/admins/languages/${locale}`);
      if (res) {
        return res.data;
      } else {

      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const {
    i18n: {language},
  } = useTranslation();

  useEffect(() => {
    if (language) {
      console.log(language)
    }
  }, [language]);

  useEffect(()=>{
    getLanguages()
  },[])

  const getLanguages = async () => {
    try {
      let res = await get(API_URL + '/admins/languages');
      if (res.length > 0) {
        //dispatch(setConstants({ languages: res.data }));
        setLanguages(res)
      } else {
        setLanguages([])
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return {
    languages,
    getLanguage
  };
};

export default useLanguage;
