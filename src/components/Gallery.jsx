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
  overflow: hidden;
`;

const ScrollContainer = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: 1500px;
  grid-template-rows: minmax(300px, 2fr);
  grid-auto-flow: column;
  grid-auto-columns: minmax(50px, 1fr);
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  cursor: pointer;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1100px;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 900px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 700px;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 500px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 400px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 300px;
  }

  &::before,
  &::after {
    content: "";
    width: 1300px;
  }

  @media screen and (max-width: 1200px) {
    &::before,
    &::after {
      width: 900px;
    }
  }
  @media screen and (max-width: 900px) {
    &::before,
    &::after {
      width: 700px;
    }
  }
  @media screen and (max-width: 700px) {
    &::before,
    &::after {
      width: 500px;
    }
  }
  @media screen and (max-width: 500px) {
    &::before,
    &::after {
      width: 400px;
    }
  }
  @media screen and (max-width: 400px) {
    &::before,
    &::after {
      width: 300px;
    }
  }

  &.no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  &.no-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContainer = styled.li`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: all 400ms ease-in-out;

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
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <GalleryWrapper>
      <ScrollContainer className="no-scrollbar" projectCount={projects.length}>
        {projects.map((project, index) => (
          <ImageContainer
            key={index}
            onClick={() => !project.disabled && handleClick(project.link)}
            style={{ cursor: project.disabled ? 'not-allowed' : 'pointer' }}
          >
            <img src={project.src} alt={project.alt} />
          </ImageContainer>
        ))}
      </ScrollContainer>
    </GalleryWrapper>
  );
};

export default Gallery;
