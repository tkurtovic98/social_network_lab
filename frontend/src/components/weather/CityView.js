import React from "react";
import { faModule } from "../../module/FaModule";

const CityView = (model) => {
  return (
    <div className="container-fluid" style={{ paddingTop: "32px" }}>
      <h3 className="col" style={{ marginBottom: "16px" }}>
        {faModule.faIcons.city} {model.model.name} {faModule.faIcons.city}
      </h3>
      <div className="row">
        <h3 className="col">
          {faModule.faIcons.tempLow} {model.model.main.temp_min}F
        </h3>
        <h3 className="col">
          {faModule.faIcons.tempHigh} {model.model.main.temp_max}F
        </h3>
        <div className="w-100"></div>
        <h3 className="col">
          {faModule.faIcons.pressure} {model.model.main.pressure}Pa
        </h3>
        <h3 className="col">
          {faModule.faIcons.humidity} {model.model.main.humidity}%
        </h3>
        <div className="w-100"></div>
        <h3 className="col">Long: {model.model.coord.lon}</h3>
        <h3 className="col">Lat: {model.model.coord.lat}</h3>
      </div>
    </div>
  );
};

export default CityView;
