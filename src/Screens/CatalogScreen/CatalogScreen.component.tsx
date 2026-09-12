import React from 'react';

import { View } from 'react-native';

import ButtonComponent, { Constants as ButtonConstants } from '@Neurogine/ui-kit-button';
import GeneralText, { Constants as TextConstants } from '@Neurogine/ui-kit-general-text';

import { CatalogProductScreenComponentProps } from './CatalogScreen.types';

/**
 * CatalogProductScreenComponent is a component for the CatalogProductScreen.
 * It is responsible for displaying the data from the Redux store.
 * @param {Object} props - The component props.
 * @param {Object} props.onGoBack - The callback function to go back.
 * @returns {React.Component} The CatalogProductScreenComponent.
 */
const CatalogProductScreenComponent: React.FC<CatalogProductScreenComponentProps> = ({ 
  title, onGoBack, 
}) => {
  return (
    <View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' }}>
        <GeneralText
          color={TextConstants.TEXT_COLOR.TERTIARY}
          variant={TextConstants.VARIANT.HEADLINE3}
          numberOfLines={1}
        >
          {title}
        </GeneralText>

      </View>
      <View style={{ paddingHorizontal: 20 }}>

        <ButtonComponent
          variant={ButtonConstants.VARIANT.DANGER}
          size={ButtonConstants.SIZE.MEDIUM}
          onPress={onGoBack} title='Go Back'
          style={{ width: '50%' }}
        />
      </View>
    </View>
  );
};

export default CatalogProductScreenComponent;
