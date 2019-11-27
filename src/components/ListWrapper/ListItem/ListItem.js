import React from "react";
import styles from "./ListItem.module.scss";
import PropTypes from "prop-types";

const ListItem = ({ name, image, description, twitterLink }) => (
  <li className={styles.wrapper}>
    <img alt={name} src={image} className={styles.image} />
    <div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <a
        href={twitterLink}
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
      >
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  twitterLink: PropTypes.string.isRequired
};

ListItem.defaultProps = {
  description: "One of the React creations"
};

export default ListItem;
