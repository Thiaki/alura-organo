import React from 'react';
import '../../styles/components/footer.sass';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='social'>
                <img src="/image/fb.png" alt='Facebook' />
                <img src="/image/ig.png" alt='Instagram' />
                <img src="/image/tw.png" alt='Twitter' />
            </div>

            <img src="/image/logo.png" alt='Logo' />

            <p>UX/UI - Alura <br/> Desenvolvido por: <a href='https://github.com/Thiaki'>Thiaki</a></p>
        </footer>
    )
}

export default Footer;
