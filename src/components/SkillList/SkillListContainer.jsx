import styles from './SkillListContainer.module.scss';

const SkillListContainer = props => {
  return <div className={styles.skillListContainer}>{props.children}</div>;
};

export default SkillListContainer;
