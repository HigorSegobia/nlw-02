import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'
function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/53355677?s=460&u=5a7904223602ab9e8a3c03aef9dc57b58bed64f5&v=4" alt="Higor Segobia"/>
                        <div>
                            <strong>Higor Segobia</strong>
                            <span>Fisica</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de fisica avançada.
                        <br /> <br />
                        Apaixonado por calcular coisas e mudar a vida das pessoas atraves de suas experiencias.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                                <img src={whatsappIcon} alt="WhatsApp"/>
                                Entrar em contato
                            </button>
                    </footer>
                </article>
    );
}

export default TeacherItem