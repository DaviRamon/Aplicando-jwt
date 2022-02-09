const pacientes = [
    {id: 1, nome: "Maria", idade: 20},
    {id: 2, nome: "Joao", idade: 30},
    {id: 3, nome: "Jose", idade: 45}
];

function buscarPaciente(id) {
    return pacientes.find(paciente => paciente.id == id);
}

exports.handler = async (event) => {
    console.log("Paciente informado: " + event.pacienteId);

    const pacienteEncontrado = event.pacienteId ? buscarPaciente(event.pacienteId): pacientes

    const response = {
        statusCode: 200,
        body: JSON.stringify(pacienteEncontrado),
    };
    return response;
};