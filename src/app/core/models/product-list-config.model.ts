export interface ProductListConfig {
  type?: string;

  filters?: {
    tag?: string,
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number
  };
}
