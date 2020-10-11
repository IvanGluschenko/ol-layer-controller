import { Control } from 'ol/control';
import {layerGroup} from './layer-group'

export function LayerController (Control) {
  function LayerController() {
    let element = document.createElement('div');
    element.className = 'ol-control layer-controler'
    element.innerHTML = `<div class="layer-controler-title">Слои<div>`
    Control.call(this, {
      element: element
    })

    element.addEventListener('click', this.handleClick)
  }

  LayerController.prototype = Object.create(Control.prototype)

  LayerController.prototype.handleClick = function handleClick(e) {
    const layerController = document.querySelector('.layer-controler')
    
    if(!layerController.classList.contains('layer-controler-open')) {
      layerController.classList.add('layer-controler-open')
    }

    const layers = layerGroup.getLayers().getArray() // layer's array 

    if (layerController.classList.contains('layer-controler-open')&&(layerController.children.length == 1)) {
      const closeButton = document.createElement('span')
      closeButton.innerHTML = '&#215'
      closeButton.classList.add('layer-controler-close-button')
      layerController.appendChild(closeButton)

      function createLayers() {
        layers.forEach(element => {
          const layer = document.createElement('p')
          layer.classList.add('layer-controler-layer')
          const layerName = element.values_.name
  
          const layerCheckbox = document.createElement('input')
          layerCheckbox.type = 'checkbox'
          layerCheckbox.className = 'layer-controler-layer-checkbox'
          layerCheckbox.value = layerName
          if(element.getVisible()) layerCheckbox.checked = true
          layerCheckbox.addEventListener('change', toogleLayer)
          layer.appendChild(layerCheckbox)
          layer.insertAdjacentText('beforeend', layerName)
          layerController.appendChild(layer)
        })
      }

      setTimeout(createLayers, 180)
    } 

    if (layerController.classList.contains('layer-controler-open')&& e.target.className == 'layer-controler-close-button'){
      layerController.innerHTML = '<div class="layer-controler-title">Слои<div>'
      layerController.classList.remove('layer-controler-open')
    }
    
    function toogleLayer(e) {
      const thatLayer = layers.filter((element)=>element.values_.name==e.target.value)[0]
      thatLayer.getVisible() ? thatLayer.setVisible(false) : thatLayer.setVisible(true)
    } 
  }

  return LayerController
}

export const LController = LayerController(Control)
