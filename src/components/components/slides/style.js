import { StyleSheet, Dimensions } from 'react-native'
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { imageHeight, imageWidth, cardPadding } from '../../config'
const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  slide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth,
    paddingHorizontal: cardPadding,
    height:'100%',
    backgroundColor:'white'
    
  },
  imageCard: {
    width: '100%',
    height: 322,
    
    marginTop:50
  },
  title: {
    fontSize:24,
    color:'#F07114',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:40
  },
  content : {
    fontSize:14,
    textAlign:'center',
    color:'#F07114',
    marginTop: 17
  }
});

export default styles;