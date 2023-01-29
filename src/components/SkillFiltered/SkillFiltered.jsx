import Close from '../../assets/svg/close.svg';
import styles from './SkillFiltered.module.scss';

const SkillFiltered = props => {
  const skillFiltered = props.data;
  const handleSkillListFilteredRemove = props.handleSkillListFilteredRemove;

  return (
    <div
      className={styles.skillFiltered}
      onClick={() => handleSkillListFilteredRemove(skillFiltered)}
    >
      <span>{skillFiltered.name}</span>
      <img src={Close} alt="none" />
    </div>
  );
};

export default SkillFiltered;
