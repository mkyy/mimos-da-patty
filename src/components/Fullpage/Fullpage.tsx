import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';


export const Fullpage = () => {
    
    const Menu = () => {
        return(
        <UlWrapper id="myMenu">
            <li data-menuanchor="firstPage" className="active"><a href="#home">Home</a></li>
            <li data-menuanchor="secondPage"><a href="#aboutus">Sobre</a></li>
            <li data-menuanchor="thirdPage"><a href="#contact">Contato</a></li>
            <li data-men='insta'><a href="https://www.instagram.com/mimosdapatt/"><img src="assets/icons/index.png" alt="" /></a></li>
        </UlWrapper>
        )
    }

    return(
        
        <div>
        <GlobalStyle/>    
        <Menu/>
        <ReactFullpage
        /* Options here */ 
        
        navigation={true}
        navigationPosition={'right'}
        autoScrolling={true}
        slidesNavigation={true}
        dragAndMove={'fingersonly'}
        verticalCentered={true}
        licenseKey={"YOUR_LICENSE_KEY"}
        anchors={['home','aboutus','services', 'contact']}
        sectionsColor={["#9b5de5", "#e5989b" , "#3a86ff", '#00f5d4']}
        menu={'#myMenu'}
        cards={false}
        cardsOptions ={{perspective: 100, fadeContent: true, fadeBackground: true}}
        scrollingSpeed = {1000}
        
        
        render={({ state, fullpageApi }) => {
               
            return(
                <ReactFullpage.Wrapper>

                <div className="section">
                    
                    <div className="slide" data-anchor="slide1">

                    <Slide1>
                        <img src="/assets/icons/lg.png" alt="" />
                        <div className='textSlide1Box'>
                            <h2>Cuide de quem você ama!</h2>
                            <p>Nada melhor do que receber um mimo de uma pessoa que a gente gosta,
                                então não deixe passar essa oportunidade de alegrar o dia de alguém especial para você com algo especial feito por nós!</p>
                            <Button onClick={() => fullpageApi.moveTo(2,0)}>Veja mais</Button>
                        </div>
                    </Slide1>

                    </div>
                    
                </div>
    
                <div className="section">
                <DivSection2>
                    <div className="slide" data-anchor="slide1">
                    <Slide2>
                        <img className='willcontinuate' src="assets/1.jpeg" alt="" />
                        <img className='vanish' src="assets/2.jpeg" alt="" />
                        <img className='vanish' src="assets/3.jpeg" alt="" />
                    </Slide2>
                    </div>

                    <div className='slide' data-anchor="slide2">
                        <img src="assets/2.jpeg" alt="" />
                    </div>

                    <div className='slide' data-anchor="slide3">
                        <img src="assets/3.jpeg" alt="" />
                    </div>
                </DivSection2>
                </div>
                
                <div className="section">

                    <SlideServices>

                    <img src="assets/Creativity-bro.svg" alt="" />
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
                
                <div className="section">
                <SlideContact>
                    <h1>Contato</h1>
                    <p>//endereço
                    //facebok
                    </p>
                    <a className='insta-button' href="https://www.instagram.com/mimosdapatt/"><img src="assets/instalogo.png" alt="" /></a>
                    <a className="wp-button" href="https://api.whatsapp.com/send?1=pt_Br&phone=5531993873754">Entre em contato pelo WhatsApp</a>

                </SlideContact>
                </div>

                </ReactFullpage.Wrapper>
            );
        }}
        />
        </div>
    );
};

const UlWrapper = styled.ul`
position: fixed;
top: 0;
right:5vw;
z-Index: 100;
display:flex;
align-items:center;

[data-menuanchor] {
    list-style-type: none;
    margin: 0 20px;
}
li a{
    text-decoration:none;
    color:#fff;
    font-size:1.4rem;
    padding-bottom:5px;
    border-bottom:2px solid #fff;
    &:hover{
        color: #2d6a91;
    }
}

[data-men]{
    list-style-type: none;
    margin: 0 20px;
    a{
        border:none;
    }
    img{
        width:40px;
    }
}

@media (max-width:425px){
    right:0;

[data-menuanchor] {
    margin: 0 10px;
}

}

`;

const Slide1 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

img{
    height:194px;
    max-width:361px;
    margin:30px;
}

.textSlide1Box{
    max-width:50%;
    border:1px solid #000;
    padding:30px;
    background-color:rgba(0,0,0, 0.2);
    display:flex;
    flex-direction:column;
}

@media (max-width:425px){
    img{
        height:160px;
        max-width:300px;
        margin:30px;
    }
    .textSlide1Box{
        max-width:80%;
        padding:0 15px 15px 15px;
    }
}

`;

const Slide2 = styled.div`
display:flex;
flex: 1 1 auto;
img{
    height:70vh;
    width:33%;
    margin:0 5px;
}

`;

const DivSection2 = styled.div`
[data-anchor="slide2"]{
    display:none;
}

[data-anchor="slide3"]{
    display:none;
}

.fp-controlArrow {
    display:none;
}

@media (max-width:425px) {

    [data-anchor="slide1"]{
        .willcontinuate{
            width:100%;
            height:60vh;
        }
        .vanish{
            display:none;
        }
    }
    [data-anchor="slide2"]{
        display:table;
        img{
            width:100%;
            height:60vh;
        }
    }
    
    [data-anchor="slide3"]{
        display:table;
        img{
            width:100%;
            height:60vh;
        }
    }
    
    .fp-controlArrow {
        display:block;
    }
    
}

`;

const SlideServices = styled.div`
display:flex;

.textServiceBox ul li{
    margin: 30px 0;
}

img{
    width:30%;
}

@media (max-width:425px){
    flex-direction:column-reverse;

    .textServiceBox{
        position:absolute;
        top:10vh;
        padding-left:10px;
    }

    .textServiceBox ul li{
        margin: 30px 0;
        position:relative;
        z-index:200;
    }

    img{
        width:80%;
        position:absolute;
        right:0;
        bottom:0;
    }
}
`;

const SlideContact = styled.div`
display:flex;
flex-direction:column;
align-items:center;

.insta-button img{
    width:200px;
    height:70px;
}
.wp-button {
    display: inline-block; max-width:fit-content; padding:16px; border-radius: 8px; background-color: #25D366; color: #fff; text-decoration: none; font-family: sans-serif; font-size: 16px;
}
`;

const Button = styled.button`
width:fit-content;
align-self:center;
padding:10px;
font-size:1rem;
border:1px solid #000;
background-color:rgba(0,0,0,0);
transition: .4s;
&:hover{
    color:#333;
    cursor: pointer;
}
`;