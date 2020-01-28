import { AddressModel } from './address.model';

export interface UserInfo {
  foto: string;
  id: number;
  nome: string;
  sobrenome: string;
  cpf: number;
  rg: number;
  data_nascimento: string;
  sexo: string;
  enderecos: AddressModel[];
}
