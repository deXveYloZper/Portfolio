// src/components/Gallery.js
import React from 'react';
import styled from 'styled-components';
import picture3 from '../assets/whatsapp.PNG';
import picture2 from '../assets/ge.PNG';
import picture1 from '../assets/photo.jpg';
import tesla from '../assets/tesla.PNG';
import social from '../assets/social-app.png';
import hulu from '../assets/hulu.png';
import shop from '../assets/shop.png';
import realEstate from '../assets/real-estate.png';

const GalleryWrapper = styled.div`
  position: absolute;
  top: calc(50% - 175px);
  width: 100%;
`;

const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 20px;
  padding: 20px;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 300px;
  background: white;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.4s ease-in-out;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

const projects = [
  { src: realEstate, alt: 'real-estate', link: 'https://real-estate-utsar.vercel.app/' },
  { src: tesla, alt: 'tesla-clone', link: 'https://tesla-clone-woad.vercel.app/' },
  { src: shop, alt: 'shop project', link: 'https://shop-utsar.vercel.app/' },
  { src: picture2, alt: 'global-event', link: 'https://global-event.vercel.app/' },
  { src: hulu, alt: 'hulu project', link: 'https://hulu-utsar.vercel.app/' },
  { src: picture3, alt: 'whatsapp-clone', link: '', disabled: true },
  { src: social, alt: 'social-app project', link: '', disabled: true },
  { src: picture1, alt: 'work in progress', link: '', disabled: true },
];

const Gallery = () => {
  return (
    <GalleryWrapper>
      <ProjectContainer>
        {projects.map((project, index) => (
          <ImageContainer
            key={index}
            onClick={() => {
              if (!project.disabled) {
                window.open(project.link, '_blank');
              }
            }}
            style={{ cursor: project.disabled ? 'not-allowed' : 'pointer' }}
          >
            <img src={project.src} alt={project.alt} />
          </ImageContainer>
        ))}
      </ProjectContainer>
    </GalleryWrapper>
  );
};

export default Gallery;
