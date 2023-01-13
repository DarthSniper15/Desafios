var x = 0;
/*Adicionar*/
function plus(){
	x++;
	document.getElementById("valor").innerHTML = x;
	return x;
};
/*Subtrair*/
function minus(){
	x--;
	document.getElementById("valor").innerHTML = x;
	return x;
};
/*Zerar*/
function zero(){
	x = 0;
	document.getElementById("valor").innerHTML = x;
	return x;
};
/*Animação de Transição(trabalhando nisso)*/
function next(){
	$('.sinopse').addClass('nextsin');
}
/*Animação de Próximo*/
function show(){
	$('.sinopse').removeClass('animanext');
}
/*Troca de Filme*/
function movie(mov){
	//document.getElementById("film")
	switch(mov){
		case "swi":
			setTimeout(show, 500);
			$('.sinopse').addClass('animanext');
			$('.fil1').addClass('ativo');
			$('.fil2').removeClass('ativo');
			$('.fil3').removeClass('ativo');
			$('.fil4').removeClass('ativo');
			$('.fil5').removeClass('ativo');
			$('.fil6').removeClass('ativo');
			document.getElementById('titu').innerHTML = switi;
			document.getElementById('cap').src = swiim;
			document.getElementById('resu').innerHTML = swi;
			break;
		case "hpc":
			setTimeout(show, 500);
			$('.sinopse').addClass('animanext');
			$('.fil2').addClass('ativo');
			$('.fil1').removeClass('ativo');
			$('.fil3').removeClass('ativo');
			$('.fil4').removeClass('ativo');
			$('.fil5').removeClass('ativo');
			$('.fil6').removeClass('ativo');
			document.getElementById('titu').innerHTML = hpcti;
			document.getElementById('cap').src = hpcim;
			document.getElementById('resu').innerHTML = hpc;
			break;
		case "pdc":
			setTimeout(show, 500);
			$('.sinopse').addClass('animanext');
			$('.fil3').addClass('ativo');
			$('.fil2').removeClass('ativo');
			$('.fil1').removeClass('ativo');
			$('.fil4').removeClass('ativo');
			$('.fil5').removeClass('ativo');
			$('.fil6').removeClass('ativo');
			document.getElementById('titu').innerHTML = pdcti;
			document.getElementById('cap').src = pdcim;
			document.getElementById('resu').innerHTML = pdc;
			break;
		case "mmf":
			setTimeout(show, 500);
			$('.sinopse').addClass('animanext');
			$('.fil4').addClass('ativo');
			$('.fil2').removeClass('ativo');
			$('.fil3').removeClass('ativo');
			$('.fil1').removeClass('ativo');
			$('.fil5').removeClass('ativo');
			$('.fil6').removeClass('ativo');
			document.getElementById('titu').innerHTML = mmfti;
			document.getElementById('cap').src = mmfim;
			document.getElementById('resu').innerHTML = mmf;
			break;
		case "cre":
			setTimeout(show, 500);
			$('.sinopse').addClass('animanext');
			$('.fil5').addClass('ativo');
			$('.fil2').removeClass('ativo');
			$('.fil3').removeClass('ativo');
			$('.fil4').removeClass('ativo');
			$('.fil1').removeClass('ativo');
			$('.fil6').removeClass('ativo');
			document.getElementById('titu').innerHTML = creti;
			document.getElementById('cap').src = creim;
			document.getElementById('resu').innerHTML = cre;
			break;
		case "mad":
			setTimeout(show, 500);
			$('.sinopse').addClass('animanext');
			$('.fil6').addClass('ativo');
			$('.fil2').removeClass('ativo');
			$('.fil3').removeClass('ativo');
			$('.fil4').removeClass('ativo');
			$('.fil5').removeClass('ativo');
			$('.fil1').removeClass('ativo');
			document.getElementById('titu').innerHTML = madti;
			document.getElementById('cap').src = madim;
			document.getElementById('resu').innerHTML = mad;
			break;
	}
}
/*Sinopse-Titulos-Capas*/
{
	/*Star Wars*/
	var switi = "Star Wars: O Império Contra Ataca";
	var swiim = "images/swi.png";
	var swi = "Em Star Wars: Episódio V, as forças imperais comandadas por Darth Vader (David Prowse/James Earl Jones) lançam um ataque contra os membros da resistência, que são obrigados a fugir. Enquanto isso, Luke Skywalker (Mark Hamill) tenta encontrar o Mestre Yoda, que poderá ensiná-lo a dominar a 'Força' e torná-lo um cavaleiro Jedi. No entanto, Darth Vader planeja levá-lo para o Lado Negro da 'Força'.";
	/*Harry Potter*/
	var hpc = "Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, está disposto a correr o risco e se livrar do lar problemático.";
	var hpcti = "Harry Potter e a Câmara Secreta";
	var hpcim = "images/hpc.png";
	/*Piratas do Caribe*/
	var pdc = "O capitão Jack Sparrow (Johnny Depp) vai até Londres para resgatar Gibbs (Kevin McNally), integrante de sua tripulação no Pérola Negra. Lá ele descobre que alguém está usando seu nome para conseguir marujos em uma viagem rumo à Fonte da Juventude. Sparrow investiga e logo percebe que Angelica (Penélope Cruz), um antigo caso que balançou seu coração, é a responsável pela farsa. Ela é filha do lendário pirata Barba Negra (Ian McShane), que está com os dias contados. Desta forma, Angelica quer encontrar a Fonte da Juventude para que seu pai tenha mais alguns anos de vida. No encalço deles está o capitão Barbossa (Geoffrey Rush), que agora trabalha para o império britânico.";
	var pdcti = "Piratas do Caribe: Navegando em Águas Misteriosas";
	var pdcim = "images/pdc.png";
	/*Meu Malvado Favorito*/
	var mmf = "Um homem que adora todas as coisas diabólicas, o supervilão Gru traça um plano para roubar a lua. Rodeado de um exército de pequenos ajudantes e seu arsenal de armas e máquinas de guerra, Gru se prepara para destruir quem atravessar seu caminho. Mas ele não esperava pelo seu maior desafio: três adoráveis órfãs que querem ter Gru como pai.";
	var mmfti = "Meu Malvado Favotiro";
	var mmfim = "images/mmf.png";
	/*Creúsculo*/
	var cre = "Em Crepúsculo, Bella ( Kristen Stewart) é uma adolescente que muda para Forks, Washington, para morar com o pai, Charlie ( Billy Burke ), depois que sua mãe decide casar-se novamente. Lá, ela conhece um misterioso rapaz, Edward Cullen ( Robert Pattinson ), um garoto que esconde um segredo obscuro, conhecido apenas por sua família.";
	var creti = "Crepúsculo";
	var creim = "images/cre.png";
	/*Madagascar*/
	var mad = "Madagascar, conta a história de um grupo de animais que vivem uma vida cheia de regalias no Zoológico do Central park de Nova York. Tudo vai muito bem, até quando um dos animais desaparece, e os outros fogem do zoológico para encontra-lo.";
	var madti = "Madagascar";
	var madim = "images/mad.png";
}
