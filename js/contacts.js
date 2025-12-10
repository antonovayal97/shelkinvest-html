document.addEventListener("DOMContentLoaded", () => {
  ymaps.ready(init);

  function init() {
    const map__1 = document.querySelector("#map-1");
    const map__2 = document.querySelector("#map-2");

    function parseCoordinates(str) {
      try {
        const coords = str.replace(/[\[\] ]/g, "").split(",");
        return coords.map((coord) => parseFloat(coord));
      } catch (e) {
        console.error("Ошибка парсинга координат:", e);
        return [55.755864, 37.617698];
      }
    }

    if (map__1 && map__1.dataset.coordinates) {
      const coordinates1 = parseCoordinates(map__1.dataset.coordinates);

      const map_1 = new ymaps.Map("map-1", {
        center: coordinates1,
        zoom: 10,
        controls: ["zoomControl", "geolocationControl"],
      });

      const placemark_1 = new ymaps.Placemark(coordinates1, {});

      map_1.geoObjects.add(placemark_1);
    }

    if (map__2 && map__2.dataset.coordinates) {
      const coordinates2 = parseCoordinates(map__2.dataset.coordinates);

      const map_2 = new ymaps.Map("map-2", {
        center: coordinates2,
        zoom: 10,
        controls: ["zoomControl", "geolocationControl"],
      });
      const placemark_2 = new ymaps.Placemark(coordinates2, {});

      map_2.geoObjects.add(placemark_2);
    }
  }
});
