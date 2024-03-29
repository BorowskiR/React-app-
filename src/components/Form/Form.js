import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Radio from "./FormRadio";
import AppContext from "../../context";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note"
};

const descriptions = {
  twitter: "favorite Twitter account",
  article: "Article",
  note: "Note"
};

class Form extends React.Component {
  state = {
    type: types.twitter,
    title: "",
    link: "",
    image: "",
    description: ""
  };

  handleRadioButtonChange = type => {
    this.setState({
      type: type
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    console.log(`
    title: ${this.state.title},
    link: ${this.state.link},
    image: ${this.state.image},
    description: ${this.state.description}
    `);
  };

  render() {
    const { type } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={e => context.addItem(e, this.state)}
            >
              <div className={styles.formOptions}>
                <Radio
                  id={types.twitter}
                  checked={type === types.twitter}
                  changeFn={() => this.handleRadioButtonChange(types.twitter)}
                >
                  Twitter{" "}
                </Radio>
                <Radio
                  id={types.article}
                  checked={type === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </Radio>
                <Radio
                  id={types.note}
                  checked={type === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </Radio>
              </div>

              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={type === types.twitter ? "Twitter Name" : "Title"}
              />
              {type !== types.note ? (
                <Input
                  value={this.state.link}
                  onChange={this.handleInputChange}
                  name="link"
                  label={type === types.twitter ? "Twitter Link" : "Link"}
                />
              ) : null}
              {type === types.twitter ? (
                <Input
                  value={this.state.image}
                  onChange={this.handleInputChange}
                  name="image"
                  label="Image"
                />
              ) : null}
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
