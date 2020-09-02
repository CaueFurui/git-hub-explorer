import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/48840933?s=460&u=398aa25c197720153fd9bc152fa16f3f416cb853&v=4"
            alt="Caue Furui"
          />
          <div>
            <strong>cauefurui/teste</strong>
            <p>Teste bla bla bla</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/48840933?s=460&u=398aa25c197720153fd9bc152fa16f3f416cb853&v=4"
            alt="Caue Furui"
          />
          <div>
            <strong>cauefurui/teste</strong>
            <p>Teste bla bla bla</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/48840933?s=460&u=398aa25c197720153fd9bc152fa16f3f416cb853&v=4"
            alt="Caue Furui"
          />
          <div>
            <strong>cauefurui/teste</strong>
            <p>Teste bla bla bla</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/48840933?s=460&u=398aa25c197720153fd9bc152fa16f3f416cb853&v=4"
            alt="Caue Furui"
          />
          <div>
            <strong>cauefurui/teste</strong>
            <p>Teste bla bla bla</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
