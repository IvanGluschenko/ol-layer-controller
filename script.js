import 'ol/ol.css';
import './controller-style.css'
import { Map, View } from 'ol';
import {defaults as defaultControls} from 'ol/control';
import {LController} from './layer-controler'
import {layerGroup} from './layer-group'


const map = new Map({
  target: 'map',
  layers: layerGroup,
  view: new View({
    center: [4188348, 7508924],
    zoom: 10
  }),
  controls: defaultControls().extend([new LController()]),
});



