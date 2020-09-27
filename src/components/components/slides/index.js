import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './style'

class CarouselSlide extends Component {
  render() {
    const { cards } = this.props
    return <View style={styles.slide}>
      {cards.map((card, index) => {
        
        return (
          <View>
          <Text style={styles.title} key={card.title} >
                {card.title}
          </Text>
          <Text style={styles.content} key={card.content} >
            {card.content}
          </Text>
          <Image source={card.Image} style={styles.imageCard} key={index} />
          </View>
        ) 
      })}
    </View>

  }
}

export default CarouselSlide;