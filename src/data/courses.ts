import React from 'react';
import styled from 'styled-components';

interface CourseItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

const courses: CourseItem[] = [
  {
    id: 1,
    title: 'Scripts Exactos',
    description: 'Descrição detalhada do curso Scripts Exactos.',
    image: 'https://example.com/image1.jpg',
  },
  {
    id: 2,
    title: 'PDE',
    description: 'Descrição detalhada do curso PDE.',
    image: 'https://example.com/image2.jpg',
  },
  {
    id: 3,
    title: 'BLINDAJE EMOCIONAL',
    description: 'Descrição detalhada do curso BLINDAJE EMOCIONAL.',
    image: 'https://example.com/image3.jpg',
  },
];

const HeroSection = styled.section`
  width: 100%;
  height: 60vh;
  background-image: url('https://i.ibb.co/B2xNxS53/Generatedimage-1776353481684.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  h1 {
    position: relative;
    z-index: 2;
    font-size: 3rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    height: 40vh;
    h1 {
      font-size: 2rem;
    }
  }
`;

const CoursesContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const CourseItemComponent = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }

  h2 {
    margin: 10px 0;
    font-size: 1.5rem;
  }

  p {
    color: #666;
  }
`;

const App: React.FC = () => {
  return (
    <div>
      <HeroSection>
        <h1>Bem-vindo aos Cursos</h1>
      </HeroSection>
      <CoursesContainer>
        {courses.map((course) => (
          <CourseItemComponent key={course.id}>
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </CourseItemComponent>
        ))}
      </CoursesContainer>
    </div>
  );
};

export default App;