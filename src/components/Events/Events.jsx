import React, { useState } from "react";
import Layout from "../Layout";
import "../../sass/_main.scss";
import EventBox from "./EventBox";
const Events = () => {
  const searchInput = (e) => {
    const inputValue = e.target.value.toUpperCase();
    const searchedEvents = events.filter((event) => {
      return event.name.toUpperCase().includes(inputValue);
    });
    inputValue !== "" ? setevents(searchedEvents) : setevents(backupEventsData);
  };
  const [events, setevents] = useState([
    {
      id: 6,
      name: "Gâta Bantu ",
      date: "Du 28 septembre au 10 novembre 2022",
      description: {
        fr: `CDA Gallery est heureuse de présenter l'exposition Gâta Bantu de l'artiste Yvanovitch Mbaya du 28 septembre au 10 novembre 2022. 

        Afropolitain et Marocain de cœur, Yvanovitch a pris le temps de ses multiples voyages transafricains pour mûrir une œuvre minimaliste qu’il développe d’abord lors de ses enseignements aux Beaux-arts de Brazzaville avant de s’émanciper de tout académisme par une créolisation maîtrisée et référencée au service de formes et d’objets d’étude et de représentation hautement personnels. 
        
        Pour la première fois au Maroc, cet ensemble d’œuvres significatives des voyages et des expériences de l’artiste à travers l’esthétique, la matière et divers récits fictionnels de son expérience panafricaine sera présenté par CDA Gallery au sein de son espace. 
     `,
        eng: `CDA Gallery is pleased to present the exhibition Gâta Bantu by the artist Yvanovitch Mbaya from September 28 to November 10, 2022. 

        Afropolitan and Moroccan in heart, Yvanovitch took the time of his multiple trans-African travels to mature a minimalist work that he first developed during his teaching at the Beaux-Arts of Brazzaville before emancipating himself from any academicism by a controlled and referenced creolization in the service of highly personal forms and objects of study and representation. 
        
        For the first time in Morocco, this set of significant works of the artist's travels and experiences through aesthetics, material and various fictional narratives of his pan-African experience will be presented by CDA Gallery within its space. 
        `,
      },
      eventImage: "AfficheGataBantu.jpeg",
      gallery: [],
    },
    {
      id: 4,
      name: "Rencontre autour de l’oeuvre de Mohamed ZefZaf",
      date: "May 9, 2019",
      description: {
        fr: `
        Mohammed Zefzaf est un écrivain marocain majeur, né en 1943 à Souq Larb’a et mort en 2001 à Casablanca. Son œuvre est prolifique : poèmes, nouvelles et romans se racontent “tout près”, et “tout contre” les marges de sa ville d’adoption.C.D.A vous invite à vous réunir autour de la matière vivante de ses récits. C’est à dire, autour du récit des ordinaires, du marasme de leurs haines et de leurs désirs, de leurs négociations avec le quotidien, et avec le pain quotidien, ainsi qu’avec la violence et l’oppression qu’ils endurent ou à laquelle ils entreprennent de résister.
  
  La série de traductions des romans de cet écrivain, entreprise par Virgule Editions, mettent la lumière sur l’intérêt crucial de lire et relire cet auteur aujourd’hui, tout comme elles élargissent le champ de ses lecteurs et participent à le situer dans le patrimoine littéraire mondial. 
  
  L’objet de cette rencontre ne sera pas tant de formuler seulement un hommage élogieux à l’homme -qui le mérite sans aucun doute- mais de faire raisonner son œuvre avec les problèmes posés à la littérature, ainsi qu’à la traduction contemporaines. Le débat sera donc ouvert, et nous engagerons la discussion sur ce que l’art d’écrire de Zefzaf provoque lorsque mis en résonance avec ce que la littérature marocaine prend en charge de représenter aujourd’hui. De cela Zefzaf avait une vision lucide, qu’il formulait ainsi pour provoquer ses successeurs :
  
   “Écrire c’est une responsabilité, cette génération d’expérimentation, je ne la comprends pas: Ils écrivent des hallucinations incompréhensibles. L’écriture est le fruit d’une lecture profonde, et du contact avec la vie. L’écrivain doit voyager, voir le monde, côtoyer les gens, écouter leurs douleurs et leurs problèmes, et c’est à ce moment qu’il se met à écrire.”
  
  (Interview en arabe réalisée par Abdelhamid Chakib – Littihad Lichtiraki – 1er septembre 1995.) 
  
  Pour animer cette rencontre, nous aurons l’honneur d’accueillir :
  
  – Rachid Khaless, Romancier, et éditeur à Virgule éditions.
  –  Kenza Sefrioui, critique littéraire.
      `,
        eng: ``,
      },
      eventImage: "59305926_2704386042968521_8893956459092508672_n.jpg",
      gallery: [],
    },
    {
      id: 1,
      name: "LE MAROC NOIR – RENCONTRE AVEC CHOUKI HAMEL",
      date: "Mai 29, 2019",
      description: {
        fr: `
        “L’histoire de l’esclavage au Maroc ne peut pas être examinée séparément de la terreur raciale et des horreurs de la pratique mondiale de l’esclavage. Pour les communautés telles que les noirs au Maroc, les problèmes de l’esclavage, des préjugés culturels et raciaux, et de la marginalisation de catégories de populations ne sont ni étrangers, ni introduits par le discours colonial européen” Chouki El Hamel
  
  Comment confronter l’histoire de l’esclavage et de la production de catégories raciales au Maroc ? L’ouvrage prolifique de Chouki El Hamel, et son effort méthodique de documentation tentent d’adresser cette question, longtemps tabou dans le champ académique marocain. 
  
  L’imaginaire national du Maroc repose sur le mythe de l’arabité et de l’unicité de l’appartenance à la religion musulmane. Néanmoins le hors-champs de la construction nationale est constitué de processus d’identification, de racialisation, de subordination et d’asservissement, passés sous silence. L’histoire des  populations noires marocaines est donc ainsi toujours un point aveugle. 
  
  L’ouvrage de Chouki El Hamel “Le Maroc Noir, une histoire de l’esclavage, de la race et de l’islam” est une démonstration méthodique qui réfute l’hypothèse dominante selon laquelle l’esclavage au Maroc  était un asservissement bénin, tempéré par des régulations d’ordre juridique, religieux et coutumier. Il constitue ainsi un apport considérable à l’historiographie de l’Afrique et des mouvements diasporiques transsahariens. Il entend donner l’élan à une recherche académique qui renseigne comparativement les processus de production de frontières raciales à l’intérieur du continent, ainsi que la subordination de populations à d’autres.  
  
   L’équipe de l’espace CDA est donc très heureuse d’accueillir Chouki EL Hamel, historien et professeur émérite à l’Université d’Arizona (Etats-Unis), Anne-Marie Teeuwissen traductrice de l’ouvrage “Black Morocco, a History of slavery, race and islam”, ainsi que Mehdi Alioua, sociologue, spécialiste des migrations transsahariennes pour discuter de ce travail académique  pionnier. `,
        eng: ``,
      },
      eventImage: "marocnoir.jpg",
      gallery: [
        "marocnoir1.jpg",
        "marocnoir2.jpg",
        "marocnoir3.jpg",
        "marocnoir4.jpg",
        "marocnoir5.jpg",
      ],
    },
    {
      id: 2,
      name: "LES ATELIERS EN CARTON DE RACHID L’MOUDDENE",
      date: "August 2, 2019",
      description: {
        fr: `
        Le CDA vous propose un atelier original pour explorer le potentiel créatif du carton. Pendant ce workshop, apprenez à réaliser un objet aussi utile que design et repartez avec ! Encadrés par l’artiste plasticien et designer Rachid l’Mouddene, ces rencontres s’adressent et s’adaptent à tous les âges.
  
  Ateliers pour enfants (7-10 ans) : Accompagnés par Rachid l’Mouddene, les enfants découvrent comment monter un projet simple, de l’idée originale jusqu’à la confection. Ces ateliers sont l’occasion d’éveiller et exercer leur expression plastique.
  
  Ateliers pour adolescents et adultes : Encadrés par l’artiste, apprenez à réaliser une œuvre en carton entièrement pratique et fonctionnelle. Chaque semaine, un atelier est dédié à un objet en particulier ;
  – Une boîte de rangement originale
  – Un cadre design
  – Une boîte de rangement multi tiroirs
  Peu importe l’âge, les rencontres introduisent une réelle réflexion aux enjeux écologiques et à l’importance du recyclage dans le design. Le carton séduit pour sa sobriété et sa résistance. Ce matériau aux multiples avantages, à la fois souple, pratique et facile d’accès, est une immense source d’inspiration.
        
        `,
        eng: ``,
      },
      eventImage: "/cardboard.jpg",
      gallery: [
        "/cardboard1.jpeg",
        "/cardboard2.jpeg",
        "/cardboard3.jpeg",
        "/cardboard4.jpeg",
        "/cardboard5.jpeg",
        "/cardboard6.jpeg",
      ],
    },
    {
      id: 3,
      name: "ARTISTS BOOK : POINT IN TIME",
      date: "September 28, 2019",
      description: {
        fr: `
        Artist’s book: Points in time.
  
        In ‘Points in time’ Bowles distills the very essence of Moroccan culture in a series of short insightful vignettes. A journey through the Moroccan centuries, pausing at points.
        
        Fenna Zamouri was commissioned by Stichting De Roos, a bibliophile publisher (Netherlands), to design an artist’s book, which is published in a small and numbered edition.
        This artist’s book is a graphical reflection of an ode to the arabesque, translated in numerals and illustrations. All derived from arabesque patterns, where each pattern represents a number and where each element in the arabesque represents a point in time.
        
        
        `,
        eng: ``,
      },
      eventImage: "intime.jpeg",
      gallery: [
        "017f1fa0-696e-41a4-8f44-6c3ee859015c.jpeg",
        "26beb5b9-e30d-49f4-8553-fb87a876552c.jpeg",
        "043f59ed-be40-4cda-9abf-e8691f9d2902.jpeg",
        "61a594f2-9cb8-42e5-b8fa-5d70bc590847.jpeg",
        "dfe00021-0c13-4877-a398-226dae79fb57.jpeg",
        "fe4e88cb-888c-4437-89ba-e8643b3ce120.jpeg",
        "64df4151-6da7-41b7-a5e3-9d184622c8a4.jpeg",
      ],
    },
    {
      id: 5,
      name: "CASA PALIMPSESTE",
      date: "4 - 10 Décembre 2019",
      description: {
        fr: `
        LES ATELIERS DU MUSÉE COLLECTIF DE CASABLANCA
  
  Comment se représenter une ville à travers les expériences singulières de ses habitants ? Quels sont les ressentis que suscite la ville de Casablanca ? À quoi ressemblent les territoires façonnés par l’imaginaire ? 
  
  Les fondatrices de la maison d’édition indépendante Sun/Sun proposent d’encadrer des ateliers participatifs afin d’explorer collectivement les écritures contemporaines de l’intime et du souvenir (sous leur forme littéraire, poétique, photographique ou graphique). En se basant sur l’évocation de leurs sentiments et de leurs représentations – matière première des ateliers -, les participant-e-s auront l’occasion de s’atteler à l’écriture de textes sous différentes formes (fiction, témoignage, poésie, etc.), représentations graphiques (la photo, le dessin, le collage, créations sonores ou vidéo.). Ce sera l’étape de récolte d’informations et de données.
  
   
  
  Puis, le groupe travaillera ensemble à la mise en forme éditoriale de ces contenus autour de l’idée de carte sensible : une carte poétique constituée non plus de frontières et de chiffres mais de textes, d’images, de sons, qui donneront à voir un autre visage de Casa, entre réalité et fiction. Faire dialoguer ces différentes représentations en une écriture commune.
      `,
        eng: ``,
      },
      eventImage: "visuel-Casa-Palimpseste-1-768x512 (2).png",
      gallery: ["/CASA--scaled.jpg", "/CASA1-scaled.jpg", "/CASA2-scaled.jpg"],
    },
  ]);
  const backupEventsData = [
    {
      id: 6,
      name: "Gâta Bantu ",
      date: "Du 28 septembre au 10 novembre 2022",
      description: {
        fr: `CDA Gallery est heureuse de présenter l'exposition Gâta Bantu de l'artiste Yvanovitch Mbaya du 28 septembre au 10 novembre 2022. 

        Afropolitain et Marocain de cœur, Yvanovitch a pris le temps de ses multiples voyages transafricains pour mûrir une œuvre minimaliste qu’il développe d’abord lors de ses enseignements aux Beaux-arts de Brazzaville avant de s’émanciper de tout académisme par une créolisation maîtrisée et référencée au service de formes et d’objets d’étude et de représentation hautement personnels. 
        
        Pour la première fois au Maroc, cet ensemble d’œuvres significatives des voyages et des expériences de l’artiste à travers l’esthétique, la matière et divers récits fictionnels de son expérience panafricaine sera présenté par CDA Gallery au sein de son espace. 
     `,
        eng: ``,
      },
      eventImage: "AfficheGataBantu.jpeg",
      gallery: [],
    },
    {
      id: 4,
      name: "Rencontre autour de l’oeuvre de Mohamed ZefZaf",
      date: "May 9, 2019",
      description: {
        fr: `
        Mohammed Zefzaf est un écrivain marocain majeur, né en 1943 à Souq Larb’a et mort en 2001 à Casablanca. Son œuvre est prolifique : poèmes, nouvelles et romans se racontent “tout près”, et “tout contre” les marges de sa ville d’adoption.C.D.A vous invite à vous réunir autour de la matière vivante de ses récits. C’est à dire, autour du récit des ordinaires, du marasme de leurs haines et de leurs désirs, de leurs négociations avec le quotidien, et avec le pain quotidien, ainsi qu’avec la violence et l’oppression qu’ils endurent ou à laquelle ils entreprennent de résister.
  
  La série de traductions des romans de cet écrivain, entreprise par Virgule Editions, mettent la lumière sur l’intérêt crucial de lire et relire cet auteur aujourd’hui, tout comme elles élargissent le champ de ses lecteurs et participent à le situer dans le patrimoine littéraire mondial. 
  
  L’objet de cette rencontre ne sera pas tant de formuler seulement un hommage élogieux à l’homme -qui le mérite sans aucun doute- mais de faire raisonner son œuvre avec les problèmes posés à la littérature, ainsi qu’à la traduction contemporaines. Le débat sera donc ouvert, et nous engagerons la discussion sur ce que l’art d’écrire de Zefzaf provoque lorsque mis en résonance avec ce que la littérature marocaine prend en charge de représenter aujourd’hui. De cela Zefzaf avait une vision lucide, qu’il formulait ainsi pour provoquer ses successeurs :
  
   “Écrire c’est une responsabilité, cette génération d’expérimentation, je ne la comprends pas: Ils écrivent des hallucinations incompréhensibles. L’écriture est le fruit d’une lecture profonde, et du contact avec la vie. L’écrivain doit voyager, voir le monde, côtoyer les gens, écouter leurs douleurs et leurs problèmes, et c’est à ce moment qu’il se met à écrire.”
  
  (Interview en arabe réalisée par Abdelhamid Chakib – Littihad Lichtiraki – 1er septembre 1995.) 
  
  Pour animer cette rencontre, nous aurons l’honneur d’accueillir :
  
  – Rachid Khaless, Romancier, et éditeur à Virgule éditions.
  –  Kenza Sefrioui, critique littéraire.
      `,
        eng: ``,
      },
      eventImage: "59305926_2704386042968521_8893956459092508672_n.jpg",
      gallery: [],
    },
    {
      id: 1,
      name: "LE MAROC NOIR – RENCONTRE AVEC CHOUKI HAMEL",
      date: "Mai 29, 2019",
      description: {
        fr: `
        “L’histoire de l’esclavage au Maroc ne peut pas être examinée séparément de la terreur raciale et des horreurs de la pratique mondiale de l’esclavage. Pour les communautés telles que les noirs au Maroc, les problèmes de l’esclavage, des préjugés culturels et raciaux, et de la marginalisation de catégories de populations ne sont ni étrangers, ni introduits par le discours colonial européen” Chouki El Hamel
  
  Comment confronter l’histoire de l’esclavage et de la production de catégories raciales au Maroc ? L’ouvrage prolifique de Chouki El Hamel, et son effort méthodique de documentation tentent d’adresser cette question, longtemps tabou dans le champ académique marocain. 
  
  L’imaginaire national du Maroc repose sur le mythe de l’arabité et de l’unicité de l’appartenance à la religion musulmane. Néanmoins le hors-champs de la construction nationale est constitué de processus d’identification, de racialisation, de subordination et d’asservissement, passés sous silence. L’histoire des  populations noires marocaines est donc ainsi toujours un point aveugle. 
  
  L’ouvrage de Chouki El Hamel “Le Maroc Noir, une histoire de l’esclavage, de la race et de l’islam” est une démonstration méthodique qui réfute l’hypothèse dominante selon laquelle l’esclavage au Maroc  était un asservissement bénin, tempéré par des régulations d’ordre juridique, religieux et coutumier. Il constitue ainsi un apport considérable à l’historiographie de l’Afrique et des mouvements diasporiques transsahariens. Il entend donner l’élan à une recherche académique qui renseigne comparativement les processus de production de frontières raciales à l’intérieur du continent, ainsi que la subordination de populations à d’autres.  
  
   L’équipe de l’espace CDA est donc très heureuse d’accueillir Chouki EL Hamel, historien et professeur émérite à l’Université d’Arizona (Etats-Unis), Anne-Marie Teeuwissen traductrice de l’ouvrage “Black Morocco, a History of slavery, race and islam”, ainsi que Mehdi Alioua, sociologue, spécialiste des migrations transsahariennes pour discuter de ce travail académique  pionnier. `,
        eng: ``,
      },
      eventImage: "marocnoir.jpg",
      gallery: [
        "marocnoir1.jpg",
        "marocnoir2.jpg",
        "marocnoir3.jpg",
        "marocnoir4.jpg",
        "marocnoir5.jpg",
      ],
    },
    {
      id: 2,
      name: "LES ATELIERS EN CARTON DE RACHID L’MOUDDENE",
      date: "August 2, 2019",
      description: {
        fr: `
        Le CDA vous propose un atelier original pour explorer le potentiel créatif du carton. Pendant ce workshop, apprenez à réaliser un objet aussi utile que design et repartez avec ! Encadrés par l’artiste plasticien et designer Rachid l’Mouddene, ces rencontres s’adressent et s’adaptent à tous les âges.
  
  Ateliers pour enfants (7-10 ans) : Accompagnés par Rachid l’Mouddene, les enfants découvrent comment monter un projet simple, de l’idée originale jusqu’à la confection. Ces ateliers sont l’occasion d’éveiller et exercer leur expression plastique.
  
  Ateliers pour adolescents et adultes : Encadrés par l’artiste, apprenez à réaliser une œuvre en carton entièrement pratique et fonctionnelle. Chaque semaine, un atelier est dédié à un objet en particulier ;
  – Une boîte de rangement originale
  – Un cadre design
  – Une boîte de rangement multi tiroirs
  Peu importe l’âge, les rencontres introduisent une réelle réflexion aux enjeux écologiques et à l’importance du recyclage dans le design. Le carton séduit pour sa sobriété et sa résistance. Ce matériau aux multiples avantages, à la fois souple, pratique et facile d’accès, est une immense source d’inspiration.
        
        `,
        eng: ``,
      },
      eventImage: "/cardboard.jpg",
      gallery: [
        "/cardboard1.jpeg",
        "/cardboard2.jpeg",
        "/cardboard3.jpeg",
        "/cardboard4.jpeg",
        "/cardboard5.jpeg",
        "/cardboard6.jpeg",
      ],
    },
    {
      id: 3,
      name: "ARTISTS BOOK : POINT IN TIME",
      date: "September 28, 2019",
      description: {
        fr: `
        Artist’s book: Points in time.
  
        In ‘Points in time’ Bowles distills the very essence of Moroccan culture in a series of short insightful vignettes. A journey through the Moroccan centuries, pausing at points.
        
        Fenna Zamouri was commissioned by Stichting De Roos, a bibliophile publisher (Netherlands), to design an artist’s book, which is published in a small and numbered edition.
        This artist’s book is a graphical reflection of an ode to the arabesque, translated in numerals and illustrations. All derived from arabesque patterns, where each pattern represents a number and where each element in the arabesque represents a point in time.
        
        
        `,
        eng: ``,
      },
      eventImage: "intime.jpeg",
      gallery: [
        "017f1fa0-696e-41a4-8f44-6c3ee859015c.jpeg",
        "26beb5b9-e30d-49f4-8553-fb87a876552c.jpeg",
        "043f59ed-be40-4cda-9abf-e8691f9d2902.jpeg",
        "61a594f2-9cb8-42e5-b8fa-5d70bc590847.jpeg",
        "dfe00021-0c13-4877-a398-226dae79fb57.jpeg",
        "fe4e88cb-888c-4437-89ba-e8643b3ce120.jpeg",
        "64df4151-6da7-41b7-a5e3-9d184622c8a4.jpeg",
      ],
    },
    {
      id: 5,
      name: "CASA PALIMPSESTE",
      date: "4 - 10 Décembre 2019",
      description: {
        fr: `
        LES ATELIERS DU MUSÉE COLLECTIF DE CASABLANCA
  
  Comment se représenter une ville à travers les expériences singulières de ses habitants ? Quels sont les ressentis que suscite la ville de Casablanca ? À quoi ressemblent les territoires façonnés par l’imaginaire ? 
  
  Les fondatrices de la maison d’édition indépendante Sun/Sun proposent d’encadrer des ateliers participatifs afin d’explorer collectivement les écritures contemporaines de l’intime et du souvenir (sous leur forme littéraire, poétique, photographique ou graphique). En se basant sur l’évocation de leurs sentiments et de leurs représentations – matière première des ateliers -, les participant-e-s auront l’occasion de s’atteler à l’écriture de textes sous différentes formes (fiction, témoignage, poésie, etc.), représentations graphiques (la photo, le dessin, le collage, créations sonores ou vidéo.). Ce sera l’étape de récolte d’informations et de données.
  
   
  
  Puis, le groupe travaillera ensemble à la mise en forme éditoriale de ces contenus autour de l’idée de carte sensible : une carte poétique constituée non plus de frontières et de chiffres mais de textes, d’images, de sons, qui donneront à voir un autre visage de Casa, entre réalité et fiction. Faire dialoguer ces différentes représentations en une écriture commune.
      `,
        eng: ``,
      },
      eventImage: "visuel-Casa-Palimpseste-1-768x512 (2).png",
      gallery: ["/CASA--scaled.jpg", "/CASA1-scaled.jpg", "/CASA2-scaled.jpg"],
    },
  ];

  return (
    <div>
      <Layout>
        <h1 className="headingPrimary">Events</h1>
        <ul className="browser"></ul>
        <input
          onChange={(e) => searchInput(e)}
          className="searchEventInput"
          type="text"
          placeholder="Search"
        />
        <section className="eventsContainer">
          {events.length === 0 ? (
            <span className="notFound">Search result not found</span>
          ) : (
            events.map((event) => {
              return <EventBox key={event.id} event={event} />;
            })
          )}
        </section>
      </Layout>
    </div>
  );
};

export default Events;
