import { StyleSheet } from 'react-native'
import { imageHeight } from './config'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom:10
  },
  navBar: {
    width: '100%',
    height: 70,
    backgroundColor: '#0D0D0D',
    alignContent: 'center',
    justifyContent: 'center'
  },
  navBarTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  scrollViewContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: imageHeight + 50
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  button: {
    height: 50,
    width: 100,
    
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#F07114',
    fontWeight: 'bold'
  },
  disable: {
    opacity: 0.5
  },
  cardCountContainer: {
    paddingBottom: 20
  },
  countText:{
    fontSize: 26
  },
  bulletContainer:{
    flexDirection:'row',
    marginTop:2
  }
});

export default styles;