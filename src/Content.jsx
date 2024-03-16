import React from 'react';
import Student from './Student.jsx'

const students = [
    { picture: "https://www.vmcdn.ca/f/files/shared/feeds/cp/2024/01/20240119100136-4aa6dbbc4a4433ea15313bcf9bf07f40456c0d28f51e582e0b271c426a74f9ce.jpg", 
      name: "Sean", 
      email: "seam@gmail.com" 
    },
    { 
      picture: "https://i0.wp.com/thebodylockmma.com/wp-content/uploads/2022/09/1c090fa0-0799-11ed-97db-990ff2494fee-scaled.jpg", 
      name: "Nate", 
      email: "nate@gmail.com" 
    },
    { 
      picture: "https://m.media-amazon.com/images/M/MV5BNmE0MjJiYTQtMDM2ZS00N2JjLTg5NDctODhlMGY3NWUyNDQ1XkEyXkFqcGdeQXVyMTk4MDgwNA@@._V1_.jpg", 
      name: "Jones", 
      email: "jones@gmail.com" 
    },
    { 
      picture: "https://staticg.sportskeeda.com/editor/2023/04/02cbc-16804963020694-1920.jpg", 
      name: "Adesanya", 
      email: "adesanya@gmail.com" 
    },
    { 
      picture: "https://i0.wp.com/sportshub.cbsistatic.com/i/r/2021/01/24/a1edacde-427b-4173-a47e-409125f4e152/thumbnail/1200x675/125171c4cbd77da872a8a32b7fff4dce/dustin-poirier.jpg?fit=1024%2C576&ssl=1", 
      name: "Porier", 
      email: "porier@gmail.com" 
    },
    { 
      picture: "https://media.video-cdn.espn.com/motion/2023/0902/dm_230902_saint_denis_tko/dm_230902_saint_denis_tko.jpg", 
      name: "Saint", 
      email: "Benoit@gmail.com" 
    }
];
      const Content = () => {
        return (
          <div className="students-container">
          {}
          {students.map((student, index) => (
            <Student key={index} picture={student.picture} name={student.name} email={student.email} />
          ))}
        </div>
        );
          };
export default Content