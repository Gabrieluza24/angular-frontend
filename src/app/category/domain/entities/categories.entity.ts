export interface CategoriesEntity {
  id: number,
  code: string,
  title: string,
  description: string,
  idParentCategory: number,
  createDate: Date,
  updateDate: Date,
}
