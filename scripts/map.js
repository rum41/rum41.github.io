mapboxgl.accessToken = 'pk.eyJ1IjoicnVtNDEiLCJhIjoiY2xqbzdvOTdoMWNhODNycGtjNm05MDk3ayJ9.bDxNYRGSXJ9k2ZyKJnC2KA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    language: 'auto',
    center: [120.66610, 24.15743],
    zoom:10
  });
const language = new MapboxLanguage({defaultLanguage:'zh-Hant'});
map.addControl(language);