import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@react-native-vector-icons/ionicons/static';

import styles from './HeaderCard.component.styles';

import type { HeaderCartButtonProps } from './HeaderCard.component.types';

export const HeaderCartButton = ({
  itemCount = 0,
  onPress,
}: HeaderCartButtonProps): React.ReactElement => {
  const displayCount = itemCount > 99 ? '99+' : itemCount;

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.iconWrapper}>
        <Ionicons color="#152b4eff" name="cart-outline" size={20} />
        {itemCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{displayCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(HeaderCartButton);