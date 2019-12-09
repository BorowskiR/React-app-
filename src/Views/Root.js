import React from 'react';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ArticlesView from '../Views/ArticlesView/ArticleView';
import NotesView from './NotesView/NotesView';
import TwittersView from './TwittersView/TwittersView';
import Header from '../components/Header/Header';
import Modal from '../components/Modal/Modal';
import AppContext from '../context';



class Root extends React.Component {
state = {
    twitter: [
      {
        title: 'lorem lorem',
        description: 'lorem ipsum sit amet safasf',
        link: 'https://google.com',
        image: 'http://unsplash.it/200/200'
      },
    ],
    article: [],
    note: [],
  isModalOpen: false,
}

addItem = (e, newItem) => {
  e.preventDefault();

  this.setState(prevState => ({
    [newItem.type] : [...prevState[newItem.type], newItem]
  }));

  console.log('działa');
  
this.closeModal()
}

openModal = () => {
  this.setState({
    isModalOpen: true
  })
}

closeModal = () => {
  this.setState({
    isModalOpen: false
  })
}

  render() {
    const {isModalOpen} = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }

    return(
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal}/>
          <Switch>
            <Route exact path='/' component={TwittersView}/>
            <Route path='/articles' component={ArticlesView}/>
            <Route path='/notes' component={NotesView}/>
          </Switch> 
          {isModalOpen && <Modal closeModalFn={this.closeModal}/>}
         </AppContext.Provider>
      </BrowserRouter>
    )
  }
}

export default Root;
