import React from 'react';

import Sumario from './Sumario';
import classes from './SumariosList.module.css';

const SumarioList = (props) => {
  return (
    <ul className={classes['sumarios-list']}>
      {props.sumarios.map((sumario, i) => (
        <Sumario
          id={sumario.idsumario}
          conteudo={sumario.conteudo}
          biblio={sumario.biblio}
          presenca={sumario.presenca}
          aula={sumario.aula}
          key = {i}
        />
      ))}
    </ul>
  );
};

export default SumarioList;
