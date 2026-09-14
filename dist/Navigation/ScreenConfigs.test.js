import React from 'react';
import { CustomHeader } from '../Components/TopHeader/TopHeader.component';
import { CatalogRoutes } from '../Shared';
import ScreenConfigs from './ScreenConfigs';
jest
    .mock('../Components/TopHeader/TopHeader.component', () => ({
    CustomHeader: jest.fn((props) => null),
}))
    .mock('../Screens/CatalogScreen', () => ({
    __esModule: true,
    default: () => null,
}))
    .mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator: jest.fn(() => ({
        Navigator: ({ children }) => children,
        Screen: ({ children }) => children,
    })),
}));
describe('ScreenConfigs Configuration', () => {
    it('should export correct route name and component configurations', () => {
        expect(ScreenConfigs).toHaveLength(1);
        const screenConfig = ScreenConfigs[0];
        expect(screenConfig.name).toBe(CatalogRoutes.CATALOG_PRODUCT_ROUTE);
        expect(screenConfig.component).toBeDefined();
        expect(screenConfig.options).toHaveProperty('header');
        expect(typeof screenConfig.options.header).toBe('function');
    });
    it('should render custom header properly when header option is invoked', () => {
        const screenConfig = ScreenConfigs[0];
        const mockProps = {
            navigation: { navigate: jest.fn() },
            route: { key: 'test-key', name: CatalogRoutes.CATALOG_PRODUCT_ROUTE },
            options: {},
        };
        const headerElement = screenConfig.options.header(mockProps);
        expect(headerElement).toEqual(<CustomHeader navigation={mockProps.navigation} route={mockProps.route} options={mockProps.options}/>);
    });
});
