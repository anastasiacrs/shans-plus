export interface GalleryPreviewItemConfig {
  id: string;
  title: string;
  description: string;
  bottomText: string;
  imageUrl: string;
}

export interface GalleryPreviewConfig {
  title: string;
  secondaryText: string;
  items: Array<GalleryPreviewItemConfig>;
}
