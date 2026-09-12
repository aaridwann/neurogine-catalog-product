export interface ReviewProductType {
  rating: number,
  comment: string,
  date: string,
  reviewerName: string,
  reviewerEmail: string
}

export interface CatalogItem {
  id: number,
  title: string,
  description: string,
  category: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  tags: string[],
  brand: string,
  sku: string,
  weight: number,
  dimensions: {
    width: number,
    height: number,
    depth: number
  },
  warrantyInformation: string,
  shippingInformation: string,
  availabilityStatus: string,
  reviews: ReviewProductType[],
  returnPolicy: string,
  minimumOrderQuantity: number,
  meta: {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string
  },
  images: string[],
  thumbnail: string
};

export interface CatalogProductResponse {
  pageParams: number[]
  pages: {
    limit: number;
    products: CatalogItem[];
    skip: number;
    total: number;
  }[];
};

export interface FetchCatalogParams {
  skip?: number;
  limit?: number;
  search?: string;
  category?: string;
};