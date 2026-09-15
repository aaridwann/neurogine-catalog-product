import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons/static';
import styles from './HeaderCard.component.styles';
export const HeaderCartButton = ({ itemCount = 0, onPress, }) => {
    const displayCount = itemCount > 99 ? '99+' : itemCount;
    return (_jsx(TouchableOpacity, { activeOpacity: 0.4, style: styles.container, onPress: onPress, children: _jsxs(View, { style: styles.iconWrapper, children: [_jsx(Ionicons, { color: "#152b4eff", name: "cart-outline", size: 20 }), itemCount > 0 && (_jsx(View, { style: styles.badge, children: _jsx(Text, { style: styles.badgeText, children: displayCount }) }))] }) }));
};
export default React.memo(HeaderCartButton);
