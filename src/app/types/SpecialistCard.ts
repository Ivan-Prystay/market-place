export type Person = {
  id: string;
  name: string;
  about: {
    image: string;
    categories: string[];
    review: {
      positiveReview: number;
      allReview: number;
    };
    rating: number;
    price: number;
    diploma: boolean;
    confirmed?: boolean;
    description: string;
  };
};
