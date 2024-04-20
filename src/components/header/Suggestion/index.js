import './styles.css'

export function Suggestion(){
    return(
        <>
        <div className="header-suggestion">
            
            <img src="https://avatars.githubusercontent.com/u/110493965?s=400&u=eb04efddbf13ad5ff668e9462d01b72cb512a5f0&v=4"/>
            
            <div className='user-infos-suggestion'>
                <div className='infos'>
                    <span>issa_ribas</span>
                    <p>Isabella Ribas</p>
                </div>
                <button className='switch'>Mudar</button>
            </div>
            
        </div>
        <div className='header-main-suggestion'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
        </div>
        <div className='info-suggestion'>
            <img src='https://img.freepik.com/fotos-gratis/cara-elegante-confiante-com-tatuagens-posando-na-varanda-do-apartamento_74855-2711.jpg?t=st=1713642459~exp=1713646059~hmac=40ae27b9c3be833931a7c98bc30d5fc1043729463e049dd75ab9ed9f63e7d2a2&w=740'/>

            <div className='infos-suggestion'>
                <span>tylers_</span>
                <p>Seguido por filipsantos</p>
            </div>

            <button className='follow'>Seguir</button>
        </div>
        <div className='info-suggestion'>
            <img src='https://img.freepik.com/fotos-gratis/feliz-bonito-mulher-jovem-posar-camera-em-parque-cidade_1262-19158.jpg?t=st=1713643408~exp=1713647008~hmac=8fdba42a2954670547645cbef162f22054cbdfa2a15167e3e4d7ef2439993213&w=740'/>

            <div className='infos-suggestion'>
                <span>lusales_dourado</span>
                <p>Seguido por anajujuju</p>
            </div>

            <button className='follow'>Seguir</button>
        </div>

        <footer className='footer-suggestion'>
           <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

           <p>&copy; 2024 INSTAGRAM FROM META</p>
        </footer>
        
        </>
    )
}