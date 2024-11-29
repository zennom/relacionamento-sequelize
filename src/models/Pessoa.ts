import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface PessoaInstance extends Model {
  id: number;
  nome: string;
  cursoPreferido: number;  // A chave estrangeira para cursos
}

export const Pessoa = sequelize.define<PessoaInstance>('Pessoa', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cursoPreferido: {
    type: DataTypes.INTEGER,
    references: {
      model: 'cursos',  // Nome da tabela 'cursos'
      key: 'idCurso',   // Nome da chave primária da tabela 'cursos'
    },
    allowNull: true, // Permitindo que seja nulo
  },
}, {
  tableName: 'pessoas',
  timestamps: false,
});