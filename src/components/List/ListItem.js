import React from "react";
import styles from "./ListItem.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Title from "../Title/Title";

const ListItem = ({title, image, description, link,}) => {
  const ImageTag = image ? "img" : "div";
  return (
    <li className={styles.wrapper}>
     {image && <ImageTag
        alt={title}
        src={image}
        className={image ? styles.image : styles.imageNone}
      />}
      <div>
        <Title>{title}</Title>
        <p className={styles.description}>{description}</p>
        {link && <Button href={link}>visit twitter page</Button>}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
 
};

ListItem.defaultProps = {
  image: null,
  link: null,
};

export default ListItem;
