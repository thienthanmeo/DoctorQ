import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import Svg, {
  Path
} from 'react-native-svg'
import { Actions } from 'react-native-router-flux'

const { width, height } = Dimensions.get('window')

// .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#F8D291;}
// .st1{fill:#F8F0CB;}
// .st2{fill:#DB1F00;}
// .st3{fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;}
// .st4{fill:none;}

const WHITE = '#FFFFFF'
const RED = 'red'
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: 0,
      colorFace: WHITE,
      colorBody: WHITE,
      colorHandLeft: WHITE,
      colorHandRight: WHITE,
      colorLegLeft: WHITE,
      colorLegRight: WHITE
    }
  }

  _onClick = (number) => () => {
    colorFace = number === 1 ? RED : WHITE
    colorBody = number === 2 ? RED : WHITE
    colorHandLeft = number === 5 ? RED : WHITE
    colorHandRight = number === 6 ? RED : WHITE
    colorLegLeft = number === 4 ? RED : WHITE
    colorLegRight = number === 3 ? RED : WHITE
    this.setState({
      selected: number,
      colorFace,
      colorBody,
      colorHandLeft,
      colorHandRight,
      colorLegLeft,
      colorLegRight
    }, () => Actions.detail())
  }

  _setRefs = (refs) => refs

  render () {
    const { colorFace, colorBody, colorHandLeft, colorHandRight, colorLegLeft, colorLegRight } = this.state
    return (
      <Svg
        version={1.1}
        id="Layer_1"
        x={0}
        y={0}
        viewBox="0 0 1242 2208"
        xmlSpace="preserve"
        height={height - (height / 10)}
        width={width}
      >
        <Path
          id="legLeft"
          // ref={ref => this.legLeft = ref}
          onPress={this._onClick(4)}
          fill={colorLegLeft}
          d="M654.1 1203.5c-5.5 21.8-10.9 43.8-16.4 65.7-6.5 26.2-12.7 52.5-21.1 78.1-8.7 26.7-20 52.5-34 77-3.2 5.7-3.4 11.8-4 17.9-.8 7.9-1.1 15.9-1.1 23.9-.1 14.9-2.5 29.3-6.8 43.6-2.3 7.2-5.2 14.3-9.9 20.6-1.6 2.1-2 4.3-1.6 6.9 1.8 11.3 3.6 22.8 5.4 34.2 2.5 15.3 4.4 30.6 4.9 46.1.4 12.6.5 25.2-1.1 37.7-2 16.9-7.6 33.3-16.2 47.6-23.9 39.9-30.8 92.2-38.9 138.2-5.5 50.6-8 53.6-1.1 78 2.3 7.6.9 15.3-3 17.7 0 0 2.7 19 7.1 32.3 4.4 13.3-5.2 34.1-42.4 53.2-33.6 17.3-35.5 52.5-74.5 66.5-9.1 3.2-7.6-2.4-24.3 10.9-16.7 13.3-31.3 16.5-45.5 1.6 0 0-7.3 9-19.7-2.3 0 0-8.8 2.9-14.1-6.1 0 0-8.3-1.4-3.9-12.3 0 0-2.1-3.9 1.5-9.2 3.9-5.6 4.8-8.2 11.6-13.1 7.4-5.4 9.6-2.8 24.5-19.6 28.9-32.6 62.4-66.3 82-103 6.9-13 11.6-32.8 11.6-46.5 0-13.7-2.7-74.1-2.7-74.1-5.6-77.8-7.8-154.5.2-231.4 2.1-20.2 6.2-40.8 13.9-60.2 1.9-4.5 2.5-8.7 2.3-13.4-.9-22 .4-43.9 4.6-65.5 3.1-15.9 2.2-31.7.8-47.7-2.2-23.8-7.2-47.4-9.8-71.2-.9-8.1-3.1-16.3-3.7-24.5-1.1-15.3-1.8-30.7-2.1-46-.6-24.8.6-49.7 3.2-74.4 2-18.2 4.2-36.4 7.5-54.2.9-4.8 1.8-9.6 2.8-14.4l214 91.4z"
        />
        <Path
          id="legRight"
          onPress={this._onClick(3)}
          // ref={ref => this.legRight = ref}
          fill={colorLegRight}
          d="M1029.6 2092.9c-3.8 8.6-14.4 6.4-14.4 6.4-11.2 9.8-19.3 2.1-19.3 2.1-13.5 15.3-27.4 15.5-44.2.8-16.1-14.1-15.5-9.7-24.7-12.6-40.4-13-41.5-48.6-75.3-66.7-39.1-21.1-43.3-34.7-39.6-59 2-13.8 4-26.4 4-26.4-4.1-2.3-7.2-11.8-5.3-19.5 6.1-24.7 4.6-25.4-2.7-75.9-9.1-44.8-14.3-96.9-38.9-135.1-8.9-14-15.4-30.3-18-47-2-12.5-2.3-25-2.4-37.6-.1-15.5.3-31 3.1-46.4 6.8-36.4 2-43.8.8-45.5-4.7-6.3-7.7-13.4-9.8-20.6-5.4-17.8-6.8-32.5-6.9-43.6 0-2.3-.1-4.6-.1-6.8h-.1c-.2-4.3-1.7-14.3-3.6-28.9-.1-.7-.2-1.5-.4-2.3-.6-1.3-1.3-2.7-2-4h.2c-24-40.2-40.2-84.1-51.6-128.4-5.7-22.1-11.9-44.1-17.8-66.2-1.9-6.5-3.7-13-5.4-19.6-.6-2.2-.8-4.4-1.2-6.5l212.5-90.6c3.4 17.8 6.3 35.6 9 53.5 3.9 25.2 5.9 50.4 6.1 75.7.1 15.1.4 30.3-.2 45.5-.3 9.6-1.9 19.2-3 28.8-1.3 10.2-2.6 20.5-4 30.7-1.1 8.8-2.6 17.6-3.5 26.4-.8 7.6-1.1 15.3-1.8 23-1.1 15.5-.2 32.8 2.8 48.2 4.2 21.7 5.5 43.6 4.7 65.5-.1 2.5 2.1 9.8 4.7 17 1.9 4.7 13.3 42.7 14.8 56.7 7.6 67.1 6.7 134 7.1 201.7-.9 35.5-2.7 71.7-2 106.6.3 13.5 2.3 15.2 6.3 29.7 4.1 14.4 14.4 24.8 24.3 37.6 21 27.1 42.9 54.2 65.2 80.8 15.5 18.6 22.9 16.7 27.1 21.2 15 16 8.3 19.5 8.3 19.5 6.8 8.4-2.8 11.8-2.8 11.8z"
        />
        <Path
          id="handLeft"
          onPress={this._onClick(5)}
          // ref={ref => this.handLeft = ref}
          fill={colorHandLeft}
          d="M450.4 699.7c-1.7 1.5-1.9 3.3-2.3 4.8-3.3 13.1-7.3 26.1-12.4 38.8-4.8 12-9.9 23.8-16.9 34.9-2.4 3.8-3.1 7.6-2.9 11.9.2 7.1.1 14.1-.1 21.2-.2 5.8-1.1 11.6-.9 17.4.8 22.6-3.7 44.6-10.8 66.1-11.3 34.4-22.7 68.7-34.5 103-5 14.5-11.2 28.5-17.1 42.8-1.5 3.8-1.8 7.3-.2 11.4 4 11.2 4.9 22.9 5.4 34.5.6 12.3-.3 24.5-1.6 36.7-.3 3.1 0 6.2-.2 9.3-.8 9.3-.3 18.9-2.7 27.8-4.3 15.8-2.3 31.6-2.2 47.5.1 6.6.4 13.3.3 19.8 0 2.4-.9 4.8-1.5 7.3-1.1.1-1.7.1-2.3.2-6 .7-6.1.8-8.5-4.2-1.7-3.6-3.3-7.4-5.3-12-1.2 7.4-2.2 13.8-3.3 20.3-.2 1.3-.5 2.7-1.1 4-1 2.3-4.1 4.1-6.2 3.9-3-.4-5.1-2-5.6-5-.8-4.7-1.5-9.4-1.6-14.1-.3-13.4-.2-26.7-.4-40 0-1.3-.4-2.4-.9-3.7-1.1 7.6-2.1 15.3-3.5 22.8-2.6 13.4-4.3 27-9.1 40-.6 1.7-1.6 3.3-2.9 4.7-1.9 2.1-4.4 2.6-7.2 1-.9-.6-2.1-.8-3.4-1.3-1.8-12-1.6-24.1-1-36.1.5-10 1.1-19.9 1.7-29.9.2-4 .5-8 .6-12 0-.9-.2-1.6-1.3-2.8-.5 1-1.2 1.9-1.5 2.9-4.2 15.8-8.3 31.6-12.7 47.4-2.4 8.6-6 16.8-13.5 23.2-1.2 1-2.3 2.3-4.2 1.7-2.1-.7-3.6-2-3.6-4.1 0-4.3-.1-8.6.1-12.8.9-10.9 1.9-21.7 3-32.6 1.3-12.4 3.1-25 4.6-37.5.2-1.6.3-3.2.5-4.8-.4-.2-.7-.3-1-.4-1 1.2-2 2.7-3.2 3.8-3.8 3.5-7.4 7-11.4 10.4-6.4 5.2-14.1 5.2-21.9 3.7-5.1-1.1-6.3-4.2-3.7-8.2 4.3-6.8 8.6-13.5 12.7-20.4 3.7-6.2 5.3-13.2 7.1-20.1 3.1-12.3 6.6-24.7 10-37 1.3-4.5 4.4-8.1 7.6-11.7 7.9-8.5 15.1-17.6 23-26.2 5.8-6.3 7.6-13.6 7.9-21.6.5-10.4 2.1-20.8 3.1-31.2 1.4-15.9 2.9-31.8 4.1-47.6.8-12.9 1.1-25.7 1.9-38.7 1.6-28.1 3.7-55.9 9.9-83.5 3.2-14.3 8-28.2 14-41.8 1.2-2.8 1.8-5.5 1.2-8.5-4.2-25.1-2.2-50.3 2.5-75.1 5.9-31.5 15.3-62.6 25.9-93.1 2-5.8 1.4-11.9.2-17.7-1.2-5.9-2.3-11.7-1.7-17.8.1-.9.2-1.9 0-2.7l101 131z"
        />
        <Path
          id="handRight"
          onPress={this._onClick(6)}
          // ref={ref => this.handRight = ref}
          fill={colorHandRight}
          d="M1069.6 1168.4c-10 2-18.6-.4-25.7-6.9-2.6-2.4-5-5.1-7.3-7.6-1.4-1.6-2.6-3.1-4.1-4.8 2 17 4.2 33.8 5.9 50.5 1.2 12.2 1.7 24.5 2.5 36.8 0 .7 0 1.5-.1 2.3-.3 2-1.7 3.3-3.8 4-2 .5-2.9-.9-4.1-1.9-8.1-7.4-11.7-16.5-14-26.5-1.9-7.8-4.6-15.3-6.7-23.1-1.8-6.5-3.4-13.2-5-19.7-.4-1.5-.5-3-2.8-4.3-.5 27.3 4.5 53.9 1.1 80.8-.9.3-1.7.5-2.4.8-5.8 2.5-9.5 1.1-11.1-4.7-2.5-9.2-4.9-18.5-6.7-27.8-2.3-11.6-4-23.2-6.2-35.7-.3 1.8-.6 3.1-.6 4.2-.1 13.6 0 27.3-.3 40.9-.1 4.3-.8 8.6-1.6 12.8-.5 2.9-3.1 4.9-5.9 5.2-1.9.2-5.1-1.9-6.1-4.2-.5-1.1-.7-2.4-.9-3.5-1-6.4-2.1-12.8-3.9-19.3-.7 1.5-1.2 3.1-1.9 4.7-1.2 2.6-2.3 5.1-3.5 7.7-1.8 3.5-2.1 3.6-6.2 2.9-1.1-.2-2.2-.3-4-.6-.6-2.4-1.5-5.1-1.5-7.8 0-7 .5-14.1.6-21.1.1-11.3.1-22.7.1-34.1 0-.5 0-1.2-.2-1.8-4.9-14.2-4.8-28.9-5.2-43.7-.2-7.5-.9-15-1.5-22.4-1.3-15.1.2-30.1 3.2-44.8.6-2.9 1.3-5.8 2.6-8.4 1.3-2.7 1.2-5 .1-7.5-3.9-9.6-7.6-19.4-11.7-29-10.7-25.8-18.5-52.5-27.2-79-4.8-14.6-10-29.2-14.7-43.9-6.3-20-10.1-40.4-9.6-61.3.3-10.1-1-20.2-1.3-30.4-.2-4 .2-7.9.4-11.9.2-2.6-.5-5-1.9-7.4-13.7-22.7-23-47-29.5-72.2-.3-1.4-.8-2.7-1.3-4.1l96.6-109.3c-.2 1.5-.3 3.1-.4 4.6-.1 3.1.6 6.4 1.6 9.4 11.7 33.7 21.8 68.5 27.5 103.6 2.5 15.9 3.1 32.1 2.2 48.3-.3 5.1-1.4 10.4-1.9 15.5-.2 2.1 0 4.4.8 6.2 11.9 25.9 17.9 53 20.6 80.8 1.7 17.7 2.7 35.5 4 53.2 1.4 21.9 2.5 43.9 4.2 65.7 1.1 12.9 3 25.8 4.4 38.9.5 4.8.6 9.8 1.3 14.6.3 2.4 1.2 5 2.7 6.8 7.9 9.9 15.7 20 24.6 29.1 6.4 6.6 10.7 13.6 12.8 22 2.6 10.2 5.2 20.3 7.6 30.5 1.9 8.1 4.5 16 9.3 23.2 3.5 5.4 6.9 10.9 10.3 16.4 2.6 4 1 7.3-4.2 8.3z"
        />
        <Path
          id="head"
          onPress={this._onClick(1)}
          // ref={ref => this.head = ref}
          fill={colorFace}
          d="M754.9 243.9c-.1 7-1.2 14.3-5.9 19.5-2.3 2.4-5.1 4.7-6.7 7.6-1.6 2.7-2.2 5.7-4.1 8.2-2.6 3.4-7.7 3.8-12.9 3l-2.1 12.6c-1 6-3.7 11.3-7.1 16.3-.2.3-.4.6-.7.8 0 .1.1.3.1.4 0 .7-5.2 25-2.8 47.9v.3H576.3c.3-1.2.4-2.5.2-4.2-.6-4.8-3.1-28.3-4.2-39.9-1.9-2.6-4-5.2-5.8-7.8-4.3-6.3-6.2-13.3-6.7-20.7-.1-2.1-.3-4.3-.7-6.4-6.2 1.4-13.1 1.6-16.2-2.5-1.9-2.6-2.5-5.5-4.1-8.2-1.6-2.9-4.5-5.2-6.7-7.6-4.7-5.3-5.8-12.6-5.9-19.5-.1-6.2-1.3-21 7.7-22.6 2.2-.4 5 1.3 7.4 3.2-.4-.7-.6-1.5-.9-2.2-2.1-6-4.3-11.9-5.1-18.1-9.2-70.9 53.6-119.7 128.7-107.3 31.6 5.2 56.8 23 70.5 46.5 10.5 18.2 14.1 39.9 8.4 61.8-1.7 6.1-1.6 12.4-2.4 18.6v.3c2.3-1.8 4.8-3.2 6.9-2.8 8.8 1.8 7.5 16.7 7.5 22.8z"
        />
        <Path
          id="body"
          onPress={this._onClick(2)}
          // ref={ref => this.body = ref}
          fill={colorBody}
          d="M944.4 564.5c-.8 5.4-.5 11-.9 16.4-.3 3.5-.9 7-1.4 10.5l-96.6 109.3c-2.4 2.4-7.2 11.9-7.4 14.8-2.1 21.1-4.2 42.2-6.1 63.3-1.1 13.9-2.1 27.9-2.6 41.8-.3 9 .3 18.1.4 27.1.1 10.9.4 21.8.1 32.7-.2 5.1-1.3 10.3-2.4 15.5-.7 4-.6 7.8.5 11.8 2.7 9.5 5.4 19 7.2 28.6 2.5 12.5 2.9 24.9.2 37.5-.3 1.6-.3 3.4 0 5.1 4.6 19.9 9.6 39.7 14.3 59.7 5.1 21.6 10.4 43.1 14.8 64.8.6 3.2 1.3 6.4 1.9 9.6v.1l-212.5 90.6-213.9-91.3c6.1-31.6 12.7-63.2 19.2-94.6 2.3-11.1 5-22.3 7.3-33.4.4-1.9.5-4.1 0-5.9-5-18.8-1.7-37.2 2.6-55.6 1.1-4.3 2.2-8.7 3.9-12.8 1.6-4.1 1-8.1.1-12.2-1.3-5.5-2.7-11.2-3.1-16.8-.8-14.4-1.1-28.8-1.4-43.2-.2-11.7.2-23.3-.5-35-.7-10.2-2.6-20.4-3.7-30.7-2.1-18.2-4.2-36.6-6.2-54.9-.2-1-.1-2.2-.6-3.1-2.2-4.8-4.6-9.5-7-14.6-.1.1-.2.1-.2.2L349.9 568.6c-5.3-33.6 7.8-67.1 25.5-96.1 14.9-24.5 34.7-36.2 57.2-48.2 6.5-3.5 14.7-4.7 22.1-6.8 3.5-.9 7-1.2 10.5-1.8 8.3-1.3 15.9-4.9 23.4-8.8 14.7-7.8 29.3-15.6 44.1-23 10.9-5.4 22-10.2 33.1-15.2.6-.3 1.2-.5 1.9-.7 5-2.2 7.9-3.9 8.8-7.1H713c.4 3.8.8 3.5 5.1 5.2 12.4 4.8 24.9 9.7 36.9 15.3 16.5 7.8 32.8 16.2 49.2 24.1 4 1.9 8.3 2.8 12.4 4.4 9.3 3.8 19.4 3.9 29 6.3 9.5 2.4 18.1 5.8 26.3 10.7 17.5 10.3 33.2 21.1 45.6 40 12.7 19.7 22.4 41.3 26.2 61 2.1 12.1 2.5 24.3.7 36.6z"
        />
      </Svg>
    )
  }
}
