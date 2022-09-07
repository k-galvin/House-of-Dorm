mapboxgl.accessToken = 'pk.eyJ1IjoibnRyYW4xOCIsImEiOiJjbDZjejhwOGoxcmJ4M2tyemM2NTRzbzkxIn0.ranVz6_4tKXBZX1EDSvGuw';

const contents = ['lmu-dining', 'student-housing', 'lmu-sport', 'lmu-parking', 'lmu-ada-accessibility', 'lmu-hall']


const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ntran18/cl6e5lcma001o14pg7k8nddl2',
  center: [-118.4189, 33.9692],
  zoom: 15,
});

//Add zoom out, zoom in button
const nav = new mapboxgl.NavigationControl()
map.addControl(nav);

function createPopUpWindow(tiles) {
  map.on('click', (event) => {
    const features = map.queryRenderedFeatures(event.point, {
      layers: [tiles]
    });
    if (!features.length) {
      return;
    }
    const feature = features[0];

    const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `<h3 id="title">${feature.properties.title}</h3><p id="description">${feature.properties.description}</p>`
      )
      .addTo(map);
  });

}

for (const content of contents){
  createPopUpWindow(content)
}