import React from 'react';
import myImage from './hero1.jpg'; // chemin relatif vers l'image
import myImagem from '../assets/mnr.png'; // chemin relatif vers l'image
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "../assets/TRAVILGUIDE-LOGO-2424.png";


const styles = {
  logoT: {
    gap: '0.4rem',
    fontSize: '1.2rem',
    textDecoration: 'uppercase',  
    fontWeight: '900',   
   },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '200px',
    borderRadius: '10px',
    marginBottom: '10px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  location: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  nationality: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  languages: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  socialButton: {
    color: '#336B87',
    padding: '8px 16px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
  },
};

const TourGuides = () => {
  const guides = [
    {
      image: myImage,
      firstName: 'Monir',
      lastName: '',
      address: '123 Main St,  SAFI',
      nationality: 'MORROCO',
      languages: ['English', 'Spanish'],
      description:
        'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
      socialLinks: [
        {
          name: '',
          url: 'https://www.linkedin.com/in/john-doe',
          icon: FaLinkedin,
        },
        {
          name: '',
          url: 'https://twitter.com/johndoe',
          icon: FaTwitter,
        },
      ],
    },
    {
      image: myImagem,
      firstName: 'EL OUARROUDI',
      lastName: '',
      address: '456 High St, NADOR',
      nationality: 'British',
      languages: ['English', 'French', 'ARABE'],
      description:
        'As a local Londoner, I have extensive knowledge of the city and its history. I am passionate about sharing this knowledge with visitors and helping them make the most of their time here.',
      socialLinks: [
        {
          name: '',
          url:'https://www.linkedin.com/in/jane-smith',
          icon: FaLinkedin,
          },
          {
          name: '',
          url: 'https://www.instagram.com/janesmith',
          icon: FaInstagram,
          },
          ],
          },

          {
            image: myImage,
            firstName: 'Monir',
            lastName: '',
            address: '123 Main St,  SAFI',
            nationality: 'MORROCO',
            languages: ['English', 'Spanish'],
            description:
              'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
            socialLinks: [
              {
                name: '',
                url: 'https://www.linkedin.com/in/john-doe',
                icon: FaLinkedin,
              },
              {
                name: '',
                url: 'https://twitter.com/johndoe',
                icon: FaTwitter,
              },
            ],
          },
          {
            image: myImage,
            firstName: 'Monir',
            lastName: '',
            address: '123 Main St,  SAFI',
            nationality: 'MORROCO',
            languages: ['English', 'Spanish'],
            description:
              'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
            socialLinks: [
              {
                name: '',
                url: 'https://www.linkedin.com/in/john-doe',
                icon: FaLinkedin,
              },
              {
                name: '',
                url: 'https://twitter.com/johndoe',
                icon: FaTwitter,
              },
            ],
          },
          {
            image: myImage,
            firstName: 'Monir',
            lastName: '',
            address: '123 Main St,  SAFI',
            nationality: 'MORROCO',
            languages: ['English', 'Spanish'],
            description:
              'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
            socialLinks: [
              {
                name: '',
                url: 'https://www.linkedin.com/in/john-doe',
                icon: FaLinkedin,
              },
              {
                name: '',
                url: 'https://twitter.com/johndoe',
                icon: FaTwitter,
              },
            ],
          },
          {
            image: myImage,
            firstName: 'Monir',
            lastName: '',
            address: '123 Main St,  SAFI',
            nationality: 'MORROCO',
            languages: ['English', 'Spanish'],
            description:
              'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
            socialLinks: [
              {
                name: '',
                url: 'https://www.linkedin.com/in/john-doe',
                icon: FaLinkedin,
              },
              {
                name: '',
                url: 'https://twitter.com/johndoe',
                icon: FaTwitter,
              },
            ],
          },
          {
            image: myImage,
            firstName: 'Monir',
            lastName: '',
            address: '123 Main St,  SAFI',
            nationality: 'MORROCO',
            languages: ['English', 'Spanish'],
            description:
              'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
            socialLinks: [
              {
                name: '',
                url: 'https://www.linkedin.com/in/john-doe',
                icon: FaLinkedin,
              },
              {
                name: '',
                url: 'https://twitter.com/johndoe',
                icon: FaTwitter,
              },
            ],
          },
          {
            image: myImage,
            firstName: 'Monir',
            lastName: '',
            address: '123 Main St,  SAFI',
            nationality: 'MORROCO',
            languages: ['English', 'Spanish'],
            description:
              'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
            socialLinks: [
              {
                name: '',
                url: 'https://www.linkedin.com/in/john-doe',
                icon: FaLinkedin,
              },
              {
                name: '',
                url: 'https://twitter.com/johndoe',
                icon: FaTwitter,
              },
            ],
          },
          {
            image: myImage,
            firstName: 'Monir',
            lastName: '',
            address: '123 Main St,  SAFI',
            nationality: 'MORROCO',
            languages: ['English', 'Spanish'],
            description:
              'I am a passionate and knowledgeable tour guide with 5 years of experience in showing visitors the best of New York City. Let me take you on a journey you will never forget!',
            socialLinks: [
              {
                name: '',
                url: 'https://www.linkedin.com/in/john-doe',
                icon: FaLinkedin,
              },
              {
                name: '',
                url: 'https://twitter.com/johndoe',
                icon: FaTwitter,
              },
            ],
          },
          ];
          
          return (
            <>
             <div style={styles.logoT}>
              <img src={logo} alt="<App />}"  style={styles.logoT}/>
              TRAVELOGUIDE
             </div>
    
            <div style={styles.container}>
              {guides.map((guide, index) => (
                <div key={index} style={styles.card}>
                  <img style={styles.image} src={guide.image} alt={`${guide.firstName} ${guide.lastName}`} />
                  <div style={styles.name}>{`${guide.firstName} ${guide.lastName}`}</div>
                  <div style={styles.location}>{guide.address}</div>
                  <div style={styles.nationality}>{guide.nationality}</div>
                  <div style={styles.languages}>Languages: {guide.languages.join(', ')}</div>
                  <div style={styles.description}>{guide.description}</div>
                  <div>
                    {guide.socialLinks.map((link, index) => (
                      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
                        <link.icon style={{ marginRight: '10px' }} />
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </>
          );
                    }
          export default TourGuides;
          
     
          
          
          
