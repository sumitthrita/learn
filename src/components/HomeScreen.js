import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import styles from './style'
import { cardPerSlide } from './config'
import CarouselSlide from '../components/components/slides'
import movies from './data';
import Button from './Button';


const { width: screenWidth } = Dimensions.get('window')

class HomeScreen extends Component {

  constructor(props) {
    super(props)

    // Initially state
    this.state = {
      totalSlide: 0,
      currentSlide: 1,
      isNext: false,
      isPrev: false
    }
  }

  // function will find out total no of slide and set to state
  setTotalSlides = (contentWidth) => {
    const { totalSlide, currentSlide } = this.state
    // contentWidth received from onContentSizeChange
    if (contentWidth !== 0) {
      const approxSlide = contentWidth / screenWidth
      if (totalSlide !== parseInt(approxSlide)) {
        this.setState({
          totalSlide: parseInt(Math.ceil(approxSlide.toFixed(2)))
        })
        this.calculateNextPrev(parseInt(approxSlide), currentSlide)
      }
    }
  }

  setCurrentSlide = (currentSlide) => {
    this.setState({
      currentSlide
    })
  }


  handleScrollEnd = (e) => {
    if (!e) {
      return
    }
    const { nativeEvent } = e
    const { totalSlide} = this.state
    if (nativeEvent && nativeEvent.contentOffset) {
      let currentSlide = 1
      if (nativeEvent.contentOffset.x === 0) {
        this.setCurrentSlide(currentSlide)
      } else {
        const approxCurrentSlide = nativeEvent.contentOffset.x / screenWidth
        currentSlide = parseInt(Math.ceil(approxCurrentSlide.toFixed(2)) + 1)
        this.setCurrentSlide(currentSlide)
      }
      this.calculateNextPrev(totalSlide, currentSlide)
    }
  }

  goToNext = () => {
    const { currentSlide } = this.state
    if (this.stepCarousel) {
      const scrollPoint = currentSlide * screenWidth
      this.stepCarousel.scrollTo({ x: scrollPoint, y: 0, animated: true })
      // following condition is for android only because in android onMomentumScrollEnd doesn't
      // call when we scrollContent with scroll view reference.
      if (Platform.OS === 'android') {
        this.handleScrollEnd({ nativeEvent: { contentOffset: { y: 0, x: scrollPoint } } })
      }
    }
  }

  goToPrev = () => {
    const { currentSlide } = this.state
    if (this.stepCarousel) {
      const pageToGo = currentSlide - 2
      const scrollPoint = (pageToGo) * screenWidth
      this.stepCarousel.scrollTo({ x: scrollPoint, y: 0, animated: true })
      // following condition is for android only because in android onMomentumScrollEnd doesn't
      // call when we scrollContent with scrollview reference.
      if (Platform.OS === 'android') {
        this.handleScrollEnd({ nativeEvent: { contentOffset: { y: 0, x: scrollPoint } } })
      }
    }
  }

  setNext = (status) => {
    const { isNext } = this.state
    if (status !== isNext) {
      this.setState({
        isNext: status
      })
    }
  }

  setPrev = (status) => {
    const { isPrev } = this.state
    if (status !== isPrev) {
      this.setState({
        isPrev: status
      })
    }
  }

  calculateNextPrev = (totalPage, currentPage) => {
    if (totalPage > currentPage) {
      this.setNext(true)
    }
    if (currentPage === 1) {
      this.setPrev(false)
    }
    if (currentPage === totalPage) {
      this.setNext(false)
    }
    if (currentPage > 1) {
      this.setPrev(true)
    }
  }
  
  fixBullets = (currentSlide) => {
     return (
       <View style={styles.bulletContainer} >
         <Text style={{fontSize:36, color:'#F07114',
          opacity: currentSlide===1 ? 0.9 : 0.2
        }} >&bull;</Text>
         <Text style={{fontSize:36, color:'#F07114',
           opacity: currentSlide===2 ? 0.9 :0.2
        }} >&bull;</Text>
         <Text style={{fontSize:36, color:'#F07114',
           opacity: currentSlide===3 ? 0.9 : 0.2
        }}>&bull;</Text>
       </View>
     );
  }

  signup= () => {
    this.props.navigation.navigate('SignUp');
  };
    
  

  render() {
    const { totalSlide, currentSlide, isNext, isPrev } = this.state
    const noOfSlides = Math.ceil(movies.length / cardPerSlide)
    return (
      <View style={styles.container}>
        
        <ScrollView
          ref={(ref) => { this.stepCarousel = ref }}
          contentContainerStyle={styles.scrollViewContainerStyle}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToAlignment={'center'}
          onContentSizeChange={this.setTotalSlides}
          onMomentumScrollEnd={this.handleScrollEnd}
        >
          {[...Array(noOfSlides)].map((e, i) => {
            const startIndex = i
            const startPosition = (startIndex)
            const endPosition = (startIndex+1)
            return <CarouselSlide key={i+1} cards={movies.slice(startPosition, endPosition)} />
          })}
          
        </ScrollView>
        
        <Button buttonName="GET STARTED" onPress={this.signup} />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, !isPrev && styles.disable ]} onPress={this.goToPrev} disabled={!isPrev}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <View>
            {this.fixBullets(currentSlide)}
          </View>
          <TouchableOpacity style={[styles.button, !isNext && styles.disable]} onPress={this.goToNext} disabled={!isNext}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
         
        </View>

      </View>
    );
  }
}

export default HomeScreen;