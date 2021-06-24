export interface mascota {
    id: number,
    nombre: string,
    raza: string,
    genero: string,
    caracter: string,
    edad: number,
    queCome: string,
    cuidadosEspeciales: string,
    masSobre: string,
    fk_cliente: number,
}