import { APIGatewayProxyHandler } from 'aws-lambda';
import * as Joi from 'joi';

const agendamentoSchema = Joi.object({
    medico_id: Joi.number().required(),
    paciente_nome: Joi.string().required(),
    data_horario: Joi.string().required(),
});

export const createAgendamento: APIGatewayProxyHandler = async (event) => {
    try {
        const body = JSON.parse(event.body);

        // Validação do schema
        const { error } = agendamentoSchema.validate(body);
        if (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ mensagem: error.details[0].message }),
            };
        }

        // Extração dos campos
        const { medico_id, paciente_nome, data_horario } = body;

        // Simulação de criação de agendamento
        const medico = medico_id === 1 ? 'Dr. João Silva' : 'Dra. Maria Souza';

        return {
            statusCode: 201,
            body: JSON.stringify({
                mensagem: 'Agendamento realizado com sucesso',
                agendamento: {
                    medico,
                    paciente: paciente_nome,
                    data_horario,
                },
            }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ mensagem: 'Erro ao processar o agendamento' }),
        };
    }
};
