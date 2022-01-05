import * as React from 'react'
import "./App.css"
import Slider from "./Slider";
import SidebarItem from "./SidebarItem"

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%"
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%"
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%"
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%"
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%"
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg"
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px"
  },

]


function App() {
  const [selectedOptionIndex, setSelectedOptionIndex] = React.useState(0)
  const [options, setOptions] = React.useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex];

  const handleSliderChange = (e) => {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: e.target.value } 
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return {
      filter: filters.join(' ')
    }
  }
  console.log("🚀 ~ file: App.js ~ line 96 ~ getImageStyle ~ getImageStyle", getImageStyle())
  

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}/>
      <div className="sidebar">
      {
        options.map((option, index) => {
          return <SidebarItem
            key={index}
            name={option.name}
            active={index === selectedOptionIndex}
            handleClick={()=> setSelectedOptionIndex(index)}
          />
        })
      }

      </div>
      <Slider 
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value }
        handleChange = {handleSliderChange}
      />
    </div>
  );
}

export default App;
