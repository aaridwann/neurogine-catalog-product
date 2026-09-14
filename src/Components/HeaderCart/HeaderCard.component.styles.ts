import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    backgroundColor: 'rgba(91, 149, 200, 0.8)',
    borderRadius: 10,
    height: 18,
    justifyContent: 'center',
    minWidth: 18,
    paddingHorizontal: 4,
    position: 'absolute',
    right: -12,
    top: -4,
    zIndex: -1,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    padding: 4,
    backgroundColor: 'transparent',
  },
  iconWrapper: {
    position: 'relative',
  },
});

export default styles;