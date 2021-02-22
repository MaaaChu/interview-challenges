import React from 'react';
import ExerciseCard from './ExerciseCard';
import HeaderWithDots from './HeaderWithDots';

const ExercisesSection = () => {
  return (
    <section className="exercisesSection">
      <HeaderWithDots title="Exercises" fontSize="body" colour="secondary" />
      <div>
        <ExerciseCard
          iconBgColour="orange"
          title="Speaking skills"
          text="16 exercises"
        />
        <ExerciseCard
          iconBgColour="blue"
          title="Reading speed"
          text="8 exercises"
        />
        <ExerciseCard
          iconBgColour="rose"
          title="Maths skills"
          text="12 exercises"
        />
      </div>
    </section>
  );
};

export default ExercisesSection;
