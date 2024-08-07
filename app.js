
const campoTextoResultado = document.querySelector('.corpo__campoTextoResultado');
const campoTextoDescriptografado = document.querySelector('.corpo__campoTextoResultado__descriptografado__textarea');
const campoDescriptografado = document.querySelector('.corpo__campoTextoResultado__descriptografado')
const botaoCriptografar = document.querySelector('.corpo__estrutura__botoes__botao__criptografia');
const botaoDescriptografar = document.querySelector('.corpo__estrutura__botoes__botao__descriptografia');


function criptografia(event) {
    let textoCriptografado = '';
    event.preventDefault();
    const texto = document.querySelector('textarea').value;

    for (let i = 0; i < texto.length; i++) {
        const element = texto[i];
        switch (element) {
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            case 'o':
                textoCriptografado += 'ober';
                break;
            case 'u':
                textoCriptografado += 'ufat';
                break;
            default:
                textoCriptografado += element;
        }
    }

    campoTextoDescriptografado.value = textoCriptografado;
    if (textoCriptografado === '') {
        campoTextoResultado.style.display = 'flex';
        campoTextoDescriptografado.style.display = 'none';
    } else {
        campoTextoResultado.style.display = 'none';
        campoDescriptografado.style.display = 'flex';
        campoTextoDescriptografado.style.display = 'block';
    }
    

    
}

botaoCriptografar.addEventListener('click', criptografia);


function descriptografia(event) {
    let textoDescriptografado = '';
    event.preventDefault();
    const texto = document.querySelector('textarea').value;

    for (let i = 0; i < texto.length; i++) {
        const element = texto[i];
        switch (element) {
            case 'a':
                textoDescriptografado += 'a';
                i+=1;
                break;
            case 'e':
                textoDescriptografado += 'e';
                i+=4;
                break;
            case 'i':
                textoDescriptografado += 'i';
                i+=3;
                break;
            case 'o':
                textoDescriptografado += 'o';
                i+=3;
                break;
            case 'u':
                textoDescriptografado += 'u';
                i+=3;
                break;
            default:
                textoDescriptografado += element;
        }
    }

    campoTextoDescriptografado.value = textoDescriptografado;
    if (textoDescriptografado === '') {
        campoTextoResultado.style.display = 'flex';
        campoTextoDescriptografado.style.display = 'none';
    } else {
        campoTextoResultado.style.display = 'none';
        campoDescriptografado.style.display = 'flex';
        campoTextoDescriptografado.style.display = 'block';
    }
}


botaoDescriptografar.addEventListener('click', descriptografia);


function copiar() {
    navigator.clipboard.writeText(campoTextoDescriptografado.value).then(
        () => {
            console.log("Texto copiado com sucesso!");
        }
    ).catch(
        (error) => {
            console.error("Falha ao copiar o texto:", error);
        }
    );
}

const botaoCopiar = document.querySelector('.corpo__campoTextoResultado__descriptografado__botaoCopiar');
botaoCopiar.addEventListener('click', copiar);
