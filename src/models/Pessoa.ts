import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../instances/mysql';
import { Curso } from '../models/Curso'; // Importando o modelo de Cursos
export interface PessoaInstance extends Model {
  id: number;
  nome: string;
  cursopreferido: number;  // A chave estrangeira para cursos
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
  cursopreferido: {
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

// Definindo a relação
Pessoa.associate = (models: any) => {
  Pessoa.belongsTo(models.Curso, {  // Relacionamento com a tabela Curso
    foreignKey: 'cursopreferido',
    as: 'curso',  // Alias para o relacionamento
  });
};

