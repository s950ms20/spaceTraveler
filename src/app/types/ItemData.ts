export interface ItemData {
  img: string;
  id: string;
  title: string;
  created: string;
  description: string;
  keywords: string[];
}

export class ItemData {
  constructor(img: string, title: string, id: string, created: string, description: string, keywords: string[]) {
    this.img = img;
    this.id = id;
    this.title = title;
    this.created = created;
    this.description = description;
    this.keywords = keywords;
  }
}
