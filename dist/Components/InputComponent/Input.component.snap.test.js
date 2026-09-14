import InputComponent from './Input.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';
jest
    .mock('react-native/Libraries/Animated/nodes/AnimatedInterpolation', () => {
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
})
    .mock('react-native/Libraries/Animated/Easing', () => {
    const ActualEasing = jest.requireActual('react-native/Libraries/Animated/Easing');
    return {
        ...ActualEasing,
        bezier: jest.fn(() => () => 0),
    };
});
describe('Input Component Snap test', () => {
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
    const configs = [
        {
            desc: 'should render correctly with default props (label only)',
            props: {
                label: 'Username',
                placeholder: 'Enter your username',
                value: '',
                onChangeText: jest.fn(),
            },
        },
        {
            desc: 'should render correctly with an error message and value',
            props: {
                label: 'Email Address',
                placeholder: 'Enter your email',
                value: 'invalid-email',
                error: 'Please enter a valid email address',
                onChangeText: jest.fn(),
            },
        },
        {
            desc: 'should render correctly with icon, clear button, and disabled state',
            props: {
                label: 'Search Product',
                placeholder: 'Search...',
                value: 'Laptop',
                disabled: true,
                iconName: 'search-outline',
                onClear: jest.fn(),
                onChangeText: jest.fn(),
            },
        },
        {
            desc: 'should render correctly with suggestions list and loading state',
            props: {
                label: 'Product Search with Suggestions',
                placeholder: 'Type to search...',
                value: 'Wireless',
                isLoading: true,
                suggestions: [mockSuggestionItem],
                onSelectSuggestion: jest.fn(),
                onChangeText: jest.fn(),
            },
        },
    ];
    runSnapshotTests(InputComponent, configs);
});
