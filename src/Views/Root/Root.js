import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TwittersView from '../TwittersView/TwittersView'
import NotesView from '../NotesView/NotesView'
import ArticlesView from '../ArticlesView/ArticleView'
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

const initialStateItems = [
  {
    image:
      "https://media.simplecast.com/episode/image/159108/small_1531930160-artwork.jpg",
    name: "Dan Abramov",
    description: "The creator of React",
    twitterLink: "https://twitter.com/dan_abramov"
  }
]

class App extends React.Component {
  state = {
    items: [...initialStateItems],
    isModalOpen: true,
  }

addItem = (e) => {
  e.preventDefault();

  const newItem = {
    name: e.target[0].value,
    twitterLink: e.target[1].value,
    image: e.target[2].value,
    description: e.target[3].value,
  }
  
  this.setState(prevState => ({
    items: [...prevState.items, newItem]
  }))

  e.target.reset();
};

openModal = () => {
  this.setState({
    isModalOpen: true,
  })
}

closeModal = () => {
  this.setState({
    isModalOpen: false,
  })
}

render() {
  const { isModalOpen } = this.state

  return (
    <BrowserRouter>
      <>
        <Header openModalFn={this.openModal}/>
        <Switch>
          <Route path="/" exact component={TwittersView} />
          <Route path="/articles" exact component={ArticlesView} />
          <Route path="/notes" exact component={NotesView} />
          <Route path="/notes/:id" exact component={NotesView} />
        </Switch>
        { isModalOpen && <Modal closeModalFn={this.closeModal}/>}
      </>
    </BrowserRouter>
  );
}
}

export default App;
