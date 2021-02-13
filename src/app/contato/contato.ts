export class Contato{
     id: number;
     nome: string;
     email: string;
     telefone: string;
     favorito: boolean;
     foto: any;

     constructor(nome: string, email: string, telefone: string){
          this.nome = nome;
          this.email= email;
          this.telefone= telefone;
     }
}