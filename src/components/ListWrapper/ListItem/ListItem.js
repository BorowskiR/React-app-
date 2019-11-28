import React from "react";
import styles from "./ListItem.module.scss";
import PropTypes from "prop-types";

const ListItem = ({ name, image, description, twitterLink }) => {

    const ImageTag = image ? 'img' : 'div'
    return(
        <li className={styles.wrapper}>
            <ImageTag 
                alt={name} 
                src={image} 
                className={image? styles.image : styles.imageNone} />
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
    )
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
