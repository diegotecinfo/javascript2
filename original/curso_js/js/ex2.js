// 1) EXERCICIO 1

var box1 = Number(document.getElementById("num_1").innerHTML)
var box2 = parseFloat(document.getElementById("num_2").innerHTML)
document.getElementById("resultado").innerHTML = `<strong>${box1 + box2}</strong>`

// -------------------------------------------------------------------------------------

// 2) EXERCICIO 2

function conversao() {
    var valor_info = parseFloat(document.getElementById("caixa_azul").innerHTML)
    var fire = (valor_info * 9 / 5) + 32
    return fire
}

document.getElementById("caixa_amarela").innerHTML = `<strong>${conversao()}</strong>`

// -------------------------------------------------------------------------------------

// 3) EXERCICIO 3

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]

var new_group = grupos.slice(-2,)

new_group.push(["Mariana", "Felipe", "Carla"])

console.log(new_group)

// -------------------------------------------------------------------------------------

// 4) EXERCICIO 4

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'soma_aval': function() {
        var soma = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas
        return soma
    },
    'media': function() {
        var media = ((5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela)) / (this.soma_aval())
        return media
    }
}

document.getElementById("categoria_principal").innerHTML = curso.categoria[0]

document.getElementById("total_aval").innerHTML = `<strong>${curso.soma_aval()}</strong>`

document.getElementById("media_aval").innerHTML = `<strong>${curso.media().toFixed(2)}</strong>`

// -------------------------------------------------------------------------------------

// 5) EXERCICIO 5

var pessoa = {
    'nome': 'Diego',
    'sobrenome': 'Carvalho',
    'email':'dcmoviescar@icloud.com'
}

 function retorno_tabela() {
    var exibir_tabela = `
    <div class="tableBox">

    <table>

        <tr>
            <th>Nome Completo</th>
            <th>Email</th>
        </tr>
        <tr>
            <td>${pessoa.nome} ${pessoa.sobrenome}</td>
            <td>${pessoa.email}</td>
        </tr>
        
    </table>
    
</div>
    `
    return exibir_tabela
}

document.getElementById("tabela").innerHTML = retorno_tabela()
    
        
    
    


