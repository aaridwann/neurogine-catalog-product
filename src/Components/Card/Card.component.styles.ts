import { StyleSheet, type  ViewStyle  } from 'react-native';

const style = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#f3f2f2ff',
    borderColor: '#5c5c5c22',
    width: 200,
    height: 330,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 2,
    rowGap: 4,
  },
  imageContainer: {
    alignSelf: 'center',
    width: 180,
    height: 180,
    borderRadius: 15,
  },
  topSectionContainer: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 8,
    paddingTop: 10,
  },
  discountWrapper: {
    backgroundColor: 'rgba(5, 5, 5, 0.5)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  priceTagAndButtonCart: {
    backgroundColor: '#ddddddff',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  priceTextWrapper: {
    paddingLeft: 12,
  },
  buttonCartWrapper: {
    alignItems: 'flex-end',
    zIndex: 1,
  },
  buttonCard: {
    borderColor: '#efefefff',
    backgroundColor: '#efefefff',
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  ratingStarWrapper: {
    position: 'relative',
  },
  maskingStar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  yellowStar: {
    height: '100%',
    backgroundColor: '#ebc002ff',
  },
  fiveStartWrapper: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', gap: 6,
  },
});

export const getStarWidthStyle = (fillPercentage: number): ViewStyle => ({
  width: `${fillPercentage}%`,
});

export default style as Record<string, unknown>;