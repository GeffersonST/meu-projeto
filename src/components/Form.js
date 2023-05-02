import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name)
    console.log(`Usuário ${name} foi cadastrado coma  senha ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" placeholder="Digite seu Nome" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder="Digite sua Senha" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
