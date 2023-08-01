import React from 'react';

function BeautifulScreen(props) {
  return (
    <div className="beautiful-screen">
      {/* Afficher l'état du calcul en cours et le résultat ici */}
      {props.value}
    </div>
  );
}

export default BeautifulScreen;
