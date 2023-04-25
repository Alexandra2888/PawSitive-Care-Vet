import Header from '../../components/Header'
// import HeaderImage from '../../assets/pawsitive.png'
// import {MdEmail} from 'react-icons/md'
// import {BsMessenger} from 'react-icons/bs'
// import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch">
    Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque?
    </Header>
    <section className="contact">
      <div className="container contact__container">
        {/* <div className="contact__wrapper">
          <a href="mailto:support@egattor.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+123456789" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div> */}
      </div>
    </section>
    </>
  )
}

export default Contact