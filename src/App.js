import './App.css';
import React, { Component } from 'react'
import { IngredientItemsLeft, IngredientItemsRight } from './data.js';

class Header extends Component {
  render() {
    return (
      <div>
        <section class = "top-bar">
        <header>
            <div class = "left">
                <section class= "logo-top">
                  <img src= "logo.png" alt="logo"/>
                </section>
                <section class= "logo-text">
                    <p><span>Delicious</span><br/>
                    THE BEST FOOD BLOG ON THE WEB.
                    </p>
                </section>
            </div>
        <ButtonList />
        </header>
        <div class= "hr-bottom">
            
        </div>
    </section>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <div className= "hr-bottom"></div>
        <section className= "bottom-section">
        <section className="author">
            <div className="about">
                <img className="author-img" src="van-pic.png" alt="van"/>
                <div className="author-info">
                    <p className="author-text"><span>Vanessa Stevenson</span><br/><br/>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
            </div>
            <button>
                Share Recipe
            </button>
        </section>
        <footer>
            <section className="hr-logo-hr">
                <div className="hr-left">
                </div>
                <div>
                    <img src="small-logo.png" alt="small"/>
                </div>
                <div className="hr-right">
                </div>
            </section>
            <section>
                <p>Delicious © 2013 · All Rights Reserved.</p>
                <p>Proudly published with Ghost.</p>
            </section>
        </footer>
    </section>
      </div>
    )
  }
}

class Recipe extends Component {
  render() {
    return (
      <div>
        <p className="main-par">
            For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
        </p>

        <p className="main-par">
            Ice cream: in a small pot over medium heat, combine milk, and granulated sugar unti sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set the mixture in the fridge and wait until the fig mixture is cooled.
        </p>

        <p className="main-par">
            Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer insturctions, i.e., let spin and thicken for 20 mnutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least wto hours before serving.
        </p>
      </div>
    )
  }
}

class ImageSection extends Component {
  render() {
    return (
      <div>
        <section className="title-section">
            <div>
                <h1>
                Chocolate Pizza
                </h1>
                <h4>
                    POSTED ON 15 DEC 2013 / DESSERTS
                </h4>
            </div>
            <div className="print">
                <img src="print-icon.png" alt="print"/>
                print
            </div>
        </section>
        <section className="main-image">
            <img src="choco-pizza.png" alt="choco"/>
        </section>
      </div>
    )
  }
}

class IngredientsList extends Component {
  render() {
    return (
      <div>
        <div className= "index-card">
            <ul className="instructions">
              <div className= "list-columns">
                  <section className= "left-list">
                    {IngredientItemsLeft.map((item) => <IngredientItem amount={item.amount} name={item.name} />)}
                  </section>
                  <section className= "right-list">
                    {IngredientItemsRight.map((item) => <IngredientItem amount={item.amount} name={item.name} />)}
                  </section>
                </div>
            </ul>
        </div>
      </div>
    )
  }
}

class IngredientItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.amount} {this.props.name}</li>
      </div>
    )
  }
}

class ButtonList extends Component {
  render() {
    return (
      <div>
        <div className = "right">
                <div className = "images-1">
                    <img src= "fb-icon.png" alt="fb"/>
                    <img src= "twit-icon.png" alt="twit"/>
                    <img src= "gp-icon.png" alt="gp"/>
                    <img src= "insta-icon.png" alt="insta"/>
                    <img src= "flic-icon.png" alt="flic"/>
                    <img src= "pint-icon.png" alt="pint"/>
                </div>
                <div className = "images-2">
                    <img src= "rss-icon.png" alt="rss"/>
                    <img src= "mail-icon.png" alt="mail"/>
                </div>
            </div>
      </div>
    )
  }
}

export default function App() {
  return (
    <div>
      <Header />
      <ImageSection />
      <Recipe />
      <IngredientsList />
      <Footer />
    </div>
  );
}

