import React from 'react'
import airpod from './assets/airpod.png'
import amazon from './assets/amazon.png'
import car from './assets/car.png'
import coin from './assets/coin.png'
import iphone from './assets/iphone.png'
import laptop from './assets/laptop.png'
import speaker from './assets/speaker.png'
import trip from './assets/trip.png'

import WheelComponent from './thirdParty/src/index'


const App = () => {
  const segments = [
    // 'better luck next time',
    // 'won 70',
    // 'better luck next time',
    // 'won 2',
    // 'won 10',
    // 'won uber pass',
    // 'better luck next time',
    // 'won a voucher'
    // { 'image': 'airpod.png', 'text': 'Airpod' },
    // { 'image': 'amazon.png', 'text': 'Amazon' },
    // { 'image': 'car.png', 'text': 'Car' },
    // { 'image': 'coin.png', 'text': 'Coin' },
    // { 'image': 'iphone.png', 'text': 'Iphone' },
    // { 'image': 'laptop.png', 'text': 'Laptop' },
    // { 'image': 'speaker.png', 'text': 'Speaker' },
    // { 'image': 'trip.png', 'text': 'Trip' }
    'Segment 1',
    'Segment 2',
    'Segment 3',
    'Segment 4',
    'Segment 5',
    'Segment 6',
    'Segment 7',
    'Segment 8',
    'Segment 9',
    'Segment 10',
    'Segment 11',
    'Segment 12',
    'Segment 13',
    'Segment 14',
    'Segment 15',
    'Segment 16',
    'Segment 17',
    'Segment 18',
    'Segment 19',
    'Segment 20',
    'Segment 21',
    'Segment 22',
  ]
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
  ]
  const segImages = [airpod, amazon, car, coin, iphone, laptop, speaker, trip]
  const onFinished = (winner) => {
    console.log(winner)
  }
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      segImages={segImages}
      winningSegment='Segment 21'
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      upDuration={200}
      downDuration={1000}
      fontFamily='Arial'
    />
  )
}

export default App;