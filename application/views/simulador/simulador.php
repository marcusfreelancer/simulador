<section class="simulador">
    <div class="container">
        <h2>Simulador Unicoon</h2>
        <form action="" method="post">
            <div class="form-group">
                <label>Nome</label>
                <input type="text" class="form-control" placeholder="Nome" />
            </div>
            <div class="form-group">
                <label>E-mail</label>
                <input type="text" class="form-control" placeholder="Nome" />
            </div>
            <hr />
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label>CEP</label>
                        <input type="text" class="form-control" onfocusout="buscaCEP(this);" placeholder="Nome" />
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="form-group">
                        <label>Logradouro</label>
                        <input type="text" id="rua" class="form-control" placeholder="Nome" />
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Número</label>
                        <input type="text" class="form-control" placeholder="Nome" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Complemento</label>
                        <input type="text" class="form-control" placeholder="Nome" />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Bairro</label>
                        <input type="text" id="bairro" class="form-control" placeholder="Nome" />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Cidade</label>
                        <input type="text" id="cidade" class="form-control" placeholder="Nome" />
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Estado</label>
                        <input type="text" id="uf" class="form-control" placeholder="Nome" />
                    </div>
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Tipo do Veiculo</label>
                        <select name="tipo_veiculo" id="tipo_veiculo" class="form-control">
                            <option value="selecione" hidden="hidden">Selecione</option>
                            <option value="carros">Carro</option>
                            <option value="motos">Moto</option>
                            <option value="caminhoes">Caminhão</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                        <label>Marca</label>
                        <select name="marca" id="marca" class="form-control">
                            <option value="selecione" hidden="hidden">Selecione</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label>Modelo e Combustível </label>
                        <select name="modelo" id="modelo" class="form-control">
                            <option value="selecione" hidden="hidden">Selecione</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label>Ano</label>
                        <select name="ano" id="ano" class="form-control">
                            <option value="selecione" hidden="hidden">Selecione</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <section class="valor-fipe">
            <h1 id="valor_fipe"></h1>
            <h2 id="modelo_fipe"></h2>
            <h3 id="ano_fipe"></h3>
            <span><b id="comb"></b> - <b id="referencia"></b></span>
            </section>
            <button type="submit" class="col-md-3 col-md-offset-5 btn btn-success btn-lg">Simular</button>
        </form>
    </div>
</section>