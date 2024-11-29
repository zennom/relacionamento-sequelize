// Importando os modelos
import { Pessoa } from '../models/Pessoa'; // Importa o modelo de Pessoa
import { Curso } from '../models/Curso';   // Importa o modelo de Curso

// Associando os modelos
Pessoa.belongsTo(Curso, { foreignKey: 'cursoPreferido', as: 'curso' }); // Pessoa tem um Curso preferido
Curso.hasMany(Pessoa, { foreignKey: 'cursoreferido', as: 'pessoas' });  // Curso pode ter várias Pessoas

// Exportando os modelos para uso em outros arquivos
export {
    Pessoa,
    Curso
};

