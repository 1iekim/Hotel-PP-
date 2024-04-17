
const PostItem = ({ theme, title, text, showModal }) => {
  const classes = ['posts__item', `posts__item--${theme}`];

  return (
    <li className={classes.join(' ')}>
      <h3 className="posts__item--title">{title}</h3>
      <p className="posts__item--text">{text}</p>
      <button onClick={() => showModal(title,text, true)} className="posts__item--btn">Подробнее</button>
    </li>
  );
};

export default PostItem;
