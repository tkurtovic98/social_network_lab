const cityDataModel = (name, coord, country, main) => {
  return {
    name: name,
    coord: coord,
    country: country,
    main: main,
  };
};

//main:{"temp","temp_min","temp_max","pressure","humidity"}}

export const makeCity = (apiModel) => {
  return cityDataModel(
    apiModel.name,
    apiModel.coord,
    apiModel.country,
    apiModel.main
  );
};
