import React, { useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import $ from 'jquery'; // import jQuery

import "../css/LandingPage.css";
import logo from "../assets/logoLimo.svg";
import Illustration from "../assets/IllusLandingPage.svg";
import FooterBackground from "../assets/landingFotterBack.svg";
import arrowDown from "../assets/arrowDown.svg";

export default function LandingPage() {

  useEffect(() => {
    $(".smooth-scroll").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  }, []);

  return (
    <div>
      <div className="landingHeader">
        <img src={logo} />
        <h1 id="Title">Limo</h1>
      </div>
      <div className="landingBody">
        <p id="Accroche">Découvrez une nouvelle langue à travers vos passions</p>
        <p id="joinus">
          Rejoignez notre communauté d'échange linguistique dès maintenant !
        </p>
        <img id="footerBackground" src={FooterBackground} alt="Footer" />
        <img id="illustration" src={Illustration} alt="Illustration" />
        <Link id="StartButton" to="/security/register">Commencer maintenant</Link>
        <Link id="ConnectButton" to="/security/login">Se Connecter</Link>
        <a href="#pres1" class="smooth-scroll"><img id="arrowDown" src={arrowDown} alt="arrowDown" /></a>
        <p id="pres1">Nous sommes convaincus que l'apprentissage d'une langue va bien au-delà des simples règles grammaticales et vocabulaires. Cela vous permet de découvrir le monde à travers les yeux d'une autre personne.</p>
        <p id="pres2">Notre application a été conçue pour vous aider à améliorer vos compétences linguistiques tout en découvrant de nouvelles cultures et passions.</p>
        <p id="pres3">Connectez-vous avec des locuteurs natifs de votre langue cible qui partagent vos centres d’intérêts.</p>
        <p id="pres4">Que vous soyez passionné par la gastronomie, la musique ou tout autre sujet, vous pouvez trouver des partenaires d'échange qui partagent votre passion. Cela rendra vos conversations plus intéressantes, plus engageantes et plus amusantes !</p>
      </div>
      <div className="landingFooter">
        <p id="mentionsLegales" className="footerItem">Mention Légales</p>
        <p id="Politique" className="footerItem">Politique de confidentialités</p>
        <p id="copyright" className="footerItem">© 2023 Limo - Tous droits réservés</p>
      </div>
    </div>
  );
}
