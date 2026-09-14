import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import MaskedViewComponent, { type MaskedViewProps } from '@react-native-masked-view/masked-view';
import { Ionicons } from '@react-native-vector-icons/ionicons/static';

import GeneralText, { Constants } from '@Neurogine/ui-kit-general-text';

import style, { getStarWidthStyle } from './Card.component.styles';
import ImageWithSkeleton from '../Image';

import type { CardComponentProps } from './Card.component.types';
import type { CatalogItem } from '../../Service/Service.types';

const { VARIANT } = Constants;
const MaskedView = MaskedViewComponent as unknown as React.ComponentType<MaskedViewProps>;
const STAR_SIZE = 12;
const MAX_STARS = 5;

const _renderImage = (image: string, onCardPress: (id: string) => void, id: number) => (
  <TouchableOpacity onPress={() => onCardPress(id.toString())}>
    <ImageWithSkeleton sourceUrl={image} style={style.imageContainer} />
  </TouchableOpacity>
);

const _renderPriceText = (price: number) => (
  <View style={style.priceTextWrapper}>
    <GeneralText variant={VARIANT.TITLE3}>
      Rp {price}
    </GeneralText>
  </View>
);

const _renderButtonAddToCart = () => (
  <View style={style.buttonCartWrapper}>
    <TouchableOpacity style={style.buttonCard}>
      <Ionicons name="add-circle" color="#0f0f0fff" size={30} />
    </TouchableOpacity>
  </View>
);

const _priceTagAndButtonCart = ({ price }: CatalogItem) => (
  <View style={style.priceTagAndButtonCart}>
    {_renderPriceText(price)}
    {_renderButtonAddToCart()}
  </View>
);

const _renderDiscount = (discountPercentage: number) => (
  <View style={style.discountWrapper}>
    <GeneralText variant={VARIANT.LABEL3} color="#efefefff">
      Disc {discountPercentage}%
    </GeneralText>
  </View>
);

const _renderFavoriteButton = () => (
  <TouchableOpacity>
    <Ionicons name="heart" color="#d0d0d0ff" size={24} />
  </TouchableOpacity>
);

const _renderTopSection = (discountPercentage: number) => (
  <View style={style.topSectionContainer}>
    {_renderDiscount(discountPercentage)}
    {_renderFavoriteButton()}
  </View>
);

const _renderFiveStars = (color: string): React.JSX.Element => (
  <View style={style.fiveStartWrapper}>
    {Array.from({ length: MAX_STARS }).map((_, index) => (
      <Ionicons key={index as number} name="star" color={color} size={STAR_SIZE} />
    ))}
  </View>
);

const RatingStars = ({ rating }: { rating: number }) => {
  const fillPercentage = Math.min(Math.max((rating / MAX_STARS) * 100, 0), 100);

  return (
    <View style={style.ratingStarWrapper}>
      {_renderFiveStars('#c2c2c2ff')}
      <MaskedView style={style.maskingStar} maskElement={_renderFiveStars('#000000')}>
        <View style={[style.yellowStar, getStarWidthStyle(fillPercentage)]} />
      </MaskedView>
    </View>
  );
};

const _renderTitleBrand = (brand: string, rating: number) => (
  <View style={style.titleContainer}>
    <GeneralText variant={VARIANT.LABEL2} color="#888888ff">
      {brand}
    </GeneralText>
    <RatingStars rating={Number(rating)} />
  </View>
);

const _renderTitleProduct = (title: string, onCardPress: (id: string) => void, id: number) => (
  <GeneralText
    onPress={() => onCardPress(id.toString())}
    numberOfLines={1}
    variant={VARIANT.LABEL1}
  >
    {title}
  </GeneralText>
);

const _renderCaptionSection = (
  { brand, title, rating }: CatalogItem,
  onCardPress: (id: string) => void, id: number,
): React.JSX.Element => (
  <React.Fragment>
    {_renderTitleBrand(brand, rating)}
    {_renderTitleProduct(title, onCardPress, id)}
  </React.Fragment>
);

const CardComponent: React.FC<CardComponentProps> = ({ data, onCardPress }) => (
  <View style={style.cardContainer}>
    {_renderTopSection(data.discountPercentage)}
    {_renderImage(data.thumbnail, onCardPress, data.id)}
    {_renderCaptionSection(data, onCardPress, data.id)}
    {_priceTagAndButtonCart(data)}
  </View>
);

export default React.memo(CardComponent);