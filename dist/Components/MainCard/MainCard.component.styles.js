import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    cardContainer: {
        width: width - 32,
        height: 220,
        borderRadius: 16,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 8,
        backgroundColor: '#1E1E1E',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    imageStyle: {
        borderRadius: 16,
    },
    gradientOverlay: {
        flex: 1,
        borderRadius: 16,
        padding: 16,
        justifyContent: 'space-between',
    },
    tagContainer: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.4)',
    },
    tagText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700',
        letterSpacing: 1,
    },
    contentContainer: {
        marginTop: 'auto',
        paddingVertical: 20,
    },
    titleText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 26,
    },
    subtitleText: {
        color: '#E0E0E0',
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 18,
        marginBottom: 10,
    },
    ctaButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#0066FF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 24,
        marginBottom: 10,
    },
    ctaButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
    },
    shimmerBase: {
        backgroundColor: '#E0E0E0',
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        width: '100%',
    },
    skeletonContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
    },
    skeletonTag: {
        width: 80,
        height: 20,
        borderRadius: 10,
    },
    skeletonBody: {
        marginTop: 'auto',
    },
    skeletonTitleLine1: {
        width: '100%',
        height: 18,
        borderRadius: 4,
        marginBottom: 6,
    },
    skeletonTitleLine2: {
        width: '60%',
        height: 18,
        borderRadius: 4,
        marginBottom: 10,
    },
    skeletonSubtitle: {
        width: '85%',
        height: 12,
        borderRadius: 4,
        marginBottom: 16,
    },
    skeletonButton: {
        width: 110,
        height: 32,
        borderRadius: 16,
    },
});
export default styles;
