export const verificarCodigoHexa = (codigo: string): boolean => {
    if (codigo == "#FFFFF"){
        return false;
    } else if (codigo[0] == "#") {
        return true;
    }
    return false;
};