
//  gallerie
import { Carousel } from 'react-carousel-minimal';

function FesDestPage() {
 const data = [
    {
      image: "https://www.fescity.com/wp-content/uploads/2014/12/Bab-Boujloud.jpg",
      caption: "Bab Boujloud"
    },
    {
      image: "https://www.civitatis.com/f/marruecos/fez/guia/medersa-attarine-m.jpg",
      caption: "Al Attarine Madrasa"
    },
    {
      image: "https://heroesofadventure.com/wp-content/uploads/2018/08/IAA139555.jpg",
      caption: "Nejjarine Museum"
    },
    {
      image: "https://i.imgur.com/uOGPGfH.jpg",
      caption: "Medina of Fes"
    },
    {
      image: "https://media.safarway.com/content/30e13b71-40f0-437a-88be-6c6174e7783f_xl.jpg",
      caption: "Ennour Garden"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Kasbah_Cherarda%28js%29.jpg/375px-Kasbah_Cherarda%28js%29.jpg",
      caption: "Borj Nord Museum"
    },
    {
      image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/06/07/39199.jpg",
      caption: "University Kairaouine"
    },
    {
      image: "https://www.moroccoclassictours.com/wp-content/uploads/2020/03/8116The-Madrasa-Bou-Inania-Fes-768x463.jpg",
      caption: "Bou Inania Madrasa"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kings_palace_in_Fes_%285364773212%29.jpg",
      caption: "Royal Palace"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
      
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
             margin: " auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default FesDestPage;
