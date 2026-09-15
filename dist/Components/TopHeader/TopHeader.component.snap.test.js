import { Animated } from 'react-native';
import TopHeader from './TopHeader.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';
jest.mock('../InputComponent', () => 'InputComponent');
jest.mock('react-native/Libraries/Animated/nodes/AnimatedInterpolation', () => {
    const ActualModule = jest.requireActual('react-native/Libraries/Animated/nodes/AnimatedInterpolation');
    return {
        ...ActualModule,
        default: class MockAnimatedInterpolation extends ActualModule.default {
            constructor(...args) {
                super(...args);
                if (this._config && typeof this._config.easing !== 'function') {
                    this._config.easing = (t) => t;
                }
            }
        },
    };
});
describe('Top Header Component Snap test', () => {
    const mockSuggestionItem = {
        id: 1,
        title: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse',
        category: 'electronics',
        price: 150000,
        discountPercentage: 10,
        rating: 4.5,
        stock: 50,
        tags: ['mouse'],
        brand: 'Logitech',
        sku: 'LOG-01',
        weight: 100,
        dimensions: { width: 10, height: 5, depth: 10 },
        warrantyInformation: '1 year',
        shippingInformation: 'Fast shipping',
        availabilityStatus: 'In Stock',
        reviews: [],
        returnPolicy: 'No return',
        minimumOrderQuantity: 1,
        meta: {
            createdAt: '2026-01-01',
            updatedAt: '2026-01-01',
            barcode: '123',
            qrCode: 'qr',
        },
        images: [],
        thumbnail: '',
    };
    const dummyAnimInterpolation = new Animated.Value(0).interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    const configs = [
        {
            desc: 'should render correctly when search section is inactive',
            props: {
                isSearchActive: false,
                searchQuery: '',
                setSearchQuery: jest.fn(),
                toggleSearch: jest.fn(),
                searchOpacity: dummyAnimInterpolation,
                sampleSuggestions: [],
                isLoading: false,
                onSelectSuggestion: jest.fn(),
            },
        },
        {
            desc: 'should render correctly when search section is active with empty query',
            props: {
                isSearchActive: true,
                searchQuery: '',
                setSearchQuery: jest.fn(),
                toggleSearch: jest.fn(),
                searchOpacity: dummyAnimInterpolation,
                sampleSuggestions: [],
                isLoading: false,
                onSelectSuggestion: jest.fn(),
            },
        },
        {
            desc: 'should render correctly when searching with a query and suggestions displayed',
            props: {
                isSearchActive: true,
                searchQuery: 'Wireless',
                setSearchQuery: jest.fn(),
                toggleSearch: jest.fn(),
                searchOpacity: dummyAnimInterpolation,
                sampleSuggestions: [mockSuggestionItem],
                isLoading: false,
                onSelectSuggestion: jest.fn(),
            },
        },
        {
            desc: 'should render correctly when search is loading suggestions',
            props: {
                isSearchActive: true,
                searchQuery: 'Logi',
                setSearchQuery: jest.fn(),
                toggleSearch: jest.fn(),
                searchOpacity: dummyAnimInterpolation,
                sampleSuggestions: [],
                isLoading: true,
                onSelectSuggestion: jest.fn(),
            },
        },
    ];
    runSnapshotTests(TopHeader, configs);
});
