import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface CursoInstance extends Model {
  idCurso: number;
  nome: string;
}

export const Curso = sequelize.define<CursoInstance>('Curso', {
  idCurso: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'cursos',
  timestamps: false,
});