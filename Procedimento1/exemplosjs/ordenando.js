let swap = (vetor,a,b) => {
    let temp = vetor[a];
    vetor[a] = vetor[b];
    vetor[b] = temp;
    return vetor;
}

let shuffle = (vetor, nTrocas) => {
    const tamanhoVetor = vetor.length
    for (let n = 0; n < nTrocas; n++){
        const indiceAleatorio1 = Math.floor(Math.random() * tamanhoVetor);
        const indiceAleatorio2 = Math.floor(Math.random() * tamanhoVetor);

        let temp = vetor[indiceAleatorio1];
        vetor[indiceAleatorio1] = vetor[indiceAleatorio2];
        vetor[indiceAleatorio2] = temp;

    }

}

let bubble_sort = (vetor) => {
    const tamanhoVetor = vetor.length;
    let trocado = false;
    for (let i = 0; i < tamanhoVetor-1; i++){
        for (let j = 0; j < tamanhoVetor - i - 1; j++){
            if (vetor[j] > vetor[j+1]){
                vetor = swap(vetor, j , j+1);
                trocado = true;
            }
        }
        if (trocado === false){
            break;
        }
    }

}

let selection_sort = (vetor) => {
    const tamanhoVetor = vetor.length;

    for (let i = 0; i<tamanhoVetor; i++){
        let menorIndice = i;
        for (let j =i+1; j<tamanhoVetor; j++){
            if (vetor[menorIndice] > vetor[j]){
                menorIndice = j;
            }
        }
        temp = vetor[i];
        vetor[i] = vetor[menorIndice];
        vetor[menorIndice] = temp;
    }
}

let particao = (vetor,inicio,fim,valorPivot) =>{
    let pivot = valorPivot;
    let indicePivot = inicio;

    for (let i=inicio; i<fim; i++){
        if (vetor[i] < pivot){
            swap(vetor,i,indicePivot)

            indicePivot++;
        }
    }

    swap(vetor,indicePivot,fim)

    return indicePivot
}

let quick_sort = (vetor,inicio,fim) =>{
    if (inicio < fim){
        let indicePivot = particao(vetor,inicio,fim,vetor[fim]);
        
        quick_sort(vetor, inicio, indicePivot-1);
        quick_sort(vetor, indicePivot+1, fim);

    }
}

function printArray(array){
    let size = array.length
    for (let i = 0; i < size; i++){
        console.log(array[i]);
    } 
}


function run(){
    let array = [1,8,6,7,9,43,5,62,48,2];
    shuffle(array,15);
    printArray(array);
    quick_sort(array,0,array.length-1);
    console.log("quick sort array is: ")
    printArray(array);

}