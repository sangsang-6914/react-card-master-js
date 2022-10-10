import React from 'react';
import Card from '../card/card';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './preview.module.css';

function Preview({ cards }) {
  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
        ))}
      </ul>
    </section>
  );
}

export default Preview;
