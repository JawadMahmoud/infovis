// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4maps from "@amcharts/amcharts4/maps";
// import * as am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";
// import * as am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import * as am4themes_animated from "@amcharts/amcharts4/themes/animated";
// var _ = require("lodash");
// var am4core = require("@amcharts/amcharts4/core");
// var am4maps = require("@amcharts/amcharts4/maps");
// var am4geodata_continentsLow = require("@amcharts/amcharts4-geodata/continentsLow");
// var am4geodata_worldLow = require("@amcharts/amcharts4-geodata/worldLow");
// var am4themes_animated = require("@amcharts/amcharts4/themes/animated");

let createHomeButton = chart => {
  var homeButton = new am4core.Button();
  homeButton.events.on("hit", function() {
    chart.goHome();
  });

  homeButton.icon = new am4core.Sprite();
  homeButton.padding(7, 5, 7, 5);
  homeButton.width = 30;
  homeButton.icon.path =
    "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
  homeButton.marginBottom = 10;
  homeButton.parent = chart.zoomControl;
  homeButton.insertBefore(chart.zoomControl.plusButton);

  return homeButton;
};

am4core.ready(function() {
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create map instance
  var chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set projection
  chart.projection = new am4maps.projections.Mercator();

  // Zoom control
  chart.zoomControl = new am4maps.ZoomControl();

  var homeButton = createHomeButton(chart);

  // Shared
  var hoverColorHex = "#9a7bca";
  var hoverColor = am4core.color(hoverColorHex);

  // Countries
  var countriesSeries = chart.series.push(new am4maps.MapPolygonSeries());
  var countries = countriesSeries.mapPolygons;
  countriesSeries.visible = true; // start off as hidden
  countriesSeries.exclude = ["AQ"];
  countriesSeries.geodata = am4geodata_worldLow;
  countriesSeries.useGeodata = true;
  // Hide each country so we can fade them in

  var countryTemplate = countries.template;
  countryTemplate.applyOnClones = true;
  countryTemplate.fill = am4core.color("#a791b4");
  countryTemplate.fillOpacity = 0.3; // see continents underneath, however, country shapes are more detailed than continents.
  countryTemplate.strokeOpacity = 0.5;
  countryTemplate.nonScalingStroke = true;
  countryTemplate.tooltipText = "{name}";
  countryTemplate.events.on("hit", function(event) {
    chart.zoomToMapObject(event.target);
    console.log(event.target);
  });

  var countryHover = countryTemplate.states.create("hover");
  countryHover.properties.fill = hoverColor;
  countryHover.properties.fillOpacity = 0.8; // Reduce conflict with back to continents map label
  countryHover.properties.stroke = hoverColor;
  countryHover.properties.strokeOpacity = 1;

  var labelContainer = chart.chartContainer.createChild(am4core.Container);
  labelContainer.hide();
  labelContainer.config = {
    cursorOverStyle: [
      {
        property: "cursor",
        value: "pointer"
      }
    ]
  };
  labelContainer.isMeasured = false;
  labelContainer.layout = "horizontal";
  labelContainer.verticalCenter = "bottom";
  labelContainer.contentValign = "middle";
  labelContainer.y = am4core.percent(100);
  labelContainer.dx = 10;
  labelContainer.dy = -25;
  labelContainer.background.fill = am4core.color("#fff");
  labelContainer.background.fillOpacity = 0; // Hack to ensure entire area of labelContainer, e.g. between icon path, is clickable
  labelContainer.setStateOnChildren = true;
  labelContainer.states.create("hover");
  labelContainer.events.on("hit", restoreContinents);

  var label = labelContainer.createChild(am4core.Label);
  label.valign = "bottom";
  label.verticalCenter = "bottom";
  label.dy = -5;
  label.text = "Back to continents map";
  label.states.create("hover").properties.fill = hoverColor;
});
