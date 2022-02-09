const pacientes= [
    {id: 1, nome: "Davi", idade: 32},
    {id: 2, nome: "Bruna", idade: 26},
    {id: 3, nome: "Betoven", idade: 7},
    {id: 4, nome: "Theo", idade: 3}
];

exports.handler = async (event) => {
    // TODO implement
    console.log("DEU BOA");
    console.log(event);
    
    
    const { pacienteId } = event;
    const pacienteEncontrado = pacientes.find(paciente=> paciente.id == pacienteId)


    const response = {
        statusCode: 200,
        body: JSON.stringify(pacienteEncontrado),
    };
    return response;
    

 
};
