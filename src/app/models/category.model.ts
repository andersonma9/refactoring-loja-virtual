export interface CategoryModel {
  id: number;
  nome: string;
  slug: string;
  qtd_acessos: number;
  n_vendas?: number;
  receita?: number;
}
