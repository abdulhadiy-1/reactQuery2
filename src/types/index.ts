export interface StackType {
  createdAt: string;
  id: number | null;
  image: string;
  name: string;
}


export interface CreateStackType {
  image: string;
  name: string;
}
