import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
export const CARD_WIDTH = (width - 48) / 2;
const styles = StyleSheet.create({
    cardContainer: {
        width: CARD_WIDTH,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    shimmerBase: {
        backgroundColor: '#E0E0E0',
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        width: '100%',
    },
    imageSkeleton: {
        width: '100%',
        height: 140,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    contentContainer: {
        padding: 12,
    },
    categorySkeleton: {
        width: '40%',
        height: 10,
        borderRadius: 4,
        marginBottom: 8,
    },
    titleSkeletonLine1: {
        width: '100%',
        height: 12,
        borderRadius: 4,
        marginBottom: 6,
    },
    titleSkeletonLine2: {
        width: '70%',
        height: 12,
        borderRadius: 4,
        marginBottom: 16,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceSkeleton: {
        width: '50%',
        height: 16,
        borderRadius: 4,
    },
    badgeSkeleton: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
});
export default styles;
