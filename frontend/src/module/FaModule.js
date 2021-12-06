import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faDiscord,
  faEthereum,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faGraduationCap,
  faPaintBrush,
  faGrinBeam,
  faSeedling,
  faFileContract,
  faInfoCircle,
  faBoxOpen,
  faMinusCircle,
  faPlusCircle,
  faSignOutAlt,
  faCity,
  faUsers,
  faTemperatureHigh,
  faTemperatureLow,
  faTachometerAlt,
  faWater,
  faChartLine,
  faChartPie,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [
  faBook,
  faGraduationCap,
  faPaintBrush,
  faGrinBeam,
  faSeedling,
  faDiscord,
  faTwitter,
  faFileContract,
  faInfoCircle,
  faBoxOpen,
  faMinusCircle,
  faPlusCircle,
  faSignOutAlt,
  faCity,
  faUsers,
  faTemperatureHigh,
  faTemperatureLow,
  faTachometerAlt,
  faWater,
  faChartPie,
  faChartLine,
  faPalette,
  faEthereum,
];

library.add(fab, icons);

const faIcon = (icon, size = "1x") => (
  <FontAwesomeIcon icon={icon} size={size} />
);

const faIcons = {
  google: faIcon(["fab", "google"], "4x"),
  signOut: faIcon("sign-out-alt", "2x"),
  city: faIcon("city"),
  people: faIcon("users"),
  tempHigh: faIcon("temperature-high"),
  tempLow: faIcon("temperature-low"),
  pressure: faIcon("tachometer-alt"),
  humidity: faIcon("water"),
  maketCap: faIcon("chart-pie"),
  floorPrice: faIcon("chart-line"),
  nftName: faIcon("palette"),
  eth: faIcon(["fab", "ethereum"]),
};

const faModule = {
  faIcons,
};

export { faModule };
