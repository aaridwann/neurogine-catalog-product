afterEach(() => {
  jest.clearAllMocks();
});

jest
  .mock('@Neurogine/ui-kit-general-text', () => {
  const React = jest.requireActual('react');

  return {
    __esModule: true,
    default: ({ children, style, testID, numberOfLines, ellipsizeMode }: any) => {
      const simpleProps = {
        style,
        testID,
        numberOfLines,
        ellipsizeMode,
      };

      return React.createElement(
        'GeneralText',
        simpleProps,
        children
      );
    },
    Constants: {
      VARIANT: {
        LABEL1: 'LABEL1',
        LABEL2: 'LABEL2',
        LABEL3: 'LABEL3',
      },
    },
  };
})
.mock('@react-native-vector-icons/ionicons', () => {
  const React = jest.requireActual('react');
  const { Text } = jest.requireActual('react-native');

  const MockIcon = React.forwardRef(({ name, size, color, style, testID }, ref) => {
    return React.createElement(
      Text,
      {
        ref,
        testID: testID || `icon-${name}`,
        style: [{ fontSize: size, color }, style],
        // ...rest,
      },
      `Icon: ${name}`
    );
  });

  MockIcon.getImageSource = jest.fn().mockResolvedValue({ uri: 'mocked-icon-uri' });
  MockIcon.getImageSourceSync = jest.fn().mockReturnValue({ uri: 'mocked-icon-uri' });
  MockIcon.loadFont = jest.fn().mockResolvedValue(true);
  MockIcon.hasIcon = jest.fn().mockReturnValue(true);

  return {
    __esModule: true,
    default: MockIcon,
  };
})
.mock('@Neurogine/ui-kit-button', () => 'UI-Kit-Button')
.mock('@react-native-masked-view/masked-view', () => {
  const React = require('react');
  const { View } = require('react-native');


  const MaskedView = ({ children, maskElement, ...props }: any) => {
    return (
      <View {...props}>
        {maskElement}
        {children}
      </View>
    );
  };

  return {
    __esModule: true,
    default: MaskedView,
  };
})
.mock('@Neurogine/core-network', () => ({
    useQuery: jest.fn().mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: false,
    }),
  }))
.mock('react-native-safe-area-context', () => ({
  ...jest.requireActual('react-native-safe-area-context'),
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}))
.mock('react-native-linear-gradient', () => 'LinearGradient')
.mock('react-native/Libraries/Lists/FlatList', () => {
  const React = jest.requireActual('react');

  return {
    __esModule: true,
    default: ({
      data, renderItem, testID, style,
      contentContainerStyle, horizontal, showsHorizontalScrollIndicator,
    }: any) => {
      const renderedItems = (data || []).map((item: any, index: number) => {
        const element = renderItem({ item, index, separators: {} });

        return React.cloneElement(element, { key: index });
      });

      const simpleProps = {
        testID: testID || 'mock-flat-list',
        style,
        contentContainerStyle,
        horizontal,
        showsHorizontalScrollIndicator,
        data,
        renderItem,
      };

      return React.createElement('FlatList', simpleProps, renderedItems);
    },
  };
});


import { Animated } from 'react-native';

if (Animated.Value && Animated.Value.prototype.interpolate) {
  const originalInterpolate = Animated.Value.prototype.interpolate;
  Animated.Value.prototype.interpolate = function (config) {
    try {
      return originalInterpolate.call(this, config);
    } catch {

      return config && config.outputRange ? config.outputRange[0] : 0;
    }
  };
}

global.__reanimatedWorkletInit = jest.fn();
