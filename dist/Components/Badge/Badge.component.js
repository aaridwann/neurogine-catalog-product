import React from 'react';
import { StyleSheet, View } from 'react-native';
const BadgeComponent = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
    container: {},
});
export default BadgeComponent;
