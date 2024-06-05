let frutas = ['maçã', 'uva', 'pera', 'limão', 'laranja'];
var Frutas=document.getElementById('ListadeFrutas');
frutas.forEach(function(item)
{
    var fruta=document.createElement('li');
    fruta.textContent=item;
    Frutas.appendChild(fruta);
}
)