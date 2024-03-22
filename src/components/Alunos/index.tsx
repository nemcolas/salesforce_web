import React from 'react';
import './style.css';

const Alunos: React.FC = () => {
  return (
    <main>
      <h1>Integrantes do grupo</h1>
      <section className="cardAluno">
        <h2>Yago Lucas G. da Silva</h2>
        <p>RM: 553013</p>
      </section>
      <section className="cardAluno">
        <h2>Ander Kenji Kamada</h2>
        <p>RM: 553449</p>
      </section>
      <section className="cardAluno">
        <h2>Nicolas Martins</h2>
        <p>RM: 553478</p>
      </section>
    </main>
  );
}
 
export default Alunos;