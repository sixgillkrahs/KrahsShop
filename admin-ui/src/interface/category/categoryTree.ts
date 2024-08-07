interface DataType {
  id?: string;
  name?: string;
  sort?: number;
  CoverImage?: string;
  parentId?: string | null;
  icon?: string;
  metaTitle?: string;
  visibility?: boolean;
  isActive?: boolean;
  children?: DataType[];
}

export default DataType
