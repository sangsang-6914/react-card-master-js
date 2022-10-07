import React from 'react'
import CardEditForm from '../card_edit_form/card_edit_form'
import styles from './editor.module.css'
function Editor({cards}) {
  return (
    <section className={styles.editor}>
        <h2 className={styles.title}>Card Maker</h2>
        {
            cards.map(card => (
                <CardEditForm card={card} />
            ))
        }
    </section>
  )
}

export default Editor