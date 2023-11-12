/* eslint-disable prettier/prettier */
/* eslint-disable sort-imports */
import "./App.css";
import logo from "../../resources/img/logo.png";
import text from "../../resources/img/text.png";
import figures from "../../resources/img/figures.png"
import photo from "../../resources/img/photo.png";

function App() {

  return (
    <>
      <section className="header">

        <div className="header-block">
          <img className="header-img" src={logo} alt="log" />
          <p className="header-text">
            Инструмент 1
          </p>
          <p className="header-text">
            Инструмент 2
          </p>
          <p className="header-text">
            Инструмент 3
          </p>
        </div>
        
      </section>
      
      <div className="grid-block">

        <section className="menu-block">
          <div className="menu-block__list">

            <div className="text-menu menu-item">
              <img className="text-menu__image menu-block__img" src={text}></img>
              <p className="menu-block__text">Text</p>
            </div>

            <div className="figure-menu menu-item">
              <img className="figure-menu__image menu-block__img" src={figures}></img>
              <p className="menu-block__text">Figure</p>
            </div>

            <div className="image-menu menu-item">
              <img className="image-menu__image menu-block__img" src={photo}></img>
              <p className="menu-block__text">Photos</p>
            </div>

          </div>
        </section>

        <section className="working-block-grid">
          <div className="working-block">
            <div className="working-block__items">
              <p>Slide name</p>
              <div className="working-block__slide"></div>
            </div>
            
          </div>

          <div className="slide-block">
            <div className="slide-block__item">

              <div className="slide-1 slide">
                <h2>Слайд 1</h2>
              </div>

              <div className="slide-2 slide">
                <h2>Слайд 2</h2>
              </div>

              <div className="slide-3 slide">
                <h2>Слайд 3</h2>
              </div>

              <div className="slide-4 slide">
                <h1 className="slide-plus">+</h1>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
