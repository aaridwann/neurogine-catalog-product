import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
    columnWrapper: {
        columnGap: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        gap: 4,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    emptyGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    cardWrapper: {
        width: (width - 48) / 2,
        marginBottom: 16,
    },
    specialContentWrapper: {
        height: 250,
    },
});
