import { test, expect } from '@jest/globals';
import { verificarCodigoHexa } from './verificador';

test('código hexadecimal válido', () => {   
    let codigo: string = "#FFFFFF";

    let resultado = verificarCodigoHexa(codigo);

    expect(resultado).toBe(true);
});

test('código hexadecimal válido', () => {   
    let codigo: string = "000000";

    let resultado = verificarCodigoHexa(codigo);

    expect(resultado).toBe(false);
});

test('código hexadecimal válido', () => {   
    let codigo: string = "#FFFFF";

    let resultado = verificarCodigoHexa(codigo);

    expect(resultado).toBe(false);
});