import React, { useState } from 'react';
import BeautifulScreen from './component/BeautifulScreen';
import NumberButton from './component/NumberButton';
import OperatorButton from './component/OperatorButton';
import EqualButton from './component/EqualButton';


function Calculator() {
  const [result, setResult] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumberButtonClick = (number) => {
    // Vérifier si le résultat est '0' pour le remplacer par le chiffre cliqué,
    // sinon ajouter le chiffre cliqué à la suite du résultat actuel
    setResult((prevResult) => (prevResult === '0' ? String(number) : prevResult + number));
  };

  const handleOperatorButtonClick = (operator) => {
    // Mettre à jour l'équation avec l'opérateur et le résultat actuel
    setEquation((prevEquation) => prevEquation + result + operator);
    // Réinitialiser le résultat à '0' pour saisir le prochain nombre
    setResult('0');
  };

  const handleEqualButtonClick = () => {
    // Vérifier que l'équation n'est pas vide avant de calculer le résultat
    if (equation !== '') {
      // Ajouter le résultat actuel à la fin de l'équation
      setEquation((prevEquation) => prevEquation + result);
      // Évaluer l'équation pour obtenir le résultat final
      try {
        setResult(eval(equation + result).toString());
      } catch (error) {
        // Gérer les erreurs de calcul
        setResult('Error');
      }
      // Réinitialiser l'équation pour un nouveau calcul
      setEquation('');
    }
  };

  return (
    <div className="calculator">
      <BeautifulScreen value={result} />
      <div className="buttons">
        {/* Boutons numériques */}
        <NumberButton number={7} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={8} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={9} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={4} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={5} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={6} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={1} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={2} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={3} onNumberButtonClick={handleNumberButtonClick} />
        <NumberButton number={0} onNumberButtonClick={handleNumberButtonClick} />
        {/* Boutons d'opérations */}
        <OperatorButton operator="+" onOperatorButtonClick={handleOperatorButtonClick} />
        <OperatorButton operator="-" onOperatorButtonClick={handleOperatorButtonClick} />
        <OperatorButton operator="*" onOperatorButtonClick={handleOperatorButtonClick} />
        <OperatorButton operator="/" onOperatorButtonClick={handleOperatorButtonClick} />
        {/* Bouton égal */}
        <EqualButton onEqualButtonClick={handleEqualButtonClick} />
      </div>
    </div>
  );
}

export default Calculator;

