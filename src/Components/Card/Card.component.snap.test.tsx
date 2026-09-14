import CardComponent from './Card.component';
import { runSnapshotTests } from '../../Utils/Test/Test.utils';

describe('Card Component', () => {
  const mockBaseCatalogItem = {
    id: 1,
    title: 'Wireless Ergonomic Mouse',
    description: 'High-precision wireless mouse with comfortable grip.',
    category: 'electronics',
    price: 299900,
    discountPercentage: 15.5,
    rating: 4.8,
    stock: 25,
    tags: ['wireless', 'mouse', 'accessories'],
    brand: 'Logitech',
    sku: 'LOG-MOUSE-01',
    weight: 150,
    dimensions: {
      width: 10,
      height: 5,
      depth: 12,
    },
    warrantyInformation: '1 year warranty',
    shippingInformation: 'Ships in 2 business days',
    availabilityStatus: 'In Stock',
    reviews: [
      {
        rating: 5,
        comment: 'Very comfortable to use!',
        date: '2026-05-01T00:00:00.000Z',
        reviewerName: 'John Doe',
        reviewerEmail: 'john@example.com',
      },
    ],
    returnPolicy: '30-day return policy',
    minimumOrderQuantity: 1,
    meta: {
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-05-01T00:00:00.000Z',
      barcode: '1234567890123',
      qrCode: 'https://example.com/qr',
    },
    images: ['https://example.com/image1.jpg'],
    thumbnail: 'https://example.com/thumb.jpg',
  };

  const configs = [
    {
      desc: 'should render correctly with standard catalog item data',
      props: {
        data: mockBaseCatalogItem,
        onFavoritePress: jest.fn(),
        onAddToCartPress: jest.fn(),
        onCardPress: jest.fn(),
      },
    },
    {
      desc: 'should render correctly with zero stock / out of stock status',
      props: {
        data: {
          ...mockBaseCatalogItem,
          stock: 0,
          availabilityStatus: 'Out of Stock',
        },
        onFavoritePress: jest.fn(),
        onAddToCartPress: jest.fn(),
        onCardPress: jest.fn(),
      },
    },
    {
      desc: 'should render correctly with high discount percentage',
      props: {
        data: {
          ...mockBaseCatalogItem,
          discountPercentage: 50.0,
          price: 500000,
        },
        onFavoritePress: jest.fn(),
        onAddToCartPress: jest.fn(),
        onCardPress: jest.fn(),
      },
    },
    {
      desc: 'should render correctly without reviews',
      props: {
        data: {
          ...mockBaseCatalogItem,
          reviews: [],
          rating: 0,
        },
        onFavoritePress: jest.fn(),
        onAddToCartPress: jest.fn(),
        onCardPress: jest.fn(),
      },
    },
  ];

  runSnapshotTests(CardComponent, configs);
});