var numeros = [];
while (true){		
		var num = parseInt(prompt("Para terminar a quantidade de numeros digitados tecle o numero zero\n\nDigite um numero inteiro maior que zero"));
		if (num > 0){
			numeros.push(num);
		} else if (num == 0 & numeros.length > 1){
			break;
		}else{
			alert("Por favor digite um numero inteiro");
		}
}
console.log(numeros);
function mmc (numeros) {
  let divisor = 2;
  let produtoNumeros = 1;
  let dividiu = false;  
  while(true) {
    for(let i=0; i < numeros.length;i++) {
      if(numeros[i] % divisor === 0) {
        dividiu = true;
        numeros[i] = numeros[i] / divisor;
      }
    }    
    if(dividiu){
      produtoNumeros *= divisor;      
      let linha = numeros.join(",")+"|"+divisor+" -> "+produtoNumeros;
      console.log(linha);
    } else {
      divisor++;
    }
    dividiu=false;
    const soma = numeros.reduce((partial_sum, a) => partial_sum + a,0);
    if(soma==numeros.length) break;
  }
}
mmc(numeros);