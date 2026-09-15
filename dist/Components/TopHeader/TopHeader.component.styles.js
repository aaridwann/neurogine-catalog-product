import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    actionSection: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        position: 'relative',
    },
    userSection: {
        justifyContent: 'center',
    },
    backdrop: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    closeButton: {
        padding: 4,
    },
    greetingRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: -8,
    },
    headerContainer: {
        backgroundColor: '#F3F2F2',
        zIndex: 2,
        shadowOffset: { width: 2, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.2,
        paddingBottom: 20,
    },
    searchContainer: {
        alignItems: 'center',
        backgroundColor: '#F3F2F2',
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 16,
        zIndex: 2,
    },
    searchInput: {
        flex: 1,
        marginBottom: 0,
    },
});
export default styles;
