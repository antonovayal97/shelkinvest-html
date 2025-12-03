document.addEventListener("DOMContentLoaded", () => {
  ymaps.ready(init);

  function init() {
    const map_1 = new ymaps.Map("map-1", {
      center: [50.94840257274645, 44.5374925], // Москва
      zoom: 10,
      controls: ["zoomControl", "geolocationControl"],
    });

    const map_2 = new ymaps.Map("map-2", {
      center: [50.97913808541736, 44.701785499999964], // Москва
      zoom: 10,
      controls: ["zoomControl", "geolocationControl"],
    });

    // Пример метки
    const placemark_1 = new ymaps.Placemark(
      [50.94840257274645, 44.5374925],
      {}
    );

    const placemark_2 = new ymaps.Placemark(
      [50.97913808541736, 44.701785499999964],
      {}
    );

    map_1.geoObjects.add(placemark_1);
    map_2.geoObjects.add(placemark_2);
  }
});
