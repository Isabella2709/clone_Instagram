import './style.css'
import { FiMoreHorizontal } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { BsEmojiSmile } from "react-icons/bs";


export function Post(){
    return(
        <>
                <header className='header-post'>
                    <div className="infos-post">
                        <img className="img-header-post" src='https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940'/>
                        
                        <span className='tituloperfil'>Netflix</span>
                        <MdOutlineVerified/>
                    </div>

                        <FiMoreHorizontal/>
                </header>
                <div>
                <img src='https://s2-techtudo.glbimg.com/zDnRN1Xgcx2Rz8TSFHaOMClB0Fk=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/c/u/JMc0NrTZGew6dSglJMSQ/mario-bros.jpg' className='imgpost'/>
                </div>
                <div className='footer-post'>
                    <IconContext.Provider value={{size: "25px"}}>
                    <section className='engagement-post'>
                        <div className='icons-1'>
                            <div className='icon'><IoMdHeartEmpty /></div>
                            <div className='icon'><BsChat/></div>
                            <div className='icon'><FiSend/></div>
                            
                        </div>
                           
                           <div className='icon'><BsBookmark/></div>
                    </section>
                    </IconContext.Provider>

                    <section className='like'>
                        <span>61 Curtidas</span>
                    </section>

                    <div className='legend'>
                        <p>
                            <span className='tit'>Netflix <MdOutlineVerified/>    </span>Olha o que chegou quentinho no meu site: Super Mario Bross. Corram para assistir.
                        </p>
                    </div>
                    <div className='time-post'>
                        <time>Há uma Hora</time>
                    </div>
                    <div className='comment'>
                        <div className='fake-comment'>

                            <IconContext.Provider value={{size: '25px'}}>
                                <div className='icon'>
                                    <BsEmojiSmile />
                                </div>
                            </IconContext.Provider>  
                            <input placeholder='Adicione um comentario'></input>  
                           
                        </div>
                        <button>Publicar</button>
                    </div>
                </div>
        </>
    )
}