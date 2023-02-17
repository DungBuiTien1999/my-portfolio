export interface MenuItem {
  name: string;
  image: string;
  link: string;
}

export interface Tab {
  name: string;
  url?: string;
  filter?: string;
}

export interface PortfolioItem {
  url: string;
  tags: string[];
}

export interface IBlog {
  id: string;
  image: string;
  publish: string;
  type: string;
  numberComment: number;
  title: string;
}
