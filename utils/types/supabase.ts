export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      book: {
        Row: {
          availability: number | null;
          category: string | null;
          created_at: string | null;
          description: string | null;
          id: string;
          image_link: string | null;
          price: number | null;
          rating: number | null;
          title: string;
          upc: string;
        };
        Insert: {
          availability?: number | null;
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          image_link?: string | null;
          price?: number | null;
          rating?: number | null;
          title?: string;
          upc: string;
        };
        Update: {
          availability?: number | null;
          category?: string | null;
          created_at?: string | null;
          description?: string | null;
          id?: string;
          image_link?: string | null;
          price?: number | null;
          rating?: number | null;
          title?: string;
          upc?: string;
        };
      };
    };
    Views: {
      category: {
        Row: {
          category: string | null;
        };
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
