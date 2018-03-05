$(document).ready(function(){
    $('#tipo_veiculo').on('change', function(){
        buscaFIPE(this.value);
    });
    $('#marca').on('change', function(){
        var tipo = $('#tipo_veiculo').val();
        filtraModelo(tipo, this.value);
    });

    $('#modelo').on('change', function(){
        var tipo = $('#tipo_veiculo').val(),
            marca = $('#marca').val(),
            modelo = this.value;

        filtraAno(tipo, marca, modelo);
    });

    $('#ano').on('change', function(){
        var tipo = $('#tipo_veiculo').val(),
            marca = $('#marca').val(),
            modelo =  $('#modelo').val(),
            ano = this.value;

       getValor(tipo, marca, modelo, ano);
    });
});

function buscaCEP(e){
    var cep = $(e).val();
    $.ajax({
        url: 'http://viacep.com.br/ws/' + cep +'/json/ ',
        method: 'post',
        dataType: 'JSON',
        success: function(data){
            $('#rua').val(data.logradouro);
            $('#cidade').val(data.localidade);
            $('#bairro').val(data.bairro);
            $('#uf').val(data.uf);
        }
    });
}

function buscaFIPE(e){
    var tipo = '',
        marca = '',
        modelo = '',
        combustivel = '',
        ano = '';
    
    var tipo = e;
    filtroMarca(tipo);
}

function filtroMarca(tipo){
    $.ajax({
        url: 'https://fipe.parallelum.com.br/api/v1/'+ tipo +'/marcas',
        method : 'GET',
        dataType: 'JSON',
        success: function(data){
            $('#marca').html('');
            var cnt = '';
            for(var i  = 0; i < data.length; i++){
                cnt = '<option value="selecione" hidden="hidden">Selecione</option>';
                cnt += '<option value="' + data[i].codigo + '">' + data[i].nome + '</option>';
                $('#marca').append(cnt);
            }
        }
    });
}

function filtraModelo(tipo,marca){
    $.ajax({
        url: 'https://fipe.parallelum.com.br/api/v1/'+ tipo +'/marcas/' + marca + '/modelos',
        method : 'GET',
        dataType: 'JSON',
        success: function(data){
            $('#modelo').html('');
            var cnt = '';
            $.each(data.modelos, function(i, item) {
                cnt = '<option value="selecione" hidden="hidden">Selecione</option>';
                cnt += '<option value="' + item.codigo + '">' + item.nome + '</option>';
                $('#modelo').append(cnt);
            });

            $.each(data.ano, function(i, item) {
                cnt = '<option value="selecione" hidden="hidden">Selecione</option>';
                cnt += '<option value="' + item.codigo + '">' + item.nome + '</option>';
                $('#modelo').append(cnt);
            });
        }
    }); 
}

function filtraAno(tipo, marca, modelo){
    $.ajax({
        url: 'https://fipe.parallelum.com.br/api/v1/'+ tipo +'/marcas/' + marca + '/modelos/' + modelo + '/anos',
        method : 'GET',
        dataType: 'JSON',
        success: function(data){
            $('#ano').html('');
            var cnt = '';
           $.each(data, function(i, item) {
                cnt = '<option value="selecione" hidden="hidden">Selecione</option>';
                cnt += '<option value="' + item.codigo + '">' + item.nome + '</option>';
                $('#ano').append(cnt);
            });
        }
    }); 
}

function getValor(tipo, marca, modelo, ano){
    $.ajax({
        url: 'https://fipe.parallelum.com.br/api/v1/'+ tipo +'/marcas/' + marca + '/modelos/' + modelo + '/anos/' + ano,
        method : 'GET',
        dataType: 'JSON',
        success: function(data){
            console.log(data);
            $('#valor_fipe').text(data.Valor);
            $('#modelo_fipe').text(data.Modelo);
            $('#ano_fipe').text(data.AnoModelo);
            $('#comb').text(data.Combustivel);
            $('#referencia').text(data.MesReferencia);
           $('.valor-fipe').show();
        }
    }); 
}