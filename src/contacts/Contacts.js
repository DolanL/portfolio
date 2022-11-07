import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"
import telephone from "../imgs/telephone.png"
import email from "../imgs/email.png"
import location from "../imgs/location.png"
import Contact from "./contact/Contact";
import Title from "../title/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div>
                    <Title title={'contacts'}/>
                </div>
                <div className={style.contacts}>
                    <Contact path={telephone} title={"Phone"} phone={"+79661088839"}/>
                    <Contact path={email} title={"Email"} phone={"dlaksinov@gmail.com"}/>
                    <Contact path={location} title={"Location"} phone={"Moscow, Russia"}/>
                </div>
                <form className={style.form} action="">
                    <h2>Let's get started</h2>
                    <div>
                        <input type="text" className={style.inputs}
                               aria-invalid="false" placeholder="Your name"/>
                    </div>
                    <div>
                        <input type="text" className={style.inputs}
                               aria-invalid="false" placeholder="Your name"/>
                    </div>
                    <div>
                            <textarea name="" id="" cols="30" rows="10" placeholder={"Your message"}
                                      className={style.textarea}></textarea>
                    </div>
                    <p><input type="submit" className={style.button} value={'SUBMIT'}/></p>
                </form>
            </div>
        </div>
    );
};

export default Contacts;