import './Routing.scss';
import General from './General';
import ArtistsQuiz from './ArtistsQuiz';
import Score from './Score';
import PicturesQuiz from './PicturesQuiz';

const main = document.createElement('main');
main.classList.add('main');

class Routing {
  render() {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    const general = new General();
    const artistsQuiz = new ArtistsQuiz();
    const score = new Score();
    const picturesQuiz = new PicturesQuiz();

    switch (window.location.hash) {
      case '':
        console.log('1');
        main.append(general.render());
        break;
      case '#ArtistsQuiz/categories/':
        console.log('2');
        main.append(artistsQuiz.render());
        break;

      case '#ArtistsQuiz/score/':
        setTimeout(() => {
          main.append(score.render());
        }, 0);
        break;

      case '#PicturesQuiz/categories/':
        console.log('3');
        main.append(picturesQuiz.render());
        break;

      case '#PicturesQuiz/score/':
        setTimeout(() => {
          main.append(score.render());
        }, 0);
        break;

      default:
        window.location.hash = '';
        break;
    }
    return main;
  }
}

window.addEventListener('hashchange', () => {
  console.log(window.location.hash);
  if (window.location.hash === '#ArtistsQuiz/categories/questions/') return;
  if (window.location.hash === '#PicturesQuiz/categories/questions/') return;
  new Routing().render();
  console.log('Hash change!');
});

export default Routing;
