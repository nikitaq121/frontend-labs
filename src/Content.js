import React, { createRef } from "react";

import Image from "./Image";

class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 1 };
    this.carsRef = createRef();
    this.favFilmsRef = createRef();
    this.lastElementRef = createRef();
  }

  changeCarsColor = () => {
    const element = this.carsRef.current;
    const currentColor = element.style.backgroundColor;

    if (currentColor === "grey") {
      element.style.backgroundColor = "blue";
      element.style.color = "white";
    } else {
      element.style.backgroundColor = "grey";
      element.style.color = "black";
    }
  };

  changeFavFilmsColor = () => {
    const element = this.favFilmsRef.current;
    const currentColor = element.style.backgroundColor;
    if (currentColor === "grey") {
      element.style.backgroundColor = "green";
      element.style.color = "darkblue";
    } else {
      element.style.backgroundColor = "grey";
      element.style.color = "black";
    }
  };

  addImage() {
    this.setState({ counter: this.state.counter + 1 });
  }

  deleteImage() {
    if (this.state.counter === 0) return;
    this.setState({ counter: this.state.counter - 1 });
  }

  enlargeImage() {
    const existingImage = this.lastElementRef?.current;
    if (!existingImage) return;
    const currentWidth = existingImage.width;
    existingImage.setAttribute("width", currentWidth + 100);
  }

  reduceImage() {
    const existingImage = this.lastElementRef?.current;
    if (!existingImage) return;
    const currentWidth = existingImage.width;
    if (currentWidth < 150) return;
    else existingImage.setAttribute("width", currentWidth - 100);
  }

  render() {
    return (
      <main>
        <div className="personal-info">
          <div className="birthday">
            <p>02.09.2004, м. Решетилівка</p>
          </div>
          <div className="school">
            <p 
              ref={this.carsRef}
              style={{ backgroundColor: "grey" }}
              onClick={this.changeCarsColor}>Решетилівський ліцей</p>
          </div>
          <div className="university" style={{ marginLeft: "5%" }}>
            <p
            ref={this.favFilmsRef}
            style={{ backgroundColor: "grey" }}
            onClick={this.changeFavFilmsColor}
          >НТУУ "КПІ ім. Ігоря Сікорського"</p>
          </div>
        </div>
        <div className="hobbies">
          <p>Хоббі:</p>
          <ul>
            <li>Автоперегони</li>
            <li>Більярд</li>
            <li> Кіберспорт</li>
          </ul>
        </div>
        <div className="films">
          <p>Улюблені фільми:</p>
          <ol>
            <li>Memento</li>
            <li>Ford проти Ferrari</li>
            <li>1+1</li>
          </ol>
        </div>
        <div className="my-city">
          <p>
          Зальцбург. Місто на півночі Австрії на межі з Баварією. з Німецької назва цього міста перекладається як "соляна гора".<br />
Місто й справді лежить поміж гір. на Вершині однієї з них знаходиться замок Гогензальцбург, з якого видно все місто
          </p>
        </div>

        {Array(this.state.counter)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              index={index}
              counter={this.state.counter}
              lastElementRef={this.lastElementRef}
            />
          ))}
        <div className="buttons_container">
          <button onClick={() => this.addImage()}>Додати</button>
          <button onClick={() => this.enlargeImage()}>Збільшити</button>
          <button onClick={() => this.reduceImage()}>Зменшити</button>
          <button onClick={() => this.deleteImage()}>Видалити</button>
        </div>
      </main>
    );
  }
}

export default Content;