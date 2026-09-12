import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons/static';
export const HeaderCartButton = ({ itemCount = 0, onPress, }) => {
    const displayCount = itemCount > 99 ? '99+' : itemCount;
    return (<TouchableOpacity activeOpacity={0.4} style={styles.container} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Ionicons color="#152b4eff" name="cart-outline" size={20}/>
        {itemCount > 0 && (<View style={styles.badge}>
            <Text style={styles.badgeText}>{displayCount}</Text>
          </View>)}
      </View>
    </TouchableOpacity>);
};
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
export default React.memo(HeaderCartButton);
