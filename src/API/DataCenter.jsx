import React, { createContext, useState } from "react";
export const context = createContext();
// finish the database
export default function DataCenter(props) {
  const [artists, setartists] = useState([
    {
      id: 10,
      name: "YVANOVITCH MBAYA",
      image: "YvanovitchMbaya.jpg",
      artworks: [
        {
          artists: "YVANOVITCH MBAYA",
          title: "Pende Mbangu, circa 1945",
          dimensions: "21 x 13 x 11 cm || 0,20 kg",
          medium: `Masque en bois de bombax taillé Pigment noir, rouge et Kaolin. ||
            Carved bombax wood mask
Black, red and Kaolin pigment.`,
          artwork: "gb1.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Mpeve, 2022",
          dimensions: "245 x 235 cm ",
          medium: `Café, encre de Chine, poudre de charbon
          et papier marouflé sur toile récupérée. ||
          Coffee, Indian ink, charcoal powder and
          paper mounted on recycled canvas.`,
          artwork: "gb24.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Dialogue, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb3.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Tabou, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre sur
          papier velours naturel. ||
          Indian ink, charcoal powder,
          coffee and ink pen on
          natural velvet paper.`,
          artwork: "gb4.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Zimfumu, 2022",
          dimensions: "148 x 260 cm",
          medium: `Café, encre de Chine, poudre de charbon et
          papier marouflé sur toile de jean récupérée.
         || Coffee, Indian ink, charcoal powder and
          paper mounted on recycled canvas.`,
          artwork: "gb23.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Trance, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb5.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Intuition, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb6.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Au-delà, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb7.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "La rue nous fait marcher, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb8.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Antipode, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb9.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Instant présent, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb10.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Au loin, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb11.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Pas de deux, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb12.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Ensorcelé, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb13.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "L’apparato umano, 2022",
          dimensions: "156 x 103 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo à encre sur papier Arches.
         || Indian ink, charcoal powder, coffee
          and ink pen on Arches paper.`,
          artwork: "gb14.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "La descente, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
        ||  Indian ink, charcoal powder,
          coffee and pen on Canson paper.`,
          artwork: "gb15.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Où vers ?, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
          Indian ink, charcoal powder, coffee
          and pen on Canson paper.`,
          artwork: "gb16.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Vide en soit 1, 2022",
          dimensions: "160 x 118 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
         || Indian ink, charcoal powder coffee
          and pen on Canson paper.`,
          artwork: "gb19.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Vide en soit 2, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
         || Indian ink, charcoal powder coffee
          and pen on Canson paper.`,
          artwork: "gb17.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Solus, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
         || Indian ink, charcoal powder coffee
          and pen on Canson paper.`,
          artwork: "gb200.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "Munu, 2022",
          dimensions: "116 x 132 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre
          de charbon, café et stylo à
          encre sur papier Canson. ||
          Indian ink, charcoal powder, coffee
          and ink pen on Canson paper.`,
          artwork: "gb20.jpg",
        },

        {
          artists: "YVANOVITCH MBAYA",
          title: "Ve, 2022",
          dimensions: "118 x 160 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre
          de charbon, café et stylo à
          encre sur papier Canson. ||
          Indian ink, charcoal powder, coffee
          and ink pen on Canson paper.`,
          artwork: "gb21.jpg",
        },
        {
          artists: "YVANOVITCH MBAYA",
          title: "D’une route à l’autre, 2022",
          dimensions: "172 x 203 cm (avec cadre – including frame)",
          medium: `Café, encre de Chine et poudre
          de charbon sur toile récupérée.
         || Coffee, Indian ink and charcoal
          powder on recycled canvas`,
          artwork: "gb22.jpg",
        },
      ],
      biography: {
        fr: `Diplômé en 2013 de l’École Nationale des Beaux-arts de Brazzaville (Congo), Yvanovitch Mbaya poursuit ensuite sa formation à l’Université de Lomé (Togo), spécialité : psychologie de l’art. Parallèlement à ses études institutionnelles, et dès 2011, il devient l’assistant et apprenti de l’artiste Bill Kouélany (Première femme Africaine programmée à la documenta 12, Kassel 2007) qui lui transmet sa science aussi bien théorique que pratique des Arts ainsi que de nombreux conseils qui précisent et enrichissent son engagement plastique et sa discipline de travail. En 2012, son travail singulier est remarqué et apprécié par de nombreux professionnels notamment lors des deux premières éditions des RIAC (les Rencontres Internationales de l’Art contemporain) organisées par les Ateliers SAHM à Brazzaville, il y obtient le prix Goddy Leye pour la peinture qui lui octroie notamment une résidence à la Art Bakery de Douala (Cameroun). En 2013, il participe à l’Atelier Contraste à Brazzaville, puis au Festival Étonnants Voyageurs aux côtés de Frantz Zéphirin, l’un des principaux peintres de l’École Haïtienne.

        Mbaya voyage ensuite à travers le Continent pour poursuivre ses recherches autour des religions traditionnelles sacralisant les éléments aquatiques. Il présente certaines des œuvres issues de cette thématique liée à la figure de Mami Wata et du Vaudou plus généralement au Goethe Institut de Lomé en 2014. En 2015, il décide de s’installer et d’installer son atelier à Casablanca (Maroc). Depuis, il a participé à d’importantes expositions collectives qui ont fait date et marqué les esprits : United Artists (Off 1-54, Marrakech 2020), curatée par Syham Weigant et qui réunissait de manière exhaustive tous les artistes Marocains ; The day after (Abou Dhabi Art Fair, Émirats 2020) curatée par la Star Simon Njami dans un format inédit malgré la crise pandémique ; Le Pinceau de l’intégration (Fondation Sonatel, Off Biennale Dak’art 2022) qui accompagnait le grand retour de la Biennale panafricaine. Gâta Bantu est le premier Solo Show de l’artiste, il réunit un ensemble cohérent d’œuvres inédites spécifiquement pensées et réalisées pour cette exposition événement à la CDA Gallery qui nous permet de rencontrer Yvanovitch Mbaya et son œuvre arrivés à une belle maîtrise et à une grande maturité.
        `,
        eng: `Yvanovitch Mbaya graduated from the École Nationale des Beaux-arts de Brazzaville (Congo) in 2013, then studied at the University of Lomé (Togo) with a concentration in art psychology. Since 2011, in parallel to his institutional studies, he is assistant and apprentice to artist Bill Kouélany — the first African woman invited to participate in documenta 12, Kassel 2007 — who shared her theoretical and practical disciplines of artistic creation with him, offering advice that has defined and enriched his own visual engagement and work discipline. In 2012, Mbaya’s unique work attracted the attention of professionals at the first two editions of RIAC (Rencontres Internationales de l’Art Contemporain), organised by Ateliers SAHM in Brazzaville. He received the Goddy Leye Award for painting and a residency at the Art Bakery in Douala (Cameroon). In 2013, he participated in the Atelier Contraste in Brazzaville, then the Festival Étonnants Voyageurs alongside Frantz Zéphirin, one of the premier painters of the Haitian School.

        Mbaya went on to travel across the continent to conduct research into the sacralisation of water in traditional religious ritual, and presented examples of these works related to the iconic figure Mami Wata and the broader subject of voodoo at Lomé’s Institut Français in 2014. In 2015, he chose to set up his studio in Casablanca (Morocco), and has since participated in significant art events that linger in memory: United Artists (Off 1-54, Marrakech 2020), a group show of nearly all major contemporary artists in Morocco, curated by Syham Weigant; The Day After (Abu Dhabi Art Fair, UAE 2020) curated by the eminent Simon Njami in an unprecedented format due to the reigning pandemic crisis; Le Pinceau de l’intégration (Fondation SONATEL, Off Biennale Dak’Art 2022), the first post-Covid edition of this major pan-African Biennial. Gâta Bantu is the artist’s first solo show, comprising a series of never-before-seen works produced exclusively for this exhibition- event at CDA Gallery. Gâta Bantu offers the exquisite opportunity to discover Yvanovitch Mbaya the artist as well as his works, through the perspective of his mastery of technique and mature artistic practice.`,
      },

      exhibitions: [
        {
          id: "YM",
          year: 2022,
          location: [
            "–«GÂTA BANTU» Solo show, CDA Gallery, Casablanca, Maroc",
            "–«Pinceau de l'intégration» Off de la 14ème biennale de Dak'art, Sénégal",
          ],
        },
        {
          id: "YM1",
          year: 2021,
          location: [
            "–4e Edition R.I.P.O, Ouagadougou, Burkina-Faso",
            "–« Ngelaw », à la Cité des Arts de Chambéry, France",
            "–« Souffles », Arteppes, Annecy, France",
          ],
        },
        {
          id: "YM2",
          year: 2020,
          location: [
            "–Abou Dhabi Art Fair, UAE",
            "–Be Real Black, For Me, Madlozi Art Gallery, Afrique du Sud",
            "–Morceaux Choisis, SEPTIÈME Gallery, Paris, France",
            "–United Artists, off 1-54, Mövenpick à Marrakech, Maroc",
          ],
        },
        {
          id: "YM3",
          year: 2019,
          location: [
            "–Hier est la mémoire d’aujourd’hui, Espace Commines, Paris, France",
            "–Lend me your Dream, Thema Galerie, Casablanca, Maroc",
            "–Biennale Ségou' Art, Ségou, Mali",
          ],
        },
        {
          id: "YM4",
          year: 2018,
          location: [
            "–Bind, Images Contemporaines, OFF Biennale de Dakar, Sénégal",
          ],
        },
        {
          id: "YM5",
          year: 2017,
          location: [
            "–12e Édition de la Nuit des Galeries, Casa Del Arte, Casablanca, Maroc",
            "–3e Édition Afrika, Casablanca, Maroc",
            "–Yaz Karmasi 17, Ankara, Turquie",
          ],
        },
        {
          id: "YM6",
          year: 2016,
          location: [
            "–Art ‘Cop 22, Marrakech, Maroc",
            "–Festival du Cinéma Africain, Khouribga, Maroc",
            "–2ème Arkane Afrika, Casablanca, Maroc",
            "–Bind, Images Contemporaines, OFF Biennale de Dakar, Sénégal",
          ],
        },
        {
          id: "YM7",
          year: 2015,
          location: [
            "–Fête des installations, Fabrique Culturelle des Abattoirs, Casablanca, Maroc",
            "–1e édition Afrika, Cathédrale du sacré Coeur, Casablanca, Maroc",
          ],
        },
        {
          id: "YM8",
          year: 2014,
          location: [
            "–Art pour le développement, Goethe-Institut, Lomé, Togo.",
          ],
        },
        {
          id: "YM9",
          year: 2013,
          location: [
            "–2e Édition R.I.A.C, Les Ateliers Sahm, Institut Français, Brazzaville, Congo",
            "–Génération Y, Les Ateliers Sahm, Brazzaville, Congo",
            "–Festival Etonnants Voyageurs, Les Ateliers Sahm, Brazzaville,Congo",
            "–Contraste à Brazza, Les Ateliers Sahm, Brazzaville, Congo",
          ],
        },
        {
          id: "YM10",
          year: 2012,
          location: [
            "–1e Edition R.I.A.C, Les Ateliers Sahm, Institut Français, Brazzaville, Congo",
          ],
        },
      ],
      cv: "ymcv.pdf",
    },
    {
      id: 9,
      name: "WALID ARDHAOUI",
      image: "walidardhaoui.jpg",
      cv: "",
      artworks: [
        {
          artists: "WALID ARDHAOUI",
          title: "Isthmus",
          dimensions: "140 x 160 cm",
          medium: "Acrylic oil on canvas",
          artwork: "wa1.jpeg",
        },
        {
          artists: "WALID ARDHAOUI",
          title: "The Gamblers 2, 2020",
          dimensions: "130 x 100 cm",
          medium: "Acrylic oil on canvas",
          artwork: "wa5.jpeg",
        },
        {
          artists: "WALID ARDHAOUI",
          title: "The Gamblers 3, 2020",
          dimensions: "145 x 105 cm",
          medium: "Acrylic oil on canvas",
          artwork: "wa4.jpeg",
        },
        {
          artists: "WALID ARDHAOUI",
          title: "Untitled 1",
          dimensions: "140 x 100 cm",
          medium: "Acrylic oil on canvas",
          artwork: "wa2.jpeg",
        },
        {
          artists: "WALID ARDHAOUI",
          title: "Isthmus 2019",
          dimensions: "150 x 75 cm",
          medium: "Acrylic oil on canvas",
          artwork: "wa3.jpeg",
        },
        {
          artists: "WALID ARDHAOUI",
          title: "Blue bag",
          dimensions: "140 x 100 cm",
          medium: "oil on linen",
          artwork: "wa6.jpeg",
        },
        {
          artists: "WALID ARDHAOUI",
          title: "",
          dimensions: "140 x 100 cm",
          medium: "Acrylic oil on canvas",
          artwork: "wa8.jpeg",
        },
      ],
      biography: {
        fr: `Né à Kairouan, Walid Ardhaoui est un passeur de temps et de lieux. En faisant passer clandestinement le spectateur d’un temps à un contretemps, d’un lieu à un non-lieu, il se crée aussi un espace de forces, de sensations mais aussi de doutes entre la toile et le regardeur. Walid est un flâneur. Après son café du matin, il arpente les rues et attend la conversation. Mais pas n’importe quelle conversation, il espère voir les mots de ceux qui ne parlent pas, de ceux pour qui on jette le regard mais ne le donne pas. Ceux qui sont à la marge, les laisser pour compte, les sur le bord, tous ceux qui sont dans l’autre ville, de l’autre côté du rétroviseur… Ceux qu’on dit « de la rue », qu’on voit mais qu’on ne regarde jamais. Sans tomber dans le misérabilisme, c’est avec une sensibilité toute particulière que sont soulevées les questions les plus vives de nos sociétés ; le phénomène migratoire, la misère sociale, l’attente d’un départ, le voeu pudique d’un salut plus grand et plus juste et l’écume de rêves avortés. En sautant du rêve à la rêverie, du tendre imaginaire de l’enfant à l’enfant qui a grandi trop vite et compris trop de choses, on affronte les toiles de Walid… car oui elles s’affrontent. Non sans un certain embarras lorsqu’on croise des regards qui forcent à la proximité. Aussi, y’a-t-il un arrière-plan, où sont dessinées au crayon des fusées, des maisons, des figures du répertoire de l’enfant. Mais est-ce bien un arrière-plan ou un arrière monde ? Plus proche, se dressent des scènes encastrées dans le paysage de l’enfance. Des scènes de l’urbain « ordinaire », des figures de la Ville, de l’Histoire et de la rue. Ce sont des clichés volés rendus dans une précision photographique et dans un hyperréalisme vitaliste, immersif qui vient assécher le rêve. Dans des tons vivaces, et dans un vrai souci du détail, le trait fin et léger, Walid se joue des dimensions pour faire brèche, créer un trou, un passage dans le temps. Cette ruse de la structure de la toile fédère alors un chaos où le mouvement immobile des scènes se déploie sous nos yeux. Le regardeur échoue deux fois. Il échoue à lire une toile qui rend visible mais ne décrit rien. Et il échoue à tenter de ne pas en devenir acteur.
        —Aïda Omary, Critique d'art`,
        eng: `Born in Kairouan, Walid Ardhaoui moves through time and place. A sort of smuggler, moving the viewer from the welcome to the unwelcome, from a place to a non-place, as he creates a space of forces, sensations, and doubts between the canvas and the viewer.
        Walid goes for walks. After his morning coffee, he strolls through the streets and waits for conversation. But not just any kind of conversation, he hopes to see the words of people who don’t speak, people we might notice but never really see. The ones who are pushed to the margins, in the other city, on the other side of the rear-view mirror…The “street” people, we cross their paths but never stop to look at them.
        With acute sensitivity, and without a trace of miserabilism, the artist evokes the most urgent questions of our societies: the phenomenon of migration, social destitution, the (im)possibility of departure, the modest hope of a greater and more just salvation, and the residue of broken dreams.
        Leaping from dream to daydream, from the tender imagination of a child to one who was grown up too fast and understood too many things, we confront Walid’s paintings…because yes, it is a confrontation. At times awkward, as different points of view are forced into proximity.
        There is also a background, where rockets, houses, and characters from a child’s repertory are sketched in pencil. Il it a background, though, or rather a back-world? On closer view, we discover scenes set into the landscape of childhood. Scenes of the urban “ordinary”, characters from the city, from history, and from the street. Stolen images rendered with photographic precision in a vitalist and immersive hyperrealism, which turns dream to dust.
        With vivid tones, fine lines, and a high degree of detail, Walid plays with dimensions to make a breach, creating a gap, a path through time. This ruse of the painting’s structure unites a chaos in which the immobile motion of scenes unfolds before our eyes.
        The viewer fails twice. Failing to read a canvas that makes things visible but describes nothing. And failing in any attempt to not become part of the story.  
        —Written by Aïda Omary and translated by Kristi Jones`,
      },
      exhibitions: [],
    },
    {
      id: 8,
      name: "FRANÇOIS BEAURAIN",
      image: "beaurain.jpg",
      cv: "",
      artworks: [
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-01.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger) 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-02.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger) 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-03.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-09.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-10.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-11.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-13.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Colisée (Marrakech), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-26.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger), 7 éditions",
          dimensions: "50 x 103 cm",
          medium: "",
          artwork: "Francois_Beaurain-04.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Rif (Casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-05.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Avenida (Tétouan), 7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-06.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Teatro Espagñol (Tétouan), 7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-07.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Ciné-Palace & Lux (Marrakech),7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-08.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-12.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Marhaba (Azemmour), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-14.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Victoria (Tétouan), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-15.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Shéhérazade (Casablanca), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-16.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Rialto (Casablanca), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-17.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Kawakib (Rabat), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-18.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Cinémathèque de Tanger - Rif (Tanger), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-19.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Al Malaki (Casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-20.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Royal (Oujda), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-21.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Mauritania (Tanger), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-22.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: " Ritz (casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-23.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Lynx (Casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-24.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "ABC (Meknès). 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-25.jpg",
        },

        {
          artists: "FRANCOIS BEAURAIN",
          title: "Colisée (Marrakech), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-27.jpg",
        },
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Colisée (Marrakech), 7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-28.jpg",
        },
      ],
      biography: {
        fr: `
        Après avoir travaillé plus de dix ans dans la lutte contre le changement climatique, François quitte tout et part vivre au Liberia en 2013. C’est le déclic. D’abord reconnu pour sa maîtrise du gif animé qui lui permet de laisser libre court à son imagination, il diversifie par la suite sa pratique photographique. 

Parfois documentaire, souvent personnelle, il utilise la photographie comme un outil au service de ses passions. Parmi celles-ci, une revient comme un fil rouge : les cinémas africains. A son arrivée au Liberia, il découvre Nollywood (cinéma nigérian) et ses dérivés et n’a de cesse de raconter les formes et aventures du cinéma en Afrique. Son dernier projet qui est aussi son premier projet à long terme, Cinémaghrib, raconte l’épopée des salles et des publics au Maroc tout au long du XXe siècle.

François Beaurain est né en 1976 et vit et travaille à Rabat (Maroc). Photographe autodidacte, il est titulaire d’une maîtrise de physique et d’un doctorat de chimie. Ses travaux photographiques ont été exposés, entre autres, au Guggenheim Bilbao (2015), à LagosPhoto (2015 et 2017), Addisfoto (2018), Arles (2015 et 2020) et
Circulations (2016).
        `,
        eng: "",
      },
      exhibitions: [],
    },
    {
      id: 0,
      name: "FATIMA LOUARDIRI ",
      textColor: "white",
      cv: "",
      image: "fatimalouardiri.jpg",
      artworks: [
        {
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8262.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8255.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8257.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8268.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Chikhate 1/5",
          dimensions: "41 x 29 cm",
          medium: "Gouache sur papier",
          artwork: "213A8372.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Chikhate 2/5",
          dimensions: "31,5 x 21,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8369.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Chikhate 3/5",
          dimensions: "41 x 29 cm",
          medium: "Gouache sur papier",
          artwork: "213A8366.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Chikhate 4/5",
          dimensions: "35,5 x 26,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8354.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Chikhate 5/5",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8351.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 1/9",
          dimensions: "23,5 x 31,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8339.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 2/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8336.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 3/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8333.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 4/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8330.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 5/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8327.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 6/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8324.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 7/9",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8283.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 8/9",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8277.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 9/9",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8272.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 1/13",
          dimensions: "23,5 x 31,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8288.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 2/13",
          dimensions: "23,5 x 31,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8298.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 3/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8286.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 4/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8295.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 5/13",
          dimensions: "35,5 x 25,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8285.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 6/13",
          dimensions: "35,5 x 25,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8301.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 7/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8308.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 8/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8315.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 9/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8348.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 10/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8319.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 11/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8357.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 12/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8360.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "L'couple 13/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8363.jpg",
        },
      ],
      biography: {
        fr: `Fatima Louardiri est née en 1956 à Salé, un des plus grands centres de tissage du pays. Enfant elle tenait les pinceaux de son père, Ahmed Louardiri, un des pionniers de la peinture dite naïve. Ses tableaux reflètent l’héritage traditionnel du tissage et de la broderie, resté vivace à Salé. Elle a fait sa première exposition à Rabat, en 1974.


      Fatima Louardiri a développé une œuvre qui s’affirme avec relief. de ses scènes de la vie quotidienne et familiale, il se dégage une étonnante fraîcheur. L’artiste y montre sa préférence pour les portraits de groupe ou la femme tient la première place. Femme de la ville ou de la campagne, celle-ci est saisie dans le geste qui symbolise sa fonction. En privilégiant les figures féminines, Fatima Louardiri fortifie sans doute son désir de reconnaissance, mais elle se donne surtout un élément pictural qui oriente son œuvre vers le fantastique.
      
      Rien n’est plus irréel, en effet, que ces scènes de genre. La configuration d’une famille, les portraits de femmes, sont loin de se réduire à un aspect identifiable de la réalité. Ils ont la grâce d’ un monde rêvé, où tout est apaisement et harmonie. Avec une application ingénue, Fatima Louardiri décrit la parure des femmes, à laquelle le motif des tapis fournit le contrepoint. Le décor, purement imaginaire, s’organise en gerbes. Les couleurs, par la subtilité de leur distribution, déterminent également la signification des tableaux : le charme des récits fabuleux y ressuscite dans toute son intensité. Fatima Louardiri réconcilie le rêve et la réalité`,
        eng: ``,
      },
      exhibitions: [
        {
          id: 0,
          artistId: 0,
          descriptionTitleFr: "Crime et Ornement",
          artistImage: "fatimalouardiri.jpg",
          descriptionTitleEng: "Crime and Ornament",
          descriptionAuthorFr: "Syham Weigant, Curatrice",
          descriptionAuthorEng: "Syham Weigant, Curator",
          textColor: "white",
          paragraphEng: ``,
          featuredArt: [
            {
              artists: "Fatima Louardiri",
              title: "Mariées 4/9",
              dimensions: "23,5 x 33,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8330.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 5/9",
              dimensions: "23,5 x 33,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8327.jpg",
            },
          ],
          quote:
            "« C’est une question de temps. » Adolf Loos, Ornement et Crime. 1908.",
          paragraphFr: `
          De quelles essences se constituent les Arts? Sacrées ou profanes ? Séculières ou régulières ?

Ce champ nimbé d’un certain mystère pour ne pas écrire d’un mystère certain est pourtant consubstantiel à l’homme et apparaît quasiment par coïncidence à l’humanité telle que nous la reconnaissons aujourd’hui. Celle-ci s’est dissociée de l’ensemble du règne animal pour être d’autres possibles qui s’ouvrent à elle peu à peu. L’apparition du sacré est concomitante et enrichit notre espèce d’un supplément : l’âme...

C’est une métaphysique qui poursuit les prémices de différenciation à l’œuvre chez ces premiers Hommes en quête de sens et bientôt d’un destin.





et progressivement civilisation nécessite de constituer petit à petit cet état de droit davantage propice à la survie puis à l’épanouissement du genre dit humain. Celui-ci s’énonce dans une irréductibilité binaire – ou manichéisme originel, pourrions-nous écrire... – le licite et l’illicite, le permis et l’interdit, ce fameux Totem et Tabou freudien ! Un préalable irréfragable et indispensable au moment de définir cette humanité en plein processus d’individuation et de sociabilité avec son prochain dont la reconnaissance et l’acception est soumise à ce jus cogens en cours de formalisation. Et voici l’art et le sacré encore une fois associés et ce dès l’origine ! Puisque de manière très simplifiée, ce Totem qui crée et ordonne communauté est surtout in fine la première tentative de représentation du sacré.

Du Totem pré-historique et animiste au désenchantement progressif du monde qui rationalise peu à peu les croyances humaines par la primauté en marche des sciences explicatives de quelques mystères ancestraux qui confèrent aux religions une abstraction spirituelle de plus en plus immatérielle, il faudra plusieurs évolutions de tout type.





En revanche, concernant l’autre élément du couple sacré élémentaire, le Tabou, il est intéressant de noter qu’il reste encore aujourd’hui moins sensible aux changements civilisationnels divers et variés que notre espèce aura expérimentés.

Et l’art dans tout cela ? D’essence évidemment humaine avant tout, ses expressions seront variablement considérées selon les temps, les territoires et les sociétés comme affiliées plutôt aux Totems ou plutôt aux Tabous.

L’Islam par exemple qui fonde une part prépondérante dans notre culture nationale marocaine, est réputé interdire la représentation qui forme pourtant une composante essentielle des arts, cette particularité plastique appelée aniconisme a ainsi jusqu’aux époques récentes dites modernes, permis et encouragé des arts plutôt décoratifs qui sont l’œuvre par excellence de la figure de l’artisan plutôt que celle de l’artiste.

L’art arabo-musulman en général est donc plutôt celui de la calligraphie ou d’une abstraction





préférablement géométrique voire parfois avec quelque symbolisme végétal. Ce sont ces fameuses arabesques, toutes en volutes d’entrelacs et de rinceaux qui forment un art du motif voué à une infinité de reproductions sérielles du même.

Un art du trop-plein plutôt que du vide qui pourrait nous interroger sur cette Horror Vacui particulièrement fustigée par Adolf Loos, chantre d’un modernisme réactionnaire, aux Arts nouveaux puis décoratifs (mouvements où l’on retrouve cet intérêt pour le motif végétal, puis géométrique) et qui prône minimalisme et dépouillement. Son célèbre essai à ce propos ne laisse aucun doute quant à ses théories, puisque pour lui : l’ornement est un crime! C’est-à-dire notamment une perte de temps et d’énergie aussi futile que dispendieuse des ressources humaines, un archaïsme à rejeter totalement pour étrenner la modernité.

Et c’est justement à l’aune de cet antagonisme dialectique et manichéen qu’il me plaît d’aborder l’œuvre de la peintre dite « naïve » Fatema Louardiri.



Une œuvre paradoxale si l’on en croit ma longue introduction contextuelle en ce qu’elle concentre dans son sujet et dans sa forme, ces deux interdits « criminels » que sont l’aniconisme musulman ainsi que le trop-plein ornemental décrié de la modernité.

En effet, dans ses œuvres, l’artiste use d’un répertoire formel figuratif à travers sa représentation de scénettes de la vie quotidienne, ou de personnages généralement féminins qui sans être à proprement parler réalistes demeurent toutefois parfaitement reconnaissables. Des choix plastiques dont je doute fortement de la « fortuité » et que l’on peut considérer à l’aune des choix figuratifs opérés par les miniaturistes persans et dûment réfléchis pour permettre l’illustration tout en respectant les préceptes aniconiques de l’Islam. Leur représentation à l’instar de notre Fatema Louardiri se fait davantage poétique que mimétique et permet de réaliser d’une certaine façon cette abstraction exigée du Canon. Cela grâce notamment, à l’absence de perspective, et donc de hiérarchisation entre le Sujet et l’arrière- plan, l’absence également des règles du clair-obscur



ivent notamment ses sujets d’effets d’ombre, de silhouette ou de reflets, et qui refusent là-encore par cela la hiérarchisation des couleurs qui devraient être traitées différemment en fonction du plan où elles se situent par des éclats plus ou moins atténués. Or Fatema Louardiri emploie partout sur l’espace de sa toile ou de son papier des couleurs vives et en aplats sans jamais les estomper ainsi que l’exigerait une représentation réellement figurative ou mimétique du réel. Enfin elle use d’un sens du détail uniforme à l’ensemble de ses Objets, qu’il s’agisse de ses personnages, de leurs costumes particulièrement riches et foisonnants, ou encore de ses arrière-plans ornementaux qui ne laissent aucune place au vide !

L’artiste Fatema Louardiri serait donc de par sa pratique « criminelle » doublement fautive ou « hors la loi »... De par sa figuration démiurgique qui, en nous créant des univers plastiques, abandonne toute humilité pour proclamer son être et sa liberté. Et également de par la dispersion de son temps en futilité, c’est-à-dire en enluminures décoratives et





inutiles plutôt qu’en productivité de ces fameux biens qualifiés désormais d’essentiels...

Elle poursuit en cela, l’héritage paternel qui, lui aussi, s’émancipera doublement de l’utilité et de la nécessité telles que l’envisagent communément les masses, autant populaires que dirigeantes mais en raison d’intérêts divergents...

Ahmed Louardiri est en effet ouvrier agricole attaché aux jardins maraichers jouxtant la ville de Salé. Et lorsque sa jeune fille, Fatema dont il est question ici, lui apportait son casse-croûte à l’heure du déjeuner, elle s’émerveillait toujours de ce petit coin en retrait qui mobilisait le plus le temps et l’énergie de ce père pourtant « naïf » et démuni. Un temps pour rien, c’est-à-dire non rémunéré et là-encore non producteur d’essentialité, pendant lequel il paysageait en secret un jardin ornemental et fleuri... Et cela par goût et par envie de beauté,





et par ce supplément d’âme distinctif et révélateur de notre humanité...

Plus tard, Ahmed Louardiri aggravera, ou doublera, lui-aussi ce péché mignon qu’Adolf Loos qualifie de criminalité, puisqu’il fera peinture et représentation de ce jardin secret...

Alors, la question de l’atavisme familial mériterait d’être posée... Fatema serait-elle artiste par hérédité ? Bien sûr qu’elle l’est, tout comme son père, pleinement et totalement héritière des généalogies de toute l’humanité. Celle-là même qui apparaît avant l’Histoire par distinction au règne des vivants, lorsqu’elle s’invente des arts, non évidemment essentiels à son être, peut-être, mais consubstantiels de cette âme tellement humaine malgré son invisibilité et son immatérialité et qui ajoute au profane, ce mystère du sacré...





Et l’art, comme toute production exclusivement humaine a depuis toujours et encore interrogé en permanence tous nos manichéismes en évaluation et redéfinition permanentes, parce qu’il se nourrit autant des Totems que de ces fameux tabous...

Ce faisant, il prend tous les risques de la liberté à laquelle l’Homme s’est condamné en quittant le règne de l’animalité, y compris ceux de déplaire, voire d’être criminalisé.

Et c’est justement de cette liberté d’être et de créer que Fatema Louardiri est l’héritière revendiquée.

Artiste, du profane et du sacré, et aux risques de faire de tous ces mystères, une œuvre qui lui survivra, corps et âme, par son (in)essentielle beauté.            
          `,

          showImages: [
            {
              image: "213A8390.jpg",
              title: 'Exhibition view of "Maroc Fantastique",CDA Gallery, 2021',
            },
            {
              image: "213A8375.jpg",
              title: 'Exhibition view of "Maroc Fantastique",CDA Gallery, 2021',
            },
            {
              image: "213A8391.jpg",
              title: 'Exhibition view of "Maroc Fantastique",CDA Gallery, 2021',
            },
          ],
          year: 2021,
          location: ["– MAROC FANTASTIQUE, CDA GALLERY, CASABLANCA"],
          duration: "13 JUILLET -17 SEPTEMBRE 2021",
          titleEng: "FANTASTIC MOROCCO",
          titleFR: "MAROC FANTASTIQUE",
          galImage: "213A8390.jpg",
          artists: "FATIMA LOUARDIRI",
          artworks: [
            {
              artists: "Fatima Louardiri",
              title: "",
              dimensions: "92,5 x 72 cm",
              medium: "Acrylique sur toile",
              artwork: "213A8262.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "",
              dimensions: "92,5 x 72 cm",
              medium: "Acrylique sur toile",
              artwork: "213A8255.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "",
              dimensions: "92,5 x 72 cm",
              medium: "Acrylique sur toile",
              artwork: "213A8257.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "",
              dimensions: "92,5 x 72 cm",
              medium: "Acrylique sur toile",
              artwork: "213A8268.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Chikhate 1/5",
              dimensions: "41 x 29 cm",
              medium: "Gouache sur papier",
              artwork: "213A8372.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Chikhate 2/5",
              dimensions: "31,5 x 21,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8369.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Chikhate 3/5",
              dimensions: "41 x 29 cm",
              medium: "Gouache sur papier",
              artwork: "213A8366.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Chikhate 4/5",
              dimensions: "35,5 x 26,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8354.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Chikhate 5/5",
              dimensions: "31,5 x 23,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8351.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 1/9",
              dimensions: "23,5 x 31,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8339.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 2/9",
              dimensions: "23,5 x 33,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8336.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 3/9",
              dimensions: "23,5 x 33,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8333.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 4/9",
              dimensions: "23,5 x 33,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8330.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 5/9",
              dimensions: "23,5 x 33,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8327.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 6/9",
              dimensions: "23,5 x 33,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8324.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 7/9",
              dimensions: "41 x 29,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8283.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 8/9",
              dimensions: "41 x 29,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8277.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "Mariées 9/9",
              dimensions: "41 x 29,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8272.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 1/13",
              dimensions: "23,5 x 31,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8288.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 2/13",
              dimensions: "23,5 x 31,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8298.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 3/13",
              dimensions: "41 x 29,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8286.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 4/13",
              dimensions: "31,5 x 23,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8295.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 5/13",
              dimensions: "35,5 x 25,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8285.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 6/13",
              dimensions: "35,5 x 25,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8301.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 7/13",
              dimensions: "41 x 29,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8308.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 8/13",
              dimensions: "41 x 29,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8315.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 9/13",
              dimensions: "31,5 x 23,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8348.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 10/13",
              dimensions: "41 x 29,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8319.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 11/13",
              dimensions: "31,5 x 23,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8357.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 12/13",
              dimensions: "31,5 x 23,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8360.jpg",
            },
            {
              artists: "Fatima Louardiri",
              title: "L'couple 13/13",
              dimensions: "31,5 x 23,5 cm",
              medium: "Gouache sur papier",
              artwork: "213A8363.jpg",
            },
          ],
        },
        {
          id: 1,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2019,
          location: ["– REG’ART NAIF AU DIWAN MGALLERY – RABAT"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 2,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2005,
          location: ["– BAB DOUKKALLA – MARRAKESH"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 3,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2004,
          location: ["– LA MAISON DES NOTAIRES DE NAMUR – BELGIQUE"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 4,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 1993,
          location: ["– GALLERY BAB EL KEBIR -RABAT"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 5,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 1991,
          location: [
            " – 18ÈME SALON DES ARTS CLAYES SOUS BOIS",
            "– FRANCE",
            "– GALERIA DE ARTE GRAN VIA -ESPAGNE",
            "– JAPON",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 6,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 1990,
          location: [
            "– HÔTEL MÉRIDIEN -CASABLANCA",
            "  – GALLERY D’ART MODERNE BASSAMATE -CASABLANCA",
            " – 1ER SALON DE MOHAMMEDIA DES JEUNES PLASTICIENS",
            " – PALAIS MOULAY HAFID – TANGER. 1ER FESTIVAL NATIONAL DES ARTS PLASTIQUES DE TANGER",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 7,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 1985,
          location: ["– MUSÉE AL BATHA -FÈS"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 8,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 1984,
          location: ["– MUSÉE  DES OUDAYAS -RABAT"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 9,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 1978,
          location: [" – GALLERY LE SAVOUROUX -CASABLANCA"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
        {
          id: 10,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 1974,
          location: ["– GALLERY ANDRÉLAURANT -RABAT"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "FATIMA LOUARDIRI",
        },
      ],
    },
    {
      id: 1,
      name: "IMANE DJAMIL",
      image: "imanedjamil.jpg",
      cv: "",
      biography: {
        fr: `Le travail visuel et littéraire d’Imane Djamil cherche la frontière très fine entre réalité et sublime, dans ce qu’elle appelle Géographies Mentales. Des mondes contingents et inter-culturels s’interpénètrent à travers un assemblage narratif, créant de nouvelles topographies. L’intérêt d’Imane Djamil pour les lieux en transition post-traumatique la conduit vers une vision à mi-chemin entre l’intime et les contes visuels. Des territoires comme Tarfaya, ville où est né le Petit Prince, personnage de Antoine de Saint-Exupéry, ou Sarajevo, deviennent des microcosmes conceptuels dans lesquels l’Histoire engendre un dialogue métaphorique avec des anecdotes personnelles ou politiques. En tant que nomade, c’est dans son travail visuel, littéraire et performatif, qu’Imane Djamil trouve refuge pour habiter poétiquement un espace éphémère.

            Imane Djamil (née en 1996, à Casablanca, Maroc) vit et travaille à Casablanca. Imane a participé à plusieurs résidences dont le programme Escales Liées au pavillon Français de la Biennale d’architecture de Venise en 2018, Mujeres y el Mediterráneo en 2019 à la Casa Mediterráneo à Alicante et le Summer’s Lab en 2020 au Cube-Independent Art Room à Rabat. Elle expose depuis 2013 au Maroc et à l’étranger, et son travail a notamment fait partie des expositions Le Maroc Contemporain à l’Institut du Monde Arabe en 2014, et Un instante Marruecos à la Casa Arabe dans le cadre de la sélection officielle de PhotoEspana en 2018.`,
        eng: `Imane Djamil’s photography seeks the very fine line between reality and the sublime in what she calls Mental Geographies. Contingent and cross-cultural worlds interpenetrate through narrative assemblage creating new topographics. Her former interest in places in post-traumatic transition drives her towards a vision at the crossroads of intimate, but yet widely spread, autofiction and visual tales. Territories like Tarfaya, a Saharian city become conceptual microcosms in which History begets a metaphorical dialogue with personal and political anecdotes. As a nomadic, it is in her visual, literary and performative work that she seeks refuge to poetically inhabit a space that is ephemeral.

            Imane Djamil ( born 1996, in Casablanca, Morocco) lives and works in Casablanca. Imane has done several residencies including Escales liées at the French pavillon of the Venice Biennal of Architecture in 2018, Mujeres y el Mediterraneo in 2019 at the Casa Mediterraneo in Alicante and the Summer’s Lab at le Cube-Independent Art Room in Rabat in 2020. Her work was part of exhibitions in Europe and Morocco and includes Le Maroc Contemporain at Institut du Monde Arabe in 2014, Un instante Marruecos at the Casa Arabe as part of PhotoEspana’s official selection in 2018.`,
      },
      artworks: [
        {
          artists: "Imane Djamil",
          title: "Armas Essalama",
          dimensions: "75 x 110 cm",
          medium: "",
          artwork: "imaneexhib.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "By the Yard 1, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib2.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "By the Yard 2, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib3.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "UNTITLED,2016",
          dimensions: "Triptych 20 x 30 cm / each",
          medium: "Fine Art print",
          artwork: "imaneexhib4.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "La Casa del Mar, 2013",
          dimensions: "40 x 60 cm - 7 éditions",
          medium: "Fine Art print",
          artwork: "imaneexhib5.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "Tarfaya - Buried Door 1, 2020",
          dimensions: "50x 70cm - 5 éditions",
          medium: "",
          artwork: "imaneexhib6.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "Tarfaya - Buried Door 2, 2020",
          dimensions: "50x 70cm - 5 éditions",
          medium: "",
          artwork: "imaneexhib7.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "Tarfaya - Buried Door 3, 2020",
          dimensions: "50x 70cm - 5 éditions",
          medium: "",
          artwork: "imaneexhib8.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "The pool 1, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib9.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "The pool 2, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib10.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "The pool 3, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib11.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "The Theater1, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib12.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "The Theater2, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib13.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "The Theater3, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib14.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "The Young and the Sea, 2020",
          dimensions: "75 x 110 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib15.jpg",
        },
      ],
      exhibitions: [
        {
          id: 11,
          artistId: 1,
          descriptionTitleFr: "",
          artistImage: "imanedjamil.jpg",
          textColor: "black",

          featuredArt: [
            {
              artists: "Imane Djamil",
              title: "Armas Essalama",
              dimensions: "75 x 110 cm",
              medium: "",
              artwork: "imaneexhib.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "By the Yard 1, 2020",
              dimensions: "40 x 60 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib2.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "By the Yard 2, 2020",
              dimensions: "35 x 52 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib3.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "UNTITLED,2016",
              dimensions: "Triptych 20 x 30 cm / each",
              medium: "Fine Art print",
              artwork: "imaneexhib4.jpg",
            },
          ],
          descriptionTitleEng: "",
          descriptionAuthorFr:
            "Tina Barouti, conservatrice et historienne des arts",
          descriptionAuthorEng: "Tina Barouti, Curator and Art Historian",
          quote:
            "« C’est une question de temps. » Adolf Loos, Ornement et Crime. 1908.",
          paragraphFr: `
          “80 miles to Atlantis” est le deuxième volet de l’œuvre d’Imane Djamil consacrée au littoral historique de la ville saharienne de Tarfaya. La série interroge les multiples registres symboliques du paysage bâti et naturel, la reconsidération de l’architecture coloniale au fil du temps, et le délitement des frontières entre mythe et réalité. Son travail explore des thèmes d’une saisissante pertinence au vu du monde actuel: la quête d’une symbiose entre le développement urbain et l’environnement naturel, l’échec de l’État à soutenir les communautés marginalisées, et la difficile conciliation entre passé colonial et un présent et avenir post-coloniaux.

A travers sa pratique artistique, Imane Djamil ne cesse d’explorer la complexité des relations qu’entretiennent les individus avec leur environnement physique. Le titre de la série fait référence à Tarfaya, pas par son nom ; mais plutôt par sa proximité avec les îles Canaries espagnoles, l’endroit présumé où se situerait la mythique Atlantide.

Le titre assimile également Tarfaya à cette nation insulaire fictive ; un rapprochement adéquat, puisque, comme l’Atlantide, elle est entourée de mystère et souvent qualifiée d’”apocalyptique” ou de “monde abandonné”.

Imane Djamil a découvert Tarfaya il y a huit ans, à l’âge de seize ans, alors qu’elle était en mission pour un tout autre projet. Des mois plus tard, elle quitte l’école sur un coup de tête et s’embarque pour un voyage de dix-neuf heures en bus de Casablanca à Tarfaya. En déambulant dans les rues vides, un appareil photo à la main, Djamil retient l’attention d’un jeune homme de son âge, ce dernier lui demande où ses amis et lui peuvent contempler les photos qu’elle a prises de la ville. Cette rencontre débouche sur une amitié instantanée et durable. Bien que Djamil n’ait aucun lien familial ou ethnique avec la ville, elle la décrit comme une seconde maison, là où elle se rend davantage pour passer du temps avec sa ” clique ” que pour travailler. En se promenant le long du paysage côtier “esthétiquement mystérieux” de Tarfaya, jalonné de vestiges de la colonisation espagnole, elle éprouve souvent une sensation de malaise mais aussi d’excitation à la vue de volées d’escaliers émergeant au hasard du sable ou de plongeoirs sans piscines. Cela déclenche sa phobie infantile ; celle de se baigner dans l’océan et de sentir un objet frôler sa jambe, ce qui la conduit à découvrir un univers parallèle sous-jacent, un peu comme la mythique Atlantide. 

Rédigés en 360 avant notre ère, les dialogues du philosophe grec Platon, Timée et Critias, décrivent la nation mythique de l’Atlantide comme étant une civilisation quasi-utopienne peuplant un archipel luxuriant et riche en ressources. Platon affirmait que ces îles existaient 9 000 ans avant son temps, et que leur histoire avait été transmise oralement par son grand-père. En raison de la disgrâce des divinités, l’Atlantide fut frappée par des tremblements de terre et des inondations, avant d’être finalement submergée par les eaux. Si l’Atlantide a dû être engloutie par l’océan pour avoir déplu aux divinités, le littoral historique de Tarfaya, comme l’illustre Imane Djamil dans sa série, est en passe d’être engloutie par le sable, non pas pour avoir offensé une entité supérieure, mais du fait de phénomènes naturels conjugués au désintérêt de l’État pour la préservation de son patrimoine culturel. Lors d’une conversation avec Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, habitant de la région et petit-fils du leader révolutionnaire Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil s’est entendu dire qu’un jour, tout ce qui se trouve sur la côte de Tarfaya disparaîtrait et que ses photographies, tout comme les écrits de Platon sur l’Atlantide, resteront parmi les dernières évidences de son existence.

Néanmoins, la série photo d’Imane Djamil ne doit pas être perçue à tort comme étant une preuve documentaire, du photojournalisme ou une histoire à caractère humain. L’artiste considère que ses photographies se situent à cheval entre la photographie d’art et le documentaire. Personnellement, je ne pense pas que son travail gagnerait à entrer dans une seule catégorie, quant à savoir si le documentaire peut être un art, la question reste posée. Evoluant dans un environnement où l’intérêt pour la photographie de rue et ses images candides et non médiatisées du quotidien marocain a explosé au cours de la dernière décennie, Imane Djamil se démarque de ses pairs par son utilisation du “docu-fiction”. Terme que j’ai emprunté au film narratif, le docu-fiction combine à la fois le documentaire et la fiction afin de saisir la réalité tout en introduisant simultanément des scénarios de fiction pour renforcer sa représentation à travers une forme d’expression artistique. J’estime que le parcours d’Imane Djamil en tant qu’écrivain créatif éclaire sur sa pratique photographique qui, comme son écriture, altère la réalité afin de discuter de problématiques complexes. En plus de l’aspect fictionnel, l’enchaînement des photographies en une séquence narrative à travers l’espace de la galerie, ainsi que la recapture d’une image donnée, tantôt avec plus de mouvement tantôt avec une absence de personnages, amplifie notre réponse émotionnelle à l’œuvre.

On retrouve un exemple de ce type de mise en scène dans le triptyque The Theater, qui réunit les amis proches d’Imane Djamil autour d’une représentation improvisée dans un théâtre abandonné datant de l’époque coloniale espagnole. Dans le triptyque 27, six jeunes hommes de sa bande d’amis sont regroupés dans un autre bâtiment de l’époque coloniale pour y célébrer un anniversaire fictif, agrémenté d’un gâteau et de ballons. La deuxième photo de la séquence, met en scène cinq hommes applaudissant, tandis qu’un sixième prend un cliché des festivités. Dans By the Yard, on voit de jeunes enfants, des proches des amis de Djamil, jouer autour d’une structure désignée par les habitants comme dār al-mi’a, soit la ” maison des cent “, qui, comme son nom l’indique, abritait autrefois cent soldats espagnols. Contrairement à ses amis locaux, qui sont des “acteurs nés”, les enfants avaient plus besoin d’être dirigés car ils jouaient aux alentours de ce baraquement non sécurisé et au contenu incertain, aujourd’hui occupé par les Forces armées royales marocaines et évité par les résidents locaux.

La pratique d’Imane Djamil renvoie à une citation du photographe paysagiste américain Ansel Adams : “L’art implique le contrôle de la réalité, car la réalité elle-même ne possède aucun sens de l’esthétique. La photographie devient de l’art lorsque certains contrôles sont appliqués”. Djamil reste consciemment artistique dans sa démarche – se limitant à un maximum de vingt photographies par an. Plaçant son trépied au sommet de dunes de sable et de gravats périlleux, elle s’efforce de maintenir son matériel stable tout en veillant aux exigences formelles de la composition.

Sa sélection de précédentes photographies en noir et blanc, tels que les triptyques sans titre datant de 2013 et 2016 et le diptyque sans titre réalisé en 2015, explore intensément la lumière, la géométrie, l’ombre et l’abstraction. Comme Adams, dont la pratique était étroitement liée à la lutte pour la conservation de l’environnement, Djamil espère que ses photographies serviront un objectif dépassant celui du simple plaisir esthétique, à savoir pousser les décideurs politiques et les institutions à reconnaître l’état de délabrement de Tarfaya et à investir dans la réhabilitation des ruines architecturales le long de son littoral.

Bien que Djamil se revendique du décolonialisme dans sa pensée et sa pratique, je lui ai soumis une question cruciale à laquelle les États post-coloniaux sont confrontés depuis l’avènement des mouvements d’indépendance du milieu du XXe siècle : Les vestiges du passé colonial, qui servent aujourd’hui de marqueur identitaire à Tarfaya, méritent-ils d’être préservés ?

Elle reconnaît que si l’architecture de l’époque coloniale est la résultante de la violence impériale, assimilable à une blessure, elle devient avec le temps une cicatrice apprivoisée par le paysage, entraînant un changement de fonction et de sens. Des cicatrices qui, selon elle, méritent d’être préservées car le passé colonial reste un élément incontournable du patrimoine culturel du Maroc.  `,
          paragraphEng: `
          
Imane Djamil’s 80 miles to Atlantis constitutes the second part of her work on the Saharan city of Tarfaya’s historical coast. The series interrogates the multiple layers of symbolism in the built and natural landscape, colonial architecture’s redefinition over time, and the blurring of lines between reality and myth. The themes her work explores are of poignant relevance to today’s world – the quest for a symbiosis between urban development and the natural environment, the state’s failure to uplift communities at the margins, and negotiating relationships between the colonial past and a post-colonial present and future. Through her practice, Djamil never ceases to confront the complexity of people vis-à-vis their physical environment. The title of the series refers to Tarfaya not by its name, but rather its close proximity to Spain’s Canary Islands, the approximate location of where the mythical Atlantis is rumored to be. The title also likens Tarfaya to the fictional island nation – a fitting relation given that, like Atlantis, it is shrouded in mystery and often described as “apocalyptic” or “the abandoned world.” 

Her introduction to Tarfaya came eight years ago at the age of sixteen while on assignment for another project. Months later, she spontaneously left school and embarked on a nineteen-hour bus ride from Casablanca to Tarfaya. Strolling through the empty streets with a camera in hand, Djamil caught the attention of a local young man her age, who asked where he and his friends could see her photographs of the city. This encounter resulted in an instantaneous and long-lasting friendship. While Djamil has no familial or ethnic ties to the city, she describes it as a second home, where she visits more to spend time with her “crew” than to work. While walking through Tarfaya’s “aesthetically mysterious” coastal landscape, full of Spanish colonial structures, she often experiences an uneasy yet thrilling sensation at the sight of flights of stairs randomly emerging from the sand or diving boards without a pool of water. This triggers her irrational childhood fear of swimming in the ocean and feeling an object brush against her leg, thereby leading her to discover a parallel universe below, much like the mythical Atlantis. 

Written in 360 BCE, the Greek philosopher Plato’s dialogues Timaeus and Critias described the mythical nation of Atlantis as a near-utopian civilization inhabiting a lush, resource-rich archipelago. Plato claimed that the islands existed 9,000 years before his time, with its story passed down orally from his grandfather. As a consequence of falling out of favor with the deities, Atlantis was hit with earthquakes and floods, ultimately being submerged under water. If Atlantis was to be consumed by the ocean for displeasing the gods, Tarfaya’s historical coast, as Djamil illustrates in her series, is on its way to being devoured by sand, not for offending a higher being, but as a result of natural phenomena coupled with the state’s disinterest in preserving its cultural heritage. In conversation with Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, a local resident and grandson of revolutionary leader Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil was told that one day everything on Tarfaya’s coast would disappear and that her photographs, much like Plato’s writings on Atlantis, will remain as some of the last pieces of evidence for its existence.

However, Djamil’s series should not be misinterpreted as documentary evidence, photojournalism, or a human-interest story. She views her photographs as straddling the fence between art photography and documentary. I do not believe her work must fall under a single category and whether or not documentary can be fine art is a moot question. Working in an environment where interest in street photography and its candid, unmediated images of Moroccan daily life have exploded in the past decade, Djamil stands out from her peers for her use of “docu-fiction.” A term I have borrowed from narrative film, docu-fiction combines both documentary and fiction to capture reality while simultaneously introducing fictional scenarios to strengthen its representation through a form of artistic expression. I find that Djamil’s background as a creative writer informs her photographic practice, which, like her writing, alters reality in order to discuss complex issues. In addition to fictionalization, narrative sequencing of photographs within the gallery space and the re-capturing of a particular image, once with more movement and again with an absence of people, enhances our emotional response to the work. 

An example of this type of play is found in The Theater triptych, which presents Djamil’s close circle of friends putting on an impromptu performance in an abandoned Spanish colonial theatre. In the 27 triptych, six young men from her friend group gather in another colonial-era building to celebrate a fictional birthday, complete with a cake and balloons. In the second photograph of the sequence, while five men cheer, one takes a snapshot of the festivities. In By the Yard, young children, who are relatives of Djamil’s friends, are seen playing around a structure referred to by locals as dār al-mi’a, or “house of one hundred,” which, as the name suggests, formerly housed one hundred Spanish soldiers. Unlike her local friends, who are “natural-born actors,” the children required more direction as they played around the unsecured building with unknown contents, now occupied by the Royal Moroccan Armed Forces and avoided by local residents.

Her practice calls to mind a quote by American landscape photographer Ansel Adams: “Art implies control of reality, for reality itself possesses no sense of the aesthetic. Photography becomes art when certain controls are applied.” Djamil remains consciously artistic in her approach –  limiting herself to a maximum of twenty photographs a year. Setting her tripod atop of precarious sand dunes and rubble, she attempts to keep her equipment steady while paying attention to the composition’s formal qualities. Her selection of earlier black-and-white photographs, such as the untitled triptychs from 2013 and 2016 and the untitled diptych from 2015, experiment heavily with light, geometry, shadow, and abstraction. Similar to Adams, whose practice was strongly enmeshed with advocacy for environmental conservation, Djamil hopes that her photographs serve a purpose beyond aesthetic pleasure, namely to push for policymakers and institutions to acknowledge Tarfaya’s dilapidated state and invest in the rehabilitation of architectural ruins along its coast. Although Djamil identifies as decolonial in thinking and practice, I asked her an important question that post-partitioned states have been grappling with since the mid-twentieth century’s independence movements: Are remnants of the colonial past, which today serve as Tarfaya’s identity marker, worth preserving? She acknowledges that although colonial-era architecture is the result of imperial violence, likening it to a wound, over time it becomes a scar tamed by the landscape, leading to a shift in both function and meaning. Scars that, she believes, are worthy of preservation as the colonial past remains an inescapable part of Morocco’s cultural heritage. `,
          showImages: [
            {
              image: "ASI46920.jpg",
              title: 'Exhibition view of "80 miles to atlantis", 2021',
            },
            {
              image: "213A4091-HDR.jpg",
              title: 'Exhibition view of "80 miles to atlantis", 2021',
            },
            {
              image: "ASI46981.jpg",
              title: 'Exhibition view of "80 miles to atlantis", 2021',
            },
            {
              image: "ASI47013.jpg",
              title: 'Exhibition view of "80 miles to atlantis", 2021',
            },
            {
              image: "ASI47002.jpg",
              title: 'Exhibition view of "80 miles to atlantis", 2021',
            },
          ],
          description: {
            fr: `“80 miles to Atlantis” est le deuxième volet de l’œuvre d’Imane Djamil consacrée au littoral historique de la ville saharienne de Tarfaya. La série interroge les multiples registres symboliques du paysage bâti et naturel, la reconsidération de l’architecture coloniale au fil du temps, et le délitement des frontières entre mythe et réalité. Son travail explore des thèmes d’une saisissante pertinence au vu du monde actuel: la quête d’une symbiose entre le développement urbain et l’environnement naturel, l’échec de l’État à soutenir les communautés marginalisées, et la difficile conciliation entre passé colonial et un présent et avenir post-coloniaux.

                A travers sa pratique artistique, Imane Djamil ne cesse d’explorer la complexité des relations qu’entretiennent les individus avec leur environnement physique. Le titre de la série fait référence à Tarfaya, pas par son nom ; mais plutôt par sa proximité avec les îles Canaries espagnoles, l’endroit présumé où se situerait la mythique Atlantide.

                Le titre assimile également Tarfaya à cette nation insulaire fictive ; un rapprochement adéquat, puisque, comme l’Atlantide, elle est entourée de mystère et souvent qualifiée d’”apocalyptique” ou de “monde abandonné”.

                Imane Djamil a découvert Tarfaya il y a huit ans, à l’âge de seize ans, alors qu’elle était en mission pour un tout autre projet. Des mois plus tard, elle quitte l’école sur un coup de tête et s’embarque pour un voyage de dix-neuf heures en bus de Casablanca à Tarfaya. En déambulant dans les rues vides, un appareil photo à la main, Djamil retient l’attention d’un jeune homme de son âge, ce dernier lui demande où ses amis et lui peuvent contempler les photos qu’elle a prises de la ville. Cette rencontre débouche sur une amitié instantanée et durable. Bien que Djamil n’ait aucun lien familial ou ethnique avec la ville, elle la décrit comme une seconde maison, là où elle se rend davantage pour passer du temps avec sa ” clique ” que pour travailler. En se promenant le long du paysage côtier “esthétiquement mystérieux” de Tarfaya, jalonné de vestiges de la colonisation espagnole, elle éprouve souvent une sensation de malaise mais aussi d’excitation à la vue de volées d’escaliers émergeant au hasard du sable ou de plongeoirs sans piscines. Cela déclenche sa phobie infantile ; celle de se baigner dans l’océan et de sentir un objet frôler sa jambe, ce qui la conduit à découvrir un univers parallèle sous-jacent, un peu comme la mythique Atlantide.

                Rédigés en 360 avant notre ère, les dialogues du philosophe grec Platon, Timée et Critias, décrivent la nation mythique de l’Atlantide comme étant une civilisation quasi-utopienne peuplant un archipel luxuriant et riche en ressources. Platon affirmait que ces îles existaient 9 000 ans avant son temps, et que leur histoire avait été transmise oralement par son grand-père. En raison de la disgrâce des divinités, l’Atlantide fut frappée par des tremblements de terre et des inondations, avant d’être finalement submergée par les eaux. Si l’Atlantide a dû être engloutie par l’océan pour avoir déplu aux divinités, le littoral historique de Tarfaya, comme l’illustre Imane Djamil dans sa série, est en passe d’être engloutie par le sable, non pas pour avoir offensé une entité supérieure, mais du fait de phénomènes naturels conjugués au désintérêt de l’État pour la préservation de son patrimoine culturel. Lors d’une conversation avec Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, habitant de la région et petit-fils du leader révolutionnaire Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil s’est entendu dire qu’un jour, tout ce qui se trouve sur la côte de Tarfaya disparaîtrait et que ses photographies, tout comme les écrits de Platon sur l’Atlantide, resteront parmi les dernières évidences de son existence.

                Néanmoins, la série photo d’Imane Djamil ne doit pas être perçue à tort comme étant une preuve documentaire, du photojournalisme ou une histoire à caractère humain. L’artiste considère que ses photographies se situent à cheval entre la photographie d’art et le documentaire. Personnellement, je ne pense pas que son travail gagnerait à entrer dans une seule catégorie, quant à savoir si le documentaire peut être un art, la question reste posée. Evoluant dans un environnement où l’intérêt pour la photographie de rue et ses images candides et non médiatisées du quotidien marocain a explosé au cours de la dernière décennie, Imane Djamil se démarque de ses pairs par son utilisation du “docu-fiction”. Terme que j’ai emprunté au film narratif, le docu-fiction combine à la fois le documentaire et la fiction afin de saisir la réalité tout en introduisant simultanément des scénarios de fiction pour renforcer sa représentation à travers une forme d’expression artistique. J’estime que le parcours d’Imane Djamil en tant qu’écrivain créatif éclaire sur sa pratique photographique qui, comme son écriture, altère la réalité afin de discuter de problématiques complexes. En plus de l’aspect fictionnel, l’enchaînement des photographies en une séquence narrative à travers l’espace de la galerie, ainsi que la recapture d’une image donnée, tantôt avec plus de mouvement tantôt avec une absence de personnages, amplifie notre réponse émotionnelle à l’œuvre.

                On retrouve un exemple de ce type de mise en scène dans le triptyque The Theater, qui réunit les amis proches d’Imane Djamil autour d’une représentation improvisée dans un théâtre abandonné datant de l’époque coloniale espagnole. Dans le triptyque 27, six jeunes hommes de sa bande d’amis sont regroupés dans un autre bâtiment de l’époque coloniale pour y célébrer un anniversaire fictif, agrémenté d’un gâteau et de ballons. La deuxième photo de la séquence, met en scène cinq hommes applaudissant, tandis qu’un sixième prend un cliché des festivités. Dans By the Yard, on voit de jeunes enfants, des proches des amis de Djamil, jouer autour d’une structure désignée par les habitants comme dār al-mi’a, soit la ” maison des cent “, qui, comme son nom l’indique, abritait autrefois cent soldats espagnols. Contrairement à ses amis locaux, qui sont des “acteurs nés”, les enfants avaient plus besoin d’être dirigés car ils jouaient aux alentours de ce baraquement non sécurisé et au contenu incertain, aujourd’hui occupé par les Forces armées royales marocaines et évité par les résidents locaux.

                La pratique d’Imane Djamil renvoie à une citation du photographe paysagiste américain Ansel Adams : “L’art implique le contrôle de la réalité, car la réalité elle-même ne possède aucun sens de l’esthétique. La photographie devient de l’art lorsque certains contrôles sont appliqués”. Djamil reste consciemment artistique dans sa démarche – se limitant à un maximum de vingt photographies par an. Plaçant son trépied au sommet de dunes de sable et de gravats périlleux, elle s’efforce de maintenir son matériel stable tout en veillant aux exigences formelles de la composition.

                Sa sélection de précédentes photographies en noir et blanc, tels que les triptyques sans titre datant de 2013 et 2016 et le diptyque sans titre réalisé en 2015, explore intensément la lumière, la géométrie, l’ombre et l’abstraction. Comme Adams, dont la pratique était étroitement liée à la lutte pour la conservation de l’environnement, Djamil espère que ses photographies serviront un objectif dépassant celui du simple plaisir esthétique, à savoir pousser les décideurs politiques et les institutions à reconnaître l’état de délabrement de Tarfaya et à investir dans la réhabilitation des ruines architecturales le long de son littoral.

                Bien que Djamil se revendique du décolonialisme dans sa pensée et sa pratique, je lui ai soumis une question cruciale à laquelle les États post-coloniaux sont confrontés depuis l’avènement des mouvements d’indépendance du milieu du XXe siècle : Les vestiges du passé colonial, qui servent aujourd’hui de marqueur identitaire à Tarfaya, méritent-ils d’être préservés ?

                Elle reconnaît que si l’architecture de l’époque coloniale est la résultante de la violence impériale, assimilable à une blessure, elle devient avec le temps une cicatrice apprivoisée par le paysage, entraînant un changement de fonction et de sens. Des cicatrices qui, selon elle, méritent d’être préservées car le passé colonial reste un élément incontournable du patrimoine culturel du Maroc.  `,
            eng: `
                Imane Djamil’s 80 miles to Atlantis constitutes the second part of her work on the Saharan city of Tarfaya’s historical coast. The series interrogates the multiple layers of symbolism in the built and natural landscape, colonial architecture’s redefinition over time, and the blurring of lines between reality and myth. The themes her work explores are of poignant relevance to today’s world – the quest for a symbiosis between urban development and the natural environment, the state’s failure to uplift communities at the margins, and negotiating relationships between the colonial past and a post-colonial present and future. Through her practice, Djamil never ceases to confront the complexity of people vis-à-vis their physical environment. The title of the series refers to Tarfaya not by its name, but rather its close proximity to Spain’s Canary Islands, the approximate location of where the mythical Atlantis is rumored to be. The title also likens Tarfaya to the fictional island nation – a fitting relation given that, like Atlantis, it is shrouded in mystery and often described as “apocalyptic” or “the abandoned world.”

    Her introduction to Tarfaya came eight years ago at the age of sixteen while on assignment for another project. Months later, she spontaneously left school and embarked on a nineteen-hour bus ride from Casablanca to Tarfaya. Strolling through the empty streets with a camera in hand, Djamil caught the attention of a local young man her age, who asked where he and his friends could see her photographs of the city. This encounter resulted in an instantaneous and long-lasting friendship. While Djamil has no familial or ethnic ties to the city, she describes it as a second home, where she visits more to spend time with her “crew” than to work. While walking through Tarfaya’s “aesthetically mysterious” coastal landscape, full of Spanish colonial structures, she often experiences an uneasy yet thrilling sensation at the sight of flights of stairs randomly emerging from the sand or diving boards without a pool of water. This triggers her irrational childhood fear of swimming in the ocean and feeling an object brush against her leg, thereby leading her to discover a parallel universe below, much like the mythical Atlantis.

    Written in 360 BCE, the Greek philosopher Plato’s dialogues Timaeus and Critias described the mythical nation of Atlantis as a near-utopian civilization inhabiting a lush, resource-rich archipelago. Plato claimed that the islands existed 9,000 years before his time, with its story passed down orally from his grandfather. As a consequence of falling out of favor with the deities, Atlantis was hit with earthquakes and floods, ultimately being submerged under water. If Atlantis was to be consumed by the ocean for displeasing the gods, Tarfaya’s historical coast, as Djamil illustrates in her series, is on its way to being devoured by sand, not for offending a higher being, but as a result of natural phenomena coupled with the state’s disinterest in preserving its cultural heritage. In conversation with Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, a local resident and grandson of revolutionary leader Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil was told that one day everything on Tarfaya’s coast would disappear and that her photographs, much like Plato’s writings on Atlantis, will remain as some of the last pieces of evidence for its existence.

    However, Djamil’s series should not be misinterpreted as documentary evidence, photojournalism, or a human-interest story. She views her photographs as straddling the fence between art photography and documentary. I do not believe her work must fall under a single category and whether or not documentary can be fine art is a moot question. Working in an environment where interest in street photography and its candid, unmediated images of Moroccan daily life have exploded in the past decade, Djamil stands out from her peers for her use of “docu-fiction.” A term I have borrowed from narrative film, docu-fiction combines both documentary and fiction to capture reality while simultaneously introducing fictional scenarios to strengthen its representation through a form of artistic expression. I find that Djamil’s background as a creative writer informs her photographic practice, which, like her writing, alters reality in order to discuss complex issues. In addition to fictionalization, narrative sequencing of photographs within the gallery space and the re-capturing of a particular image, once with more movement and again with an absence of people, enhances our emotional response to the work.

    An example of this type of play is found in The Theater triptych, which presents Djamil’s close circle of friends putting on an impromptu performance in an abandoned Spanish colonial theatre. In the 27 triptych, six young men from her friend group gather in another colonial-era building to celebrate a fictional birthday, complete with a cake and balloons. In the second photograph of the sequence, while five men cheer, one takes a snapshot of the festivities. In By the Yard, young children, who are relatives of Djamil’s friends, are seen playing around a structure referred to by locals as dār al-mi’a, or “house of one hundred,” which, as the name suggests, formerly housed one hundred Spanish soldiers. Unlike her local friends, who are “natural-born actors,” the children required more direction as they played around the unsecured building with unknown contents, now occupied by the Royal Moroccan Armed Forces and avoided by local residents.

    Her practice calls to mind a quote by American landscape photographer Ansel Adams: “Art implies control of reality, for reality itself possesses no sense of the aesthetic. Photography becomes art when certain controls are applied.” Djamil remains consciously artistic in her approach –  limiting herself to a maximum of twenty photographs a year. Setting her tripod atop of precarious sand dunes and rubble, she attempts to keep her equipment steady while paying attention to the composition’s formal qualities. Her selection of earlier black-and-white photographs, such as the untitled triptychs from 2013 and 2016 and the untitled diptych from 2015, experiment heavily with light, geometry, shadow, and abstraction. Similar to Adams, whose practice was strongly enmeshed with advocacy for environmental conservation, Djamil hopes that her photographs serve a purpose beyond aesthetic pleasure, namely to push for policymakers and institutions to acknowledge Tarfaya’s dilapidated state and invest in the rehabilitation of architectural ruins along its coast. Although Djamil identifies as decolonial in thinking and practice, I asked her an important question that post-partitioned states have been grappling with since the mid-twentieth century’s independence movements: Are remnants of the colonial past, which today serve as Tarfaya’s identity marker, worth preserving? She acknowledges that although colonial-era architecture is the result of imperial violence, likening it to a wound, over time it becomes a scar tamed by the landscape, leading to a shift in both function and meaning. Scars that, she believes, are worthy of preservation as the colonial past remains an inescapable part of Morocco’s cultural heritage. `,
          },
          artworks: [
            {
              artists: "Imane Djamil",
              title: "Armas Essalama",
              dimensions: "75 x 110 cm",
              medium: "",
              artwork: "imaneexhib.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "By the Yard 1, 2020",
              dimensions: "40 x 60 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib2.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "By the Yard 2, 2020",
              dimensions: "35 x 52 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib3.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "UNTITLED,2016",
              dimensions: "Triptych 20 x 30 cm / each",
              medium: "Fine Art print",
              artwork: "imaneexhib4.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "La Casa del Mar, 2013",
              dimensions: "40 x 60 cm - 7 éditions",
              medium: "Fine Art print",
              artwork: "imaneexhib5.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "Tarfaya - Buried Door 1, 2020",
              dimensions: "50x 70cm - 5 éditions",
              medium: "",
              artwork: "imaneexhib6.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "Tarfaya - Buried Door 2, 2020",
              dimensions: "50x 70cm - 5 éditions",
              medium: "",
              artwork: "imaneexhib7.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "Tarfaya - Buried Door 3, 2020",
              dimensions: "50x 70cm - 5 éditions",
              medium: "",
              artwork: "imaneexhib8.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "The pool 1, 2020",
              dimensions: "35 x 52 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib9.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "The pool 2, 2020",
              dimensions: "35 x 52 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib10.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "The pool 3, 2020",
              dimensions: "35 x 52 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib11.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "The Theater1, 2020",
              dimensions: "40 x 60 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib12.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "The Theater2, 2020",
              dimensions: "40 x 60 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib13.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "The Theater3, 2020",
              dimensions: "40 x 60 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib14.jpg",
            },
            {
              artists: "Imane Djamil",
              title: "The Young and the Sea, 2020",
              dimensions: "75 x 110 cm - 3 éditions",
              medium: "",
              artwork: "imaneexhib15.jpg",
            },
          ],
          year: 2021,
          location: ["– 80 MILES TO ATLANTIS, CDA GALLERY, CASABLANCA"],
          duration: "13 JANVIER -22 MARS 2021",
          titleEng: "80 MILES TO ATLANTIS",
          titleFR: "ATLANTIDE KM 130",
          galImage: "ASI46920.jpg",
          artists: "IMANE DJAMIL",
        },
        {
          id: 12,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2019,
          location: [
            " – EN UN INSTANTE MARRUECOS, BIENAL DE FOTOGRAFIA DE CORDOBA, CASA ARABE, GROUP SHOW – CORDOBA",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "IMANE DJAMIL",
        },
        {
          id: 13,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2018,
          location: [
            " – EN UN INSTANTE MARRUECOS, FUNDACIÒN TRES CULTURAS DEL MEDITERRÀNEO, GROUP SHOW – SEVILLA",
            "– LE MAROC SUR LE VIF (IN A FLASH, MOROCCO), MUSÉE DE MOUASSINE, GROUP SHOW – MARRAKECH",
            "– ESCALES LIÉES (CROSSED STOPOVERS) , IGLOÙPARIS, VILLETTE MAKERZ, PARIS",
            "– EN UN INSTANTE MARRUECOS, PHOTOESPAÑA, CASA ARABE, GROUP SHOW – MADRID",
            "– ANA HUNNA, AN INITIATIVE PROMOTING WOMEN IN THE ECONOMY IN JORDAN, EGYPT, TUNISIA AND MOROCCO",
            "– FABRIQUE CULTURELLE DES ABATTOIRS – CASABLANCA",
            "– REPLICAS, SELF-PORTRAIT THROUGH SPACE(S) ), FESTIVAL TRAITS D’UNION, THÉÂTRE EL DUENDE, SOLO SHOW –  IVRY-SUR-SEINE",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "IMANE DJAMIL",
        },
        {
          id: 14,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2017,
          location: [
            "   – REPLICAS, SELF-PORTRAIT THROUGH SPACE(S), DASTHE GALLERY, SOLO SHOW – CASABLANCA",
            "– SUMMER HOLIDAYS, 30 UNDER 30 WOMEN PHOTOGRAPHERS, THE POPPING CLUB, GROUP SHOW – ROME",
            "– REPLICAS, SELF-PORTRAIT THROUGH SPACE(S), L’UZINE, FONDATION TOURIA ET ABDELAZIZ SEKKAT, SOLO SHOW – CASABLANCA",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "IMANE DJAMIL",
        },
        {
          id: 15,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2016,
          location: [
            " – ACCESSIBLE ART FAIR, JEWISH MUSEUM OF BELGIUM, GROUP SHOW – BRUSSELS",
            "– BARBARIC SPRING, LA SELVA DE L’ART, FESTIVAL INTERNACIONAL D’ART CONTEMPORANI, GROUP SHOW LA SELVA DE MAR, GIRONA",
            "– REPLICAS, SELF-PORTRAIT THROUGH SPACE(S), HAUPT GALLERY, GROUP SHOW – BASEL",
            "– TODOS OS GÉNEROS PREFERIDOS, ALL GENDER PREFERRED, MANPOWER FESTIVAL, GROUP SHOW – LISBON",
            "– BEYOND HERITAGE, PAROISSE SAINT-PIERRE DE MONTMARTRE, GROUP SHOW – PARIS",
            "– I ENGAGE, LE 6B, GROUP SHOW – PARIS",
            "– VISIONS URBAINES (URBAN VISIONS), ESPACE DES ARTS SANS FRONTIÈRES, GROUP SHOW – PARIS",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "IMANE DJAMIL",
        },
        {
          id: 16,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2015,
          location: [
            "  – WHERE PINE, FEAR AND MYSELF HARMONIZE, GALERIE SOMETIMESTUDIO, SOLO SHOW – PARIS",
            "   – PASSAGES, PARAGES, VISAGES, PAYSAGES. LES NOUVELLES CRÉATIONS ARTISTIQUES AU MAROC (CROSSINGS, FACES AND LANDSCAPES, THE NEW MOROCCAN ART SCENE), BANK AL-MAGHRIB MUSEUM, GROUP SHOW – RABAT",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "IMANE DJAMIL",
        },
        {
          id: 17,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2014,
          location: [
            "– LE MAROC CONTEMPORAIN (CONTEMPORARY MOROCCO), INSTITUT DU MONDE ARABE, GROUP SHOW – PARIS",
            "– FUTURE IDENTITIES, BODIES/PLACES/SPACES, PALAZZO ALBRIZZI, GROUP SHOW – VENICE",
            "– EMERGE&SEE, YAKIN&BOAZ GALLERY, GROUP SHOW – CASABLANCA",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "IMANE DJAMIL",
        },
      ],
    },
    {
      id: 2,
      name: "BÉCHIR BOUSSANDEL",
      image: "bechirboussandel.jpg",
      cv: "",
      artworks: [
        {
          id: 47,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Butane,2020",
          dimensions: "Diptyque, 110 x 160 cm",
          medium: "huile sur toile",
          artwork: "01.jpg",
        },
        {
          id: 48,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Qotn,2020",
          dimensions: "Diptyque, 108 x 80 cm",
          medium: " Huile sur toile",
          artwork: "02.jpg",
        },
        {
          id: 49,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Ficus,2020",
          dimensions: " 140 x 190 cm",
          medium: " Huile sur toile",
          artwork: "03.jpg",
        },
        {
          id: 50,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Mika",
          dimensions: "80 x 110 cm",
          medium: "Huile sur toile",
          artwork: "04.jpg",
        },
        {
          id: 51,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Fer à béton, 2020",
          dimensions: "⌀ 60cm",
          medium: "huile sur toile",
          artwork: "05.jpg",
        },
        {
          id: 52,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Cavalcade",
          dimensions: "80 x 110cm",
          medium: "huile sur toile",
          artwork: "06.jpg",
        },
        {
          id: 53,
          artists: "BÉCHIR BOUSSANDEL",
          title: "La source, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "07.jpg",
        },
        {
          id: 54,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Lévitation, 2020",
          dimensions: "24 x 33",
          medium: "huile sur toile",
          artwork: "08.jpg",
        },
        {
          id: 55,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Lièvre, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "09.jpg",
        },
        {
          id: 56,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Sans titre, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "10.jpg",
        },
        {
          id: 57,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Sans titre, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "11.jpg",
        },
      ],
      biography: {
        fr: `
        Saint Pol-sur-Mer, 1984. Il vit et travaille entre Lille et Bizerte.

Béchir Boussandel est un artiste Franco-Tunisien, diplômé des Beaux-arts de Dunkerque. Amoureux de la couleur, il questionne les lieux et non-lieux de l’identité.

” Mon travail interroge la frontière qui peut exister entre l’espace intime et l’espace publique. Le plus souvent, la démonstration de cette dualité passe par des objets du quotidien dont la fonction a un rapport avec le territoire, la mobilité, l’appropriation ou l’habitat. Le processus créatif que je mets en place débute le plus souvent par une photographie qui me permet de saisir et d’isoler le sujet qui m’intéresse. Cette photographie se trouve par la suite retraduite de manière plastique sur ses peintures.”


        `,
        eng: `
        Saint-Pol-Sur-Mer, 1984.  Lives and work between Lille and Bizerte. 

Béchir Boussandel graduated as a painter from the Dunkirk school of fine arts. Through his paintings, he questions places and “non lieux” of the identity. 

” My work is about the limits between intimate spaces and public ones. most of the time, the demonstration of this duality shows in everyday objects that have a function in relation with the territory, The mobility, the appropriation or the habitat. my artistic process starts with photographs that allow me to capture and isolate the subject i’m interested in.This photography is then translated visually in my paintings. ” 
        
        `,
      },
      exhibitions: [
        {
          id: 18,
          artistId: 2,
          descriptionTitleFr: "",
          descriptionTitleEng: "",
          descriptionAuthorFr: "Aida Omary, critique d’art",
          descriptionAuthorEng: "",
          textColor: "black",

          paragraphFr: `
          Tout corps traine son ombre et tout esprit son doute. Et c’est dans le doute que l’artiste franco-tunisien Béchir Boussandel nous livre dans l’exposition « Au bord de l’ombre » le simulacre d’une quotidienneté, l’imbroglio d’une réalité en perte de sens et la vision d’un ordinaire pas si ordinaire ou l’ombre trompe l’œil et l’esprit.

Dans une palette sonore et enveloppante, objets et personnages se parlent dans un faux dialogue. Là où le mouvement est banni, la figure est isolée. Encerclée par un halo de lumière, elle est ancrée dans une surface abstraite. Si dans ses toiles Bechir ne respecte ni les dimensions ni les échelles vraisemblables, c’est parce qu’il ne décrit aucune réalité. Ne se porte garant d’aucune vérité.

Il s’y passe autre chose … un questionnement d’une autre nature. Oui c’est ça, il ne conte pas d’histoires, mais raconte la manière dont elles ne se disent pas. Porte-parole de ce qui est presque un récit, ces toiles se donnent en ne nous promettant aucune finitude. Un homme erre, il est de dos. Et porte un sac. Son ombre nous oriente et désoriente notre perception lorsqu’au-dessus de la figure, flotte une feuille aux dimensions fantasmagoriques. Un chien se tenant droit face à une coupelle cuivrée d’une même taille, un cheval portant un bloc de béton, une volée de sacs de plastique. Ici et là, clichés et objets banalisés, décrits méticuleusement et tout droit sortis d’un inconscient raisonné et irrationnel, lévitent dans un espace alternant profondeur et surfaces.

L’artiste fait subtilement jouer la similitude contre la ressemblance. Ce que l’on voit n’est pas toujours ce que l’on croit que c’est. Se dévoile ainsi une peinture à mi-chemin entre visible et invisible, entre abstraction et figuration. Et ce qui nous retient dans ce jeu autour du doute, c’est bien cette vitalité. Aussi sobre qu’exaltante. Nous y sommes. Nous sommes emportés.

Arrêt dans le temps ou le temps d’un arrêt ?

Des toiles écrites mais qui nous parlent sans discours ?

L’œil doute jusqu’au bout … et l’esprit y est malmené.

Béchir est cet artiste, qui immergé dans cette chair du monde, s’élance. Il se projette, puis se rejette.

Et entre temps, il sème du sublime.
         `,
          paragraphEng: `

         `,
          quote: `
          Béchir est cet artiste, qui immergé dans cette chair du monde, s’élance. Il se projette, puis se rejette.
          Et entre temps, il sème du sublime.
          `,
          artistImage: "bechirboussandel.jpg",
          year: 2020,
          location: [
            "AU BORD DE L’OMBRE, CDA GALLERY, CASABLANCA",
            "ICI LE MONDE, IMA TOURCOING, TOURCOING",
            "COUP DE SOLEIL,GALERIE PROVOST HACKER, LILLE. ",
          ],
          duration: "16 juin -30 juillet 2020",
          titleEng: "AT THE EDGE OF THE SHADOW",
          titleFR: "AU BORD DE L'OMBRE",
          galImage: "DSC_7311.jpg",
          artists: "BÉCHIR BOUSSANDEL",
          featuredArt: [
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "Ficus",
              dimensions: " 140 x 190 cm",
              medium: " Huile sur toile",
              artwork: "03.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "Mika",
              dimensions: "80 x 110 cm",
              medium: "Huile sur toile",
              artwork: "04.jpg",
            },
          ],
          showImages: [
            {
              image: "DSC_7311.jpg",
              title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
            },
            {
              image: "DSC_7322.jpg",
              title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
            },
            {
              image: "DSC_7324.jpg",
              title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
            },
            {
              image: "DSC_7335.jpg",
              title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
            },
          ],
          artworks: [
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "Butane",
              dimensions: "Diptyque, 110 x 160 cm",
              medium: "huile sur toile",
              artwork: "01.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "Qotn",
              dimensions: "Diptyque, 108 x 80 cm",
              medium: " Huile sur toile",
              artwork: "02.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "Ficus",
              dimensions: " 140 x 190 cm",
              medium: " Huile sur toile",
              artwork: "03.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "Mika",
              dimensions: "80 x 110 cm",
              medium: "Huile sur toile",
              artwork: "04.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "05.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "Cavalcade",
              dimensions: "80 x 110cm",
              medium: "huile sur toile",
              artwork: "06.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "",
              dimensions: "",
              medium: "huile sur toile",
              artwork: "07.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "",
              dimensions: "",
              medium: "huile sur toile",
              artwork: "08.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "",
              dimensions: "",
              medium: "huile sur toile",
              artwork: "09.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "",
              dimensions: "",
              medium: "huile sur toile",
              artwork: "10.jpg",
            },
            {
              artists: "BÉCHIR BOUSSANDEL",
              title: "",
              dimensions: "",
              medium: "huile sur toile",
              artwork: "11.jpg",
            },
          ],
        },
        {
          id: 19,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2019,
          location: [
            "GARDE À VUE, GALERIE SABINE BAYASLI, PARIS",
            "GALERISTES, GALERIE PROVOST HACKER, PARIS.",
            "SMALL, LE NON LIEUX, TOURCOING",
            "TOUT DOIT DISPARAÎTRE, GALERIE PROVOST HACKER, LILLE",
            "L’INVITATION, GALERIE DETAIS, PARIS",
            "ART’UP, FOIRE D’ART CONTEMPORAIN, LILLE",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "BÉCHIR BOUSSANDEL",
        },
        {
          id: 20,
          showImages: [],
          description: {
            fr: ``,
            eng: ``,
          },
          artworks: [],
          year: 2018,
          location: [
            "BLIND DATE, GALERIE PROVOST HACKER, LILLE",
            "SMALL, LE NON LIEUX, TOURCOING",
            "ÉTATS DES LIEUX, LA PLATEFORME, DUNKERQUE ",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "BÉCHIR BOUSSANDEL",
        },
      ],
    },
    {
      id: 3,
      name: "RAHMA LHOUSSIG",
      image: "rahma.jpg",
      cv: "",
      artworks: [
        {
          artists: "RAHMA LHOUSSIG",
          title: "A feast",
          dimensions: "130x97cm",
          medium: "",
          artwork: "rahma7.jpg",
        },
        {
          artists: "RAHMA LHOUSSIG",
          title: "I no longer wonder",
          dimensions: "195x130cm",
          medium: "",
          artwork: "rahma6.jpg",
        },
        {
          artists: "RAHMA LHOUSSIG",
          title: "Negotiation",
          dimensions: "130x97cm",
          medium: "",
          artwork: "rahma5.jpg",
        },
        {
          artists: "RAHMA LHOUSSIG",
          title: "Untitled",
          dimensions: "130x97cm",
          medium: "",
          artwork: "rahma4.jpg",
        },
        {
          artists: "RAHMA LHOUSSIG",
          title: "Unwrapped gift",
          dimensions: "130x97cm",
          medium: "",
          artwork: "rahma3.jpg",
        },
        {
          artists: "RAHMA LHOUSSIG",
          title: "Untitled",
          dimensions: "100x120cm",
          medium: "Mixte sur toile",
          artwork: "rahma2.jpg",
        },
        {
          artists: "RAHMA LHOUSSIG",
          title: "Untitled",
          dimensions: "100x120cm",
          medium: "Mixte sur toile",
          artwork: "rahma1.jpg",
        },
      ],
      biography: {
        fr: `
        Née en 1996, Rahma Lhoussig est originaire de Taroudant, diplômée de l’Institut National des Beaux-Arts de Tétouan, elle a participé à des master classes dans divers domaines tels que la recherche artistique, la gravure, la sérigraphie. Récemment, elle a effectué des résidences au Jardin Rouge (Fondation Montresso) à Marrakech. En mars 2020, elle a eu une exposition personnelle à la galerie Kulte à Rabat. Les peintures et dessins inédits de l’artiste représentent une iconographie de l’inachevé. Habité par des animaux et des objets du quotidien, c’est dans une atmosphère familière que l’univers de Rahma Lhoussig mêle de manière dissonante animaux, fleurs, insectes, outils…. Introspection de l’œuvre, les traits se défont, les corps s’évaporent, pour créer un nouveau monde.`,
        eng: `
        We are excited to present our new collaboration!
Born in 1996, Rahma Lhoussig is a native of Taroudant, graduated from the National Institute of Fine Arts in Tetouan, she has participated in master classes in various fields such as artistic research, engraving, screen printing. Recently she has done residencies at the Jardin Rouge (Montresso Foundation) in Marrakech. In March 2020 she had a solo exhibition at the Kulte Gallery in Rabat. The artist’s unpublished paintings and drawings represent an iconography of the unfinished. Inhabited by animals and everyday objects, it is in a familiar atmosphere that the universe of Rahma Lhoussig mixes in a dissonant way animals, flowers, insects, tools … Introspection of the work, the features are undone, the bodies evaporate, to create a new world.`,
      },
      exhibitions: [],
    },
    {
      id: 4,
      name: "RACHID L’MOUDDENE",
      image: "rachid.jpg",
      cv: "",
      biography: {
        fr: `
        Né à Casablanca, Rachid l’Mouddene est artiste plasticien et designer.
Fils d’un imprimeur, il était régulièrement plongé dans les chutes de papier, dans l’odeur du carton et dans ses multiples formes finies ou disloquées, qu’il commençait alors à manipuler. Il développe une pratique minutieuse, patiente, soucieuse du détail et conçoit progressivement des oeuvres de design originales.
 
Ses productions s’exposent depuis à la biennale internationale du design à Saint Etienne (2006), au Maroc Design (2006), au Centre Panafricain d’Alger (“Manières de vivre africaines” (2009), pour ne citer que ceux-ci . Il a remporté le premier prix de la jeune peinture marocaine, puis le prix du livre d’artiste initié par l’institut Cervantès et le prix de Maroc design 2006.
        `,
        eng: `
        Born in Casablanca, Rachid L’Mouddene is a visual Artist and Designer.
 
Being the son of a printer, Rachid L’Mouddene had constant contact with paper. He grew up in the smell of cardboard and its multiple finished and disarticulated forms. Since then he started developing a meticulous, patient and detail-oriented artistic process, working essentially with cardboard. His artwork is entirely conceived with this singular material that he uses to create furnitures, objects and installations. He shows us a different path on how to use cardboard and invites us to imagine a more ecological future free of our old consumptions practices.
 
His work was shown in the international Design Biennial of Saint Etienne ( 2006 ), at the Maroc Design 2006, the Pan-african center of Alger. He also is the winner of many prizes ( Young moroccan painting contest, Artist’s book contest of the Cervantes institute and Maroc Design 2006. )`,
      },
      artworks: [
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105753.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "TABLEWEB-1-scaled.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105002.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105217.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105376.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105511.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105297.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105732.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "Cactus-web-1.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "EchiquierWEB-1.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS104714.jpg",
        },
      ],
      exhibitions: [
        {
          id: 22,
          artistId: 4,
          descriptionTitleFr: "",
          descriptionTitleEng: "",
          descriptionAuthorFr: "",
          descriptionAuthorEng: "",
          artistImage: "rachid.jpg",
          textColor: "white",

          quote: `
          « L’art environnemental peut se présenter comme une synthèse esthétique traduisant une volonté de “réparer” symboliquement l’environnement […]Il engage, alors, non seulement
l’expérience esthétique singulière et individuelle, mais aussi le jugement”

-Blanc et Lolive (2009).`,
          paragraphFr: `
          Rachid L’moudden est d’abord un artiste plasticien. Un orfèvre de la matière. Si son matériau fétiche est le carton depuis quelques années, L’moudden s’est régulièrement réinventé, refusant de s’arrêter à un style unique. Oeuvres d’art éphémères, installations et peintures ont été ses champs formels de recherche. Ses oeuvres ont notamment été remarquées à l’exposition “Objet publicitaire non identifié” à la Villa des Arts de Casablanca (2001), ou encore à l’arthothèque de Schiedam en Hollande (2001), lors de l’exposition “Sans motif apparent” (2001).


Une commande, a agit pour lui comme un tournant. Une photographe de renom, lui demande de concevoir un grand meuble de rangement, pour y répertorier son travail et sa documentation. Rachid L’moudden plonge alors dans un matériau dont il est intimement familier, qui agite alors toute la densité de ses souvenirs d’enfance. Fils d’un imprimeur, il était régulièrement plongé dans les chutes de papier, dans l’odeur du carton et dans ses multiples formes finies ou disloquées, qu’il commençait alors à manipuler. Il développe une
pratique minutieuse, patiente, soucieuse du détail et conçoit progressivement des oeuvres de design originales. Ses productions en carton s’exposent depuis à la biennale internationale du design à Saint Etienne (2006), au Maroc Design (2006), au Centre Panafricain d’Alger (“Manières de vivre africaines” (2009)), pour ne citer que ceux-ci.


La première exposition du C.D.A est aussi la première entièrement consacrée aux travaux de Rachid L’moudden au Maroc. Il y explore une frontière délicate. Les oeuvres y sont à l’intersection entre le travail plastique pointilleux du carton ondulé et un positionnement affirmé dans la lignée de “l’Art Écologique”.
Les objets de Rachid L’moudden sont en effet des manifestes écologiques, qui font irruption dans le panorama visuel de nos espaces de vie, mais aussi des objets obéissant à une poétique intérieure et concentrent un pouvoir évocateur. Nous nous souvenons par exemple de “Hommage à Brahim et Naïma”, une pièce constituée de deux grands meubles en carton exposés au Maroc Design en 2006, dont le petit porte le nom du père L’moudden, et l’autre, plus grand celui de la mère de l’artiste, mimant la stature de ses deux personnages. Les objets de L’moudden sont ainsi animés d’une imagination toute intime, en même temps qu’ils se font ambassadeurs de procédés de fabrication respectueux de la Nature.


La proposition de Rachid L’moudden est donc celle d’un ouvreur de voie. Il nous invite à son laboratoire d’expérimentations, dans lequel l’objet est conçu comme une pièce non seulement animée de sens, mais ambassadrice d’un mode de production durable. Conscient qu’une oeuvre d’art ne change pas le monde, L’moudden propose donc de faire de ses objets des médiateurs, qui à travers l’expérience de leur usage, tout comme leur expérience visuelle, suscitent une réflexion politique, sur les circuits de fabrication des objets et sur nos pratiquesde consommation.
         `,
          paragraphEng: ``,
          featuredArt: [
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "TABLEWEB-1-scaled.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105002.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105376.jpg",
            },
          ],

          showImages: [
            {
              image: "cardboard.png",
              title: "",
            },
          ],

          artworks: [
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105753.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "TABLEWEB-1-scaled.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105002.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105217.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105376.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105511.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105297.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS105732.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "Cactus-web-1.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "EchiquierWEB-1.jpg",
            },
            {
              artists: "RACHID l'MOUDDENE",
              title: "",
              dimensions: "",
              medium: "",
              artwork: "LS104714.jpg",
            },
          ],
          year: 2019,
          location: ["– THE WORLD IN CARDBOARD, CDA GALLERY, CASABLANCA,"],
          duration: "07 MARS -07 MAI 2019",
          titleEng: "THE WORLD IN CARDBOARD",
          titleFR: "LE MONDE EN CARTON",
          galImage: "cardboard.png",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 23,
          showImages: [],
          artworks: [],
          year: 2011,
          location: ["–  PRECIOUS WATERS TROUBLED WATERS ,GWA USA "],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 23,
          showImages: [],
          artworks: [],
          year: 2010,
          location: [
            "KEEP MOROCCO BEAUTIFUL, GEORGE WASHINGTON ACADEMY CASABLANCA ",
            " KEEP MOROCCO BEAUTIFUL, ABATTOIR CASABLANCA ",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 24,
          showImages: [],
          artworks: [],
          year: 2009,
          location: [
            "CUBES DE MATIÈRES, MIN’YADINA MARRAKECH ",
            "MANIÈRES DE VIVRE ET AFRICAINES, PANAFRICAIN D’ALGER",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 25,
          showImages: [],
          artworks: [],
          year: 2009,
          location: [
            "CUBES DE MATIÈRES, MIN’YADINA MARRAKECH ",
            "MANIÈRES DE VIVRE ET AFRICAINES, PANAFRICAIN D’ALGER",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 26,
          showImages: [],
          artworks: [],
          year: 2008,
          location: [
            "MAGHREB, NOUVEAU DESIGN ORNEMENT ET MODERNITÉ, MUSÉE NATIONAL D’ART MODERNE ET CONTEMPORAIN D’ALGER ",
            "CARREFOUR D’ARTISTES, ESSAOUIRA",
            "BIENNALE INTERNATIONALE DESIGN SAINT-ÉTIENNE FRANCE 2008",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 26,
          showImages: [],
          artworks: [],
          year: 2007,
          location: [
            "PASSERELLE ARTISTIQUE VI, LA SOURCE DU LION CASABLANCA 2007",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 27,
          showImages: [],
          artworks: [],
          year: 2006,
          location: [
            "PREMIER PRIX MAROC DESIGN, CASABLANCA",
            "BIENNALE INTERNATIONALE DESIGN SAINT-ÉTIENNE FRANCE",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 28,
          showImages: [],
          artworks: [],
          year: 2004,
          location: ["PASSERELLE ARTISTIQUE, PARC L’HERMITAGE, CASABLANCA"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 29,
          showImages: [],
          artworks: [],
          year: 2003,
          location: ["PASSERELLE ARTISTIQUE, VILLA DES ARTS, CASABLANCA"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 30,
          showImages: [],
          artworks: [],
          year: 2001,
          location: [
            " OPNI OBJET PUBLICITAIRE NON IDENTIFIE, VILLA DES ARTS CASABLANCA ",
            " SANS MOTIF APPARENT, ARTOTHÈQUE DE SCHIEDAM HOLLANDE ",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 31,
          showImages: [],
          artworks: [],
          year: 1999,
          location: [
            "PREMIER PRIX DE LA JEUNE PEINTURE MAROCAINE, ESPACE WAFABANK",
            "PRIX DU LIVRE D’ARTISTE, CERVANTÈS CASABLANCA 1999.",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 32,
          showImages: [],
          artworks: [],
          year: 1998,
          location: [
            "EXPOSITION COLLECTIVE, 20ÈME MOUSSEM CULTUREL INTERNATIONAL D’ASILAH ",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 33,
          showImages: [],
          artworks: [],
          year: 1997,
          location: ["EXPOSITION RÉTROSPECTIVE, CASABLANCA"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
        {
          id: 34,
          showImages: [],
          artworks: [],
          year: 1996,
          location: [
            "EXPOSITION PORTES OUVERTES DES ATELIERS D’ARTISTE À L’ESPACE VICTOR HUGO, CASABLANCA",
            "EXPOSITION COLLECTIVE D’ARTISTES À FES",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "RACHID L'MOUDDENE",
        },
      ],
    },
    {
      id: 5,
      name: "ABDERRAHMANE DOUKKANE",
      image: "doukkane.jpg",
      cv: "",
      artworks: [
        {
          artists: "ABDERRAHMANE DOUKKANE",
          title: `Serie "Souffle",Souffle d'un corps`,
          dimensions: "60x90 cm",
          medium:
            "Serie Souffle d'un corps Photographie, Fine Art tirage pigmentaire",
          artwork: "doukkaneart.jpg",
        },
        {
          artists: "ABDERRAHMANE DOUKKANE",
          title: `Serie "Souffle", Souffle d'un corps`,
          dimensions: "60x90 cm",
          medium: "d'un corps Photographie, Fine Art tirage pigmentaire",
          artwork: "doukkaneart2.jpg",
        },
        {
          artists: "ABDERRAHMANE DOUKKANE",
          title: `Serie "Souffle", Souffle d'un corps`,
          dimensions: "60x90 cm",
          medium: "Photographie, Fine Art tirage pigmentaire, ",
          artwork: "doukkaneart4.jpg",
        },
        {
          artists: "ABDERRAHMANE DOUKKANE",
          title: `Serie "Racines"`,
          dimensions: "60x90 cm",
          medium: "Photographie, Fine Art tirage pigmentaire, ",
          artwork: "doukkaneart3.jpg",
        },
        {
          artists: "ABDERRAHMANE DOUKKANE",
          title: `Serie "Racines"`,
          dimensions: "60x90 cm",
          medium: "Photographie, Fine Art tirage pigmentaire, ",
          artwork: "doukkaneart5.jpg",
        },
        {
          artists: "ABDERRAHMANE DOUKKANE",
          title: `Serie "Racines"`,
          dimensions: "60x90 cm",
          medium: "Photographie, Fine Art tirage pigmentaire, ",
          artwork: "doukkaneart6.jpg",
        },
        {
          artists: "ABDERRAHMANE DOUKKANE",
          title: `Serie "Racines"`,
          dimensions: "60x90 cm",
          medium: "Photographie, Fine Art tirage pigmentaire, ",
          artwork: "doukkaneart8.jpg",
        },
      ],
      biography: {
        fr: `
        Né à Casablanca, Rachid l’Mouddene est artiste plasticien et designer.
Fils d’un imprimeur, il était régulièrement plongé dans les chutes de papier, dans l’odeur du carton et dans ses multiples formes finies ou disloquées, qu’il commençait alors à manipuler. Il développe une pratique minutieuse, patiente, soucieuse du détail et conçoit progressivement des oeuvres de design originales.
 
Ses productions s’exposent depuis à la biennale internationale du design à Saint Etienne (2006), au Maroc Design (2006), au Centre Panafricain d’Alger (“Manières de vivre africaines” (2009), pour ne citer que ceux-ci . Il a remporté le premier prix de la jeune peinture marocaine, puis le prix du livre d’artiste initié par l’institut Cervantès et le prix de Maroc design 2006.
        `,
        eng: `
        Né en 1983 à Casablanca , Maroc.

Vit et Travaille à Casablanca .

Prix Arab Fund for Art and culture. Prix international Exchange Alumni, Washington, Los Angeles, New York. 

Abderrahmane Doukkane est un éternel défenseur de la nature: celle qu’il a côtoyée enfant dans la région de Bouskoura, mais aussi la nature humaine, centre de ses préoccupations. Lors d’un atelier à l’école des beaux arts de Casablanca en 2008, sa rencontre avec Simon Wheatley de l’agence Magnum précipite sa vocation de photographe. Influencé par Robert Frank et William Klein, Abderrahmane Doukkane l’est aussi par l’école italienne, comme Mario Giacomelli ou Paolo Roversi. L’aspect politique et social de son travail se retrouve dans l’installation Taisez-vous 2010-2014, présentée à la Société Générale de Casablanca et au musée Mohamed VI de Rabat, ou l’artiste plaque au mur des portraits de marginaux d’habitude réduit au silence, à la manière d’affiches électorales.

(Texte de Fouad Laroui : Lumières Marocaines)
       `,
      },
      exhibitions: [
        {
          id: 35,
          showImages: [],
          artworks: [],
          year: 2020,
          location: [
            "COLLECTIVE SHOW, CDA GALLERY, CASABLANCA",
            "UNITED ARTISTS 1-54 CONTEMPORARY AFRICAN ART FAIR MARRAKECH",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 36,
          showImages: [],
          artworks: [],
          year: 2018,
          location: [
            "RENCONTRES PHOTOGRAPHIQUES RABAT “PHOTOS DE MÉMOIRES, MÉMOIRES DE PHOTOS.",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 37,
          showImages: [],
          artworks: [],
          year: 2017,
          location: [
            "UNE PHOTO POUR MA PLANETE ESPACE CDG RABAT",
            "ENVIR’ACT VILLA DES ARTS DE RABAT",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 38,
          showImages: [],
          artworks: [],
          year: 2016,
          location: [
            "LES NUITS PHOTOGRAPHIQUES D’ESSAOUIRA",
            " ETRE ICI – TANGER- ATLASSIYATE -VILLA DES ARTS DE RABAT ",
            " ORIENT’ART EXPRESS – OUJDA",
            " JIDARIAT ,THINKART -CASABLANCA",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 39,
          showImages: [],
          artworks: [],
          year: 2015,
          location: ["ART FOR NEW, US EMBASSY – RABAT"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 40,
          showImages: [],
          artworks: [],
          year: 2014,
          location: [
            "1914-2014 CENT ANS DE CRÉATION, MMVI – RABAT",
            "GLOBAL/LOCAL, LE CUBE INDEPENDENT ART ROOM – RABAT",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 41,
          showImages: [],
          artworks: [],
          year: 2013,
          location: [
            "JEUX DE LA FRANCOPHONIE – NICE",
            "100 ANS – 100 ŒUVRES – 100 ARTISTES, SOCIÉTÉ GÉNÉRALE – CASABLANCA",
            "BIBLIOTHÈQUE D’IMAGES, INSTITUT FRANÇAIS – CASABLANCA",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 42,
          showImages: [],
          artworks: [],
          year: 2012,
          location: ["ART FOR NEW, US EMBASSY – RABAT"],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
        {
          id: 43,
          showImages: [],
          artworks: [],
          year: 2011,
          location: [
            "LE MOMENT OÙ LES COULEURS DISPARAISSENT, INSTITUT FRANÇAIS – EL JADIDA",
          ],
          duration: "",
          titleEng: "",
          titleFR: "",
          galImage: "",
          artists: "ABDERRAHMANE DOUKKANE",
        },
      ],
    },
    {
      id: 6,
      name: "MAMOUN RTAL BENNANI",
      image: "mamounrtalbennani.jpg",
      cv: "",
      artworks: [
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "Car-casse  - Jorf El Asfar, 2017",
          dimensions: "100 x 145 cm",
          medium: "Tirage Fine Art",
          artwork: "carcasee.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "Taxithèque, Jorf El Asfat, 2017",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "5-768x511.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "Oasis 1/3 - Hassilabied 2017",
          dimensions: "50x75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3mm",
          artwork: "MMF_6884-Edit-1-768x511.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "Oasis 2/3 - Hassilabied 2017",
          dimensions: "50x75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3mm",
          artwork: "DSCF1121-Edit.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "L'Argane express, 2017",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "15-768x511.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "Taxi brousse - Taliouine, 2017,",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "16-768x512.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "Taxi brousse - Taliouine, 2017,",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "16-768x512.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "IMG_1009-Edit-1-768x576.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "Voleur de places - Casablanca 2019",
          dimensions: "50 x 75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3 mm",
          artwork: "L1010252-Edit-768x511.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI AND JULES ROUFFIO",
          title: "No limit, 2017",
          dimensions: "50 x 80 cm",
          medium: "Tirage Fine Art",
          artwork: "Dip-1b-768x511.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "mer3-scaled-e1602858285716-768x507.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "mer19-scaled-e1602858430459-768x514.jpg",
        },
        {
          artists: "MAMOUN RTAL BENNANI",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "Neige-e1602858390566-768x462.jpg",
        },
      ],
      biography: {
        fr: `
        Né à Casablanca en 1988,

Mamoun RTAL BENNANI commence la photographie de manière autodidacte.  Il entretient sa passion en se spécialisant dans les techniques du XIX siècle soit, avant l’apparitions des premiers appareils photos. En 2008, il entreprend une formation d’architecte à Paris qu’il termine en 2013. Il décide alors de retourner dans son pays natal ou il allie Photographie, architecture et agriculture.
        `,
        eng: `
        Born in Casablanca in 1988.
Mamoun RTAL BENNANI started as a self-taught photographer. He nurtured his passion for photography, specializing in the XIX century techniques that existed way before the first cameras. He enrolled in architecture school in 2008 and graduated in 2013. Before moving back to his native country where he works as a photographer, architect and farmer
        `,
      },
      exhibitions: [],
    },
    {
      id: 7,
      name: "JULES ROUFFIO",
      image: "Portrait-Jules.jpg",
      cv: "",
      artworks: [
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Car-casse  - Jorf El Asfar, 2017",
          dimensions: "100 x 145 cm",
          medium: "Tirage Fine Art",
          artwork: "carcasee.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Taxithèque, Jorf El Asfat, 2017",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "5-768x511.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Oasis 1/3 - Hassilabied 2017",
          dimensions: "50x75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3mm",
          artwork: "MMF_6884-Edit-1-768x511.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Oasis 2/3 - Hassilabied 2017",
          dimensions: "50x75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3mm",
          artwork: "DSCF1121-Edit.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "L'Argane express, 2017",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "15-768x511.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Taxi brousse - Taliouine, 2017,",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "16-768x512.jpg",
        },

        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "IMG_1009-Edit-1-768x576.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Voleur de places - Casablanca 2019",
          dimensions: "50 x 75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3 mm",
          artwork: "L1010252-Edit-768x511.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "No limit, 2017",
          dimensions: "50 x 80 cm",
          medium: "Tirage Fine Art",
          artwork: "Dip-1b-768x511.jpg",
        },
      ],
      biography: {
        fr: `
        Né en 1990 à Paris,

Né dans une famille de photographe, Jules ne s’intéresse a la photo que relativement tard. C’est après des études d’ingénieur et de nombreux voyages
sur terre comme mer, qu’il décide de commencer une carrière de photographe. Pour approfondir sa technique il effectue plusieurs commandes diverse pour des maison d’éditions sur paris tout en travaillant sur des projets personnels essentiellement au Maroc.Jules’ interest in photography showed up late`,
        eng: `
        Born in 1990 in Paris,

Born in a family of photographers, Jules’ interest in photography showed up late. It is after he graduated as an engineer and went on multiple journeys inland and in the sea that he decided to start his career as a photographer. In order to improve his technique, he did several assignments or publishers in Paris while working on his own projects in Morocco`,
      },
      exhibitions: [],
    },
  ]);

  const [exhibitions, setExhibition] = useState([
    {
      id: 49,
      showNature: "Solo Show",
      allArtists: [
        {
          artistId: 10,
          name: "YVANOVITCH MBAYA",
        },
      ],
      artistImage: "YvanovitchMbaya.jpg",
      descriptionTitleFr: "La vigilance de toujours marcher vers l’autre",
      descriptionTitleEng: "The vigilance of always walking toward the other",
      descriptionAuthorFr: "Chahrazad Zahi , curatrice",
      descriptionAuthorEng: "Chahrazad Zahi , curator",
      paragraphFr: `Les oeuvres d’art qui ont attrait à la migration et au nomadisme sont en proie à deux écueils majeurs : le premier est une vision qui ancre la question de l’« immigré » au corps social, fondé sur la culture, où il apparaît comme une faille. Au corps performé par la société s’opposerait le corps qui transgresse les normes en portant les signes d’une culture autre. Ces signes, interprétés hors de leur contexte, se durcissent en une nouvelle grille de regard portée sur l’étranger. Le second, une inversion, se rattache au reproche qu’Édouard Glissant fait à « l’éloge du nomadisme, libérateur supposé de l’être », et rappelle que le véritable nomade est plutôt « surdéterminé par ses conditions d’existence » et que le nomadisme est « non pas une jouissance de liberté mais une obéissance à des contingences contraignantes. »1 Il va sans dire que ces identités supposées ne rendent compte que partiellement de l’identité réelle, vécue du nomade.

      C’est pour déjouer cette binarité qu’Yvanovitch Mbaya propose une réflexion personnelle sur l’expérience du voyage, de l’expatriation, des zones de contact. L’artiste puise de son expérience pour expliciter les complexités et les histoires construites qui découlent de ces déplacements. Loin d’un éloge romantique de la nomadologie, c’est un récit intime qui investit la toile.
      
      Les déplacements de l’artiste, qu’il qualifie de migrations personnelles, esquissent dans son travail les contours d’un syncrétisme culturel et d’une mise en exil de soi. Cette démarche pourrait se rattacher à la poétique de la relation telle que définie par Édouard Glissant, une poétique selon laquelle l’identité s’étend, s’étire dans son rapport à l’altérité. L’artiste serait-il en quête d’une identité, d’une appartenance à un territoire ? Le propos de Mbaya n’est pas de prendre racine, mais de sonder une réalité partagée. Les pieds de ses silhouettes sont ancrés dans le sable, mais ne cherchent pas à s’implanter dans ce sol mouvant. Dans un geste répétitif et insistant, ces silhouettes évoquent la notion de cycle qui accompagne cette géopoétique du voyage : tout est à redécouvrir avec de nouveaux yeux, tout est à mettre en lien.
      
      Son oeuvre comporte un second niveau de lecture. Aux considérations géopoétiques s’ajoute une dimension écologique, relationnelle. Des éléments liés à la mémoire de la nature et de traditions ancestrales sont souvent inscrits au coeur de ses compositions : des toiles à partir de chutes de tissus marquées par les empiètements des artisans, des pigments naturels, du café, de la poudre de charbon, des graines de plantes, des minéraux… autant d’éléments qui jouissent d’une seconde vie. Au coeur du procédé, l’utilisation prégnante du café n’est pas anodine. Si la démarche marque une intention écologique, elle contient pourtant un propos sociologique. En creux, à travers l’usage du café que l’artiste considère comme vecteur de l’histoire sociale et culturelle africaine et de la sociabilité humaine, l’artiste s’engage à mettre en exergue des traditions ancestrales du continent et de leur rapport à la nature.
      
      D’un point de vue strictement pictorial, la relation à la nature est maîtrisée et contrainte à l’échelle des silhouettes qu’il esquisse. Refusant une histoire et un art standardisé, Mbaya tord le coup à la peinture qui contient l’acte de dessiner. Si la peinture est dans l’illusion et que le dessin mord dans le réel, alors comment faire marche arrière ? L’artiste peint le dessin. Le corps construit émerge du fouillis de ces récits de voyage multiples et enchevêtrés, et nous accédons alors à la transhistoricité. Ses compositions sont le réceptacle d’idées, d’histoires ou d’anecdotes. Et ce sont ces trames qui constituent la charge à la fois narrative et conceptuelle de son travail.
      
      Ce qu’il me semble important de dire, et qui constitue par rapport à Glissant, un pas de plus, c’est ce qui convoque et active dans son oeuvre le souvenir d’une trajectoire. Les corps de Mbaya se dressent comme des vaisseaux porteurs de mémoire. Ils mettent en lumière l’épiphanie de l’altérité chère à Lévinas, qui nous enveloppe d’une humanité salutaire, soudainement et comme miraculeusement partagée, par la grâce de laquelle l’altérité « nous échappe et nous contraint à la vigilance de toujours marcher vers elle »
      `,
      paragraphEng: `Artworks that deal with the subjects of migration and errantry are at the mercy of two major pitfalls: the first is a vision that anchors the question of the immigrant to the social fabric, based on culture, where s/he would appear as a flaw. The performance of the societal body is in opposition then to the body that would transgress norms, bearing signs from another culture. When these signs are interpreted out of context, they harden into a new sight grid aimed at and focusing upon the foreigner. The second is an inversion, in the spirit of Edouard Glissant’s criticism, “in praise of errantry, supposed liberator of beings”, which reminds us that the true errant is more “overdetermined by his obedience to the conditions of his existence”, and that errantry (nomadism) is “not the enjoyment of freedom but rather an obedience to limiting contingencies”.1 It goes without saying that these supposed identities understand little of the real-life identity of the nomad.

      Yvanovitch Mbaya plays with this binarity, offering a personal reflection upon the experience of travel, of expatriation, and areas of contact. The artist revisits his own experience to elucidate the complexities of these narratives whose construction flows from his own journey. Far from any romantic praise of nomadology, it is an intimate narrative that inhabits these canvasses.
      
      The artist’s errantry, which he describes as personal migrations, lay out the contours of cultural syncretism and self-exile in his work. This approach is directly or indirectly related to the poetics of relation, as definedby Edouard Glissant, a poetic according to which identity is expanded in the context of alterity. Is the artist in search of an identity,a sense of belonging to some territory?
      
      Mbaya’s proposition is not to settle down in one place, but rather to explore a shared reality. His silhouetted figures stand in the sand, but do not seek to take root in this shifting ground. With repetitive, insistent gesture, these silhouettes evoke the idea of a cycle within the geo-poetics of the journey: all is to be discovered through new eyes, all is to be connected.
      
      There is a second level of interpretation in his work. In addition to geo-poetical considerations, there is an ecological, relational dimension. Elements connected to the memory of nature and ancestral traditions are often at the heart of his compositions: canvasses made of discarded fabrics marked by the intervention of artisans, natural pigments, coffee, coal dust, seeds, minerals… diverse elements here given a second life. The vital use of coffee at the heart of the process is not incidental. If this process shows an ecological intention, it is also a sociological one. Under the surface, the artist uses coffee as a vector of African cultural and social history as well as human sociability, as he endeavours to highlight the continent’s ancestral traditions and their connection to nature.
      
      From a strictly pictorial point of view, the relationship to nature is mastered and contained by the scale of his silhouettes. Mbaya refuses any standardised history or artform, choosing instead to twist the action of painting into a gesture of drawing. If painting is an illusion and drawing is more real, then how can we get back to that reality? The artist paints drawings. The constructed body rises from the clutter of his many voyages, a tangle of his many encounters, and we arrive at trans-historicity. His compositions are containers for ideas, stories, anecdotes. And this framework holds the narrative and conceptual charge of his work.
        
      It seems important to me go take a further step, in relation to Glissant, to remark upon the convocation and activation of the memory of a trajectory. Mbaya’s bodies stand like guardian vessels of memory. They focus on the epiphany of alterity so dear to the philosopher Levinas, wrapping us in beneficent humanity, suddenly and seemingly miraculously shared by the grace with which alterity “escapes us, and requires the vigilance to always walk toward it”.
      
      `,
      quote: "",
      video: "",
      description: {
        fr: ``,
        eng: ``,
      },
      textColor: "white",
      featuredArt: [
        {
          artists: "YVANOVITCH MBAYA",
          title: "Zimfumu, 2022",
          dimensions: "148 x 260 cm",
          medium: `Café, encre de Chine, poudre de charbon et
          papier marouflé sur toile de jean récupérée.
         || Coffee, Indian ink, charcoal powder and
          paper mounted on recycled canvas.`,
          artwork: "gb23.jpg",
        },
      ],
      showImages: [
        {
          image: "gatabantu1.jpg",
          title: "Exhibition view of Gâta Bantu, 2022",
        },

        {
          image: "gatabantu3.jpg",
          title: "Exhibition view of Gâta Bantu, 2022",
        },
        {
          image: "gatabantu4.jpg",
          title: "Exhibition view of Gâta Bantu, 2022",
        },
      ],
      artworks: [
        {
          id: 130,
          artists: "YVANOVITCH MBAYA",
          title: "Pende Mbangu, circa 1945",
          dimensions: "21 x 13 x 11 cm || 0,20 kg",
          medium: `Masque en bois de bombax taillé Pigment noir, rouge et Kaolin. ||
            Carved bombax wood mask
Black, red and Kaolin pigment.`,
          artwork: "gb1.jpg",
        },
        {
          id: 131,
          artists: "YVANOVITCH MBAYA",
          title: "Mpeve, 2022",
          dimensions: "245 x 235 cm ",
          medium: `Café, encre de Chine, poudre de charbon
          et papier marouflé sur toile récupérée. ||
          Coffee, Indian ink, charcoal powder and
          paper mounted on recycled canvas.`,
          artwork: "gb24.jpg",
        },
        {
          id: 132,
          artists: "YVANOVITCH MBAYA",
          title: "Dialogue, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb3.jpg",
        },
        {
          id: 133,
          artists: "YVANOVITCH MBAYA",
          title: "Tabou, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre sur
          papier velours naturel. ||
          Indian ink, charcoal powder,
          coffee and ink pen on
          natural velvet paper.`,
          artwork: "gb4.jpg",
        },
        {
          id: 134,
          artists: "YVANOVITCH MBAYA",
          title: "Zimfumu, 2022",
          dimensions: "148 x 260 cm",
          medium: `Café, encre de Chine, poudre de charbon et
          papier marouflé sur toile de jean récupérée.
         || Coffee, Indian ink, charcoal powder and
          paper mounted on recycled canvas.`,
          artwork: "gb23.jpg",
        },
        {
          id: 135,
          artists: "YVANOVITCH MBAYA",
          title: "Trance, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb5.jpg",
        },
        {
          id: 136,
          artists: "YVANOVITCH MBAYA",
          title: "Intuition, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb6.jpg",
        },
        {
          id: 137,
          artists: "YVANOVITCH MBAYA",
          title: "Au-delà, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb7.jpg",
        },
        {
          id: 138,
          artists: "YVANOVITCH MBAYA",
          title: "La rue nous fait marcher, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb8.jpg",
        },
        {
          id: 139,
          artists: "YVANOVITCH MBAYA",
          title: "Antipode, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb9.jpg",
        },
        {
          id: 140,
          artists: "YVANOVITCH MBAYA",
          title: "Instant présent, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb10.jpg",
        },
        {
          id: 141,
          artists: "YVANOVITCH MBAYA",
          title: "Au loin, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb11.jpg",
        },
        {
          id: 142,
          artists: "YVANOVITCH MBAYA",
          title: "Pas de deux, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb12.jpg",
        },
        {
          id: 143,
          artists: "YVANOVITCH MBAYA",
          title: "Ensorcelé, 2022",
          dimensions: "100 x 74 cm (including frame - avec cadre)",
          medium: `Encre de Chine, poudre de
          charbon, café et stylo à encre
          sur papier velours naturel. ||
          Indian ink, charcoal powder, coffee
          and ink pen on natural velvet paper.`,
          artwork: "gb13.jpg",
        },
        {
          id: 144,
          artists: "YVANOVITCH MBAYA",
          title: "L’apparato umano, 2022",
          dimensions: "156 x 103 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo à encre sur papier Arches.
         || Indian ink, charcoal powder, coffee
          and ink pen on Arches paper.`,
          artwork: "gb14.jpg",
        },
        {
          id: 145,
          artists: "YVANOVITCH MBAYA",
          title: "La descente, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
        ||  Indian ink, charcoal powder,
          coffee and pen on Canson paper.`,
          artwork: "gb15.jpg",
        },
        {
          id: 146,
          artists: "YVANOVITCH MBAYA",
          title: "Où vers ?, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
          Indian ink, charcoal powder, coffee
          and pen on Canson paper.`,
          artwork: "gb16.jpg",
        },
        {
          id: 147,
          artists: "YVANOVITCH MBAYA",
          title: "Vide en soit 1, 2022",
          dimensions: "160 x 118 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
         || Indian ink, charcoal powder coffee
          and pen on Canson paper.`,
          artwork: "gb19.jpg",
        },
        {
          id: 148,
          artists: "YVANOVITCH MBAYA",
          title: "Vide en soit 2, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
         || Indian ink, charcoal powder coffee
          and pen on Canson paper.`,
          artwork: "gb17.jpg",
        },
        {
          id: 149,
          artists: "YVANOVITCH MBAYA",
          title: "Solus, 2022",
          dimensions: "160 x 108 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre de charbon,
          café et stylo sur papier Canson.
         || Indian ink, charcoal powder coffee
          and pen on Canson paper.`,
          artwork: "gb200.jpg",
        },
        {
          id: 150,
          artists: "YVANOVITCH MBAYA",
          title: "Munu, 2022",
          dimensions: "116 x 132 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre
          de charbon, café et stylo à
          encre sur papier Canson. ||
          Indian ink, charcoal powder, coffee
          and ink pen on Canson paper.`,
          artwork: "gb20.jpg",
        },

        {
          id: 151,
          artists: "YVANOVITCH MBAYA",
          title: "Ve, 2022",
          dimensions: "118 x 160 cm (avec cadre – including frame)",
          medium: `Encre de Chine, poudre
          de charbon, café et stylo à
          encre sur papier Canson. ||
          Indian ink, charcoal powder, coffee
          and ink pen on Canson paper.`,
          artwork: "gb21.jpg",
        },
        {
          id: 152,
          artists: "YVANOVITCH MBAYA",
          title: "D’une route à l’autre, 2022",
          dimensions: "172 x 203 cm (avec cadre – including frame)",
          medium: `Café, encre de Chine et poudre
          de charbon sur toile récupérée.
         || Coffee, Indian ink and charcoal
          powder on recycled canvas`,
          artwork: "gb22.jpg",
        },
      ],
      year: 2022,
      location: [""],
      duration: "28 SEPTEMBRE - 10 NOVEMBRE 2022",
      titleEng: "Gâta Bantu",
      titleFR: "",
      galImage: "gatabantu1.jpg",
      artists: "YVANOVITCH MBAYA",
    },
    {
      id: 48,
      showNature: "Solo Show",
      allArtists: [
        {
          artistId: 9,
          name: "WALID ARDHAOUI",
        },
      ],
      artistImage: "walidardhaoui.jpg",
      descriptionTitleFr: "En marge",
      descriptionTitleEng: "In the margin",
      descriptionAuthorFr: "Olivier Rachet, Critique d’art",
      descriptionAuthorEng: "Olivier Rachet, Art Critic",
      paragraphFr: `Deux univers se côtoient, deux techniques aussi. Un monde d’adultes que le peintre Walid Ardhaoui rencontre le plus souvent dans les marges de la société tunisienne, son appareil photo en bandoulière. Hommes désoeuvrés, candidats à l’immigration, chômeurs désabusés. Lors de sa résidence de trois mois à la CDA Gallery, se sont ajoutés d’autres compagnons de fortune : SDF croisés lors de ses promenades quotidiennes, squatteurs de tous âges, supporters du Wydad et du Raja débordant d’énergie et de colère. Voilà le tableau. À ce monde adulte vient se télescoper celui de l’enfance représenté par des dessins réalisés délibérément de façon maladroite. Hélicoptères rose bonbon, naïade sautant en parachute, fusées brinquebalantes, nuages pleuvant d’étranges larmes de pluie rose, oiseaux hébétés et autres étoiles filantes : tout un monde onirique et décalé s’offre à notre regard. Aux portraits d’individus isolés ou en groupes peints à l’huile, dont le peintre souligne les valeurs de solidarité et de fraternité qui les relient, semblent s’opposer ces dessins conçus à l’acrylique. On est de prime abord déstabilisé par ce curieux mélange d’hyperréalisme virtuose et de gaucherie potache. Pour parachever l’ensemble, le peintre ajoute minutieusement des lignes bleues et une marge rouge assimilant la toile à un cahier d’écolier. Un jeu de parallèles déconcertant qui conduit le spectateur à s’interroger sur un art de la composition plus subversif qu’il n’y paraît.
      Les dessins d’enfants seraient-ils l’image des rêves inaboutis des adultes ? Auraient-ils pour fonction d’atténuer la violence de situations sociales désespérantes ? Ne s’agit-il pas, entre les lignes, de suggérer plutôt le pouvoir d’infantilisation de la société elle-même ? Il se pourrait que maintenir les adultes dans un état d’enfance à perpétuité, de sacrifier l’idéal d’émancipation par l’école et la culture fasse aussi partie du programme. Voilà peut-être l’autre tableau que l’on s’évertue à ne pas voir. Au spectateur de lire alors entre les lignes, d’aller dans ces marges que le peintre s’autorise à transgresser. Contrairement aux corrections qu’un professeur mentionnerait en marge d’une copie pour remettre son élève dans le droit chemin, Walid Ardhaoui ne donne aucune leçon, n’assène aucun message. Tout au plus nous invite-t-il à faire un pas de côté pour poser notre regard sur un groupe de jeunes Tunisiens désoeuvrés posant entre des pans de murs en construction, comme si leur vie était à leur image, un chantier en perpétuelle construction. Prenons le temps de contempler ce sans-abri casablancais que le peintre a rencontré à quelques pas de la galerie, le corps allongé sur un lit de nuages roses. Comme le soldat que décrit Rimbaud dans « Le dormeur du val », cet homme dort paisiblement. À moins qu’il ne réside au paradis des pauvres, s’il en existe un ? Une peinture déstabilisante, oui, si ces portraits d’hommes abîmés par la vie et ces joyeux dessins d’enfant empreints d’une fausse naïveté avaient le pouvoir de bousculer un peu nos préjugés, en nous faisant contempler ce qui souvent nous indiffère.`,
      paragraphEng: `Two worlds coexist, as well as two techniques. There is the adult world that painter Walid Ardhaoui often explores, with his camera strapped across his chest, on the fringes of Tunisian society. Men out of work, prospective immigrants, the disillusioned and the unemployed. During his three-month residency at CDA Gallery, he has added a few more: homeless people met while walking in the streets, squatters young and old, Wydad or Raja football fans bursting with energy and anger. That’s the scene. Next to this adult world lies a children’s world, represented by deliberately childish drawings. Bright pink helicopters, parachute-jumping naiads, strange pink drops falling from rainclouds, dazed birds and shooting stars: an offbeat, dream-like world emerges before our eyes. These scribbled acrylic drawings collide then with oil-painted individual or group portraits, in which the artist underscores the values of solidarity and fraternity that connect them. At first impression, the sight of this odd mix of hyper-realistic virtuosity and schoolboy awkwardness is unsettling. To complete the effect, the painter takes care to add the red margin and blue lines of a class notebook. A disconcerting play of parallels that leads the viewer to question a form of composition that may be more subversive than it seems. Are children’s drawings in fact the unfulfilled dreams of adults? Is their function to mitigate the violence of desperate social situations? And, we read between the lines, don’t they reveal the infantilization of society itself? The result of keeping adults in a perpetual state of childhood, sacrificing the ideal of emancipation to school and the pressures of societal culture. This is perhaps the other picture we strive not to see. The viewer must then read between and beyond the lines, as the painter grants us permission to break through. Unlike a professor’s notes scribbled in the margins of his student’s paper to put him on the right track, Walid Ardhaoui has no lessons to give, nor points to make. He merely invites us to pause for a moment, and see a group of young out-of-work Tunisians standing in front of a construction site, as if to say their own lives are forever under construction. Let us take the time to consider this member of Casablanca’s homeless tribe, a few steps from the gallery. The painter has laid him on a bed of pink clouds. Like Rimbaud’s soldier in “Le dormeur du val”, the man appears to sleep peacefully. Unless he has passed to the poor men’s paradise, if there is such a thing? Yes, the works are indeed unsettling, if these portraits of men ruined by life and these joyful, falsely innocent children’s drawings might have the power to shift our biases, and make us see what we usually choose to ignore.
  -Translated by Kristi Jones`,
      quote: "",
      video: "",
      description: {
        fr: ``,
        eng: ``,
      },
      textColor: "white",
      featuredArt: [
        {
          artists: "WALID ARDHAOUI",
          title: "Puss in boots, 2022",
          dimensions: "195 x 165 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_002.jpg",
        },
      ],
      showImages: [
        {
          image: "YPP_011.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_012.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_013.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_014.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_015.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_016.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_017.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_018.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_019.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
        {
          image: "YPP_058.jpg",
          title: "Exhibition view of The Gamblers, 2022",
        },
      ],
      artworks: [
        {
          id: 120,
          artists: "WALID ARDHAOUI",
          title: "Chaud soleil, 2022",
          dimensions: "165 x 195 cm, 2022",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_001.jpg",
        },
        {
          id: 121,
          artists: "WALID ARDHAOUI",
          title: "Puss in boots, 2022",
          dimensions: "195 x 165 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_002.jpg",
        },
        {
          id: 122,
          artists: "WALID ARDHAOUI",
          title: "Parallel 2, 2022",
          dimensions: "165 x 195 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_003.jpg",
        },
        {
          id: 123,
          artists: "WALID ARDHAOUI",
          title: "Parallel 1, 2022",
          dimensions: "165 x 195 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_004.jpg",
        },
        {
          id: 124,
          artists: "WALID ARDHAOUI",
          title: "Sans titre, 2022",
          dimensions: "195 x 165 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_005.jpg",
        },
        {
          id: 127,
          artists: "WALID ARDHAOUI",
          title: "The Gamblers 1, 2022",
          dimensions: "53 x 84 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_008.jpg",
        },
        {
          id: 125,
          artists: "WALID ARDHAOUI",
          title: "The Gamblers 2, 2022",
          dimensions: "100 x 140 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_006.jpg",
        },
        {
          id: 128,
          artists: "WALID ARDHAOUI",
          title: "The Gamblers 3, 2022",
          dimensions: "100 x 140 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_009.jpg",
        },
        {
          id: 126,
          artists: "WALID ARDHAOUI",
          title: "The young and the sea, 2022",
          dimensions: "100 x 130 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_007.jpg",
        },
        {
          id: 129,
          artists: "WALID ARDHAOUI",
          title: "Nuage rose, 2022",
          dimensions: "195 x 165 cm",
          medium: "Acrylic and oil on canvas",
          artwork: "YPP_010.jpg",
        },
      ],
      year: 2022,
      location: [""],
      duration: "19 MAI 2022",
      titleEng: "THE GAMBLERS",
      titleFR: "",
      galImage: "YPP_013.jpg",
      artists: "WALID ARDHAOUI",
    },
    {
      id: 47,
      showNature: "Solo Show",
      allArtists: [
        {
          artistId: 3,
          name: "RAHMA LHOUSSIG",
        },
      ],
      artistImage: "rahma.jpg",
      descriptionTitleFr: "«Donner vie à un monde invisible»",
      descriptionTitleEng: "“Giving life to an invisible world”",
      descriptionAuthorFr:
        "Elora Weill-Engerer, Critique d’art membre de l’AICA",
      descriptionAuthorEng:
        "Elora Weill-Engerer, Art critic member of the AICA",
      paragraphFr: `Les thématiques du jeu et de l’enfance sont au cœur de la pratique dessinée de Rahma Lhoussig. Dans ses mises en scène ludiques, l’enfant tisse une trame faite de scénarios, d’acteurs, d’images, qui représentent ce qui n’est pas nécessairement là physiquement. Autrement dit, ces jeux figurent autre chose que ce qu’ils sont. À partir de ce constat, l’artiste vise à doter le monde imaginaire d’une force et d’une réalité : il s’agit ici de traduire la psyché humaine en tant qu’expérience sensorielle, soit en termes de notions abstraites rendus palpables à travers des objets, des formes, des figures et des couleurs. Objets inanimés ou bestiaire doué de vie, tous ces éléments génériques - a priori de l’ordre du quotidien -, sont ici pourvus d’un pouvoir apotropaïque et prophylactique, c’est-à-dire d’un effet protecteur et guérisseur. Dans le même temps, des rôles multiples leur sont attribués, qu’ils jouent au gré des scénarios imaginés. Éparpillés comme un jeu de piste ou imbriqués comme un casse-tête à résoudre, ils participent dans leur éclectisme à placer l’œuvre sous le signe du fabuleux et de l’onirique. Les Grecs distinguaient onar, le songe vulgaire, et hypar, la vision prophétique. Les rêves de Rahma Lhoussig seraient, quant à eux, à situer entre ces deux types, puisque les objets de la vie quotidienne et les souvenirs réels s’y mêlent à la dimension prémonitoire de l’émotion, qui détermine une manière d’habiter le monde. Souvent incongrus, les rapprochements opérés par l’artiste contribuent à indiquer la signification de ce que l’esprit situerait du côté de l’anodin. Ce mélange alchimique fait écho à la mixité des mediums (acrylique, huile, fusain, crayons de couleur). Plus encore, les banals souvenirs d’enfance deviennent les seuls points de repères des personnages qui se meuvent dans un espace incertain, correspondant à un lieu non pas physique mais psychologique. C’est là, précisément, que poreuse : conscient et inconscient, physique et mental, réel et irréel ne cessent de se renvoyer la balle. Plus simplement, le principe est le suivant : les lieux vivent autant en nous que nous vivons en eux. En lien avec une mémoire perçue sur le mode du fragment, le dessin est volontairement non- fini. Les parties que le papier conserve intactes symbolisent ces bouts de souvenirs perdus et qui ne s’appréhendent que de manière lacunaire. En résulte une iconographie de l’inachevé qui grignote les corps mêmes des personnages, soit au bord de la désintégration soit en voie de recomposition. Ces réserves indiquent que ce qui encore présent sur le dessin, de n’est pas sans raison. Les personnages principaux - essentiellement des femmes - sont dans un état d’absorbement : en position de repos, elles ont le regard englouti ou fermé, quand il n’est pas complètement dissimulé derrière un masque fantaisie. Elles sont dans un autre monde que celui qui les entoure et les représente tout à la fois. En pleine agitation, les animaux (corbeaux, aigles,insectes, lapins) contrastent avec l’alanguissement de ces humains, dont ils incarnent néanmoins l’état psychique de manière métaphorique. Tout ce qui se déploie sur le papier comme un récit ouvert retrace la vie intérieure de la principale intéressée. Ce bestiaire et ces accessoires constituent les attributs des figures, dans une démarche proprement iconologique : chaque souvenir ou émotion a ses propres caractéristiques visuelles. En ce sens, ce qui appartient aux domaines de l’intime et du privé est rendu visuellement perceptible et extérieur. Dans leur ensemble, les dessins de Rahma Lhoussig vont ainsi dans le sens d’une allégorisation de l’inconscient, c’est-à-dire qu’ils donnent vie à ce qui relève d’un monde invisible : le rêve, le souvenir, la pensée ou l’émotion.`,
      paragraphEng: `The themes of children and play lie at the core of Rahma Lhoussig’s painterly process. In her intuitive compositions, children weave a framework of scenarios, actors, and images that represent elements that may not physically exist. In other words, these games are something other than they appear to be. Based on this observation, the artist infuses the imaginary world with a force as well as a reality:here she translates the human psyche into a sensorial experience, by rendering abstract ideas palpable as objects, forms, figures, or colors.
     Here, inanimate objects or breathing creatures are generic – presumably ordinary – elements that ward off evil, healing and protecting through their apotropaic and prophylactic power. At the same time, they inhabit multiple roles, played out in imagined scenarios. Scattered like clues in a treasure hunt, or inextricably interwoven like a puzzle, these eclectic elements shift the artwork into the fabulous realm of dreams.
      Ancient Greeks marked a distinction between onar, an ordinary dream, and hypar, a prophesy. As for Rahma Lhoussig, her dreams occupy a space between the two, as objects from daily life and real memories combine with a premonitory dimension of emotion that affects how we live in this world. The artist establishes connections that are often incongruous, even trivial in a spiritual sense. This alchemical mixture echoes the diversity of mediums present (acrylic, oil, charcoal, colored pencils). In her world, banal childhood memories are the only point of reference for these characters occupying uncertain spaces, spaces that correspond to a psychological rather than physical place. There, precisely, where the border between interior and exterior becomes porous: conscious and subconscious, physical and mental, real and unreal shift back and forth. In simple terms, the principle is this: places live inside us, just as we live in them. The drawings are intentionally unfinished, like memories perceived in fragments. Parts of the canvas remain intact, symbolizing bits of lost remembrances that can only be glimpsed, fractured and fleeting. The result is an iconography of the incomplete, nibbling away at the characters’ bodies, either on the edge of disintegration or reconfiguration. Whatever is present in the drawing is not there by chance. The main characters – mostly women – are in a state of immersion: in rest position, with their eyes wide or shut, or hidden behind a mask. They inhabit a space that is different from the world around them, yet part of it. Animals (ravens, eagles, insects, rabbits) are in a state of agitation, in contrast to the languid postures of humans, a metaphorical reading of the psyche. The events and images happening on the surface of the canvas unravels like the interior narrative of the main character. These animals and those objects represent human attributes: each memory or emotion has its own visual characteristics. In this sense, everything belonging to the private realm of the intimate is exteriorized, and rendered visible. As a whole, Rahma Lhoussig’s drawings explore the allegorization of the unconscious, giving life to the traces of an invisible world: dream, memory, thought, and emotion.`,
      quote:
        "Habité par des animaux et des objets du quotidien, c’est dans une atmosphère familière que l’univers de Rahma Lhoussig mêle de manière dissonante animaux, fleurs, insectes, outils…",
      description: {
        fr: ``,
        eng: ``,
      },
      video: "",
      textColor: "white",
      featuredArt: [
        {
          artists: "RAHMA LHOUSSIG",
          title: "All the senses are gone, 2021",
          dimensions: "150 x 130 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0336.jpg",
        },
        {
          artists: "RAHMA LHOUSSIG",
          title: "Unbowed, 2021",
          dimensions: "170 x 145 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0343.jpg",
        },
      ],
      showImages: [
        {
          image: "Gallery-003.jpg",
          title: "Exhibition view of While our eyes can't see",
        },
        {
          image: "Gallery-007.jpg",
          title: "Exhibition view of While our eyes can't see",
        },
        {
          image: "Gallery-013.jpg",
          title: "Exhibition view of While our eyes can't see",
        },
        {
          image: "Gallery-017.jpg",
          title: "Exhibition view of While our eyes can't see",
        },
        {
          image: "Gallery-018.jpg",
          title: "Exhibition view of While our eyes can't see",
        },
      ],
      artworks: [
        {
          id: 111,
          artists: "RAHMA LHOUSSIG",
          title: "Twisted Reality, 2021",
          dimensions: "190 x 140 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0304.jpg",
        },
        {
          id: 112,
          artists: "RAHMA LHOUSSIG",
          title: "Celebration, 2021",
          dimensions: "170 x 130 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0307.jpg",
        },
        {
          id: 113,
          artists: "RAHMA LHOUSSIG",
          title: "Where i belong, 2021",
          dimensions: "150 x 130 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0311.jpg",
        },
        {
          id: 114,
          artists: "RAHMA LHOUSSIG",
          title: "I stand as a flower, 2021",
          dimensions: "160 x 140 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0323.jpg",
        },
        {
          id: 115,
          artists: "RAHMA LHOUSSIG",
          title: "A tiring mission, 2021",
          dimensions: "110 x 140 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0330.jpg",
        },
        {
          id: 116,
          artists: "RAHMA LHOUSSIG",
          title: "All the senses are gone, 2021",
          dimensions: "150 x 130 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0336.jpg",
        },
        {
          id: 117,
          artists: "RAHMA LHOUSSIG",
          title: "Unbowed, 2021",
          dimensions: "170 x 145 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0343.jpg",
        },
        {
          id: 118,
          artists: "RAHMA LHOUSSIG",
          title: "Waiting for a miracle, 2021",
          dimensions: "170 x 145 cm",
          medium: "Mixed media on canvas",
          artwork: "DSC_0350.jpg",
        },
        {
          id: 119,
          artists: "RAHMA LHOUSSIG",
          title: "Lost and can't be found, 2021",
          dimensions: "110 x 80 cm",
          medium: "Mixed media on canvas",
          artwork: "Rahma.jpg",
        },
      ],
      year: 2022,
      location: ["CINÉMA DU MAROC, CDA GALLERY, CASABLANCA"],
      duration: "01 MARS-15 AVRIL 2022",
      titleEng: "WHILE OUR EYES CAN'T SEE",
      titleFR: "",
      galImage: "Gallery-003.jpg",
      artists: "RAHMA LHOUSSIG",
    },

    {
      id: 46,
      showNature: "Solo Show",
      allArtists: [
        {
          artistId: 8,
          name: "FRANÇOIS BEAURAIN",
        },
      ],
      artistImage: "beaurain.jpg",
      descriptionTitleFr: "Préface pour Cinémaghrib",
      descriptionTitleEng: "Preface for Cinémaghrib",
      descriptionAuthorFr:
        "Par Craig Buckley, professeur adjoint d’histoire de l’art à l’université de Yale.",
      descriptionAuthorEng:
        "By Craig Buckly, assistant professor of art history at Yale University",
      paragraphFr: ` Craig Buckley est professeur adjoint d’histoire de l’art à l’université de Yale. Ses recherches explorent les relations entre médias optiques et architecture. Il travaille actuellement à un projet portant sur l’architecture cinématographique et le mouvement moderniste à travers l’étude de cas concrets de salles de cinémas de New York, Londres, Paris, Casablanca (le Vox), Amsterdam, Beyrouth, Sao Paulo, Shanghai et Berlin des années 1920 aux années 1960.

Au moment où j’écris ces lignes, la ville où je vis, New York, vient d’autoriser, après près d’un an de fermeture, le retour des spectateurs dans les salles. En 2020, les cinémas de New York, tous, comme ceux du monde entier, se sont obscurcis. Et pourtant, le cinéma ne s’est pas arrêté. Depuis quelque temps déjà, la fermeture des salles ne signifiait plus la suspension du cinéma. Plus que jamais, un grand nombre de films circulent en ligne via le streaming. Là où le cinéma était autrefois synonyme de l’espace physique du cinéma, il passe aujourd’hui par les écrans des télévisions, des ordinateurs, des tablettes et des Smartphone. Ces nouveaux écrans, le plus souvent, n’ont pas d’emplacement fixe ; les films peuvent être vus n’importe où. En ce sens, la pandémie mondiale de Covid-19 qui a commencé en 2020 a brutalement accéléré la tendance mondiale à long terme vers le déclin du cinéma ; nous offrant un aperçu d’un monde sans salles de cinéma. Compte tenu de la profondeur des inégalités sociales et des fractures systémiques révélées par la pandémie, le sort de ces espaces peut sembler d’importance secondaire. Pourtant, je dirais que le destin du cinéma est plus qu’une nostalgie pour des formes technologiques et architecturales dépassées. Pendant plus d’un siècle, les films n’avaient pas la fontion unique  de montrer des images, ils ont aussi rassemblé les gens.

La manière dont ils l’ont fait a considérablement changé depuis les premières années au tournant du xxe siècle, jusqu’à l’apogée des grandes salles, l’émergence des cinémas de quartier et, finalement, des multiplexes. Pourtant, à chacun de ces différents moments, voir un film impliquait plus que regarder des images sur un écran. Cela signifiait qu’un groupe d’étrangers devait se réunir physiquement au même endroit et au même moment. L’expérience du cinéma était celle d’être présent avec les autres, une expérience tissée de divers fils de sensations : de la joie, du rire, de la liberté et de l’anticipation, à l’anxiété, à l’incertitude et à la peur. Cependant, la capacité de se rassembler n’a jamais été automatique. En effet, pendant une grande partie de l’histoire du cinéma, le spectateur a été soumis à des contraintes liées au sexe, à l’ethnie, à la caste ou à la race. La capacité d’être présent, d’être capté par l’image en mouvement, ne peut être rappelée en dehors des nombreuses luttes pour l’inclusion au xxe siècle ; les luttes pour l’indépendance nationale ainsi que celles pour l’égalité de classe, de genre et de race. La question de l’avenir du cinéma concerne donc à la fois son passé et son futur en tant qu’expérience sociale partagée. De quelle manière le cinéma continuera-t-il à rassembler les gens ? Quelle valeur accordons-nous à la présence physique à une époque où de nombreux aspects du travail et de la vie quotidienne peuvent exister dans une atomisation sociale presque complète ? Comment cette interruption prolongée du cinéma affectera-t-elle son avenir ?

À la lumière crue de la pandémie, le livre remarquable de François Beaurain porte en lui une intensité inattendue. L’ampleur des théâtres documentés ici témoigne de la passion de son auteur, tout comme les photographies et les interviews qu’il contient attirent l’attention sur l’extraordinaire diversité des théâtres au Maroc aujourd’hui. Très peu de pays dans le monde ont un éventail aussi large de cinémas de différents types et de différents millésimes. Tout cinéma que l’on peut voir ici en ruine ne fait qu’ajouter du poids à ceux qui continuent d’exister. La survie des cinémas marocains n’est pas accidentelle. Chacun témoigne du dévouement, du soin et du travail des familles qui ont gardé leurs portes ouvertes, des projectionnistes, des ouvreuses et des gardiens qui les maintiennent en activité, et du public qui continue à leur rendre visite. La pandémie, nous ayant donné un aperçu d’un monde sans salles de cinéma, pourrait nous permettre de mieux reconnaître la richesse et la fragilité du cinéma en tant que patrimoine culturel. Admettre un tel patrimoine signifie admettre la nécessité d’une réflexion créative sur leur soutien et leur préservation.

Les cinémas du Maroc sont des lieux de mémoire. Si ces espaces de rassemblement cinématographique disparaissent, il en va de même pour un pan d’une culture. Les spectateurs du futur pouront continuer à regarder des images appelées « films », mais ils ne sauront peut-être jamais ce que cela signifie pour le cinéma de nous rassembler. Si ces salles sont essentielles, elles ne peuvent pas survivre en tant que fossiles, mais plutôt en tant que lieux vivants de rassemblement où l’avenir du cinéma et la mémoire peuvent trouver un terrain d’entente.
`,
      paragraphEng: `As I write this, the city where I live, New York, has just allowed the first patrons to return to movie theaters after nearly a year. For most of the past twelve months, New York’s movie houses like theaters across the planet have gone completely dark. And yet the movies have continued. For some time now, the closure of the movie theater has no longer meant the suspension of cinema. A greater number of films than ever before circulate via online streaming. Where the movies were once synonymous with the physical space of the movie theater, today they pass through the screens of televisions and computers, of tablets and smartphones. These new screens, more often than not, have no fixed location; the movies can be in any place whatever. In this sense, the global Covid-19 pandemic that began in 2020 has brutally accelerated the long-term global trend toward the decline of the movie theater; offering us a glimpse of a world without movie theaters. Given the depth of the social inequities and systemic fractures revealed by the pandemic, the fate of such spaces may appear to be of secondary importance. Yet, I would argue, the fate of the movie theater is about more than a nostalgia for outmoded technological and architectural forms. For most of their history movies did not only show images; they gathered people together. The ways in which they did so changed considerably from the early years at the turn of the twentieth century, through to the heyday of massive picture palaces, the emergence of neighborhood cinemas, and ultimately multiplexes. Yet, in each of these different moments, seeing a film meant more than looking at images on a screen, it meant that a group of strangers -- sometimes larger, sometimes smaller – had to physically come together in the same place and time. The experience of the cinema was an experience of being present with others, an experience woven with diverse threads of sensation, from joy, laughter, freedom, and anticipation, to anxiety, uncertainty, and fear. The ability to gather was never automatic, however. Indeed for much of the history of cinema spectatorship was subject to constraints bearing on gender, ethnicity, caste, or race. The ability to be present, to be gathered by the moving image, cannot be remembered apart from the many struggles for inclusion in the twentieth century; struggles for national independence as well as struggles for class, gender, and racial equality. The question of the future of the movie theater thus concerns both the past and the future of cinema as a shared social experience. In what way will cinema continue to gather people together? What value do we accord to physical presence in an era where many aspects of work and everyday life can exist in nearly complete social atomization? How will this prolonged hiatus of the movie theater affect its future? 

In the harsh light of the pandemic, Francois Beaurain’s remarkable book carries with it an unanticipated poignancy. The breadth of the theaters documented here testify to the passion of its editor, just as the photographs and interviews it contains draw attention to the extraordinary range of theaters in Morocco today. Very few countries in the world have such wide spectrum of movie theaters of various types and of different vintages in existence. Every cinema which can be seen here in ruin, only adds weight to those which continue to exist. The survival of Morocco’s cinemas is not accidental. Each one testifies to the dedication, care, and work of the families who have kept their doors open, the projectionists, ushers, and caretakers who keep them in operation, and the audiences who continue to visit them. The pandemic, having given us a glimpse of a world without movie theaters, might better enable us to recognize the richness and fragility of the movie theater as cultural patrimony. Recognizing such a patrimony means recognizing the need for creative thinking about their support and preservation. 

The cinemas of Morocco are sites of memory. If these spaces of cinematic gathering disappear so too does part of a culture’s memory. The spectators of the future may continue to watch images called movies, yet if these spaces disappear, they may never know what it meant for cinema to gather us together. While such spaces are essential they cannot survive as fossils, but rather as living sites for a continued gathering, places where the future of cinema and acts of remembering may find common ground. 
 
 
`,
      quote:
        "Les cinémas du Maroc sont des lieux de mémoire. Si ces espaces de rassemblement cinématographique disparaissent, il en va de même pour un pan d’une culture.",
      description: {
        fr: ``,
        eng: ``,
      },
      video: "",
      textColor: "white",
      featuredArt: [
        {
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger), 7 éditions",
          dimensions: "50 x 103 cm",
          medium: "",
          artwork: "Francois_Beaurain-04.jpg",
        },
      ],
      showImages: [
        {
          image: "DSC00111_1500.jpg",
          title: "Exhibition view of CINÉMAS DU MAROC",
        },
        {
          image: "DSC00109_1500.jpg",
          title: "Exhibition view of CINÉMAS DU MAROC",
        },
        {
          image: "DSC00115_1500.jpg",
          title: "Exhibition view of CINÉMAS DU MAROC",
        },
        {
          image: "DSC00117_1500.jpg",
          title: "Exhibition view of CINÉMAS DU MAROC",
        },
        {
          image: "DSC00129_1500.jpg",
          title: "Exhibition view of CINÉMAS DU MAROC",
        },
        {
          image: "DSC00130_1500.jpg",
          title: "Exhibition view of CINÉMAS DU MAROC",
        },
        {
          image: "DSC00131_1500.jpg",
          title: "Exhibition view of CINÉMAS DU MAROC",
        },
      ],
      artworks: [
        {
          id: 83,
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-01.jpg",
        },
        {
          id: 84,
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger) 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-02.jpg",
        },
        {
          id: 85,
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger) 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-03.jpg",
        },
        {
          id: 91,
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-09.jpg",
        },
        {
          id: 92,
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-10.jpg",
        },
        {
          id: 93,
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-11.jpg",
        },
        {
          id: 95,
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-13.jpg",
        },
        {
          id: 108,
          artists: "FRANCOIS BEAURAIN",
          title: "Colisée (Marrakech), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-26.jpg",
        },
        {
          id: 86,
          artists: "FRANCOIS BEAURAIN",
          title: "Gran Teatro Cervantès (Tanger), 7 éditions",
          dimensions: "50 x 103 cm",
          medium: "",
          artwork: "Francois_Beaurain-04.jpg",
        },
        {
          id: 87,
          artists: "FRANCOIS BEAURAIN",
          title: "Rif (Casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-05.jpg",
        },
        {
          id: 88,
          artists: "FRANCOIS BEAURAIN",
          title: "Avenida (Tétouan), 7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-06.jpg",
        },
        {
          id: 89,
          artists: "FRANCOIS BEAURAIN",
          title: "Teatro Espagñol (Tétouan), 7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-07.jpg",
        },
        {
          id: 90,
          artists: "FRANCOIS BEAURAIN",
          title: "Ciné-Palace & Lux (Marrakech),7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-08.jpg",
        },
        {
          id: 94,
          artists: "FRANCOIS BEAURAIN",
          title: "Caméra (Meknès), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-12.jpg",
        },
        {
          id: 96,
          artists: "FRANCOIS BEAURAIN",
          title: "Marhaba (Azemmour), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-14.jpg",
        },
        {
          id: 97,
          artists: "FRANCOIS BEAURAIN",
          title: "Victoria (Tétouan), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-15.jpg",
        },
        {
          id: 98,
          artists: "FRANCOIS BEAURAIN",
          title: "Shéhérazade (Casablanca), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-16.jpg",
        },
        {
          id: 99,
          artists: "FRANCOIS BEAURAIN",
          title: "Rialto (Casablanca), 7 éditions",
          dimensions: "30 x 40 cm",
          medium: "",
          artwork: "Francois_Beaurain-17.jpg",
        },
        {
          id: 100,
          artists: "FRANCOIS BEAURAIN",
          title: "Kawakib (Rabat), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-18.jpg",
        },
        {
          id: 101,
          artists: "FRANCOIS BEAURAIN",
          title: "Cinémathèque de Tanger - Rif (Tanger), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-19.jpg",
        },
        {
          id: 102,
          artists: "FRANCOIS BEAURAIN",
          title: "Al Malaki (Casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-20.jpg",
        },
        {
          id: 103,
          artists: "FRANCOIS BEAURAIN",
          title: "Royal (Oujda), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-21.jpg",
        },
        {
          id: 104,
          artists: "FRANCOIS BEAURAIN",
          title: "Mauritania (Tanger), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-22.jpg",
        },
        {
          id: 105,
          artists: "FRANCOIS BEAURAIN",
          title: " Ritz (casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-23.jpg",
        },
        {
          id: 106,
          artists: "FRANCOIS BEAURAIN",
          title: "Lynx (Casablanca), 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-24.jpg",
        },
        {
          id: 107,
          artists: "FRANCOIS BEAURAIN",
          title: "ABC (Meknès). 7 éditions",
          dimensions: "40 x 60 cm",
          medium: "",
          artwork: "Francois_Beaurain-25.jpg",
        },

        {
          id: 109,
          artists: "FRANCOIS BEAURAIN",
          title: "Colisée (Marrakech), 7 éditions",
          dimensions: "20 x 30 cm",
          medium: "",
          artwork: "Francois_Beaurain-27.jpg",
        },
        {
          id: 110,
          artists: "FRANCOIS BEAURAIN",
          title: "Colisée (Marrakech), 7 éditions",
          dimensions: "50 x 75 cm",
          medium: "",
          artwork: "Francois_Beaurain-28.jpg",
        },
      ],
      year: 2021,
      location: ["CINÉMAS DU MAROC, CDA GALLERY, CASABLANCA"],
      duration: "15 DÉCEMBRE-31 JANVIER 2022",
      titleEng: "CINEMAS OF MOROCCO",
      titleFR: "CINÉMAS DU MAROC",
      galImage: "DSC00130_1500.jpg",
      artists: "FRANÇOIS BEAURAIN",
    },
    {
      id: 0,
      showNature: "Solo Show",
      allArtists: [
        {
          artistId: 0,
          name: "FATIMA LOUARDIRI",
        },
      ],
      descriptionTitleFr: "Crime et Ornement",
      artistImage: "fatimalouardiri.jpg",
      descriptionTitleEng: "Crime and Ornament",
      descriptionAuthorFr: "Syham Weigant, Curatrice",
      descriptionAuthorEng: "Syham Weigant, Curator",
      textColor: "white",
      paragraphEng: ``,
      featuredArt: [
        {
          artists: "Fatima Louardiri",
          title: "Mariées 4/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8330.jpg",
        },
        {
          artists: "Fatima Louardiri",
          title: "Mariées 5/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8327.jpg",
        },
      ],
      quote:
        "« C’est une question de temps. » Adolf Loos, Ornement et Crime. 1908.",
      paragraphFr: `De quelles essences se constituent les Arts ? Sacrées ou profanes ? Séculières ou régulières ?
      Ce champ nimbé d’un certain mystère pour ne pas écrire d’un mystère certain est pourtant consubstantiel à l’homme et apparaît quasiment par coïncidence à l’humanité telle que nous la reconnaissons aujourd’hui. Celle-ci s’est dissociée de l’ensemble du règne animal pour être d’autres possibles qui s’ouvrent à elle peu à peu. L’apparition du sacré est concomitante et enrichit notre espèce d’un supplément : l’âme…
      C’est une métaphysique qui poursuit les prémices de différenciation à l’oeuvre chez ces premiers Hommes en quête de sens et bientôt d’un destin. Quitter cet état primitif de nature pour fonder culture et progressivement civilisation nécessite de constituer peu à peu cet état de droit davantage propice à la survie puis à l’épanouissement du genre dit humain. Celui-ci s’énonce dans une irréductibilité binaire — ou manichéisme originel, pourrions-nous écrire… — le licite et l’illicite, le permis et l’interdit, ce fameux Totem et Tabou freudien ! Un préalable irréfragable et indispensable au moment de définir cette humanité en plein processus d’individuation et de sociabilité avec son prochain dont la reconnaissance et l’acception est soumise à ce jus cogens en cours de formalisation. Et voici l’art et le sacré encore une fois associés et ce dès l’origine ! Puisque de manière très simplifiée, ce Totem qui crée et ordonne communauté est surtout in fine la première tentative de représentation du sacré.
      Du Totem pré-historique et animiste au désenchantement progressif du monde qui rationalise peu à peu les croyances humaines par la primauté en marche des sciences explicatives de quelques mystères ancestraux qui confèrent aux religions une abstraction spirituelle de plus en plus immatérielle, il faudra plusieurs évolutions de tout type. En revanche, concernant l’autre élément du couple sacré élémentaire, le Tabou, il est intéressant de noter qu’il reste encore aujourd’hui moins sensible aux changements civilisationnels divers et variés que notre espère aura expérimentés.
      Et l’art dans tout cela ? D’essence évidement surtout humaine avant tout, ses expressions seront variablement considérées selon les temps, les territoires et les sociétés comme affiliées plutôt aux Totems ou plutôt aux Tabous.
      L’Islam par exemple qui fonde une part prépondérante dans notre culture nationale marocaine, est réputé interdire la représentation qui forme pourtant une composante essentielle des arts, cette particularité plastique appelée aniconisme a ainsi jusqu’aux époques récentes dites modernes, permis et encouragé des arts plutôt décoratifs qui sont l’oeuvre par excellence de la figure de l’artisan plutôt que celle de l’artiste.
      L’art arabo-musulman en général est donc plutôt celui de la calligraphie ou d’une abstraction préférablement géométrique voire parfois avec quelque symbolisme végétal. Ce sont ces fameuses arabesques, toutes en volutes d’entrelacs et de rinceaux qui forment un art du motif voué à une infinité de reproductions sérielles du même.
      Un art du trop-plein plutôt que du vide qui pourrait nous interroger sur cette Horror Vacui particulièrement fustigée par Adolf Loos chantre d’un modernisme réactionnaire aux Arts nouveaux puis décoratifs (mouvements où l’on retrouve cet intérêt pour le motif végétal, puis géométrique) et qui prône minimalisme et dépouillement. Son célèbre essai à ce propos ne laisse aucun doute quant à ses théories, puisque pour lui : L’ornement est un crime ! C’est-à-dire notamment une perte de temps et d’énergie aussi futile que dispendieuse des ressources humaines, un archaïsme à rejeter totalement pour étrenner la modernité.
      Et c’est justement à l’aune de cet antagonisme dialectique et manichéen qu’il me plaît d’aborder l’oeuvre de la peintre dite « Naïve » Fatema Louardiri.
      Une oeuvre paradoxale si l’on en croit ma longue introduction contextuelle en ce qu’elle concentre dans son sujet et dans sa forme, ces deux interdits « criminels » que sont l’aniconisme musulman ainsi que le trop-plein ornemental décrié de la modernité.
      En effet, dans ses oeuvres, l’artiste use d’un répertoire formel figuratif à travers sa représentation de scénettes de la vie quotidienne, ou de personnages généralement féminins qui sans être à proprement parler réalistes demeurent toutefois parfaitement reconnaissables. Des choix plastiques dont je doute fortement de la « fortuité » et que l’on peut
      considérer à l’aune des choix figuratifs opérés par les miniaturistes persans et dûment réfléchis pour permettre l’illustration tout en respectant les préceptes aniconiques de l’Islam. Leur représentation à l’instar de notre Fatema Louardiri se fait davantage poétique que mimétique et permet de réaliser d’une certaine façon cette abstraction exigée du Canon. Cela grâce notamment, à l’absence de perspective, et donc de hiérarchisation entre le Sujet et l’arrière-plan, l’absence également des règles du clair-obscur qui privent notamment ses sujets d’effets d’ombre, de silhouette ou de reflets, et qui refusent là-encore par cela la hiérarchisation des couleurs qui devraient être traitées différemment en fonction du plan où elles se situent par des éclats plus ou moins atténués. Or Fatema Louardiri emploie partout sur l’espace de sa toile ou de son papier des couleurs vives et en aplats sans jamais les estomper ainsi que l’exigerait une représentation réellement figurative ou mimétique du réel. Enfin elle use d’un sens du détail uniforme à l’ensemble de ses Objets, qu’il s’agisse de ses personnages, de leurs costumes particulièrement riches et foisonnants, ou encore qu’il s’agisse de ses arrière-plans ornementaux qui ne laissent aucune place au vide !
      L’artiste Fatema Louardiri serait donc de par sa pratique « criminelle » doublement fautive ou hors la loi… De par sa figuration démiurgique qui en nous créant des univers plastiques abandonne toute humilité pour proclamer son être et sa liberté. Et également de par la dispersion de son temps en futilité, c’est-à-dire en enluminures décoratives et inutiles plutôt qu’en productivité de ces fameux biens qualifiés désormais d’essentiels…
      Elle poursuit en cela, l’héritage paternel qui lui aussi s’émancipera doublement de l’utilité et de la nécessité telles que l’envisagent communément les masses, autant populaires que dirigeantes mais en raison d’intérêts divergents…
      Ahmed Louardiri est en effet ouvrier agricole attaché aux jardins maraichers jouxtant la ville de Salé. Et lorsque sa jeune fille, Fatema dont il est question ici, lui apportait son casse-croûte à l’heure du déjeuner, elle s’émerveillait toujours de ce petit coin en retrait qui mobilisait le plus le temps et l’énergie de ce père pourtant « naïf » et démuni. Un temps pour rien, c’est-à-dire non rémunéré et là-encore non producteur d’essentialité, pendant lequel il paysageait en secret un jardin ornemental et fleuri… Et cela par goût et par envie de beauté, et par ce supplément d’âme distinctif et révélateur de notre humanité…
      Plus tard, Ahmed Louardiri aggravera, ou doublera, lui-aussi ce péché mignon que Adolf Loos qualifie de criminalité, puisqu’il fera peinture et représentation de ce jardin secret…
      Alors, la question de l’atavisme familial mériterait d’être posée… Fatema serait-elle artiste par hérédité ? Bien sûr qu’elle l’est, tout comme son père, pleinement et totalement héritière des généalogies de toute l’humanité. Celle-là même qui apparaît avant même l’Histoire par distinction au règne des vivants, lorsqu’elle s’invente des arts, non évidemment essentiels à son être, peut-être, mais consubstantiels de cette âme tellement humaine malgré son invisibilité et son immatérialité et qui ajoute au profane, ce mystère du sacré…
      Et l’art, comme toute production exclusivement humaine a depuis toujours et encore interrogé en permanence tous nos manichéismes en évaluation et redéfinition permanentes, parce qu’il se nourrit autant des Totems que de ces fameux tabous…
      Ce faisant, il prend tous les risques de la liberté à laquelle l’Homme s’est condamné en quittant le règne de l’animalité, y compris ceux de déplaire, voire d’être criminalisé.
      Et c’est justement de cette liberté d’être et de créer que Fatema Louardiri est l’héritière revendiquée.
      Artiste, du profane et du sacré, et aux risques de faire de tous ces mystères, une oeuvre qui lui survivra, corps et âme, par son (in)essentielle beauté
      `,
      video: "",
      showImages: [
        {
          image: "213A8390.jpg",
          title: 'Exhibition view of "Maroc Fantastique",CDA Gallery, 2021',
        },
        {
          image: "213A8375.jpg",
          title: 'Exhibition view of "Maroc Fantastique",CDA Gallery, 2021',
        },
        {
          image: "213A8391.jpg",
          title: 'Exhibition view of "Maroc Fantastique",CDA Gallery, 2021',
        },
      ],
      year: 2021,
      location: ["– MAROC FANTASTIQUE, CDA GALLERY, CASABLANCA"],
      duration: "13 JUILLET -17 SEPTEMBRE 2021",
      titleEng: "FANTASTIC MOROCCO",
      titleFR: "MAROC FANTASTIQUE",
      galImage: "213A8390.jpg",
      artists: "FATIMA LOUARDIRI",
      artworks: [
        {
          id: 16,
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8262.jpg",
        },
        {
          id: 17,
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8255.jpg",
        },
        {
          id: 18,
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8257.jpg",
        },
        {
          id: 19,
          artists: "Fatima Louardiri",
          title: "",
          dimensions: "92,5 x 72 cm",
          medium: "Acrylique sur toile",
          artwork: "213A8268.jpg",
        },
        {
          id: 20,
          artists: "Fatima Louardiri",
          title: "Chikhate 1/5",
          dimensions: "41 x 29 cm",
          medium: "Gouache sur papier",
          artwork: "213A8372.jpg",
        },
        {
          id: 21,
          artists: "Fatima Louardiri",
          title: "Chikhate 2/5",
          dimensions: "31,5 x 21,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8369.jpg",
        },
        {
          id: 22,
          artists: "Fatima Louardiri",
          title: "Chikhate 3/5",
          dimensions: "41 x 29 cm",
          medium: "Gouache sur papier",
          artwork: "213A8366.jpg",
        },
        {
          id: 23,
          artists: "Fatima Louardiri",
          title: "Chikhate 4/5",
          dimensions: "35,5 x 26,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8354.jpg",
        },
        {
          id: 24,
          artists: "Fatima Louardiri",
          title: "Chikhate 5/5",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8351.jpg",
        },
        {
          id: 25,
          artists: "Fatima Louardiri",
          title: "Mariées 1/9",
          dimensions: "23,5 x 31,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8339.jpg",
        },
        {
          id: 26,
          artists: "Fatima Louardiri",
          title: "Mariées 2/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8336.jpg",
        },
        {
          id: 27,
          artists: "Fatima Louardiri",
          title: "Mariées 3/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8333.jpg",
        },
        {
          id: 28,
          artists: "Fatima Louardiri",
          title: "Mariées 4/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8330.jpg",
        },
        {
          id: 29,
          artists: "Fatima Louardiri",
          title: "Mariées 5/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8327.jpg",
        },
        {
          id: 30,
          artists: "Fatima Louardiri",
          title: "Mariées 6/9",
          dimensions: "23,5 x 33,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8324.jpg",
        },
        {
          id: 31,
          artists: "Fatima Louardiri",
          title: "Mariées 7/9",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8283.jpg",
        },
        {
          id: 32,
          artists: "Fatima Louardiri",
          title: "Mariées 8/9",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8277.jpg",
        },
        {
          id: 33,
          artists: "Fatima Louardiri",
          title: "Mariées 9/9",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8272.jpg",
        },
        {
          id: 34,
          artists: "Fatima Louardiri",
          title: "L'couple 1/13",
          dimensions: "23,5 x 31,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8288.jpg",
        },
        {
          id: 35,
          artists: "Fatima Louardiri",
          title: "L'couple 2/13",
          dimensions: "23,5 x 31,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8298.jpg",
        },
        {
          id: 36,
          artists: "Fatima Louardiri",
          title: "L'couple 3/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8286.jpg",
        },
        {
          id: 37,
          artists: "Fatima Louardiri",
          title: "L'couple 4/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8295.jpg",
        },
        {
          id: 38,
          artists: "Fatima Louardiri",
          title: "L'couple 5/13",
          dimensions: "35,5 x 25,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8285.jpg",
        },
        {
          id: 39,
          artists: "Fatima Louardiri",
          title: "L'couple 6/13",
          dimensions: "35,5 x 25,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8301.jpg",
        },
        {
          id: 40,
          artists: "Fatima Louardiri",
          title: "L'couple 7/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8308.jpg",
        },
        {
          id: 41,
          artists: "Fatima Louardiri",
          title: "L'couple 8/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8315.jpg",
        },
        {
          id: 42,
          artists: "Fatima Louardiri",
          title: "L'couple 9/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8348.jpg",
        },
        {
          id: 43,
          artists: "Fatima Louardiri",
          title: "L'couple 10/13",
          dimensions: "41 x 29,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8319.jpg",
        },
        {
          id: 44,
          artists: "Fatima Louardiri",
          title: "L'couple 11/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8357.jpg",
        },
        {
          id: 45,
          artists: "Fatima Louardiri",
          title: "L'couple 12/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8360.jpg",
        },
        {
          id: 46,
          artists: "Fatima Louardiri",
          title: "L'couple 13/13",
          dimensions: "31,5 x 23,5 cm",
          medium: "Gouache sur papier",
          artwork: "213A8363.jpg",
        },
      ],
    },
    {
      id: 11,
      showNature: "Solo Show",
      video: "",
      allArtists: [
        {
          artistId: 1,
          name: "Imane Djamil",
        },
      ],
      descriptionTitleFr: "",
      artistImage: "imanedjamil.jpg",
      textColor: "black",
      featuredArt: [
        {
          artists: "Imane Djamil",
          title: "Armas Essalama",
          dimensions: "75 x 110 cm",
          medium: "",
          artwork: "imaneexhib.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "By the Yard 1, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib2.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "By the Yard 2, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib3.jpg",
        },
        {
          artists: "Imane Djamil",
          title: "UNTITLED,2016",
          dimensions: "Triptych 20 x 30 cm / each",
          medium: "Fine Art print",
          artwork: "imaneexhib4.jpg",
        },
      ],
      descriptionTitleEng: "",
      descriptionAuthorFr:
        "Tina Barouti, conservatrice et historienne des arts",
      descriptionAuthorEng: "Tina Barouti, Curator and Art Historian",
      quote:
        "“Art implies control of reality, for reality itself possesses no sense of the aesthetic. Photography becomes art when certain controls are applied” -Ansel Adams",
      paragraphFr: `
      “80 miles to Atlantis” est le deuxième volet de l’œuvre d’Imane Djamil consacrée au littoral historique de la ville saharienne de Tarfaya. La série interroge les multiples registres symboliques du paysage bâti et naturel, la reconsidération de l’architecture coloniale au fil du temps, et le délitement des frontières entre mythe et réalité. Son travail explore des thèmes d’une saisissante pertinence au vu du monde actuel: la quête d’une symbiose entre le développement urbain et l’environnement naturel, l’échec de l’État à soutenir les communautés marginalisées, et la difficile conciliation entre passé colonial et un présent et avenir post-coloniaux.

A travers sa pratique artistique, Imane Djamil ne cesse d’explorer la complexité des relations qu’entretiennent les individus avec leur environnement physique. Le titre de la série fait référence à Tarfaya, pas par son nom ; mais plutôt par sa proximité avec les îles Canaries espagnoles, l’endroit présumé où se situerait la mythique Atlantide.

Le titre assimile également Tarfaya à cette nation insulaire fictive ; un rapprochement adéquat, puisque, comme l’Atlantide, elle est entourée de mystère et souvent qualifiée d’”apocalyptique” ou de “monde abandonné”.

Imane Djamil a découvert Tarfaya il y a huit ans, à l’âge de seize ans, alors qu’elle était en mission pour un tout autre projet. Des mois plus tard, elle quitte l’école sur un coup de tête et s’embarque pour un voyage de dix-neuf heures en bus de Casablanca à Tarfaya. En déambulant dans les rues vides, un appareil photo à la main, Djamil retient l’attention d’un jeune homme de son âge, ce dernier lui demande où ses amis et lui peuvent contempler les photos qu’elle a prises de la ville. Cette rencontre débouche sur une amitié instantanée et durable. Bien que Djamil n’ait aucun lien familial ou ethnique avec la ville, elle la décrit comme une seconde maison, là où elle se rend davantage pour passer du temps avec sa ” clique ” que pour travailler. En se promenant le long du paysage côtier “esthétiquement mystérieux” de Tarfaya, jalonné de vestiges de la colonisation espagnole, elle éprouve souvent une sensation de malaise mais aussi d’excitation à la vue de volées d’escaliers émergeant au hasard du sable ou de plongeoirs sans piscines. Cela déclenche sa phobie infantile ; celle de se baigner dans l’océan et de sentir un objet frôler sa jambe, ce qui la conduit à découvrir un univers parallèle sous-jacent, un peu comme la mythique Atlantide. 

Rédigés en 360 avant notre ère, les dialogues du philosophe grec Platon, Timée et Critias, décrivent la nation mythique de l’Atlantide comme étant une civilisation quasi-utopienne peuplant un archipel luxuriant et riche en ressources. Platon affirmait que ces îles existaient 9 000 ans avant son temps, et que leur histoire avait été transmise oralement par son grand-père. En raison de la disgrâce des divinités, l’Atlantide fut frappée par des tremblements de terre et des inondations, avant d’être finalement submergée par les eaux. Si l’Atlantide a dû être engloutie par l’océan pour avoir déplu aux divinités, le littoral historique de Tarfaya, comme l’illustre Imane Djamil dans sa série, est en passe d’être engloutie par le sable, non pas pour avoir offensé une entité supérieure, mais du fait de phénomènes naturels conjugués au désintérêt de l’État pour la préservation de son patrimoine culturel. Lors d’une conversation avec Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, habitant de la région et petit-fils du leader révolutionnaire Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil s’est entendu dire qu’un jour, tout ce qui se trouve sur la côte de Tarfaya disparaîtrait et que ses photographies, tout comme les écrits de Platon sur l’Atlantide, resteront parmi les dernières évidences de son existence.

Néanmoins, la série photo d’Imane Djamil ne doit pas être perçue à tort comme étant une preuve documentaire, du photojournalisme ou une histoire à caractère humain. L’artiste considère que ses photographies se situent à cheval entre la photographie d’art et le documentaire. Personnellement, je ne pense pas que son travail gagnerait à entrer dans une seule catégorie, quant à savoir si le documentaire peut être un art, la question reste posée. Evoluant dans un environnement où l’intérêt pour la photographie de rue et ses images candides et non médiatisées du quotidien marocain a explosé au cours de la dernière décennie, Imane Djamil se démarque de ses pairs par son utilisation du “docu-fiction”. Terme que j’ai emprunté au film narratif, le docu-fiction combine à la fois le documentaire et la fiction afin de saisir la réalité tout en introduisant simultanément des scénarios de fiction pour renforcer sa représentation à travers une forme d’expression artistique. J’estime que le parcours d’Imane Djamil en tant qu’écrivain créatif éclaire sur sa pratique photographique qui, comme son écriture, altère la réalité afin de discuter de problématiques complexes. En plus de l’aspect fictionnel, l’enchaînement des photographies en une séquence narrative à travers l’espace de la galerie, ainsi que la recapture d’une image donnée, tantôt avec plus de mouvement tantôt avec une absence de personnages, amplifie notre réponse émotionnelle à l’œuvre.

On retrouve un exemple de ce type de mise en scène dans le triptyque The Theater, qui réunit les amis proches d’Imane Djamil autour d’une représentation improvisée dans un théâtre abandonné datant de l’époque coloniale espagnole. Dans le triptyque 27, six jeunes hommes de sa bande d’amis sont regroupés dans un autre bâtiment de l’époque coloniale pour y célébrer un anniversaire fictif, agrémenté d’un gâteau et de ballons. La deuxième photo de la séquence, met en scène cinq hommes applaudissant, tandis qu’un sixième prend un cliché des festivités. Dans By the Yard, on voit de jeunes enfants, des proches des amis de Djamil, jouer autour d’une structure désignée par les habitants comme dār al-mi’a, soit la ” maison des cent “, qui, comme son nom l’indique, abritait autrefois cent soldats espagnols. Contrairement à ses amis locaux, qui sont des “acteurs nés”, les enfants avaient plus besoin d’être dirigés car ils jouaient aux alentours de ce baraquement non sécurisé et au contenu incertain, aujourd’hui occupé par les Forces armées royales marocaines et évité par les résidents locaux.

La pratique d’Imane Djamil renvoie à une citation du photographe paysagiste américain Ansel Adams : “L’art implique le contrôle de la réalité, car la réalité elle-même ne possède aucun sens de l’esthétique. La photographie devient de l’art lorsque certains contrôles sont appliqués”. Djamil reste consciemment artistique dans sa démarche – se limitant à un maximum de vingt photographies par an. Plaçant son trépied au sommet de dunes de sable et de gravats périlleux, elle s’efforce de maintenir son matériel stable tout en veillant aux exigences formelles de la composition.

Sa sélection de précédentes photographies en noir et blanc, tels que les triptyques sans titre datant de 2013 et 2016 et le diptyque sans titre réalisé en 2015, explore intensément la lumière, la géométrie, l’ombre et l’abstraction. Comme Adams, dont la pratique était étroitement liée à la lutte pour la conservation de l’environnement, Djamil espère que ses photographies serviront un objectif dépassant celui du simple plaisir esthétique, à savoir pousser les décideurs politiques et les institutions à reconnaître l’état de délabrement de Tarfaya et à investir dans la réhabilitation des ruines architecturales le long de son littoral.

Bien que Djamil se revendique du décolonialisme dans sa pensée et sa pratique, je lui ai soumis une question cruciale à laquelle les États post-coloniaux sont confrontés depuis l’avènement des mouvements d’indépendance du milieu du XXe siècle : Les vestiges du passé colonial, qui servent aujourd’hui de marqueur identitaire à Tarfaya, méritent-ils d’être préservés ?

Elle reconnaît que si l’architecture de l’époque coloniale est la résultante de la violence impériale, assimilable à une blessure, elle devient avec le temps une cicatrice apprivoisée par le paysage, entraînant un changement de fonction et de sens. Des cicatrices qui, selon elle, méritent d’être préservées car le passé colonial reste un élément incontournable du patrimoine culturel du Maroc.  `,
      paragraphEng: `
      
Imane Djamil’s 80 miles to Atlantis constitutes the second part of her work on the Saharan city of Tarfaya’s historical coast. The series interrogates the multiple layers of symbolism in the built and natural landscape, colonial architecture’s redefinition over time, and the blurring of lines between reality and myth. The themes her work explores are of poignant relevance to today’s world – the quest for a symbiosis between urban development and the natural environment, the state’s failure to uplift communities at the margins, and negotiating relationships between the colonial past and a post-colonial present and future. Through her practice, Djamil never ceases to confront the complexity of people vis-à-vis their physical environment. The title of the series refers to Tarfaya not by its name, but rather its close proximity to Spain’s Canary Islands, the approximate location of where the mythical Atlantis is rumored to be. The title also likens Tarfaya to the fictional island nation – a fitting relation given that, like Atlantis, it is shrouded in mystery and often described as “apocalyptic” or “the abandoned world.” 

Her introduction to Tarfaya came eight years ago at the age of sixteen while on assignment for another project. Months later, she spontaneously left school and embarked on a nineteen-hour bus ride from Casablanca to Tarfaya. Strolling through the empty streets with a camera in hand, Djamil caught the attention of a local young man her age, who asked where he and his friends could see her photographs of the city. This encounter resulted in an instantaneous and long-lasting friendship. While Djamil has no familial or ethnic ties to the city, she describes it as a second home, where she visits more to spend time with her “crew” than to work. While walking through Tarfaya’s “aesthetically mysterious” coastal landscape, full of Spanish colonial structures, she often experiences an uneasy yet thrilling sensation at the sight of flights of stairs randomly emerging from the sand or diving boards without a pool of water. This triggers her irrational childhood fear of swimming in the ocean and feeling an object brush against her leg, thereby leading her to discover a parallel universe below, much like the mythical Atlantis. 

Written in 360 BCE, the Greek philosopher Plato’s dialogues Timaeus and Critias described the mythical nation of Atlantis as a near-utopian civilization inhabiting a lush, resource-rich archipelago. Plato claimed that the islands existed 9,000 years before his time, with its story passed down orally from his grandfather. As a consequence of falling out of favor with the deities, Atlantis was hit with earthquakes and floods, ultimately being submerged under water. If Atlantis was to be consumed by the ocean for displeasing the gods, Tarfaya’s historical coast, as Djamil illustrates in her series, is on its way to being devoured by sand, not for offending a higher being, but as a result of natural phenomena coupled with the state’s disinterest in preserving its cultural heritage. In conversation with Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, a local resident and grandson of revolutionary leader Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil was told that one day everything on Tarfaya’s coast would disappear and that her photographs, much like Plato’s writings on Atlantis, will remain as some of the last pieces of evidence for its existence.

However, Djamil’s series should not be misinterpreted as documentary evidence, photojournalism, or a human-interest story. She views her photographs as straddling the fence between art photography and documentary. I do not believe her work must fall under a single category and whether or not documentary can be fine art is a moot question. Working in an environment where interest in street photography and its candid, unmediated images of Moroccan daily life have exploded in the past decade, Djamil stands out from her peers for her use of “docu-fiction.” A term I have borrowed from narrative film, docu-fiction combines both documentary and fiction to capture reality while simultaneously introducing fictional scenarios to strengthen its representation through a form of artistic expression. I find that Djamil’s background as a creative writer informs her photographic practice, which, like her writing, alters reality in order to discuss complex issues. In addition to fictionalization, narrative sequencing of photographs within the gallery space and the re-capturing of a particular image, once with more movement and again with an absence of people, enhances our emotional response to the work. 

An example of this type of play is found in The Theater triptych, which presents Djamil’s close circle of friends putting on an impromptu performance in an abandoned Spanish colonial theatre. In the 27 triptych, six young men from her friend group gather in another colonial-era building to celebrate a fictional birthday, complete with a cake and balloons. In the second photograph of the sequence, while five men cheer, one takes a snapshot of the festivities. In By the Yard, young children, who are relatives of Djamil’s friends, are seen playing around a structure referred to by locals as dār al-mi’a, or “house of one hundred,” which, as the name suggests, formerly housed one hundred Spanish soldiers. Unlike her local friends, who are “natural-born actors,” the children required more direction as they played around the unsecured building with unknown contents, now occupied by the Royal Moroccan Armed Forces and avoided by local residents.

Her practice calls to mind a quote by American landscape photographer Ansel Adams: “Art implies control of reality, for reality itself possesses no sense of the aesthetic. Photography becomes art when certain controls are applied.” Djamil remains consciously artistic in her approach –  limiting herself to a maximum of twenty photographs a year. Setting her tripod atop of precarious sand dunes and rubble, she attempts to keep her equipment steady while paying attention to the composition’s formal qualities. Her selection of earlier black-and-white photographs, such as the untitled triptychs from 2013 and 2016 and the untitled diptych from 2015, experiment heavily with light, geometry, shadow, and abstraction. Similar to Adams, whose practice was strongly enmeshed with advocacy for environmental conservation, Djamil hopes that her photographs serve a purpose beyond aesthetic pleasure, namely to push for policymakers and institutions to acknowledge Tarfaya’s dilapidated state and invest in the rehabilitation of architectural ruins along its coast. Although Djamil identifies as decolonial in thinking and practice, I asked her an important question that post-partitioned states have been grappling with since the mid-twentieth century’s independence movements: Are remnants of the colonial past, which today serve as Tarfaya’s identity marker, worth preserving? She acknowledges that although colonial-era architecture is the result of imperial violence, likening it to a wound, over time it becomes a scar tamed by the landscape, leading to a shift in both function and meaning. Scars that, she believes, are worthy of preservation as the colonial past remains an inescapable part of Morocco’s cultural heritage. `,
      showImages: [
        {
          image: "ASI46920.jpg",
          title: 'Exhibition view of "80 miles to atlantis", 2021',
        },
        {
          image: "213A4091-HDR.jpg",
          title: 'Exhibition view of "80 miles to atlantis", 2021',
        },
        {
          image: "ASI46981.jpg",
          title: 'Exhibition view of "80 miles to atlantis", 2021',
        },
        {
          image: "ASI47013.jpg",
          title: 'Exhibition view of "80 miles to atlantis", 2021',
        },
        {
          image: "ASI47002.jpg",
          title: 'Exhibition view of "80 miles to atlantis", 2021',
        },
      ],
      description: {
        fr: `“80 miles to Atlantis” est le deuxième volet de l’œuvre d’Imane Djamil consacrée au littoral historique de la ville saharienne de Tarfaya. La série interroge les multiples registres symboliques du paysage bâti et naturel, la reconsidération de l’architecture coloniale au fil du temps, et le délitement des frontières entre mythe et réalité. Son travail explore des thèmes d’une saisissante pertinence au vu du monde actuel: la quête d’une symbiose entre le développement urbain et l’environnement naturel, l’échec de l’État à soutenir les communautés marginalisées, et la difficile conciliation entre passé colonial et un présent et avenir post-coloniaux.

            A travers sa pratique artistique, Imane Djamil ne cesse d’explorer la complexité des relations qu’entretiennent les individus avec leur environnement physique. Le titre de la série fait référence à Tarfaya, pas par son nom ; mais plutôt par sa proximité avec les îles Canaries espagnoles, l’endroit présumé où se situerait la mythique Atlantide.

            Le titre assimile également Tarfaya à cette nation insulaire fictive ; un rapprochement adéquat, puisque, comme l’Atlantide, elle est entourée de mystère et souvent qualifiée d’”apocalyptique” ou de “monde abandonné”.

            Imane Djamil a découvert Tarfaya il y a huit ans, à l’âge de seize ans, alors qu’elle était en mission pour un tout autre projet. Des mois plus tard, elle quitte l’école sur un coup de tête et s’embarque pour un voyage de dix-neuf heures en bus de Casablanca à Tarfaya. En déambulant dans les rues vides, un appareil photo à la main, Djamil retient l’attention d’un jeune homme de son âge, ce dernier lui demande où ses amis et lui peuvent contempler les photos qu’elle a prises de la ville. Cette rencontre débouche sur une amitié instantanée et durable. Bien que Djamil n’ait aucun lien familial ou ethnique avec la ville, elle la décrit comme une seconde maison, là où elle se rend davantage pour passer du temps avec sa ” clique ” que pour travailler. En se promenant le long du paysage côtier “esthétiquement mystérieux” de Tarfaya, jalonné de vestiges de la colonisation espagnole, elle éprouve souvent une sensation de malaise mais aussi d’excitation à la vue de volées d’escaliers émergeant au hasard du sable ou de plongeoirs sans piscines. Cela déclenche sa phobie infantile ; celle de se baigner dans l’océan et de sentir un objet frôler sa jambe, ce qui la conduit à découvrir un univers parallèle sous-jacent, un peu comme la mythique Atlantide.

            Rédigés en 360 avant notre ère, les dialogues du philosophe grec Platon, Timée et Critias, décrivent la nation mythique de l’Atlantide comme étant une civilisation quasi-utopienne peuplant un archipel luxuriant et riche en ressources. Platon affirmait que ces îles existaient 9 000 ans avant son temps, et que leur histoire avait été transmise oralement par son grand-père. En raison de la disgrâce des divinités, l’Atlantide fut frappée par des tremblements de terre et des inondations, avant d’être finalement submergée par les eaux. Si l’Atlantide a dû être engloutie par l’océan pour avoir déplu aux divinités, le littoral historique de Tarfaya, comme l’illustre Imane Djamil dans sa série, est en passe d’être engloutie par le sable, non pas pour avoir offensé une entité supérieure, mais du fait de phénomènes naturels conjugués au désintérêt de l’État pour la préservation de son patrimoine culturel. Lors d’une conversation avec Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, habitant de la région et petit-fils du leader révolutionnaire Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil s’est entendu dire qu’un jour, tout ce qui se trouve sur la côte de Tarfaya disparaîtrait et que ses photographies, tout comme les écrits de Platon sur l’Atlantide, resteront parmi les dernières évidences de son existence.

            Néanmoins, la série photo d’Imane Djamil ne doit pas être perçue à tort comme étant une preuve documentaire, du photojournalisme ou une histoire à caractère humain. L’artiste considère que ses photographies se situent à cheval entre la photographie d’art et le documentaire. Personnellement, je ne pense pas que son travail gagnerait à entrer dans une seule catégorie, quant à savoir si le documentaire peut être un art, la question reste posée. Evoluant dans un environnement où l’intérêt pour la photographie de rue et ses images candides et non médiatisées du quotidien marocain a explosé au cours de la dernière décennie, Imane Djamil se démarque de ses pairs par son utilisation du “docu-fiction”. Terme que j’ai emprunté au film narratif, le docu-fiction combine à la fois le documentaire et la fiction afin de saisir la réalité tout en introduisant simultanément des scénarios de fiction pour renforcer sa représentation à travers une forme d’expression artistique. J’estime que le parcours d’Imane Djamil en tant qu’écrivain créatif éclaire sur sa pratique photographique qui, comme son écriture, altère la réalité afin de discuter de problématiques complexes. En plus de l’aspect fictionnel, l’enchaînement des photographies en une séquence narrative à travers l’espace de la galerie, ainsi que la recapture d’une image donnée, tantôt avec plus de mouvement tantôt avec une absence de personnages, amplifie notre réponse émotionnelle à l’œuvre.

            On retrouve un exemple de ce type de mise en scène dans le triptyque The Theater, qui réunit les amis proches d’Imane Djamil autour d’une représentation improvisée dans un théâtre abandonné datant de l’époque coloniale espagnole. Dans le triptyque 27, six jeunes hommes de sa bande d’amis sont regroupés dans un autre bâtiment de l’époque coloniale pour y célébrer un anniversaire fictif, agrémenté d’un gâteau et de ballons. La deuxième photo de la séquence, met en scène cinq hommes applaudissant, tandis qu’un sixième prend un cliché des festivités. Dans By the Yard, on voit de jeunes enfants, des proches des amis de Djamil, jouer autour d’une structure désignée par les habitants comme dār al-mi’a, soit la ” maison des cent “, qui, comme son nom l’indique, abritait autrefois cent soldats espagnols. Contrairement à ses amis locaux, qui sont des “acteurs nés”, les enfants avaient plus besoin d’être dirigés car ils jouaient aux alentours de ce baraquement non sécurisé et au contenu incertain, aujourd’hui occupé par les Forces armées royales marocaines et évité par les résidents locaux.

            La pratique d’Imane Djamil renvoie à une citation du photographe paysagiste américain Ansel Adams : “L’art implique le contrôle de la réalité, car la réalité elle-même ne possède aucun sens de l’esthétique. La photographie devient de l’art lorsque certains contrôles sont appliqués”. Djamil reste consciemment artistique dans sa démarche – se limitant à un maximum de vingt photographies par an. Plaçant son trépied au sommet de dunes de sable et de gravats périlleux, elle s’efforce de maintenir son matériel stable tout en veillant aux exigences formelles de la composition.

            Sa sélection de précédentes photographies en noir et blanc, tels que les triptyques sans titre datant de 2013 et 2016 et le diptyque sans titre réalisé en 2015, explore intensément la lumière, la géométrie, l’ombre et l’abstraction. Comme Adams, dont la pratique était étroitement liée à la lutte pour la conservation de l’environnement, Djamil espère que ses photographies serviront un objectif dépassant celui du simple plaisir esthétique, à savoir pousser les décideurs politiques et les institutions à reconnaître l’état de délabrement de Tarfaya et à investir dans la réhabilitation des ruines architecturales le long de son littoral.

            Bien que Djamil se revendique du décolonialisme dans sa pensée et sa pratique, je lui ai soumis une question cruciale à laquelle les États post-coloniaux sont confrontés depuis l’avènement des mouvements d’indépendance du milieu du XXe siècle : Les vestiges du passé colonial, qui servent aujourd’hui de marqueur identitaire à Tarfaya, méritent-ils d’être préservés ?

            Elle reconnaît que si l’architecture de l’époque coloniale est la résultante de la violence impériale, assimilable à une blessure, elle devient avec le temps une cicatrice apprivoisée par le paysage, entraînant un changement de fonction et de sens. Des cicatrices qui, selon elle, méritent d’être préservées car le passé colonial reste un élément incontournable du patrimoine culturel du Maroc.  `,
        eng: `
            Imane Djamil’s 80 miles to Atlantis constitutes the second part of her work on the Saharan city of Tarfaya’s historical coast. The series interrogates the multiple layers of symbolism in the built and natural landscape, colonial architecture’s redefinition over time, and the blurring of lines between reality and myth. The themes her work explores are of poignant relevance to today’s world – the quest for a symbiosis between urban development and the natural environment, the state’s failure to uplift communities at the margins, and negotiating relationships between the colonial past and a post-colonial present and future. Through her practice, Djamil never ceases to confront the complexity of people vis-à-vis their physical environment. The title of the series refers to Tarfaya not by its name, but rather its close proximity to Spain’s Canary Islands, the approximate location of where the mythical Atlantis is rumored to be. The title also likens Tarfaya to the fictional island nation – a fitting relation given that, like Atlantis, it is shrouded in mystery and often described as “apocalyptic” or “the abandoned world.”

Her introduction to Tarfaya came eight years ago at the age of sixteen while on assignment for another project. Months later, she spontaneously left school and embarked on a nineteen-hour bus ride from Casablanca to Tarfaya. Strolling through the empty streets with a camera in hand, Djamil caught the attention of a local young man her age, who asked where he and his friends could see her photographs of the city. This encounter resulted in an instantaneous and long-lasting friendship. While Djamil has no familial or ethnic ties to the city, she describes it as a second home, where she visits more to spend time with her “crew” than to work. While walking through Tarfaya’s “aesthetically mysterious” coastal landscape, full of Spanish colonial structures, she often experiences an uneasy yet thrilling sensation at the sight of flights of stairs randomly emerging from the sand or diving boards without a pool of water. This triggers her irrational childhood fear of swimming in the ocean and feeling an object brush against her leg, thereby leading her to discover a parallel universe below, much like the mythical Atlantis.

Written in 360 BCE, the Greek philosopher Plato’s dialogues Timaeus and Critias described the mythical nation of Atlantis as a near-utopian civilization inhabiting a lush, resource-rich archipelago. Plato claimed that the islands existed 9,000 years before his time, with its story passed down orally from his grandfather. As a consequence of falling out of favor with the deities, Atlantis was hit with earthquakes and floods, ultimately being submerged under water. If Atlantis was to be consumed by the ocean for displeasing the gods, Tarfaya’s historical coast, as Djamil illustrates in her series, is on its way to being devoured by sand, not for offending a higher being, but as a result of natural phenomena coupled with the state’s disinterest in preserving its cultural heritage. In conversation with Sadat Shaibatat Merrebi Rebbu Ma al-‘Aynayn, a local resident and grandson of revolutionary leader Cheikh Mohamed Mustafa Ma al-‘Aynayn, Djamil was told that one day everything on Tarfaya’s coast would disappear and that her photographs, much like Plato’s writings on Atlantis, will remain as some of the last pieces of evidence for its existence.

However, Djamil’s series should not be misinterpreted as documentary evidence, photojournalism, or a human-interest story. She views her photographs as straddling the fence between art photography and documentary. I do not believe her work must fall under a single category and whether or not documentary can be fine art is a moot question. Working in an environment where interest in street photography and its candid, unmediated images of Moroccan daily life have exploded in the past decade, Djamil stands out from her peers for her use of “docu-fiction.” A term I have borrowed from narrative film, docu-fiction combines both documentary and fiction to capture reality while simultaneously introducing fictional scenarios to strengthen its representation through a form of artistic expression. I find that Djamil’s background as a creative writer informs her photographic practice, which, like her writing, alters reality in order to discuss complex issues. In addition to fictionalization, narrative sequencing of photographs within the gallery space and the re-capturing of a particular image, once with more movement and again with an absence of people, enhances our emotional response to the work.

An example of this type of play is found in The Theater triptych, which presents Djamil’s close circle of friends putting on an impromptu performance in an abandoned Spanish colonial theatre. In the 27 triptych, six young men from her friend group gather in another colonial-era building to celebrate a fictional birthday, complete with a cake and balloons. In the second photograph of the sequence, while five men cheer, one takes a snapshot of the festivities. In By the Yard, young children, who are relatives of Djamil’s friends, are seen playing around a structure referred to by locals as dār al-mi’a, or “house of one hundred,” which, as the name suggests, formerly housed one hundred Spanish soldiers. Unlike her local friends, who are “natural-born actors,” the children required more direction as they played around the unsecured building with unknown contents, now occupied by the Royal Moroccan Armed Forces and avoided by local residents.

Her practice calls to mind a quote by American landscape photographer Ansel Adams: “Art implies control of reality, for reality itself possesses no sense of the aesthetic. Photography becomes art when certain controls are applied.” Djamil remains consciously artistic in her approach –  limiting herself to a maximum of twenty photographs a year. Setting her tripod atop of precarious sand dunes and rubble, she attempts to keep her equipment steady while paying attention to the composition’s formal qualities. Her selection of earlier black-and-white photographs, such as the untitled triptychs from 2013 and 2016 and the untitled diptych from 2015, experiment heavily with light, geometry, shadow, and abstraction. Similar to Adams, whose practice was strongly enmeshed with advocacy for environmental conservation, Djamil hopes that her photographs serve a purpose beyond aesthetic pleasure, namely to push for policymakers and institutions to acknowledge Tarfaya’s dilapidated state and invest in the rehabilitation of architectural ruins along its coast. Although Djamil identifies as decolonial in thinking and practice, I asked her an important question that post-partitioned states have been grappling with since the mid-twentieth century’s independence movements: Are remnants of the colonial past, which today serve as Tarfaya’s identity marker, worth preserving? She acknowledges that although colonial-era architecture is the result of imperial violence, likening it to a wound, over time it becomes a scar tamed by the landscape, leading to a shift in both function and meaning. Scars that, she believes, are worthy of preservation as the colonial past remains an inescapable part of Morocco’s cultural heritage. `,
      },
      artworks: [
        {
          id: 1,
          artists: "Imane Djamil",
          title: "Armas Essalama",
          dimensions: "75 x 110 cm",
          medium: "",
          artwork: "imaneexhib.jpg",
        },
        {
          id: 2,
          artists: "Imane Djamil",
          title: "By the Yard 1, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib2.jpg",
        },
        {
          id: 3,
          artists: "Imane Djamil",
          title: "By the Yard 2, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib3.jpg",
        },
        {
          id: 4,
          artists: "Imane Djamil",
          title: "UNTITLED,2016",
          dimensions: "Triptych 20 x 30 cm / each",
          medium: "Fine Art print",
          artwork: "imaneexhib4.jpg",
        },
        {
          id: 5,
          artists: "Imane Djamil",
          title: "La Casa del Mar, 2013",
          dimensions: "40 x 60 cm - 7 éditions",
          medium: "Fine Art print",
          artwork: "imaneexhib5.jpg",
        },
        {
          id: 6,
          artists: "Imane Djamil",
          title: "Tarfaya - Buried Door 1, 2020",
          dimensions: "50x 70cm - 5 éditions",
          medium: "",
          artwork: "imaneexhib6.jpg",
        },
        {
          id: 7,
          artists: "Imane Djamil",
          title: "Tarfaya - Buried Door 2, 2020",
          dimensions: "50x 70cm - 5 éditions",
          medium: "",
          artwork: "imaneexhib7.jpg",
        },
        {
          id: 8,
          artists: "Imane Djamil",
          title: "Tarfaya - Buried Door 3, 2020",
          dimensions: "50x 70cm - 5 éditions",
          medium: "",
          artwork: "imaneexhib8.jpg",
        },
        {
          id: 9,
          artists: "Imane Djamil",
          title: "The pool 1, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib9.jpg",
        },
        {
          id: 10,
          artists: "Imane Djamil",
          title: "The pool 2, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib10.jpg",
        },
        {
          id: 11,
          artists: "Imane Djamil",
          title: "The pool 3, 2020",
          dimensions: "35 x 52 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib11.jpg",
        },
        {
          id: 12,
          artists: "Imane Djamil",
          title: "The Theater1, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib12.jpg",
        },
        {
          id: 13,
          artists: "Imane Djamil",
          title: "The Theater2, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib13.jpg",
        },
        {
          id: 14,
          artists: "Imane Djamil",
          title: "The Theater3, 2020",
          dimensions: "40 x 60 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib14.jpg",
        },
        {
          id: 15,
          artists: "Imane Djamil",
          title: "The Young and the Sea, 2020",
          dimensions: "75 x 110 cm - 3 éditions",
          medium: "",
          artwork: "imaneexhib15.jpg",
        },
      ],
      year: 2021,
      location: ["– 80 MILES TO ATLANTIS, CDA GALLERY, CASABLANCA"],
      duration: "13 JANVIER -22 MARS 2021",
      titleEng: "80 MILES TO ATLANTIS",
      titleFR: "ATLANTIDE KM 130",
      galImage: "ASI46920.jpg",
      artists: "IMANE DJAMIL",
    },
    {
      id: 44,
      showNature: "Collective Show",
      video: "",
      allArtists: [
        {
          artistId: 6,
          name: "MAMOUN RTAL BENNANI",
        },
        {
          artistId: 7,
          name: "JULES ROUFFIO",
        },
      ],
      descriptionTitleFr: "",
      descriptionTitleEng: "",
      descriptionAuthorFr: "Malak Lagahrari, journaliste culturelle",
      descriptionAuthorEng: "Malak Lagahrari, cultural journalist",
      artistImage: "",
      textColor: "white",
      quote: `
     `,
      paragraphFr: `
      Mamoun Rtal Bennani et Jules Rouffio sont deux photographes de reportage. Le premier est photographe de formation. Il évolue actuellement dans le milieu rural où sa principale occupation est l’agriculture. Le second a suivi une formation de géographie rurale, et au gré de ses excursions de découverte, la photographie est devenue sa passion puis sa principale occupation. C’est au croisement de ces deux mondes, du rural et de l’image que les deux photographes ont décidé de sillonner le Maroc, fascinés par sa géographie et les 240  qui redessinent ses routes.

      Celui que l’on nomme Khattaf el blayess (le voleur de places), traîne sa silhouette familière dans le quotidien et l’imaginaire marocain. Les lignes affirmées de ces Mercedes-Benz recomposent résolument la cartographie d’un territoire discontinu. Alors que la couleur du taxi mue, comme pour signaler la saveur particulière d’un lieu, sa marche volontaire lie les espaces les plus divers. C’est le Maroc qui prend corps, tandis que le taxi semble en irriguer les cellules par son incessante circulation. 
      
      On l’appelle Grand Taxi non seulement parce qu’il emprunte de longs trajets, mais aussi parce qu’avec ses sept places, c’est un hôte généreux. Il est aussi bien souvent le seul moyen de transport accessible à des populations vivant dans des territoires ruraux et urbains enclavés. Des centres-villes bondés, où il rythme un désordre codifié, il traverse aussi de longues routes austères, redessinant les lignes des multiples paysages, et arborant des allures de pionnier. Le voyage en Grand Taxi est collectif, il est l’occasion de rencontres, synthétisant ainsi un mode de vie qui étreint toujours l’aléatoire et l’inattendu. 
      
      Icône presque kitsch, vestige d’une idée surannée de la modernité urbaine, la Mercedes-Benz arpente ses derniers kilomètres, elle est déjà patrimoniale. Sa carrosserie patinée détone avec la nouvelle esthétique d’une modernité qui se veut fonctionnelle et raccord.
      
      Le voyage commence à Casablanca, pour rejoindre les hauts plateaux enneigés du Moyen-Atlas. Il se poursuit vers le sud-est du pays, à Merzouga, porte du désert, à Ouarzazate, puis Taliouine, le coeur de la vallée du safran, avant de rejoindre Agadir. Il longe ensuite la côte atlantique en traversant la région d’Essaouira, la ville de Safi, zone industrielle, avant d’échouer à Jorf El Asfar, où se trouvent les grandes aciéries qui récupèrent et transforment les carcasses éreintées des taxis sortis malgré eux de leurs circuits
      
      
   `,
      paragraphEng: `
      Photographers Mamoun Rtal Bennani and Jules Rouffio will be portraying a contemporary Morocco through the dug furrows of its most dedicated labourer: The Grand Taxi.

Dubbed Khattaf El Blayess (the seat thief), its familiar silhouette fills Moroccan daily life and imagination.The distinct lines of the Mercedes-Benz decisively reconstruct the cartography of a disjointed territory.  While the color of the taxi molts, to indicate the essence of a place, its spontaneous parade binds the most diverse areas. It is Morocco that takes form, while the taxi seems to
irrigate its cells by its perpetual motion.

It is labeled Grand Taxi not only because it travels long distances, but also because it is a generous host with its seven seats. It is often the only accessible means of transportation for people living in rural, landlocked areas. From the chaotic rumbling in crowded city -centers, to long and austere roads, the Grand Taxi draws the lines of multiple landscapes, pioneering the lands. The journey in Grand Taxi  is collective; it creates connections, orchestrating a lifestyle that embraces the random and unexpected.

Practically a kitsch icon, remnant of an antiquated idea of the urban modernity, the Mercedes -Benz roams its last kilometers –, it is already patrimonial. The patina aspect of its body contrasts with the modern standards of aesthetics which aims to be neat and functional. 

The journey begins in Casablanca then goes through the snow-capped plateau in the Atlas region. It continues south-east to Merzouga, gate of the desert, then to Ouarzazate, and Taliouine, heart of the valley of saffron, before reaching Agadir.The final stage concludes along the Atlantic coast, crossing Essaouira, and the industrial area of Safi, before landing in Jorf Al Asfar where
big steel plants retrieve and transform the distressed carcasses of the taxis that drifted away against their will.`,
      featuredArt: [
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Car-casse  - Jorf El Asfar, 2017",
          dimensions: "100 x 145 cm",
          medium: "Tirage Fine Art",
          artwork: "carcasee.jpg",
        },
        {
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Taxithèque, Jorf El Asfat, 2017",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "5-768x511.jpg",
        },
      ],

      showImages: [
        {
          image: "IMG-0658.jpg",
          title: `Exhibition view of "BENZ BENZ",CDA Gallery`,
        },
        {
          image: "7FBC9077-FEF2-41DB-A470-AA0D35B8042C.jpg",
          title: `Exhibition view of "BENZ BENZ",CDA Gallery`,
        },
        {
          image: "81A136EB-DAC6-4F49-B646-00ACA108D4F1.jpg",
          title: `Exhibition view of "BENZ BENZ",CDA Gallery`,
        },
      ],

      artworks: [
        {
          id: 69,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Car-casse  - Jorf El Asfar, 2017",
          dimensions: "100 x 145 cm",
          medium: "Tirage Fine Art",
          artwork: "carcasee.jpg",
        },
        {
          id: 70,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Taxithèque, Jorf El Asfat, 2017",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "5-768x511.jpg",
        },
        {
          id: 71,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Oasis 1/3 - Hassilabied 2017",
          dimensions: "50x75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3mm",
          artwork: "MMF_6884-Edit-1-768x511.jpg",
        },
        {
          id: 72,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Oasis 2/3 - Hassilabied 2017",
          dimensions: "50x75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3mm",
          artwork: "DSCF1121-Edit.jpg",
        },
        {
          id: 73,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "L'Argane express, 2017",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "15-768x511.jpg",
        },
        {
          id: 74,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Taxi brousse - Taliouine, 2017,",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "16-768x512.jpg",
        },
        {
          id: 75,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "",
          dimensions: "50x80 cm",
          medium: "Tirage Fine Art",
          artwork: "IMG_1009-Edit-1-768x576.jpg",
        },
        {
          id: 76,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "Voleur de places - Casablanca 2019",
          dimensions: "50 x 75 cm",
          medium: "Tirage Fine Art et laminage sur Forex 3 mm",
          artwork: "L1010252-Edit-768x511.jpg",
        },
        {
          id: 77,
          artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
          title: "No limit, 2017",
          dimensions: "50 x 80 cm",
          medium: "Tirage Fine Art",
          artwork: "Dip-1b-768x511.jpg",
        },
      ],
      year: 2020,
      location: ["– BENZ BENZ, CDA GALLERY, CASABLANCA,"],
      duration: "06 FÉVRIER – 11 MARS 2020",
      titleEng: "",
      titleFR: "BENZ BENZ",
      galImage: "IMG-0658.jpg",
      artists: "MAMOUN RTAL BENNANI ET JULES ROUFFIO",
    },
    {
      id: 18,
      showNature: "Solo Show",
      video: "",
      allArtists: [
        {
          artistId: 2,
          name: " Béchir Boussandel",
        },
      ],
      descriptionTitleFr: "",
      descriptionTitleEng: "",
      descriptionAuthorFr: "Aida Omary, critique d’art",
      descriptionAuthorEng: "",
      textColor: "white",

      paragraphFr: `
          Tout corps traine son ombre et tout esprit son doute. Et c’est dans le doute que l’artiste franco-tunisien Béchir Boussandel nous livre dans l’exposition « Au bord de l’ombre » le simulacre d’une quotidienneté, l’imbroglio d’une réalité en perte de sens et la vision d’un ordinaire pas si ordinaire ou l’ombre trompe l’œil et l’esprit.

Dans une palette sonore et enveloppante, objets et personnages se parlent dans un faux dialogue. Là où le mouvement est banni, la figure est isolée. Encerclée par un halo de lumière, elle est ancrée dans une surface abstraite. Si dans ses toiles Bechir ne respecte ni les dimensions ni les échelles vraisemblables, c’est parce qu’il ne décrit aucune réalité. Ne se porte garant d’aucune vérité.

Il s’y passe autre chose … un questionnement d’une autre nature. Oui c’est ça, il ne conte pas d’histoires, mais raconte la manière dont elles ne se disent pas. Porte-parole de ce qui est presque un récit, ces toiles se donnent en ne nous promettant aucune finitude. Un homme erre, il est de dos. Et porte un sac. Son ombre nous oriente et désoriente notre perception lorsqu’au-dessus de la figure, flotte une feuille aux dimensions fantasmagoriques. Un chien se tenant droit face à une coupelle cuivrée d’une même taille, un cheval portant un bloc de béton, une volée de sacs de plastique. Ici et là, clichés et objets banalisés, décrits méticuleusement et tout droit sortis d’un inconscient raisonné et irrationnel, lévitent dans un espace alternant profondeur et surfaces.

L’artiste fait subtilement jouer la similitude contre la ressemblance. Ce que l’on voit n’est pas toujours ce que l’on croit que c’est. Se dévoile ainsi une peinture à mi-chemin entre visible et invisible, entre abstraction et figuration. Et ce qui nous retient dans ce jeu autour du doute, c’est bien cette vitalité. Aussi sobre qu’exaltante. Nous y sommes. Nous sommes emportés.

Arrêt dans le temps ou le temps d’un arrêt ?

Des toiles écrites mais qui nous parlent sans discours ?

L’œil doute jusqu’au bout … et l’esprit y est malmené.

Béchir est cet artiste, qui immergé dans cette chair du monde, s’élance. Il se projette, puis se rejette.

Et entre temps, il sème du sublime.
         `,
      paragraphEng: "",
      quote: `
          Béchir est cet artiste, qui immergé dans cette chair du monde, s’élance. Il se projette, puis se rejette.
          Et entre temps, il sème du sublime.
          `,
      artistImage: "bechirboussandel.jpg",
      year: 2020,
      location: [
        "AU BORD DE L’OMBRE, CDA GALLERY, CASABLANCA",
        "ICI LE MONDE, IMA TOURCOING, TOURCOING",
        "COUP DE SOLEIL,GALERIE PROVOST HACKER, LILLE. ",
      ],
      duration: "16 juin -30 juillet 2020",
      titleEng: "AT THE EDGE OF THE SHADOW",
      titleFR: "AU BORD DE L'OMBRE",
      galImage: "DSC_7311.jpg",
      artists: "BÉCHIR BOUSSANDEL",
      featuredArt: [
        {
          artists: "BÉCHIR BOUSSANDEL",
          title: "Ficus",
          dimensions: " 140 x 190 cm",
          medium: " Huile sur toile",
          artwork: "03.jpg",
        },
        {
          artists: "BÉCHIR BOUSSANDEL",
          title: "Mika",
          dimensions: "80 x 110 cm",
          medium: "Huile sur toile",
          artwork: "04.jpg",
        },
      ],
      showImages: [
        {
          image: "DSC_7311.jpg",
          title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
        },
        {
          image: "DSC_7322.jpg",
          title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
        },
        {
          image: "DSC_7324.jpg",
          title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
        },
        {
          image: "DSC_7335.jpg",
          title: `"Exhibition view " Au bord de l'ombre", CDA GALLERY, 2020"`,
        },
      ],
      artworks: [
        {
          id: 47,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Butane,2020",
          dimensions: "Diptyque, 110 x 160 cm",
          medium: "huile sur toile",
          artwork: "01.jpg",
        },
        {
          id: 48,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Qotn,2020",
          dimensions: "Diptyque, 108 x 80 cm",
          medium: " Huile sur toile",
          artwork: "02.jpg",
        },
        {
          id: 49,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Ficus,2020",
          dimensions: " 140 x 190 cm",
          medium: " Huile sur toile",
          artwork: "03.jpg",
        },
        {
          id: 50,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Mika",
          dimensions: "80 x 110 cm",
          medium: "Huile sur toile",
          artwork: "04.jpg",
        },
        {
          id: 51,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Fer à béton, 2020",
          dimensions: "⌀ 60cm",
          medium: "huile sur toile",
          artwork: "05.jpg",
        },
        {
          id: 52,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Cavalcade",
          dimensions: "80 x 110cm",
          medium: "huile sur toile",
          artwork: "06.jpg",
        },
        {
          id: 53,
          artists: "BÉCHIR BOUSSANDEL",
          title: "La source, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "07.jpg",
        },
        {
          id: 54,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Lévitation, 2020",
          dimensions: "24 x 33",
          medium: "huile sur toile",
          artwork: "08.jpg",
        },
        {
          id: 55,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Lièvre, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "09.jpg",
        },
        {
          id: 56,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Sans titre, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "10.jpg",
        },
        {
          id: 57,
          artists: "BÉCHIR BOUSSANDEL",
          title: "Sans titre, 2020",
          dimensions: "140 x 190cm",
          medium: "huile sur toile",
          artwork: "11.jpg",
        },
      ],
    },
    // {
    //   id: 45,
    //   showNature: "Collective Show",
    //   allArtists: [
    //     {
    //       artistId: 2,
    //       name: " Béchir Boussandel",
    //     },
    //     {
    //       artistId: 6,
    //       name: "MAMOUN RTAL BENNANI",
    //     },
    //     {
    //       artistId: 7,
    //       name: "JULES ROUFFIO",
    //     },
    //     {
    //       artistId: 5,
    //       name: "ABDERRAHMANE DOUKKANE",
    //     },
    //     {
    //       artistId: 4,
    //       name: "Rachid L'mouddene",
    //     },
    //   ],
    //   descriptionTitleFr: "",
    //   descriptionTitleEng: "",
    //   descriptionAuthorFr: "",
    //   descriptionAuthorEng: "",
    //   artistImage: "",
    //   textColor: "white",
    //   quote: `
    //  `,
    //   paragraphFr: ``,
    //   paragraphEng: ``,
    //   featuredArt: [
    //     {
    //       artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
    //       title: "Car-casse  - Jorf El Asfar, 2017",
    //       dimensions: "100 x 145 cm",
    //       medium: "Tirage Fine Art",
    //       artwork: "carcasee.jpg",
    //     },
    //     {
    //       artists: "BÉCHIR BOUSSANDEL",
    //       title: "Cavalcade",
    //       dimensions: "80 x 110cm",
    //       medium: "huile sur toile",
    //       artwork: "06.jpg",
    //     },
    //   ],

    //   showImages: [
    //     {
    //       image: "collective1.jpg",
    //       title: `EXHIBITION VIEW, COLLECTIVE SHOW, CDA GALLERY 2020`,
    //     },
    //     {
    //       image: "collective2.jpg",
    //       title: `EXHIBITION VIEW, COLLECTIVE SHOW, CDA GALLERY 2020`,
    //     },
    //     {
    //       image: "collective3.jpg",
    //       title: `EXHIBITION VIEW, COLLECTIVE SHOW, CDA GALLERY 2020`,
    //     },
    //   ],

    //   artworks: [
    //     {
    //       id: 78,
    //       artists: "JULES ROUFFIO AND MAMOUN RTAL BENNANI ",
    //       title: "Car-casse  - Jorf El Asfar, 2017",
    //       dimensions: "100 x 145 cm",
    //       medium: "Tirage Fine Art",
    //       artwork: "carcasee.jpg",
    //     },
    //     {
    //       id: 79,
    //       artists: "BÉCHIR BOUSSANDEL",
    //       title: "Cavalcade",
    //       dimensions: "80 x 110cm",
    //       medium: "huile sur toile",
    //       artwork: "06.jpg",
    //     },
    //     {
    //       id: 80,
    //       artists: "BÉCHIR BOUSSANDEL",
    //       title: "Qotn",
    //       dimensions: "Diptyque, 108 x 80 cm",
    //       medium: " Huile sur toile",
    //       artwork: "02.jpg",
    //     },
    //     {
    //       id: 81,
    //       artists: "BÉCHIR BOUSSANDEL",
    //       title: "Ficus",
    //       dimensions: " 140 x 190 cm",
    //       medium: " Huile sur toile",
    //       artwork: "03.jpg",
    //     },
    //     {
    //       id: 82,
    //       artists: "RACHID l'MOUDDENE",
    //       title: "",
    //       dimensions: "",
    //       medium: "",
    //       artwork: "TABLEWEB-1-scaled.jpg",
    //     },
    //   ],
    //   year: 2020,
    //   location: ["CDA GALLERY, CASABLANCA,"],
    //   duration: "29 SEPTEMBRE – 15 DÉCEMBRE 2020",
    //   titleEng: "",
    //   titleFR: "",
    //   galImage: "collective1.jpg",
    //   artists:
    //     "Béchir Boussandel, Abderrahmane Doukkane,Jules Rouffio, Mamoun Rtal Bennani, Rachid L'Mouddene",
    // },
    {
      id: 22,
      showNature: "Solo Show",
      video: "",
      allArtists: [
        {
          artistId: 4,
          name: "Rachid L'mouddene",
        },
      ],
      descriptionTitleFr: "",
      descriptionTitleEng: "",
      descriptionAuthorFr: "",
      descriptionAuthorEng: "",
      artistImage: "rachid.jpg",
      textColor: "white",

      quote: `
    « L’art environnemental peut se présenter comme une synthèse esthétique traduisant une volonté de “réparer” symboliquement l’environnement […]Il engage, alors, non seulement
l’expérience esthétique singulière et individuelle, mais aussi le jugement”

-Blanc et Lolive (2009).`,
      paragraphFr: `
    Rachid L’moudden est d’abord un artiste plasticien. Un orfèvre de la matière. Si son matériau fétiche est le carton depuis quelques années, L’moudden s’est régulièrement réinventé, refusant de s’arrêter à un style unique. Oeuvres d’art éphémères, installations et peintures ont été ses champs formels de recherche. Ses oeuvres ont notamment été remarquées à l’exposition “Objet publicitaire non identifié” à la Villa des Arts de Casablanca (2001), ou encore à l’arthothèque de Schiedam en Hollande (2001), lors de l’exposition “Sans motif apparent” (2001).


Une commande, a agit pour lui comme un tournant. Une photographe de renom, lui demande de concevoir un grand meuble de rangement, pour y répertorier son travail et sa documentation. Rachid L’moudden plonge alors dans un matériau dont il est intimement familier, qui agite alors toute la densité de ses souvenirs d’enfance. Fils d’un imprimeur, il était régulièrement plongé dans les chutes de papier, dans l’odeur du carton et dans ses multiples formes finies ou disloquées, qu’il commençait alors à manipuler. Il développe une
pratique minutieuse, patiente, soucieuse du détail et conçoit progressivement des oeuvres de design originales. Ses productions en carton s’exposent depuis à la biennale internationale du design à Saint Etienne (2006), au Maroc Design (2006), au Centre Panafricain d’Alger (“Manières de vivre africaines” (2009)), pour ne citer que ceux-ci.


La première exposition du C.D.A est aussi la première entièrement consacrée aux travaux de Rachid L’moudden au Maroc. Il y explore une frontière délicate. Les oeuvres y sont à l’intersection entre le travail plastique pointilleux du carton ondulé et un positionnement affirmé dans la lignée de “l’Art Écologique”.
Les objets de Rachid L’moudden sont en effet des manifestes écologiques, qui font irruption dans le panorama visuel de nos espaces de vie, mais aussi des objets obéissant à une poétique intérieure et concentrent un pouvoir évocateur. Nous nous souvenons par exemple de “Hommage à Brahim et Naïma”, une pièce constituée de deux grands meubles en carton exposés au Maroc Design en 2006, dont le petit porte le nom du père L’moudden, et l’autre, plus grand celui de la mère de l’artiste, mimant la stature de ses deux personnages. Les objets de L’moudden sont ainsi animés d’une imagination toute intime, en même temps qu’ils se font ambassadeurs de procédés de fabrication respectueux de la Nature.


La proposition de Rachid L’moudden est donc celle d’un ouvreur de voie. Il nous invite à son laboratoire d’expérimentations, dans lequel l’objet est conçu comme une pièce non seulement animée de sens, mais ambassadrice d’un mode de production durable. Conscient qu’une oeuvre d’art ne change pas le monde, L’moudden propose donc de faire de ses objets des médiateurs, qui à travers l’expérience de leur usage, tout comme leur expérience visuelle, suscitent une réflexion politique, sur les circuits de fabrication des objets et sur nos pratiquesde consommation.
   `,
      paragraphEng: ``,
      featuredArt: [
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "TABLEWEB-1-scaled.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105002.jpg",
        },
        {
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105376.jpg",
        },
      ],

      showImages: [
        {
          image: "cardboard.png",
          title: `Exhibition view of "Le monde en carton",CDA Gallery`,
        },
      ],

      artworks: [
        {
          id: 58,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105753.jpg",
        },
        {
          id: 59,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "TABLEWEB-1-scaled.jpg",
        },
        {
          id: 60,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105002.jpg",
        },
        {
          id: 61,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105217.jpg",
        },
        {
          id: 62,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105376.jpg",
        },
        {
          id: 63,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105511.jpg",
        },
        {
          id: 64,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105297.jpg",
        },
        {
          id: 65,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS105732.jpg",
        },
        {
          id: 66,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "Cactus-web-1.jpg",
        },
        {
          id: 67,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "EchiquierWEB-1.jpg",
        },
        {
          id: 68,
          artists: "RACHID l'MOUDDENE",
          title: "",
          dimensions: "",
          medium: "",
          artwork: "LS104714.jpg",
        },
      ],
      year: 2019,
      location: ["– THE WORLD IN CARDBOARD, CDA GALLERY, CASABLANCA,"],
      duration: "07 MARS -07 MAI 2019",
      titleEng: "THE WORLD IN CARDBOARD",
      titleFR: "LE MONDE EN CARTON",
      galImage: "cardboard.png",
      artists: "RACHID L'MOUDDENE",
    },
  ]);

  const alltours = [
    {
      id: 1,
      image: window.location.origin + "/artworks/" + "Francois_Beaurain-21.jpg",
      tourName: "cinemas de maroc",
    },
    {
      id: 2,
      image: window.location.origin + "/artworks/" + "Francois_Beaurain-21.jpg",
      tourName: "cinemas de maroc",
    },
    {
      id: 3,
      image: window.location.origin + "/artworks/" + "Francois_Beaurain-21.jpg",
      tourName: "cinemas de maroc",
    },
    {
      id: 4,
      image: window.location.origin + "/artworks/" + "Francois_Beaurain-21.jpg",
      tourName: "cinemas de maroc",
    },
    {
      id: 5,
      image: window.location.origin + "/artworks/" + "Francois_Beaurain-21.jpg",
      tourName: "cinemas de maroc",
    },
    {
      id: 6,
      image: window.location.origin + "/artworks/" + "Francois_Beaurain-21.jpg",
      tourName: "cinemas de maroc",
    },
  ];

  return (
    <div>
      <context.Provider value={{ artists, exhibitions, alltours }}>
        {props.children}
      </context.Provider>
    </div>
  );
}
