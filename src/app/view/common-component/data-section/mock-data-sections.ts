import { DataSection } from './data-section';
import { MmlAgmComponent } from 'src/app/lib/mml-agm/mml-agm.component';

export const SUMMARYSECTIONS: DataSection[] = [
  {imageSource: '/assets/images/Student.jpg'},
  {
    imageSource: '/assets/images/Studio.jpg',
    headingString: 'The Studio',
    contentHTML: '<p>MYC is one the best music programs to introduce your ' +
              'child to music. It is a well rounded program and each class includes elements of rhythm ensembles, ear training ' +
              'exercises, keyboard ensembles, singing, sight-reading, and theory; elements vital to build a strong foundation ' +
              'in music. As Marc Widner, Chief Examiner emeritus, Royal Conservatory Music Examinations aptly states:&nbsp;"The ' +
              'Music For Young Children Program has to be counted as the dominant force in the&nbsp;musical training of&nbsp;young ' +
              'children in Canada today.&nbsp;&nbsp;MYC teachers have found the right balance. They successfully blend the ' +
              'pleasure and joy of music making with the rigor of a&nbsp;well-crafted pedagogical progression."</p><p>I look ' +
              'forward to hearing from you and hope to infuse in your child a love for music and help them embark on a lifelong ' +
              'musical journey.</p>'
  },
  {imageSource: '/assets/images/Piano.jpg'}
];

export const ABOUTUSSECTIONS: DataSection[] = [
  {
    imageSource: '/assets/images/Teacher.jpg',
    headingString: 'The Studio',
    contentHTML: '<p>Hi! I\'m Cordelia Sequeira,</p><p>I have been teaching music for over 25 years as a private piano teacher' +
              ' and over fifteen years as a Music for Young Children teacher, in addition to teaching music in schools. ' +
              'My students have played at festivals, accompanied choirs and placed at music competitions. I have prepared ' +
              'students for RCM examinations from the prepatory level up until Grade 10 and have taught all three levels in ' +
              'the rudiments of theory. I enjoy playing, teaching and listening to music. I hope to share the joy of music ' +
              ' with my students who, I hope in turn, will share their love of music with others.</p><p>I have completed an' +
              ' LTCL practical in piano and an ATCL practical in voice from the Trinity College of Music London as well as ' +
              'am an MYC certified teacher and a Royal Conservatory of Music Certified Teacher. I have also completed my ' +
              'Bachelor of Education from the University of Toronto. In addition to the above, I have also completed additional ' +
              'qualifications in music from the University of Toronto.</p>'
  },
  {imageSource: '/assets/images/Studio.jpg', contentHTML: '<p>My music studio features:<p>' +
              '<ul><li>A large area for circle activities</li><li>Four digital keyboards</li><li>Two digital pianos</li></ul>' +
              '<p>There can be anywhere from four to six students along with their parents that can be accommodated comfortably ' +
              'in my studio</p>'
  },
  {
    contentHTML: '<p>Address: Woodward Ave. & Thompson, Milton, ON</p>' +
              '<p>Phone: (905) 636-0765</p>',
    component: MmlAgmComponent
  }
];
