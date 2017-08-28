function SimpleAdd(){
    var num1 = Math.floor(Math.random()*11);
    var num2 = Math.floor(Math.random()*11);
  	var sum;
    var descrSum = num1 + " + " + num2 + " = ";
    sum = num1 + num2 ;
    document.getElementById("simple_add").innerHTML = descrSum ;
	setTimeout(function(){ document.getElementById("result_add").innerHTML = sum ;}, 1000);
	document.getElementById("result_add").innerHTML = " ";
	
}

function SimpleSub(){
    var num1 = Math.floor(Math.random()*11);
    var num2 = Math.floor(Math.random()*11);
  	var sub;
    var descrSub = num1 + " - " + num2 + " = ";
    sub = num1 - num2 ;
    document.getElementById("simple_sub").innerHTML = descrSub ;
	setTimeout(function(){ document.getElementById("result_sub").innerHTML = sub ;}, 1000);
	document.getElementById("result_sub").innerHTML = " ";
	
}

function SimpleMulti(){
    var num1 = Math.floor(Math.random()*11);
    var num2 = Math.floor(Math.random()*11);
  	var multi;
    var descrSum = num1 + " * " + num2 + " = ";
    multi = num1 * num2 ;
    document.getElementById("simple_multi").innerHTML = descrSum ;
	setTimeout(function(){ document.getElementById("result_multi").innerHTML = multi ;}, 1000);
	document.getElementById("result_multi").innerHTML = " ";
	
}

function SimpleDiv(){
    var num1 = Math.floor(Math.random()*10+1);/*dividing by 0 is undefined */
    var num2 = Math.floor(Math.random()*11);
	var num3 = num1 * num2;
    var descrDiv = num3 + " / " + num1 + " = ";
	var divis;
    divis = num3 / num1 ;
    document.getElementById("simple_div").innerHTML = descrDiv ;
	setTimeout(function(){ document.getElementById("result_div").innerHTML = divis ;}, 2000);
	document.getElementById("result_div").innerHTML = " ";
	
}

function PrimaryNumberCheck(num) {
	if (num > 2 ) {
		for (var i = 0;  i < Math.floor(num/2) ; i++){
			if (num % (i+2) == 0) {
				document.getElementById("infoPrima").innerHTML = "NO ("+(i+2)+")";
				
				break;
			}
			else {
				document.getElementById("infoPrima").innerHTML = "YES";
			}
			
			
		}
		
	}
	else if (num == 2) {
		document.getElementById("infoPrima").innerHTML = "YES";
	}
	else {
		document.getElementById("infoPrima").innerHTML = "A prime number is a natural number greater than 1";
	}
}

document.getElementById("buttonPrima").onclick = function(){
	PrimaryNumberCheck(document.getElementById("ifPrime").value);
};

