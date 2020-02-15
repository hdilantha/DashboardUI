import { Component, OnInit } from '@angular/core';
// import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

declare var google: any;

const weatherData: L.GeoJSON.FeatureCollection<any> = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.8612, 6.9271]
            },
            properties: {
                weatherMag: 14.5,
                trafficMag: 10.8
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.8600, 6.9201]
            },
            properties: {
                weatherMag: 10.5,
                trafficMag: 10.7
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.8812, 6.9261]
            },
            properties: {
                weatherMag: 12.5,
                trafficMag: 12
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.9642, 6.9251]
            },
            properties: {
                weatherMag: 12.2,
                trafficMag: 11.0
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.8602, 6.9278]
            },
            properties: {
                weatherMag: 12.7,
                trafficMag: 11.4
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.8832, 6.9280]
            },
            properties: {
                weatherMag: 12.1,
                trafficMag: 12.4
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.8618, 6.9261]
            },
            properties: {
                weatherMag: 12.2,
                trafficMag: 11.3
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [79.8512, 6.9256]
            },
            properties: {
                weatherMag: 11.8,
                trafficMag: 12.3
            }
        },
    ]
};

// const trafficData: L.GeoJSON.FeatureCollection<any> = {
//     type: 'FeatureCollection',
//     features: [
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.8612, 6.9271]
//             },
//             properties: {
//                 mag: 12.5,
//             }
//         },
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.8600, 6.9201]
//             },
//             properties: {
//                 mag: 12.5,
//             }
//         },
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.8812, 6.9261]
//             },
//             properties: {
//                 mag: 12.5,
//             }
//         },
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.9642, 6.9251]
//             },
//             properties: {
//                 mag: 12.5,
//             }
//         },
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.8602, 6.9278]
//             },
//             properties: {
//                 mag: 12,
//             }
//         },
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.8832, 6.9280]
//             },
//             properties: {
//                 mag: 12.5,
//             }
//         },
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.8618, 6.9261]
//             },
//             properties: {
//                 mag: 12.5,
//             }
//         },
//         {
//             type: 'Feature',
//             geometry: {
//                 type: 'Point',
//                 coordinates: [9.8512, 6.9256]
//             },
//             properties: {
//                 mag: 12.5,
//             }
//         },
//     ]
// };

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    ngOnInit() {
        const myLatlng = new google.maps.LatLng(6.9271, 79.8612);
        const mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
            // tslint:disable-next-line: max-line-length
            styles: [{ 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] }, { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' }, { 'saturation': -100 }, { 'lightness': 99 }] }, { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' }, { 'lightness': 54 }] }, { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] }, { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] }, { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] }, { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] }, { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' }, { 'color': '#b8cb93' }] }, { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }]

        }
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);

        const weatherMapData = [];
        const trafficMapData = [];
        for (let i = 0; i < weatherData.features.length; i++) {
            const coords = weatherData.features[i].geometry.coordinates;
            const latLng = new google.maps.LatLng(coords[1], coords[0]);
            const weatherMagnitude = weatherData.features[i].properties.weatherMag;
            const trafficMagnitude = weatherData.features[i].properties.trafficMag;
            weatherMapData.push({
                location: latLng,
                weight: Math.pow(2, weatherMagnitude)
            });
            trafficMapData.push({
                location: latLng,
                weight: Math.pow(2, trafficMagnitude)
            });
            // const marker = new google.maps.Marker({
            //   position: latLng,
            // });
            // marker.setMap(map);
            // map.data.setStyle(feature => {
            //     const magnitude = feature.
            //     return {
            //       icon: this.getCircle(magnitude)
            //     };
            //   });
        }

        const weatherMapGradient = [
            'rgba(0, 0, 0, 0)',
            'rgba(255, 255, 0, 3)',
            'rgba(255, 100, 0, 2)',
            'rgba(255, 0, 0, 1)'
        ];
        const weatherMap = new google.maps.visualization.HeatmapLayer({
            data: weatherMapData,
            dissipating: false,
            map: map,
            gradient: weatherMapGradient,
            opacity: 0.6
        });

        const trafficMapGradient = [
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 255, 3)',
            'rgba(100, 0, 255, 2)',
            'rgba(255, 0, 255, 1)'
        ];
        const trafficMap = new google.maps.visualization.HeatmapLayer({
            data: trafficMapData,
            dissipating: false,
            map: map,
            gradient: trafficMapGradient,
            opacity: 0.4
        });
    }
}
