import axios from "axios";

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_RESTCOUNTRIES_API_KEY}`,
  },
});

export const getCountryData = () => {
  return api.get("", {
    params: {
      response_fields: "names.common,population,region,capitals,flag.url_svg",
      limit: 100,
    },
  });
};

export const getCountryIndData = (name) => {
  return api.get(`/names.common/${encodeURIComponent(name)}`, {
    params: {
      response_fields:
        "names,population,region,subregion,capitals,tlds,currencies,languages,borders,flag",
    },
  });
};
