export interface Item {
  id: string;
  title: string;
  subtitle: string;
  description: {
    title: string;
    text: Array<{ item: string, type: string }>
  };
  details: {
    left: {
      title: string;
      items: Array<{ type: 'text', value: string }>
    };
    right: {
      title: string;
      items: Array<{ type: 'link', text: string, link: string }>
    }
  };
  images: Array<{ src: string }>;
}
