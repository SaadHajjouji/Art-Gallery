import React from "react";
import "../../sass/_main.scss";
import { FaEthereum } from "react-icons/fa";
import NftLayout from "./NftLayout";
const NftHome = () => {
  return (
    <NftLayout>
      <video autoPlay muted loop className="backgroundvid" id="myVideo">
        <source src={window.location.origin + "/Space.mp4"} type="video/mp4" />
      </video>
      <div className="fullnftPage">
        <h1 className="headingPrimaryNft">
          NFTs
          <span className="d-block fs-2">Get artwork as nft</span>
        </h1>

        <section className="presentation">
          <div className="presentationText">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              soluta atque illo facilis nobis perferendis aliquid iste, est
              mollitia placeat autem ducimus ut tenetur excepturi beatae,
              similique pariatur. Ad, rem.
            </p>
            <a href="" className="startHere">
              Start here
            </a>
          </div>
          <div className="bigEther">
            <FaEthereum />
          </div>
        </section>
        <section className="artworkNFT">
          <h2 className="text-center headingsecond">
            Discover a large variety of artwork as nft
          </h2>
          <div className="artCards">
            <div className="artCard">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    window.location.origin +
                    "/artworks/" +
                    "Francois_Beaurain-21.jpg"
                  })`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="artinfo">
                <span className="name">Royal (Oujda)</span>
                <span className="price">
                  2 <FaEthereum className="ether" />
                </span>
              </div>
            </div>
            <div className="artCard">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    window.location.origin +
                    "/artworks/" +
                    "Francois_Beaurain-20.jpg"
                  })`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="artinfo">
                <span className="name">Al Malaki (Casablanca)</span>
                <span className="price">
                  2 <FaEthereum className="ether" />
                </span>
              </div>
            </div>
            <div className="artCard">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    window.location.origin +
                    "/artworks/" +
                    "Francois_Beaurain-25.jpg"
                  })`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="artinfo">
                <span className="name">ABC (Meknès)</span>
                <span className="price">
                  2 <FaEthereum className="ether" />
                </span>
              </div>
            </div>
            <div className="artCard">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    window.location.origin +
                    "/artworks/" +
                    "Francois_Beaurain-22.jpg"
                  })`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="artinfo">
                <span className="name">Mauritania (Tanger)</span>
                <span className="price">
                  2 <FaEthereum className="ether" />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="guideNft">
          <h2 className="headingsecond">Guide</h2>
          <p className="introOpenSea">
            OpenSea est l'un des marchés NFT peer-to-peer les plus populaires
            pour acheter, vendre et créer des NFT. Fondée en 2017, OpenSea a
            gagné sa place en tant que marché NFT le plus actif
          </p>
          <hr />
          <article className="articleGuide">
            <p className="guide">
              Avant de créer votre propre compte OpenSea, vous aurez besoin de
              certains éléments de base pour effectuer des transactions sur le
              marché. Les éléments nécessaires sont les suivants : <br />
              <strong> Portefeuille Ethereum et Crypto-monnaie (ETH)</strong>.
            </p>
          </article>
          <article className="articles">
            <h3>Portefeuille Ethereum</h3>
            <p>
              Tout d'abord, vous devrez vous procurer un portefeuille Ethereum
              pour stocker toutes vos crypto-monnaies et NFT, avant de créer
              votre compte OpenSea. Vous pouvez consulter une liste des
              portefeuilles acceptés par OpenSea{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.opensea.io/hc/en-us/articles/1500007978402-Wallets-supported-by-OpenSea"
              >
                ici
              </a>
              . L'un des portefeuilles NFT les plus courants que les gens
              préfèrent utiliser est{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://metamask.io/download.html"
              >
                MetaMask
              </a>
            </p>
          </article>
          <article className="articles">
            <h3>Crypto-monnaie</h3>
            <p>
              Après avoir obtenu le portefeuille de votre choix, vous devrez y
              mettre de la crypto-monnaie. Lorsque vous déterminez le type de
              crypto-monnaie que vous souhaitez utiliser, cela dépend vraiment
              de vos préférences personnelles. Cependant, la devise la plus
              couramment utilisée pour le trading de NFT sur OpenSea est
              ETH/WETH. Afin d'obtenir votre propre crypto-monnaie, vous devrez
              créer un compte auprès d'un échange digne de confiance tel que
              Coinbase.com. Une fois que vous avez créé un compte, il vous
              suffit de saisir les informations de votre carte de débit ou de
              votre compte bancaire dans votre compte Coinbase pour
              vérification. Une fois que vous êtes vérifié, vous pouvez acheter
              des ETH et d'autres crypto-monnaies sur Coinbase. Si vous achetez
              des cryptos avec votre carte de débit, les fonds seront
              généralement disponibles immédiatement. Cependant, achetez de la
              cryptographie en utilisant votre compte bancaire et vous ne
              recevrez peut-être pas vos fonds pendant 3 à 5 jours ouvrables.
            </p>
          </article>
          <article className="articles">
            <h3>Configuration de votre compte OpenSea</h3>
            <p>
              Si c'est la première fois que vous visitez le marché OpenSea NFT
              et que vous envisagez d'effectuer des transactions, vous devrez
              créer votre compte d'abord. Voici comment créer votre compte sur
              OpenSea : Go à l'onglet Connect Wallet, trouvé dans la section
              Menu et choisissez quel type de portefeuille vous connectez à
              OpenSea. Cette volonté vous invite à signer numériquement pour
              approbation, confirmant que vous souhaite connecter votre
              portefeuille à la place de marché OpenSea. Une fois votre wallet
              est connecté à OpenSea, vous pouvez vous rendre sur votre Profil
              et mettez à jour vos informations dans Paramètres, telles que Nom
              d'utilisateur, Bio, Adresse e-mail, liens sociaux et images. A
              partir de là, vous êtes tous prêt à partir. Généralement, après
              avoir créé votre compte OpenSea vous vous connecterez en signant
              numériquement, en utilisant votre portefeuille.
            </p>
          </article>
          <article className="articles">
            <h3>Acquérir un NFT sur OpenSea</h3>
            <p>
              L'achat d'un NFT sur OpenSea est aussi simple que de vous
              connecter à votre compte Opensea et d'utiliser soit l'onglet
              Explorer, soit la fonction de recherche pour rechercher un NFT qui
              suscite votre intérêt. Une fois que vous avez trouvé un NFT que
              vous souhaitez acheter, sélectionnez-le, puis choisissez Acheter
              maintenant ou Faire une offre, si vous souhaitez enchérir sur un
              article. Enfin, vous devrez signer pour la transaction.
            </p>
          </article>
          <a href="" className="startHere">
            Start here
          </a>
        </section>
      </div>
    </NftLayout>
  );
};

export default NftHome;
