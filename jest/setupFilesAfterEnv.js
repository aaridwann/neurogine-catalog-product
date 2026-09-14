import '@testing-library/react-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    ok: true,
    status: 200,
  })
);

try {
  jest.mock('react-native-reanimated', () => {
    const reanimated = require('react-native-reanimated/mock');
    reanimated.default.call = () => {};
    return reanimated;
  });
} catch (error) {

}

try {
  jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: jest.fn(),
        dispatch: jest.fn(),
        goBack: jest.fn(),
        addListener: jest.fn(() => () => {}),
      }),
      useRoute: () => ({
        params: {},
      }),
    };
  });
} catch (error) {

}

const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('React.createElement: type is invalid') ||
        args[0].includes('Warning: An update to') ||
        args[0].includes('ReactDOM.render is no longer supported'))
    ) {
      return;
    }
    originalError(...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Animated: `useNativeDriver`')
    ) {
      return;
    }
    originalWarn(...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});

afterEach(() => {
  jest.clearAllMocks();
});