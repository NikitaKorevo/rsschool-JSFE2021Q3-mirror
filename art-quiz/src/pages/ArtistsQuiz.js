import './ArtistsQuiz.scss';
import TitleH2 from '../components/TitleH2';
import Card from '../components/Card';
import ArtistsQuizQuestions from './ArtistsQuizQuestions';
import { ANSWERS, ARTISTS_QUIZ_SCORE, NUMBER_ROUND_FOR_SCORE } from '../constants/constants';

class ArtistsQuiz {
  constructor() {
    this.nameSections = [
      'Portrait',
      'Landscape',
      'Still Life',
      'Graphic',
      'Antique',
      'Avant-Garde',
      'Renaissance',
      'Surrealism',
      'Kitsch',
      'Minimalism',
      'Avangard',
      'Industrial',
    ];
  }

  generateQuestions(numRound) {
    const main = document.querySelector('.main');
    main.append(new ArtistsQuizQuestions(numRound).render());
  }

  render() {
    const answers = JSON.parse(localStorage.getItem(ANSWERS));

    const div = document.createElement('div');
    div.classList.add('artists-quiz');

    const titleH2 = new TitleH2('Categories Artists Quiz').render();

    const cards = document.createElement('div');
    cards.classList.add('cards');
    for (let i = 0; i < 120; i += 10) {
      const card = new Card(this.nameSections[Math.ceil(i / 10)], i, Math.ceil(i / 10)).render();
      const numCard = i / 10;
      if (answers) {
        if (!answers[numCard]) card.classList.add('card__img--black');
      } else {
        card.classList.add('card__img--black');
      }
      cards.append(card);
    }
    div.append(titleH2, cards);

    div.addEventListener('click', (e) => {
      if (e.target.closest('.card__num-completed')) {
        const { numRound } = e.target.closest('.card').dataset;
        localStorage.setItem(NUMBER_ROUND_FOR_SCORE, numRound);
        window.location.hash = ARTISTS_QUIZ_SCORE;
      }
      if (e.target.closest('.card__img')) {
        this.generateQuestions(e.target.closest('.card').dataset.numRound);
      }
    });

    return div;
  }
}

export default ArtistsQuiz;
