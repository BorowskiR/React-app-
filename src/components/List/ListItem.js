import React from "react";
import styles from "./ListItem.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Title from "../Title/Title";

const ListItem = ({ name, image, description, twitterLink }) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
      <ImageTag
        alt={name}
        src={image}
        className={image ? styles.image : styles.imageNone}
      />
      <div>
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button href={twitterLink}>visit twitter page</Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  image: null,
  description: "One of the React creations"
};

export default ListItem;
