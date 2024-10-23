import { getMockedAgendas } from '../mocks/agendaMocks';

test('should return mocked agendas', () => {
  const agendas = getMockedAgendas();
  expect(agendas.length).toBe(2);
  expect(agendas[0].nome).toBe('Dr. João Silva');
});
