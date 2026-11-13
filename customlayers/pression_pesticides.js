{
  // Définition des variables relatives à la couche.
  const LAYER = "pression_pesticides";
  const LAYER_URL = `data/pression_pesticides.geojson`;
  // Doit être unique et correspondre au nom du fichier javascript.
  const LAYER_ID = "pression_pesticides";

  // Fonction de style générée par QGIS2Web (réglée sur l'attribut ift_moy).
  var size = 0;
  var placement = 'point';

  var style_pression_pesticides_0 = function (feature, resolution) {
    var context = {
      feature: feature,
      variables: {}
    };

    var style;
    var labelText = "";
    var value = feature.get("ift_moy");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
      labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.763333) {
      style = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7.6 + size,
          displacement: [0, 0],
          stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }),
          fill: new ol.style.Fill({ color: 'rgba(252,251,253,1.0)' })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
          labelFill, placement, bufferColor,
          bufferWidth)
      })]
    } else if (value >= 0.763333 && value <= 1.526667) {
      style = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7.6 + size,
          displacement: [0, 0],
          stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }),
          fill: new ol.style.Fill({ color: 'rgba(228,227,240,1.0)' })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
          labelFill, placement, bufferColor,
          bufferWidth)
      })]
    } else if (value >= 1.526667 && value <= 2.290000) {
      style = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7.6 + size,
          displacement: [0, 0],
          stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }),
          fill: new ol.style.Fill({ color: 'rgba(186,186,218,1.0)' })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
          labelFill, placement, bufferColor,
          bufferWidth)
      })]
    } else if (value >= 2.290000 && value <= 3.053333) {
      style = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7.6 + size,
          displacement: [0, 0],
          stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }),
          fill: new ol.style.Fill({ color: 'rgba(140,136,191,1.0)' })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
          labelFill, placement, bufferColor,
          bufferWidth)
      })]
    } else if (value >= 3.053333 && value <= 3.816667) {
      style = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7.6 + size,
          displacement: [0, 0],
          stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }),
          fill: new ol.style.Fill({ color: 'rgba(99,67,156,1.0)' })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
          labelFill, placement, bufferColor,
          bufferWidth)
      })]
    } else if (value >= 3.816667 && value <= 4.580000) {
      style = [new ol.style.Style({
        image: new ol.style.Circle({
          radius: 7.6 + size,
          displacement: [0, 0],
          stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0 }),
          fill: new ol.style.Fill({ color: 'rgba(63,0,125,1.0)' })
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
          labelFill, placement, bufferColor,
          bufferWidth)
      })]
    }

    return style;
  };

  // Légende : une entrée par classe de ift_moy, avec les mêmes couleurs.
  const legend = {
    items: [
      { label: "0 – 0.76",  geometry: "Point", styles: [new ol.style.Style({ image: new ol.style.Circle({ fill: new ol.style.Fill({ color: "rgba(252,251,253,1.0)" }), stroke: new ol.style.Stroke({ color: "#232323", width: 0.5 }), radius: 7.6 }) })] },
      { label: "0.76 – 1.53", geometry: "Point", styles: [new ol.style.Style({ image: new ol.style.Circle({ fill: new ol.style.Fill({ color: "rgba(228,227,240,1.0)" }), stroke: new ol.style.Stroke({ color: "#232323", width: 0.5 }), radius: 7.6 }) })] },
      { label: "1.53 – 2.29", geometry: "Point", styles: [new ol.style.Style({ image: new ol.style.Circle({ fill: new ol.style.Fill({ color: "rgba(186,186,218,1.0)" }), stroke: new ol.style.Stroke({ color: "#232323", width: 0.5 }), radius: 7.6 }) })] },
      { label: "2.29 – 3.05", geometry: "Point", styles: [new ol.style.Style({ image: new ol.style.Circle({ fill: new ol.style.Fill({ color: "rgba(140,136,191,1.0)" }), stroke: new ol.style.Stroke({ color: "#232323", width: 0.5 }), radius: 7.6 }) })] },
      { label: "3.05 – 3.82", geometry: "Point", styles: [new ol.style.Style({ image: new ol.style.Circle({ fill: new ol.style.Fill({ color: "rgba(99,67,156,1.0)" }), stroke: new ol.style.Stroke({ color: "#232323", width: 0.5 }), radius: 7.6 }) })] },
      { label: "3.82 – 4.58", geometry: "Point", styles: [new ol.style.Style({ image: new ol.style.Circle({ fill: new ol.style.Fill({ color: "rgba(63,0,125,1.0)" }), stroke: new ol.style.Stroke({ color: "#232323", width: 0.5 }), radius: 7.6 }) })] },
    ],
  };

  // Appel de la donnée — la fonction de style est appliquée à la couche.
  const layer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: LAYER_URL,
      format: new ol.format.GeoJSON(),
    }),
    style: style_pression_pesticides_0,
  });

  new CustomLayer(LAYER_ID, layer, legend);
}