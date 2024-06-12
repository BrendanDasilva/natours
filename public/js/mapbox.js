//////////////////////////////////////////
//////////////// MAP BOX /////////////////
//////////////////////////////////////////
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJlbmRhbmRhc2lsdmEiLCJhIjoiY2x3djFzbXdrMGs3MDJqcHZsazR6d3E5ZyJ9.Krui8wQGlFeoDtr3xIvcBA";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/brendandasilva/clwz04toi015801qp0pal6wuj",
    scrollZoom: false,
    // center: [-79.37817999039102, 43.652754564209445],
    // zoom: 10,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include the current location
    bounds.extend(loc.coordinates);

    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });
  });
};
