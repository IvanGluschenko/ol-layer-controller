import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import ImageLayer from 'ol/layer/Image';   
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import LayerGroup from 'ol/layer/Group';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke'
import Fill from 'ol/style/Fill';
import Circle from 'ol/style/Circle';


export const layerGroup = new LayerGroup({
    layers: [
        new TileLayer({
          source: new OSM(),
          name: 'OSM',
        }),
        new VectorLayer({
            name: 'Автовокзалы',
            source: new VectorSource({
                url: 'https://apidata.mos.ru/v1/datasets/1881/features?api_key=584d8e825c98051e4a761bf190f71fe9',
                format: new GeoJSON
            }),
            style: new Style({
              image: new Circle({
                fill: new Fill({
                  color: [150,20,10,1]
                }),
                radius: 4,
                stroke: new Stroke({
                  color: [100,100,100,1],
                  width: 1
                })
              })
            }),
            visible: false,
            opacity:0.7
        }),
        new VectorLayer({
          name: 'Нестационарные торговые объекты',
          source: new VectorSource({
            url: 'https://apidata.mos.ru/v1/datasets/619/features?api_key=584d8e825c98051e4a761bf190f71fe9',
            format: new GeoJSON
          }),
          style: new Style({
            image: new Circle({
              fill: new Fill({
                color: [20,150,10,1]
              }),
              radius: 4,
              stroke: new Stroke({
                color: [100,100,100,1],
                width: 1
              })
            })
          }),
          visible: false,
          opacity:0.7
        }),
        new VectorLayer({
          name: 'Зоны охраны объектов культурного наследия',
          source: new VectorSource({
            url: 'https://apidata.mos.ru/v1/datasets/613/features?api_key=584d8e825c98051e4a761bf190f71fe9',
            format: new GeoJSON
          }),
          style: new Style({
            fill: new Fill({
              color: [50,160,224,1]
            }),
            radius: 7,
            stroke: new Stroke({
              color: [100,100,100,1],
              width: 1
            })
          }),
          opacity:0.5,
          visible: false
        }),
      ]

})