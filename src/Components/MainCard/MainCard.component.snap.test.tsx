import MainCard from "./MainCard.component";

import {runSnapshotTests} from '../../Utils/Test/Test.utils';
import { MainCardProps } from "./MainCard.component.types";

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Main Card', () => {
  const defaultProps: MainCardProps = {
    title: 'Kartu Utama',
    subtitle: 'Deskripsi singkat kartu',
    tagline: 'Promo Spesial',
    buttonText: 'Lihat Detail',
    imageUrl: 'https://example.com/image.jpg',
    onPress: jest.fn(),
    isLoading: false,
  };

  const configs = [
    {
      desc: 'should render correctly with default/full props',
      props: defaultProps,
    },
    {
      desc: 'should render correctly in loading state',
      props: {
        ...defaultProps,
        isLoading: true,
      },
    },
    {
      desc: 'should render correctly without image URL',
      props: {
        ...defaultProps,
        imageUrl: undefined,
      },
    },
    {
      desc: 'should render correctly with minimal props',
      props: {
        title: 'Minimal Card Title',
      },
    },
  ];

  runSnapshotTests(MainCard, configs);
});