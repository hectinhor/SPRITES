// AQUI EL JAVASCRIPT

window.onload = function()
{
	//alert("Hola Sprites");
	var pasos = ["dere", "dere1", "dere2", "dere3", "dere4","dere5","frente",
                 "frente2","frente3","frente4","frente5","iz1","iz2","iz3","iz4","iz5",
                 "iz6","tras1","tras2","tras3","tras4","tras5","tras6"];  
	var num_camina = 1;
	var camina = false;
	var cont = 0;

	setInterval(function()
	{
		if(!camina)
		{
			cont++;
			nom_div("imagen1").setAttribute("class", "caminar " + pasos[num_camina - 1]);
			num_camina++;
			if(num_camina >= 9)
			{
				num_camina = 1;
			}

			
		}
	}, 100);
	nom_div("boton").addEventListener('click', function(event)
	{
		camina = !camina;
	});

	function nom_div(div)
	{
		return document.getElementById(div);
	}
}
