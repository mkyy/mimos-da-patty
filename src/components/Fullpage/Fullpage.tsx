import ReactFullpage from '@fullpage/react-fullpage';
import { GlobalStyle } from '../GlobalStyle';
import {
  UlWrapper,
  Button,
  DivSection2,
  Slide1,
  Slide2,
  SlideContact,
  SlideServices,
} from './style';

export const Fullpage = () => {
  const Menu = () => {
    return (
      <UlWrapper id='myMenu'>
        <li data-menuanchor='firstPage' className='active'>
          <a href='#home'>Home</a>
        </li>
        <li data-menuanchor='secondPage'>
          <a href='#aboutus'>Sobre</a>
        </li>
        <li data-menuanchor='thirdPage'>
          <a href='#contact'>Contato</a>
        </li>
        <li data-men='insta'>
          <a href='https://www.instagram.com/mimosdapatt/'>
            <img src='assets/icons/index.png' alt='' />
          </a>
        </li>
      </UlWrapper>
    );
  };

  return (
    <div>
      <GlobalStyle />
      <Menu />
      <ReactFullpage
        /* Options here */

        autoScrolling={true}
        slidesNavigation={false}
        dragAndMove={'fingersonly'}
        verticalCentered={true}
        licenseKey={'YOUR_LICENSE_KEY'}
        anchors={['home', 'aboutus', 'services', 'contact']}
        sectionsColor={['#9b5de5', '#e5989b', '#3a86ff', '#00f5d4']}
        menu={'#myMenu'}
        cards={false}
        cardsOptions={{ perspective: 100, fadeContent: true, fadeBackground: true }}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <div className='slide' data-anchor='slide1'>
                  <Slide1>
                    <img src='/assets/icons/lg.png' alt='' />
                    <div className='textSlide1Box'>
                      <h2>Cuide de quem você ama!</h2>
                      <p>
                        Nada melhor do que receber um mimo de uma pessoa que a gente gosta, então
                        não deixe passar essa oportunidade de alegrar o dia de alguém especial para
                        você com algo especial feito por nós!
                      </p>
                      <Button onClick={() => fullpageApi.moveTo(2, 0)}>Veja mais</Button>
                    </div>
                  </Slide1>
                </div>
              </div>

              <div className='section'>
                <DivSection2>
                  <div className='slide' data-anchor='slide1'>
                    <Slide2>
                      <img className='willcontinuate' src='assets/1.jpeg' alt='' />
                      <img className='vanish' src='assets/2.jpeg' alt='' />
                      <img className='vanish' src='assets/3.jpeg' alt='' />
                    </Slide2>
                  </div>

                  <div className='slide' data-anchor='slide2'>
                    <img src='assets/2.jpeg' alt='' />
                  </div>

                  <div className='slide' data-anchor='slide3'>
                    <img src='assets/3.jpeg' alt='' />
                  </div>
                </DivSection2>
              </div>

              <div className='section'>
                <SlideServices>
                  <img src='assets/Creativity-bro.svg' alt='' />
                  <div className='textServiceBox'>
                    <h1>Serviços e produtos de papelaria em geral</h1>
                    <ul>
                      <li>Topos para bolo</li>
                      <li>Convites de aniverśario</li>
                      <li>Balas e doces customizados</li>
                      <li>E muito mais...</li>
                    </ul>
                  </div>
                </SlideServices>
              </div>

              <div className='section'>
                <SlideContact>
                  <h1>Entre em contato</h1>
                  <div>
                    <h3>Endereço:</h3>
                    <p>Rua Pau Brasil, 94, Vale Verde</p>
                  </div>
                  <a className='insta-button' href='https://www.instagram.com/mimosdapatt/'>
                    <img src='assets/instalogo.png' alt='' />
                  </a>
                  <a
                    className='wp-button'
                    href='https://api.whatsapp.com/send?1=pt_Br&phone=5531993873754'
                  >
                    Entre em contato pelo WhatsApp
                  </a>
                </SlideContact>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};
