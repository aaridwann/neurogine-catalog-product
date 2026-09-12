import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    skeleton: {
        backgroundColor: '#d0d0d0ff',
        zIndex: 1,
    },
});
export default styles;
