import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
    marginHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,
    elevation: 2,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  h1: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginVertical: 5,
    marginTop: 10,
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    height: '100%',
  },
  containerRow: {
    marginTop: 1,
    backgroundColor: 'aliceblue',
    borderColor: 'lightgray',
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  box: {
    width: 50,
    height: 50,
  },
  addSpaceTop: {
    marginTop: 10,
  },
  fill: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
  },
  col: {
    alignItems: 'center',
    height: 120,
  },
  alignBottom: {
    alignSelf: 'flex-end',
  },
  alignCenter: {
    justifyContent: 'center',
  },
});

export default styles;
