/*import React from "react";

const MarrakeshDestPage = ({ destination }) => {
  // Use the "destination" prop to display the specific destination data
  return (
    <div>
      <h1>{Marrakesh}</h1>
      <p>{M}</p>
      {/* Render additional content for the destination }
    </div>
  );
};

export default MarrakeshDestPage;

import React from "react";
import { Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    padding: "2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    "& h1": {
      fontSize: "2.5rem",
    },
    "& p": {
      fontSize: "1.5rem",
      color: "#888",
    },
  },
  description: {
    marginBottom: "2rem",
    "& p": {
      fontSize: "1.2rem",
      lineHeight: 1.5,
      color: "#333",
    },
  },
  gallery: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
    "& img": {
      width: "30%",
      height: "auto",
      borderRadius: "0.5rem",
    },
  },
  recommendations: {
    "& h2": {
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
  },
  recommendation: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    "& img": {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      marginRight: "1rem",
    },
    "& p": {
      fontSize: "1.2rem",
      color: "#333",
    },
  },
}));

const MarrakeshDestPage = ({ destination }) => {
  const classes = useStyles();

  // Use the "destination" prop to display the specific destination data
  return (
    <div className={classes.pageContainer}>
      <div className={classes.header}>
        <Typography variant="h1">Marrakesh</Typography>
        <Typography variant="p">Morocco</Typography>
      </div>

      <div className={classes.description}>
        <Typography variant="p">
          Marrakesh is a vibrant city located in Morocco, known for its bustling souks, stunning palaces, and lively atmosphere. It offers a unique blend of history, culture, and modernity. Explore the narrow streets of the Medina, visit the famous Jardin Majorelle, and indulge in the delicious Moroccan cuisine.
        </Typography>
      </div>

      <div className={classes.gallery}>
        <img src="https://st.depositphotos.com/1664950/2393/i/950/depositphotos_23937101-stock-photo-main-square-of-marrakesh-in.jpg" alt="Image 1" />
        <img src="https://thumbs.dreamstime.com/b/jamaa-el-fna-market-square-sunset-marrakesh-morocco-north-africa-jemaa-fnaa-djema-djemaa-fnaa-famous-96875014.jpg" alt="Image 2" />
        <img src="https://images.pexels.com/photos/13766872/pexels-photo-13766872.jpeg?cs=srgb&dl=pexels-g%C3%BCl-i%C5%9F%C4%B1k-13766872.jpg&fm=jpg" alt="Image 3" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3B7G087ZZUFfVWHZ6Kz52Ft3jKwv3BivCw&usqp=CAU" alt="Image 4" />
      </div>

      <div className={classes.recommendations}>
        <Typography variant="h2">Recommendations</Typography>
        <div className={classes.recommendation}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3B7G087ZZUFfVWHZ6Kz52Ft3jKwv3BivCw&usqp=CAU" alt="Recommendation 1" />
          <Typography variant="p">Explore the vibrant Jemaa el-Fnaa square</Typography>
        </div>
        <div className={classes.recommendation}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3B7G087ZZUFfVWHZ6Kz52Ft3jKwv3BivCw&usqp=CAU" alt="Recommendation 2" />
          <Typography variant="p">Visit the beautiful Bahia Palace</Typography>
        </div>
        <div className={classes.recommendation}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3B7G087ZZUFfVWHZ6Kz52Ft3jKwv3BivCw&usqp=CAU" alt="Recommendation 3" />
          <Typography variant="p">Discover the intricacies of Ben Youssef Madrasa</Typography>
        </div>
        <div className={classes.recommendation}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3B7G087ZZUFfVWHZ6Kz52Ft3jKwv3BivCw&usqp=CAU" alt="Recommendation 4" />
          <Typography variant="p">Take a relaxing stroll in Menara Gardens</Typography>
        </div>
      </div>
    </div>
  );
};

export default MarrakeshDestPage;*/

// essaie gallerie
import { Carousel } from 'react-carousel-minimal';

function MarrakeshDestPage() {
 const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Djemaa_el_Fna.jpg",
      caption: "Jemaa el-Fnaa"
    },
    {
      image: "https://static.yabiladi.com/files/articles/42e205a0743fcf15414ea03aa2a88bd620230113124540.jpg",
      caption: "Jardin Majorelle"
    },
    {
      image: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Mosque-Koutoubia.jpg",
      caption: "Koutoubia"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Bahia_Palace_large_court.jpg",
      caption: "Bahia Palace"
    },
    {
      image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/bd/a6.jpg",
      caption: "Dar El Bacha Museum"
    },
    {
      image: "https://www.alksar.com/wp-content/uploads/2019/05/virtual-palais-el-badi-5-Antonio-Almagro.jpg",
      caption: "Badi Palace"
    },
    {
      image: "https://media.cntraveler.com/photos/59f0ae6a10dd92546f60903b/16:9/w_4543,h_2555,c_limit/YSL_DSC_7510A.jpg",
      caption: "Yves Saint Laurent Museum"
    },
    {
      image: "https://mediaim.expedia.com/destination/2/d5e3df730b89f886dc106690fea08eda.jpg",
      caption: "Gueliz"
    },
    {
      image: "https://villatajmarrakech.com/wp-content/uploads/2022/04/le-jardin-secret-de-marrakech.jpg",
      caption: "Secret Garden"
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

export default MarrakeshDestPage;
